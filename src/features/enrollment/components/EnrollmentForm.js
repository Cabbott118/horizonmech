// Components
import Container from '../../../components/layout/Container';
import FormStepper from '../../../components/common/FormStepper';

const EnrollmentForm = ({ formContent }) => {
  return (
    <Container maxWidth='sm'>
      <FormStepper formContent={formContent} />
    </Container>
  );
};

export default EnrollmentForm;
