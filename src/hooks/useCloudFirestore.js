import { useState, useEffect } from 'react';
import { getFirestore, collection, doc, onSnapshot } from 'firebase/firestore';

// Firebase
import { auth } from '../utils/firebase';

const useCloudFirestore = (collectionPath, docId) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const db = getFirestore();
        let query;

        if (docId) {
          const docRef = doc(db, collectionPath, docId);
          query = onSnapshot(docRef, (snapshot) => {
            if (snapshot.exists()) {
              setData(snapshot.data());
            } else {
              setError('Document not found');
            }
            setIsLoading(false);
          });
        } else {
          const collectionRef = collection(db, collectionPath);
          query = onSnapshot(collectionRef, (snapshot) => {
            const dataList = snapshot.docs.map((doc) => doc.data());
            setData(dataList);
            setIsLoading(false);
          });
        }

        return query; // Unsubscribe from the query when the component unmounts
      } catch (error) {
        setError('Error retrieving data');
        setIsLoading(false);
        console.error('Error retrieving data:', error);
      }
    };

    if (auth.currentUser) {
      fetchData();
    } else {
      setData(null);
      setIsLoading(false);
      setError('User not authenticated');
    }
  }, [collectionPath, docId, auth.currentUser]);

  return { data, isLoading, error };
};

export default useCloudFirestore;
