import React, { useEffect, useState } from 'react';

// Firebase
import { auth } from '../utils/firebase';
import useCloudFirestore from '../hooks/useCloudFirestore';

// Constants
import UserType from '../constants/userType';

// MUI
import { Container, Skeleton } from '@mui/material';

// React Router
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(auth.currentUser);
  const { data, isLoading, error } = useCloudFirestore(
    'users',
    currentUser?.uid
  );

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      if (!user) navigate('/login');
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (isLoading) {
    return (
      <Container
        maxWidth='sm'
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Skeleton height='3rem' width='10rem' />
        <Skeleton height='3rem' width='20rem' />
        <Skeleton height='5rem' width='8rem' />
        <Skeleton height='5rem' width='8rem' />
      </Container>
    );
  }
};

export default Home;
