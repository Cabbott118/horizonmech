import React, { useEffect, useState } from 'react';

// Firebase
import { auth } from '../utils/firebase';
import useCloudFirestore from '../hooks/useCloudFirestore';

// Constants
import UserType from '../constants/userType';

// MUI
import { useTheme } from '@mui/material';

import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Menu,
  MenuItem,
  Skeleton,
  Toolbar,
  Tooltip,
} from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';

const Navbar = () => {
  const theme = useTheme();

  const [currentUser, setCurrentUser] = useState(auth.currentUser);
  const { data, isLoading, error } = useCloudFirestore(
    'users',
    currentUser?.uid
  );
  const [navLinks, setNavLinks] = useState([]);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (e) => {
    setAnchorElUser(e.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const isAdmin = data?.userType === UserType.ADMIN;

  const dropdownItems = [
    {
      name: 'Profile',
      route: `/profile/${data?.userId}`,
    },
  ];

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      if (user) {
        setNavLinks([
          {
            name: 'Home',
            route: '/',
          },
        ]);
      } else {
        setNavLinks([
          {
            name: 'Home',
            route: '/',
          },
          {
            name: 'Login',
            route: '/login',
          },
          { name: 'Sign Up', route: '/signup' },
        ]);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Container maxWidth='lg'>
        <AppBar
          component='nav'
          color='transparent'
          position='static'
          sx={{ boxShadow: 'none' }}
        >
          <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Box
              sx={{
                display: {
                  sm: 'block',
                },
              }}
            >
              {isLoading ? (
                <Skeleton sx={{ minWidth: '8rem' }} />
              ) : (
                <>
                  {navLinks.map((page) => (
                    <Button
                      key={page.name}
                      href={page.route}
                      sx={{
                        color: theme.palette.text.primary,
                        textTransform: 'none',
                      }}
                    >
                      {page.name}
                    </Button>
                  ))}
                  {currentUser ? (
                    <Tooltip title='Open menu'>
                      <Button
                        onClick={handleOpenUserMenu}
                        sx={{
                          color: theme.palette.text.primary,
                          textTransform: 'none',
                        }}
                      >
                        User <ArrowDropDown fontSize='small' />
                      </Button>
                    </Tooltip>
                  ) : null}
                  <Menu
                    sx={{ mt: '2.5rem' }}
                    id='menu-appbar'
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {dropdownItems.map((dropdownItem) => (
                      <MenuItem
                        key={dropdownItem.name}
                        component='a'
                        href={dropdownItem.route}
                        sx={{
                          color: theme.palette.text.primary,
                          textTransform: 'none',
                        }}
                        onClick={handleCloseUserMenu}
                      >
                        {dropdownItem.name}
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Container>
    </Box>
  );
};

export default Navbar;
