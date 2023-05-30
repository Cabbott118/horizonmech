import React, { useEffect, useState } from 'react';

// Firebase
import { auth } from '../utils/firebase';
import useCloudFirestore from '../hooks/useCloudFirestore';

// Constants
import UserType from '../constants/userType';

// MUI
import { useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const settings = [
  {
    name: 'Home',
    route: '/',
  },
  {
    name: 'Enroll',
    route: '/enrollment',
  },
];

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
  console.log(data);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      if (user) {
        setNavLinks([
          {
            name: 'Home',
            route: '/',
          },
          {
            name: 'Enroll',
            route: '/enrollment',
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
                <Tooltip title='Open settings'>
                  <Button
                    onClick={handleOpenUserMenu}
                    sx={{
                      color: theme.palette.text.primary,
                      textTransform: 'none',
                    }}
                  >
                    Profile <ArrowDropDownIcon fontSize='small' />
                  </Button>
                </Tooltip>
              ) : null}
              <Menu
                sx={{ mt: '45px' }}
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
                {settings.map((setting) => (
                  <MenuItem
                    key={setting.name}
                    component='a'
                    href={setting.route}
                    sx={{
                      color: theme.palette.text.primary,
                      textTransform: 'none',
                    }}
                    onClick={handleCloseUserMenu}
                  >
                    {setting.name}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
      </Container>
    </Box>
  );
};

export default Navbar;
