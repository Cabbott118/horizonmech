// MUI
import { Box, Grid, Typography, useTheme } from '@mui/material';

// Components
import Container from '../../../components/layout/Container';
import HeroViews from './HeroViews';
import HeroLoader from '../loaders/HeroLoader';
import { quoteGenerator } from '../../../utils/helpers';

const Hero = ({ data, loading }) => {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ backgroundColor: theme.palette.secondary.main }}>
        <Container maxWidth='sm'>
          <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            sx={{ my: '3rem' }}
          >
            {loading ? <HeroLoader /> : <HeroViews data={data} />}
            <Grid item>
              <Typography
                variant='body2'
                align='center'
                color='primary.contrastText'
              >
                "{quoteGenerator()}"
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
