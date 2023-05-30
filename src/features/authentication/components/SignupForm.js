// MUI
import { Box } from '@mui/material';
import { MyAlert, MyButton, MyTextField } from '../../../lib/mui';

const SignupForm = ({
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <MyTextField
        id='password'
        label='Password'
        name='password'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <MyTextField
        id='confirmPassword'
        label='Confirm Password'
        name='confirmPassword'
        type='password'
        value={confirmPassword}
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
