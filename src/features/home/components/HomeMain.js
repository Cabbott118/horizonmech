// Content
import { homeMainContent } from '../../../constants/content';
import React from 'react';
// MUI
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';

const HomeMain = () => {
  return (
    <Box sx={{ backgroundColor: '#222831' }}>
      <Container maxWidth='md'>
        <Grid container spacing={3} alignItems='stretch'>
          {homeMainContent.map((cardContent, index) => (
            <Grid item xs={12} sm={12 / homeMainContent.length} key={index}>
              <Paper
                sx={{
                  p: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                {cardContent.icon &&
                  React.createElement(cardContent.icon, {
                    color: 'primary',
                    sx: { fontSize: '5rem' },
                  })}
                <Typography
                  variant='h5'
                  component='h5'
                  color='secondary'
                  sx={{ fontWeight: '700' }}
                >
                  {cardContent.title}
                </Typography>
                <Typography
                  variant='body2'
                  component='p'
                  color='secondary.light'
                  align='center'
                  sx={{ fontWeight: '600' }}
                >
                  {cardContent.body}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeMain;

{
  /* <Grid
      container
      justifyContent='center'
      alignItems='center'
      sx={{ backgroundColor: '#222831' }}
    >
      <Grid item xs={12} sm={6}>
        <PersonIcon color='primary' sx={{ fontSize: '5rem' }} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={4}
        container
        justifyContent='center'
        alignItems='center'
        direction='column'
      >
        <Grid item>
          <Typography
            variant='h5'
            component='h5'
            color='primary'
            sx={{ fontWeight: '600' }}
          >
            As a customer
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant='body2'
            component='p'
            color='secondary.contrastText'
            align='center'
            sx={{ fontWeight: '600' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            viverra, felis sit amet efficitur placerat, ipsum lectus tincidunt
            dui, ac aliquam orci quam nec sapien. Nunc ultricies ultricies
            sollicitudin. Maecenas semper velit vitae massa fermentum, non
            varius velit varius. Phasellus rutrum, mi nec iaculis consequat,
            nisl elit pharetra tellus, nec consectetur ligula ligula id ipsum.
            Ut viverra leo nec lectus vestibulum, vel tincidunt urna consequat.
            Sed interdum pharetra turpis, sed bibendum nunc rutrum non. Aenean
            ac quam sit amet urna finibus eleifend.
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6}>
        <EngineeringIcon color='primary' sx={{ fontSize: '5rem' }} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={4}
        container
        justifyContent='center'
        alignItems='center'
        direction='column'
      >
        <Grid item>
          <Typography
            variant='h5'
            component='h5'
            color='primary'
            sx={{ fontWeight: '600' }}
          >
            As a contractor
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant='body2'
            component='p'
            color='secondary.contrastText'
            align='center'
            sx={{ fontWeight: '600' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            viverra, felis sit amet efficitur placerat, ipsum lectus tincidunt
            dui, ac aliquam orci quam nec sapien. Nunc ultricies ultricies
            sollicitudin. Maecenas semper velit vitae massa fermentum, non
            varius velit varius. Phasellus rutrum, mi nec iaculis consequat,
            nisl elit pharetra tellus, nec consectetur ligula ligula id ipsum.
            Ut viverra leo nec lectus vestibulum, vel tincidunt urna consequat.
            Sed interdum pharetra turpis, sed bibendum nunc rutrum non. Aenean
            ac quam sit amet urna finibus eleifend.
          </Typography>
        </Grid>
      </Grid>
    </Grid> */
}
