import { Skeleton, useTheme } from '@mui/material';

const HeroLoader = () => {
  const theme = useTheme();
  return (
    <>
      <Skeleton
        height='3rem'
        width='20rem'
        sx={{ backgroundColor: theme.palette.secondary.contrastText }}
      />
      <Skeleton
        height='2.5rem'
        width='15rem'
        sx={{ backgroundColor: theme.palette.secondary.contrastText }}
      />
      <Skeleton
        height='3rem'
        width='15rem'
        sx={{ backgroundColor: theme.palette.primary.dark }}
      />
    </>
  );
};

export default HeroLoader;
