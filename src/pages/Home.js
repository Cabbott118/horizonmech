import React, { useEffect, useState } from 'react';

// Firebase
import { auth } from '../utils/firebase';
import useCloudFirestore from '../hooks/useCloudFirestore';

// Constants
import UserType from '../constants/userType';

// MUI
import { Skeleton } from '@mui/material';

// Components
import AdminHero from '../components/AdminHero';
import NormalHero from '../components/NormalHero';
import ContractorHero from '../components/ContractorHero';
import CustomerHero from '../components/CustomerHero';

const Home = () => {
  const [currentUser, setCurrentUser] = useState(auth.currentUser);
  const { data, isLoading, error } = useCloudFirestore(
    'users',
    currentUser?.uid
  );

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (isLoading) {
    return <Skeleton sx={{ height: '3rem', width: '100%' }} />;
  }

  if (data?.userType === UserType.NORMAL) {
    console.log('normal');
    return <NormalHero />;
  }

  if (data?.userType === UserType.CONTRACTOR) {
    console.log('contractor');
    return <ContractorHero />;
  }

  if (data?.userType === UserType.CUSTOMER) {
    console.log('customer');
    return <CustomerHero />;
  }

  if (data?.userType === UserType.ADMIN) {
    console.log('admin');
    return <AdminHero />;
  }
};

export default Home;
