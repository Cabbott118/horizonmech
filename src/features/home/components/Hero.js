// MUI
import { Box, Grid, Typography, useTheme } from '@mui/material';

// Components
import Container from '../../../components/layout/Container';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Constants
import HeroView from './HeroView';

const Hero = () => {
  const theme = useTheme();
  const { data, loading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  if (loading) return <>Loading...</>;
  if (error) return <>{error}</>;
  if (data)
    return (
      <Box sx={{ backgroundColor: theme.palette.primary.main }}>
        <Container maxWidth='sm'>
          <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            sx={{ my: '3rem' }}
          >
            <Grid item>
              <Typography
                variant='h5'
                component='h1'
                color={theme.palette.primary.contrastText}
              >
                Complete Your Profile
              </Typography>
            </Grid>
            <HeroView userType={data.userType} />
          </Grid>
        </Container>
      </Box>
    );
  if (!data) return <>Hero nonauth</>;
};

export default Hero;
