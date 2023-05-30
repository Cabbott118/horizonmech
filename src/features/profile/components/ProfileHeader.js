import React, { useEffect } from 'react';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserInfo, selectUserInfo } from '../slices/userSlice';

// React Router
import { useParams } from 'react-router-dom';

// MUI
import PageContainer from '../../../layouts/PageContainer';
import { Skeleton, Stack, Typography } from '@mui/material';

const ProfileHeader = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);
  const { userId } = useParams();

  useEffect(() => {
    dispatch(fetchUserInfo(userId));
  }, [dispatch]);

  if (!userInfo) {
    return (
      <Stack spacing={1}>
        <Skeleton variant='circular' width={40} height={40} />
        <Skeleton variant='rounded' width={210} height={60} />
      </Stack>
    );
  }
  console.log(userInfo);

  return (
    <PageContainer>
      <Typography variant='h6' component='h1'>
        User Info:
      </Typography>
      <Typography variant='p'>Email: {userInfo?.email}</Typography>
      <Typography variant='p'>Account Type: {userInfo?.userType}</Typography>
    </PageContainer>
  );
};

export default ProfileHeader;
