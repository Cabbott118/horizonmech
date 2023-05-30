import { MyButton, MyTextField } from '../../../../lib/mui';
import { Box, Typography } from '@mui/material';

const ContractorForm = ({ handleProfileUpdate, isLoading }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // handleProfileUpdate();
  };
  return (
    <Box component='form' onSubmit={handleSubmit}>
      {/* <MyTextField
        id='email'
        label='Email Address'
        name='email'
        value={emailData}
        onChange={(e) => setEmail(e.target.value)}
      />
      <MyTextField
        id='password'
        label='Password'
        name='password'
        type='password'
        value={passwordData}
        onChange={(e) => setPassword(e.target.value)}
      />
      <MyTextField
        id='confirmPassword'
        label='Confirm Password'
        name='confirmPassword'
        type='password'
        value={confirmPasswordData}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <MyButton fullWidth text='Continue' loading={isLoading} /> */}
    </Box>
  );
};

export default ContractorForm;
