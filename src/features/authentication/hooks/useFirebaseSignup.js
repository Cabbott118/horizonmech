import { useState, useEffect } from 'react';

// Firebase
import { createUserWithEmailAndPassword } from 'firebase/auth';

// Utils
import { auth } from '../../../utils/firebase';

// React Router
import { useNavigate } from 'react-router-dom';

// Helpers
import { sendEnrollmentEmail } from '../../../helpers/sendEmail';

// API
import { post } from '../../../lib/axios';
import { CREATE_USER } from '../../../constants/api';

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

  const signup = async () => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user: { email, uid } }) => {
        post(CREATE_USER, { email, uid });
        sendEnrollmentEmail(email);
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
