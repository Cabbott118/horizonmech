// MUI
import { Box, Grid, Typography, useTheme } from '@mui/material';

// Components
import Button from '../../../components/common/Button';
import Container from '../../../components/layout/Container';

// Redux
import { useSelector } from 'react-redux';

const Hero = () => {
  const theme = useTheme();
  const { data, loading, error } = useSelector((state) => state.user);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
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
                variant='h6'
                component='h1'
                color={theme.palette.primary.contrastText}
              >
                Complete Your Profile
              </Typography>
            </Grid>
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
                  <Button
                    text='Customer'
                    variant='outlined'
                    color='secondary'
                  />
                </Grid>
                <Grid item>
                  <Button
                    text='Customer'
                    variant='outlined'
                    color='secondary'
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  return <div>Hero nonauth</div>;
};

export default Hero;
