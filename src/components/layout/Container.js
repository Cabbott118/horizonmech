import { Container as MuiContainer } from '@mui/material';
const Container = ({ maxWidth, ...rest }) => (
  <MuiContainer
    maxWidth={maxWidth}
    sx={{
      // marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      // minHeight: '80vh',
    }}
    {...rest}
  ></MuiContainer>
);
export default Container;
