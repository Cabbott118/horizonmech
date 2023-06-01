import { useEffect, useState } from 'react';

// MUI
import Container from '../components/layout/Container';

// Compnents
import AuthenticationHeader from '../features/authentication/components/AuthenticationHeader';
import AuthenticationFooter from '../features/authentication/components/AuthenticationFooter';
import LoginForm from '../features/authentication/components/LoginForm';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/slices/authSlice';
import { fetchUser } from '../store/slices/userSlice';

// React Router
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);

  const handleLogin = () => {
    dispatch(loginUser({ email, password }));
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (user?.uid) {
      dispatch(fetchUser(user.uid));
      navigate('/');
    }
  }, [user]);

  const pageType = 'Login';

  return (
    <Container maxWidth='xs'>
      <AuthenticationHeader title={pageType} />
      <LoginForm
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleLogin={handleLogin}
        error={error}
        isLoading={loading}
      />
      <AuthenticationFooter type={pageType} />
    </Container>
  );
};

export default Login;
