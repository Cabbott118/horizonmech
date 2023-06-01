// Components
import EnrollmentBegin from '../features/enrollment/components/EnrollmentBegin';

// Redux
import { useSelector } from 'react-redux';

// Constants
import UserType from '../constants/userType';
import EnrollmentContractorForm from '../features/enrollment/components/EnrollmentContractorForm';
import EnrollmentCustomerForm from '../features/enrollment/components/EnrollmentCustomerForm';

const Enrollment = () => {
  const { data } = useSelector((state) => state.user);

  if (data.userType === UserType.NORMAL) return <EnrollmentBegin />;
  if (data.userType === UserType.CONTRACTOR)
    return <EnrollmentContractorForm />;
  if (data.userType === UserType.CUSTOMER) return <EnrollmentCustomerForm />;
};

export default Enrollment;
