import { useState } from 'react';

// Components
import Button from './Button';
import Form from './Form';

// MUI
import { Step, Stepper, StepLabel } from '@mui/material';

const FormStepper = ({ formContent }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [formState, setFormState] = useState({});

  const steps = [];

  formContent.map((content) => {
    if (content.type === 'typography') {
      steps.push(content.text);
    }
  });

  switch (activeStep) {
    case 0:
      return (
        <>
          <Stepper activeStep={activeStep} sx={{ mt: '3rem', width: '100%' }}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <Form
            formState={formState}
            setFormState={setFormState}
            formContent={formContent}
            stepCount={activeStep}
          />
          <Button
            text='Next'
            variant='contained'
            fullWidth
            onClick={() => setActiveStep(activeStep + 1)}
          />
        </>
      );
    case 1:
      return (
        <>
          <Stepper activeStep={activeStep} sx={{ mt: '3rem', width: '100%' }}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <Form
            formState={formState}
            setFormState={setFormState}
            formContent={formContent}
            stepCount={activeStep}
          />
          <Button text='Back' onClick={() => setActiveStep(activeStep - 1)} />
          <Button text='Next' onClick={() => setActiveStep(activeStep + 1)} />
        </>
      );
    case 2:
      return (
        <>
          <Stepper activeStep={activeStep} sx={{ mt: '3rem', width: '100%' }}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <Form
            formState={formState}
            setFormState={setFormState}
            formContent={formContent}
            stepCount={activeStep}
          />
          <Button text='Back' onClick={() => setActiveStep(activeStep - 1)} />
          <Button text='Submit' onClick={() => console.log('Finished!')} />
        </>
      );
  }
};

export default FormStepper;
