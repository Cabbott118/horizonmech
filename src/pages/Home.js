// Components
import Logout from '../features/authentication/components/Logout';

// Redux
import { useSelector } from 'react-redux';

const Home = () => {
  const { data, loading, error } = useSelector((state) => state.user);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <p>Welcome, {data?.email}</p>
      <p>{data?.userId}</p>
      <p>{data?.authProvider}</p>
      <p>{data?.userType}</p>
      <Logout />
    </div>
  );
};

export default Home;
