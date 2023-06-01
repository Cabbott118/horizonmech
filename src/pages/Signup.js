import { useEffect, useState } from 'react';

// MUI
import Container from '../components/layout/Container';

// Compnents
import AuthenticationHeader from '../features/authentication/components/AuthenticationHeader';
import AuthenticationFooter from '../features/authentication/components/AuthenticationFooter';
import SignupForm from '../features/authentication/components/SignupForm';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser } from '../store/slices/authSlice';
import { createUser } from '../store/slices/userSlice';

// React Router
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);

  const handleSignup = () => {
    dispatch(signUpUser({ email, password }));
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (user?.uid) {
      dispatch(createUser({ email, uid: user.uid }));
      navigate('/');
    }
  }, [user]);

  const pageType = 'Sign up';

  return (
    <Container maxWidth='xs'>
      <AuthenticationHeader title={pageType} />
      <SignupForm
        firstName={firstName}
        lastName={lastName}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setEmail={setEmail}
        setPassword={setPassword}
        setConfirmPassword={setConfirmPassword}
        handleSignup={handleSignup}
        error={error}
        isLoading={loading}
      />
      <AuthenticationFooter type={pageType} />
    </Container>
  );
};

export default Signup;
