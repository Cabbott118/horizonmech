// MUI
import { useTheme } from '@mui/material';
import { Avatar, Box, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const AuthenticationHeader = ({ title }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: theme.palette.secondary.main }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component='h1' variant='h5'>
        {title}
      </Typography>
    </Box>
  );
};

export default AuthenticationHeader;
