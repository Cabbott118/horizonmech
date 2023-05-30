// MUI
import { Box } from '@mui/material';
import { MyAlert, MyButton, MyTextField } from '../../../lib/mui';

const LoginForm = ({
  email,
  password,
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
      {error ? (
        <MyAlert severity='error' text='Invalid email or password' />
      ) : null}
      <MyButton fullWidth text='Login' loading={isLoading} />
    </Box>
  );
};

export default LoginForm;
