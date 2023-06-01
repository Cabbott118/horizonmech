// MUI
import { Box } from '@mui/material';
import Alert from '../../../components/common/Alert';
import Button from '../../../components/common/Button';
import TextField from '../../../components/common/TextField';

const SignupForm = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
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
      <TextField
        id='firstName'
        label='First Name'
        name='firstName'
        type='text'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        id='lastName'
        label='Last Name'
        name='lastName'
        type='text'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
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
      <TextField
        id='confirmPassword'
        label='Confirm Password'
        name='confirmPassword'
        type='password'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {error ? (
        <Alert severity='error' text='Please choose another email' />
      ) : null}
      <Button
        fullWidth
        text='Sign Up'
        variant='contained'
        loading={isLoading}
      />
    </Box>
  );
};

export default SignupForm;
