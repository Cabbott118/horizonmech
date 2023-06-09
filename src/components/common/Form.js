// MUI
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';

// Constants
import states from '../../constants/states.json';

const Form = ({ formState, setFormState, formContent, stepCount }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='stretch'
      sx={{ mt: '3rem' }}
    >
      <Box component='form' onSubmit={handleSubmit}>
        {formContent.map((field) => {
          const { type, label, name, required, text, variant, showOnStep } =
            field;
          let formField = null;

          if (showOnStep === stepCount) {
            switch (type) {
              case 'typography':
                formField = (
                  <Typography variant={variant} sx={{ my: '.5rem' }}>
                    {text}
                  </Typography>
                );
                break;
              case 'text':
                formField = (
                  <TextField
                    label={label}
                    name={name}
                    required={required}
                    margin='normal'
                    fullWidth
                    value={formState[name] || ''}
                    onChange={handleChange}
                  />
                );
                break;
              case 'checkbox':
                formField = (
                  <FormControlLabel
                    control={
                      <Checkbox
                        label={label}
                        name={name}
                        checked={!!formState[name]}
                        onChange={handleChange}
                      />
                    }
                    label={label}
                    sx={{ my: '.5rem' }}
                  />
                );
                break;
              case 'select':
                formField = (
                  <TextField
                    label={label}
                    name={name}
                    select
                    fullWidth
                    margin='normal'
                    value={formState[name] || ''}
                    onChange={handleChange}
                  >
                    {states.map((state) => (
                      <MenuItem key={state.name} value={state.abbreviation}>
                        {state.name}
                      </MenuItem>
                    ))}
                  </TextField>
                );
                break;
              default:
                formField = null;
            }
          }

          return (
            formField && (
              <Grid item key={name}>
                {formField}
              </Grid>
            )
          );
        })}
      </Box>
    </Grid>
  );
};

export default Form;
