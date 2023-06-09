import { useState } from 'react';

// Components
import Alert from './Alert';
import Button from './Button';
import Form from './Form';

// MUI
import { Grid, Step, Stepper, StepLabel } from '@mui/material';

const FormStepper = ({ formContent }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [formState, setFormState] = useState({});
  const [error, setError] = useState(false);
  const steps = ['Step 1', 'Step 2', 'Step 3'];

  const handleNext = (event) => {
    event.preventDefault();

    const currentStepContent = formContent.filter(
      (field) => field.showOnStep === activeStep
    );

    // Check if all required fields in the current step are filled
    const isStepValid = currentStepContent.every(
      (field) => !field.required || formState[field.name]
    );

    if (isStepValid) {
      setError(false);
      setActiveStep(activeStep + 1);
    } else {
      setError(true);
    }
  };

  const handleBack = (event) => {
    event.preventDefault();
    setError(false);
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isFormValid = formContent.every(
      (field) => !field.required || formState[field.name]
    );

    if (isFormValid) {
      console.log(formState);
    } else {
      setError(true);
    }
  };

  const showError = (
    <Grid item xs={12} sx={{ m: '.5rem 0 -1.5rem 0' }}>
      <Alert severity='error' text='Fill out all required fields' />
    </Grid>
  );

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
            {error ? showError : null}
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
            {error ? showError : null}
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
            {error ? showError : null}
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
