import React, { useEffect } from 'react';

// React Router
import { Link } from 'react-router-dom';

// import { useDispatch, useSelector } from 'react-redux';
// import {
//   createUser,
//   fetchUser,
//   updateUser,
// } from '../../store/slices/userSlice';
// import { loginUser } from '../../store/slices/authSlice';

// MUI
import { AppBar, Box, Container, Toolbar, useTheme } from '@mui/material';

// Components
import Button from '../common/Button';

// Constants
import { LOGIN_ROUTE, SIGNUP_ROUTE } from '../../constants/routes';

const Navbar = () => {
  const theme = useTheme();

  // const dispatch = useDispatch();
  // const { user, loading, error } = useSelector((state) => state.auth);
  // const { data } = useSelector((state) => state.user);

  // const email = 'calebhaabbott94@gmail.com';
  // const password = '123123';

  // useEffect(() => {
  //   dispatch(loginUser({ email, password }));
  // }, [dispatch]);

  // useEffect(() => {
  //   if (user?.uid) dispatch(fetchUser(user.uid));
  // }, [dispatch, user]);

  // console.log(user);
  // console.log(data);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <Box sx={{ display: 'flex', flexGrow: 1 }}>
      <AppBar position='static'>
        <Container maxWidth='md'>
          <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link to={LOGIN_ROUTE} style={{ color: 'inherit' }}>
              <Button text='Login' variant='text' color='inherit' />
            </Link>
            <Link to={SIGNUP_ROUTE} style={{ color: 'inherit' }}>
              <Button text='Sign Up' variant='text' color='inherit' />
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
