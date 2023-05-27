// MUI
import { Box, Typography } from '@mui/material';
import { MyAlert, MyButton, MyTextField } from '../../../lib/mui';

const LoginForm = ({
  emailData,
  passwordData,
  setEmail,
  setPassword,
  handleLogin,
  error,
  isLoading,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
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
      {error ? (
        <MyAlert severity='error' text='Invalid email or password' />
      ) : null}
      <MyButton fullWidth text='Login' loading={isLoading} />
    </Box>
  );
};

export default LoginForm;
