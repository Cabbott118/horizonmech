import React, { useEffect, useState } from 'react';

// Firebase
import { auth } from '../utils/firebase';
import useCloudFirestore from '../hooks/useCloudFirestore';

// Constants
import UserType from '../constants/userType';

// MUI
import { Container, Skeleton } from '@mui/material';

// Components
import AdminHero from '../components/AdminHero';
import NormalHero from '../components/NormalHero';
import ContractorHero from '../components/ContractorHero';
import CustomerHero from '../components/CustomerHero';

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

  if (data?.userType === UserType.NORMAL) {
    return <NormalHero userId={data.uid} />;
  }

  if (data?.userType === UserType.CONTRACTOR) {
    return <ContractorHero />;
  }

  if (data?.userType === UserType.CUSTOMER) {
    return <CustomerHero />;
  }

  if (data?.userType === UserType.ADMIN) {
    return <AdminHero />;
  }
};

export default Home;
