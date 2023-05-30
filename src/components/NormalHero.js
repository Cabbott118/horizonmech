// MUI
import { Box, Button, Container, Typography } from '@mui/material';

// React Router
import { useNavigate } from 'react-router-dom';

const NormalHero = () => {
  const navigate = useNavigate();

  const handleNavigationToCustomerEnrollment = () => {
    navigate('/enrollment/customer');
  };

  const handleNavigationToContractorEnrollment = () => {
    navigate('/enrollment/contractor');
  };
  return (
    <Box>
      <Container
        maxWidth='lg'
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant='h6' component='h1'>
          Hello, normal user.
        </Typography>
        <Typography>Please tell us how you'll be using the app</Typography>
        <Button
          variant='outlined'
          onClick={handleNavigationToContractorEnrollment}
          sx={{ mt: 3, mb: 2, textTransform: 'none' }}
        >
          Contractor
        </Button>
        <Button
          variant='outlined'
          onClick={handleNavigationToCustomerEnrollment}
          sx={{ textTransform: 'none' }}
        >
          Customer
        </Button>
      </Container>
    </Box>
  );
};

export default NormalHero;
