// MUI
import { Grid, Typography, useTheme } from '@mui/material';

// Components
import Button from '../../../components/common/Button';
import LandingBanner from './LandingBanner';

// Redux
import { useDispatch } from 'react-redux';
import { commitToUserType } from '../../../store/slices/userSlice';

// React Router
import { Link } from 'react-router-dom';

// Constants
import { ENROLLMENT_ROUTE } from '../../../constants/routes';
import UserType from '../../../constants/userType';
import { heroHeader } from '../../../constants/content';

const HeroViews = ({ data }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleUserTypeClick = (userType) => {
    dispatch(commitToUserType({ committedToPath: userType.toLowerCase() }));
  };

  const renderNormal = (
    <>
      <Grid item>
        <Typography
          variant='body2'
          component='p'
          color={theme.palette.secondary.contrastText}
        >
          by telling us how you'll use the app
        </Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={3}>
          {['Customer', 'Contractor'].map((userType) => (
            <Grid item key={userType}>
              <Link to={ENROLLMENT_ROUTE} style={{ color: 'inherit' }}>
                <Button
                  text={userType}
                  variant='outlined'
                  onClick={() => handleUserTypeClick(userType)}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );

  const renderIncompleteCustomerOrContractor = () => {
    return (
      <>
        <Grid item>
          <Typography
            variant='body2'
            component='p'
            color={theme.palette.primary.contrastText}
          >
            pick up where you left off
          </Typography>
        </Grid>
        <Grid item>
          <Grid container spacing={3}>
            <Grid item>
              <Link to={ENROLLMENT_ROUTE} style={{ color: 'inherit' }}>
                <Button
                  text='Continue'
                  variant='outlined'
                  onClick={
                    data.userType === UserType.CUSTOMER
                      ? () => handleUserTypeClick(UserType.CUSTOMER)
                      : () => handleUserTypeClick(UserType.CONTRACTOR)
                  }
                />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  };

  const renderCompleteCustomerOrContractor = () => {
    console.log('Here');
    return (
      <>
        <Typography
          variant='h5'
          component='h1'
          align='center'
          color={theme.palette.secondary.contrastText}
        >
          Thank you for completing your profile!
        </Typography>
      </>
    );
  };

  if (!data) return <LandingBanner />;

  return (
    <>
      {!data.isEnrolled && (
        <Grid item>
          <Typography
            variant='h5'
            component='h1'
            align='center'
            color={theme.palette.secondary.contrastText}
          >
            {data.legalName.firstName}, {heroHeader}
          </Typography>
        </Grid>
      )}

      {data.userType === UserType.NORMAL && renderNormal}

      {(data.userType === UserType.CUSTOMER ||
        data.userType === UserType.CONTRACTOR) && (
        <>
          {!data.isEnrolled && renderIncompleteCustomerOrContractor()}
          {data.isEnrolled && renderCompleteCustomerOrContractor()}
        </>
      )}
    </>
  );
};

export default HeroViews;
