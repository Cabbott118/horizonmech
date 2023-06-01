import React, { useEffect, useState } from 'react';

// React Router
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

// MUI
import { AppBar, Box, Container, Toolbar, useTheme } from '@mui/material';

// Components
import Button from '../common/Button';

// Constants
import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  SIGNUP_ROUTE,
  PROFILE_ROUTE,
} from '../../constants/routes';

const Navbar = () => {
  const theme = useTheme();
  const [navLinks, setNavLinks] = useState([]);
  const { data, loading } = useSelector((state) => state.user);

  useEffect(() => {
    if (!data) {
      setNavLinks([
        {
          name: 'Login',
          route: LOGIN_ROUTE,
        },
        {
          name: 'Signup',
          route: SIGNUP_ROUTE,
        },
      ]);
    } else {
      setNavLinks([
        {
          name: data.legalName.firstName,
          route: `${PROFILE_ROUTE}/${data.userId}`,
        },
      ]);
    }
  }, [data]);

  return (
    <Box sx={{ display: 'flex', flexGrow: 1 }}>
      <AppBar position='static' color='transparent'>
        <Container maxWidth='md'>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link to={HOME_ROUTE} style={{ color: 'inherit' }}>
              <Button text='Daedalus' variant='text' color='inherit' />
            </Link>
            <div>
              {navLinks.map((navLink, index) => (
                <Link
                  key={index}
                  to={navLink.route}
                  style={{ color: 'inherit' }}
                >
                  <Button text={navLink.name} variant='text' color='inherit' />
                </Link>
              ))}
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
