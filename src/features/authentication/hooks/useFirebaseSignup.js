import { useState, useEffect } from 'react';

// Firebase
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';

// Utils
import { auth, db } from '../../../utils/firebase';

// React Router
import { useNavigate } from 'react-router-dom';

import { sendEmail } from '../../../helpers/sendEmail';

const useFirebaseSignup = (email, password) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);

    const unsubscribe = auth.onAuthStateChanged(
      (firebaseUser) => {
        setIsLoading(false);
        setUser(firebaseUser);
      },
      (firebaseError) => {
        setIsLoading(false);
        setError(firebaseError);
      }
    );

    return () => unsubscribe();
  }, [user]);

  const signup = () => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user: { email } }) => {
        addDoc(collection(db, 'users'), {
          uid: user.uid,
          authProvider: 'local',
          email,
        });

        sendEmail(email);

        navigate('/');
      })
      .catch((firebaseError) => {
        setError(firebaseError);
        setIsLoading(false);
      });
  };

  return { user, error, isLoading, signup };
};

export default useFirebaseSignup;
