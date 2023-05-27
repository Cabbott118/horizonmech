import { useState } from 'react';

// MUI
import PageContainer from '../layouts/PageContainer';

// Components
import SignupForm from '../features/authentication/components/SignupForm';
import AuthenticationHeader from '../features/authentication/components/AuthenticationHeader';
import AuthenticationFooter from '../features/authentication/components/AuthenticationFooter';

// Hooks
import useFirebaseSignup from '../features/authentication/hooks/useFirebaseSignup';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { user, error, isLoading, signup } = useFirebaseSignup(email, password);

  const handleSignup = () => signup();

  const pageType = 'Sign up';

  return (
    <PageContainer maxWidth='xs'>
      <AuthenticationHeader title={pageType} />
      <SignupForm
        emailData={email}
        passwordData={password}
        confirmPasswordData={confirmPassword}
        setEmail={setEmail}
        setPassword={setPassword}
        setConfirmPassword={setConfirmPassword}
        handleSignup={handleSignup}
        error={error}
        isLoading={isLoading}
      />
      <AuthenticationFooter type={pageType} />
    </PageContainer>
  );
};

export default Signup;
