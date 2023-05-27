import { useState } from 'react';

// MUI
import PageContainer from '../layouts/PageContainer';

// Compnents
import LoginForm from '../features/authentication/components/LoginForm';
import AuthenticationHeader from '../features/authentication/components/AuthenticationHeader';
import AuthenticationFooter from '../features/authentication/components/AuthenticationFooter';

// Hooks
import useFirebaseLogin from '../features/authentication/hooks/useFirebaseLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user, error, isLoading, login } = useFirebaseLogin(email, password);

  const handleLogin = () => login();

  const pageType = 'Login';

  return (
    <PageContainer maxWidth='xs'>
      <AuthenticationHeader title={pageType} />
      <LoginForm
        emailData={email}
        passwordData={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleLogin={handleLogin}
        error={error}
        isLoading={isLoading}
      />
      <AuthenticationFooter type={pageType} />
    </PageContainer>
  );
};

export default Login;
