// Components
import ProfileHeader from '../features/profile/components/ProfileHeader';

// MUI
import PageContainer from '../layouts/PageContainer';
import { Button, Typography } from '@mui/material';

// Hooks
import useFirebaseLogout from '../features/authentication/hooks/useFirebaseLogout';

// React Router
// import { useNavigate } from 'react-router-dom';

const Profile = () => {
  // const navigate = useNavigate();
  const { logout } = useFirebaseLogout();
  return (
    <>
      <ProfileHeader />
      <Button color='error' sx={{ textTransform: 'none' }} onClick={logout}>
        Logout
      </Button>
    </>
  );
};

export default Profile;
