import { useState } from 'react';

// MUI
import PageContainer from '../layouts/PageContainer';

// Components
import ContractorEnrollmentForm from '../features/enrollment/components/contractor/ContractorForm';

// MUI
import { Button, Typography } from '@mui/material';

// Hooks
import useUpdateProfile from '../hooks/useUpdateProfile';

const ContractorEnrollment = () => {
  const [userType, setUserType] = useState('');
  const { user, error, isLoading, updateProfile } = useUpdateProfile(
    userType,
    uid
  );

  const handleProfileUpdate = () => updateProfile();

  return (
    <PageContainer maxWidth='xs'>
      <Typography variant='h6' component='h1'>
        Contractor
      </Typography>
      <Button onClick={handleProfileUpdate}>Update</Button>
      <ContractorEnrollmentForm
      // handleSignup={handleProfileUpdate}
      // isLoading={isLoading}
      />
    </PageContainer>
  );
};

export default ContractorEnrollment;
