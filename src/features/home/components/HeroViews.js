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

  const handleCustomerClick = () => {
    dispatch(commitToUserType({ committedToPath: UserType.CUSTOMER }));
  };

  const handleContractorClick = () => {
    dispatch(commitToUserType({ committedToPath: UserType.CONTRACTOR }));
  };

  const pickUpWhereYouLeftOff = (
    <Grid item>
      <Typography
        variant='body2'
        component='p'
        color={theme.palette.primary.contrastText}
      >
        pick up where you left off
      </Typography>
    </Grid>
  );

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
          <Grid item>
            <Link to={ENROLLMENT_ROUTE} style={{ color: 'inherit' }}>
              <Button
                text='Customer'
                variant='outlined'
                onClick={handleCustomerClick}
              />
            </Link>
          </Grid>
          <Grid item>
            <Link to={ENROLLMENT_ROUTE} style={{ color: 'inherit' }}>
              <Button
                text='Contractor'
                variant='outlined'
                onClick={handleContractorClick}
              />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  );

  const renderCustomerOrContractor = () => {
    return (
      <>
        {pickUpWhereYouLeftOff}
        <Grid item>
          <Grid container spacing={3}>
            <Grid item>
              <Link to={ENROLLMENT_ROUTE} style={{ color: 'inherit' }}>
                <Button
                  text='Continue'
                  variant='outlined'
                  onClick={
                    data.userType === UserType.CUSTOMER
                      ? handleCustomerClick
                      : handleContractorClick
                  }
                />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  };

  if (!data) return <LandingBanner />;

  return (
    <>
      <Grid item>
        <Typography
          variant='h5'
          component='h1'
          color={theme.palette.secondary.contrastText}
        >
          {data.legalName.firstName}, {heroHeader}
        </Typography>
      </Grid>
      {data.userType === UserType.NORMAL && renderNormal}
      {(data.userType === UserType.CUSTOMER ||
        data.userType === UserType.CONTRACTOR) &&
        renderCustomerOrContractor()}
    </>
  );
};

export default HeroViews;
