// Constants
import { workingTitle } from '../../../constants/content';

// MUI
import { Typography, useTheme } from '@mui/material';

const LandingBanner = () => {
  const theme = useTheme();
  return (
    <>
      <Typography
        variant='h5'
        component='h1'
        color={theme.palette.secondary.contrastText}
      >
        Welcome to
      </Typography>
      <Typography
        variant='h3'
        component='h1'
        color={theme.palette.primary.main}
        sx={{
          letterSpacing: '.1rem',
          fontFamily: 'arial',
          py: '.75rem',
          fontWeight: '600',
        }}
      >
        {workingTitle}
      </Typography>
      <Typography
        variant='body1'
        paragraph
        align='center'
        color={theme.palette.secondary.contrastText}
        sx={{ letterSpacing: '.075rem' }}
      >
        Discover the future of customer-contractor connections with{' '}
        <b>{workingTitle}</b> - the platform that empowers you to find the ideal
        match for your company's needs.
      </Typography>
    </>
  );
};

export default LandingBanner;
