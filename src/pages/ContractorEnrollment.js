import { useState } from 'react';

// Components
import PageContainer from '../layouts/PageContainer';
import ContractorEnrollmentForm from '../features/enrollment/components/contractor/ContractorForm';

// MUI
import { Typography } from '@mui/material';

const ContractorEnrollment = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  //   const handleSignup = () => signup();

  return (
    <PageContainer maxWidth='xs'>
      <Typography variant='h6' component='h1'>
        Contractor
      </Typography>
      <ContractorEnrollmentForm
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

export default ContractorEnrollment;
