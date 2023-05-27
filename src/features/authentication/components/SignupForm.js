// MUI
import { Box } from '@mui/material';
import { MyAlert, MyButton, MyTextField } from '../../../lib/mui';

const SignupForm = ({
  emailData,
  setEmail,
  passwordData,
  confirmPasswordData,
  setConfirmPassword,
  setPassword,
  handleSignup,
  error,
  isLoading,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup();
  };

  return (
    <Box component='form' onSubmit={handleSubmit}>
      <MyTextField
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
      {error ? (
        <MyAlert severity='error' text='Please choose another email' />
      ) : null}
      <MyButton fullWidth text='Sign Up' loading={isLoading} />
    </Box>
  );
};

export default SignupForm;
