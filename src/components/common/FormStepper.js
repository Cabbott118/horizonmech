import { useState } from 'react';

// Components
import Button from './Button';
import Form from './Form';

// MUI
import { Grid, Step, Stepper, StepLabel } from '@mui/material';

const FormStepper = ({ formContent }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [formState, setFormState] = useState({});
  const steps = ['Step 1', 'Step 2', 'Step 3'];

  const handleNext = (event) => {
    event.preventDefault();
    setActiveStep(activeStep + 1);
  };

  const handleBack = (event) => {
    event.preventDefault();
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <>
      <Stepper activeStep={activeStep} sx={{ mt: '3rem', width: '100%' }}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Form
        formState={formState}
        setFormState={setFormState}
        formContent={formContent}
        stepCount={activeStep}
      />
      <Grid container spacing={3}>
        {activeStep === 0 ? (
          <>
            <Grid item xs={12}>
              <Button
                text='Next'
                variant='contained'
                fullWidth
                onClick={handleNext}
              />
            </Grid>
          </>
        ) : activeStep === steps.length - 1 ? (
          <>
            <Grid item xs={6}>
              <Button
                text='Back'
                variant='outlined'
                fullWidth
                onClick={handleBack}
              />
            </Grid>
            <Grid item xs={6}>
              <Button
                text='Submit'
                variant='contained'
                fullWidth
                onClick={handleSubmit}
              />
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={6}>
              <Button
                text='Back'
                variant='outlined'
                fullWidth
                onClick={handleBack}
              />
            </Grid>
            <Grid item xs={6}>
              <Button
                text='Next'
                variant='contained'
                fullWidth
                onClick={handleNext}
              />
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};

export default FormStepper;
