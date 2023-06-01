// MUI
import { Box } from '@mui/material';
import Alert from '../../../components/common/Alert';
import Button from '../../../components/common/Button';
import TextField from '../../../components/common/TextField';

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
      <TextField
        id='email'
        label='Email Address'
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id='password'
        label='Password'
        name='password'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error ? (
        <Alert severity='error' text='Invalid email or password' />
      ) : null}
      <Button fullWidth text='Login' variant='contained' loading={isLoading} />
    </Box>
  );
};

export default LoginForm;
