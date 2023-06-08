import { useState } from 'react';

// MUI
import {
  TextField,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Box,
  Grid,
  Typography,
} from '@mui/material';

// Components
import Container from '../layout/Container';
import Button from '../common/Button';

const Form = ({ formContent }) => {
  const [formState, setFormState] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submit');
    console.log(formState);
  };

  return (
    <Container maxWidth='sm'>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='stretch'
        spacing={1}
        sx={{ my: '3rem' }}
      >
        <Box component='form' onSubmit={handleSubmit}>
          {formContent.map((field) => {
            const { type, label, name, required, options, text, variant } =
              field;
            let formField;

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
                    fullWidth
                    value={formState[name] || ''}
                    onChange={handleChange}
                    sx={{ my: '.5rem' }}
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
                    value={formState[name] || ''}
                    onChange={handleChange}
                    sx={{ my: '.5rem' }}
                  >
                    {options.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                );
                break;
              default:
                formField = null;
            }

            return (
              formField && (
                <Grid item key={name}>
                  {formField}
                </Grid>
              )
            );
          })}
          <Button fullWidth text='Submit' variant='contained' />
        </Box>
      </Grid>
    </Container>
  );
};

export default Form;
