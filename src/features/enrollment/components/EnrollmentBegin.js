// MUI
import { MyButton } from '../../../lib/mui';
import { Grid, Paper, Typography } from '@mui/material';

// React Router
import { useNavigate } from 'react-router-dom';

const EnrollmentBegin = () => {
  const navigate = useNavigate();

  const handleNavigationToCustomerEnrollment = () => {
    navigate('/enrollment/customer');
  };

  const handleNavigationToContractorEnrollment = () => {
    navigate('/enrollment/contractor');
  };
  return (
    <Grid container justifyContent='center'>
      <Typography variant='h6' component='h1'>
        Tell us about yourself
      </Typography>
      <Typography variant='body1' component='p'>
        How will you be using this app?
      </Typography>
      <Grid container justifyContent='center' spacing={2}>
        <Grid item sm={12} md={6}>
          <Paper variant='outlined' sx={{ width: '100%', height: '5rem' }}>
            <Typography>I'll be registering as a Customer</Typography>
            <MyButton
              text='Become a Customer'
              onClick={handleNavigationToCustomerEnrollment}
            />
          </Paper>
        </Grid>
        <Grid item sm={12} md={6}>
          <Paper variant='outlined' sx={{ width: '100%', height: '5rem' }}>
            <Typography>I'll be registering as a Contractor</Typography>
            <MyButton
              text='Become a Contractor'
              onClick={handleNavigationToContractorEnrollment}
            />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EnrollmentBegin;
