// MUI
import { Grid, Typography, useTheme } from '@mui/material';

// Components
import Button from '../../../components/common/Button';

// Redux
import { useDispatch } from 'react-redux';
import { commitToUserType } from '../../../store/slices/userSlice';

// React Router
import { Link } from 'react-router-dom';

// Constants
import { ENROLLMENT_ROUTE } from '../../../constants/routes';
import UserType from '../../../constants/userType';

const HeroView = ({ userType }) => {
  const theme = useTheme();

  const dispatch = useDispatch();

  const handleCustomerClick = () => {
    dispatch(commitToUserType({ committedToPath: UserType.CUSTOMER }));
  };

  const handleContractorClick = () => {
    dispatch(commitToUserType({ committedToPath: UserType.CONTRACTOR }));
  };

  if (userType === UserType.NORMAL)
    return (
      <>
        <Grid item>
          <Typography
            variant='body2'
            component='p'
            color={theme.palette.primary.contrastText}
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
                  color='secondary'
                  onClick={handleCustomerClick}
                />
              </Link>
            </Grid>
            <Grid item>
              <Link to={ENROLLMENT_ROUTE} style={{ color: 'inherit' }}>
                <Button
                  text='Contractor'
                  variant='outlined'
                  color='secondary'
                  onClick={handleContractorClick}
                />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </>
    );

  if (userType === UserType.CUSTOMER)
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
                  color='secondary'
                  onClick={handleCustomerClick}
                />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </>
    );

  if (userType === UserType.CONTRACTOR)
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
                  color='secondary'
                  onClick={handleContractorClick}
                />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
};

export default HeroView;
