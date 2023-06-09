import { useState } from 'react';

// Components
import Button from '../components/common/Button';
import Logout from '../features/authentication/components/Logout';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../store/slices/userSlice';

// Constants
import UserType from '../constants/userType';

// MUI
import { Grid, Paper, Typography } from '@mui/material';

const Profile = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.user);
  const [newUserEnrollmentStatus, setNewUserEnrollmentStatus] = useState(
    !data.isEnrolled
  );

  const handleUserTypeSwitchClick = () => {
    dispatch(
      updateUser({
        uid: data.userId,
        updateData: { userType: 'normal', isEnrolled: false },
      })
    );
  };

  const handleUserEnrollmentSwitchClick = () => {
    dispatch(
      updateUser({
        uid: data.userId,
        updateData: { isEnrolled: newUserEnrollmentStatus },
      })
    );
  };

  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      sx={{ mt: '1rem' }}
    >
      <Grid item>
        <Typography variant='h6' color='primary'>
          Profile{' '}
        </Typography>
      </Grid>
      <Grid item>
        <Paper
          variant='outlined'
          sx={{ minWidth: '10rem', minHeight: '10rem', pt: '2rem', px: '1rem' }}
        >
          <Typography>
            Full Name: {data.legalName.firstName} {data.legalName.lastName}
          </Typography>
          <Typography>Email: {data.email}</Typography>
          <Typography>Account Type: {data.userType}</Typography>
          <Typography>
            Enrollment Status: {data.isEnrolled.toString()}
          </Typography>
          <Typography>Auth Provider: {data.authProvider}</Typography>
        </Paper>
      </Grid>

      <Grid item>
        <Typography variant='h6' align='center'>
          Debug Options:
        </Typography>
      </Grid>

      <Grid item>
        <Typography variant='body1' align='center'>
          Resetting user type will allow you to re-enroll
        </Typography>
      </Grid>
      <Grid item>
        <Button
          text='Reset User Type'
          variant='contained'
          disabled={loading || data.userType === UserType.NORMAL}
          onClick={handleUserTypeSwitchClick}
        />
      </Grid>
      <Grid item>
        <Typography variant='body1' align='center'>
          Changing enrollment status is only available if you've selected an
          enrollment path
        </Typography>
      </Grid>
      <Grid item>
        <Button
          text='Enrollment Status = true'
          variant='contained'
          disabled={data.userType === UserType.NORMAL}
          onClick={handleUserEnrollmentSwitchClick}
        />
      </Grid>

      <Grid item>
        <Logout />
      </Grid>
    </Grid>
  );
};

export default Profile;
