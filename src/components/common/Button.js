import { Button as MuiButton } from '@mui/material';

const Button = ({ text, loading, variant, ...rest }) => {
  return (
    <MuiButton
      type='submit'
      variant={variant}
      disabled={loading}
      sx={{
        my: '1rem',
        textTransform: 'none',
      }}
      {...rest}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
