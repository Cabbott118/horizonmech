// Constants
import { LOGIN_ROUTE, SIGNUP_ROUTE } from '../../../constants/routes';

// React Router
import { Link } from 'react-router-dom';
// MUI
import { Grid } from '@mui/material';

const linkStyles = {
  color: '#124559',
  fontSize: '.9rem',
};

const AuthenticationFooter = ({ type }) => {
  switch (type) {
    case 'Login':
      return (
        <Grid container>
          <Grid item xs>
            <Link to='/forgot-password' style={linkStyles}>
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link to={SIGNUP_ROUTE} style={linkStyles}>
              Don't have an account? Sign up
            </Link>
          </Grid>
        </Grid>
      );

    case 'Sign up':
      return (
        <Grid container justifyContent='flex-end'>
          <Grid item>
            <Link to={LOGIN_ROUTE} style={linkStyles}>
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      );

    default:
      return;
  }
};

export default AuthenticationFooter;
