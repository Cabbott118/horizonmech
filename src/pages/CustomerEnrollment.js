import { useState } from 'react';

// Components
import PageContainer from '../layouts/PageContainer';
import CustomerEnrollmentForm from '../features/enrollment/components/customer/CustomerForm';

// MUI
import { Typography } from '@mui/material';

const CustomerEnrollment = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  //   const handleSignup = () => signup();

  return (
    <PageContainer maxWidth='xs'>
      <Typography variant='h6' component='h1'>
        Customer
      </Typography>
      <CustomerEnrollmentForm
        emailData={email}
        passwordData={password}
        confirmPasswordData={confirmPassword}
        setEmail={setEmail}
        setPassword={setPassword}
        setConfirmPassword={setConfirmPassword}
        // handleSignup={handleSignup}
        // isLoading={isLoading}
      />
    </PageContainer>
  );
};

export default CustomerEnrollment;
