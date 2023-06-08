// Components
import EnrollmentBegin from '../features/enrollment/components/EnrollmentBegin';
import EnrollmentForm from '../features/enrollment/components/EnrollmentForm';

// Redux
import { useSelector } from 'react-redux';

// Constants
import UserType from '../constants/userType';
import {
  customerFormContent,
  contractorFormContent,
} from '../constants/formContent';

const Enrollment = () => {
  const { data } = useSelector((state) => state.user);

  if (data.userType === UserType.NORMAL) return <EnrollmentBegin />;
  if (data.userType === UserType.CONTRACTOR)
    return (
      <EnrollmentForm
        userType={data.userType}
        formContent={contractorFormContent}
      />
    );
  if (data.userType === UserType.CUSTOMER)
    return (
      <EnrollmentForm
        userType={data.userType}
        formContent={customerFormContent}
      />
    );
};

export default Enrollment;
