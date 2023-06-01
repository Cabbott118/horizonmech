import { TextField as MuiTextField } from '@mui/material';

const TextField = ({ ...rest }) => (
  <MuiTextField margin='normal' required fullWidth {...rest} />
);

export default TextField;
