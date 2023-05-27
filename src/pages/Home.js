// MUI
import { Button, Typography } from '@mui/material';

// Hooks
import useFirebaseLogout from '../features/authentication/hooks/useFirebaseLogout';

// React Router
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/enrollment');
  };
  const { logout } = useFirebaseLogout();
  return (
    <>
      <Typography variant='body2'>
        Pretty words that make you want to use the site
      </Typography>
      <Button onClick={handleClick} sx={{ textTransform: 'none' }}>
        Begin enrollment
      </Button>
      <Button color='error' sx={{ textTransform: 'none' }} onClick={logout}>
        Logout
      </Button>
    </>
  );
};

export default Home;
