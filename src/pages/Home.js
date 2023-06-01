// Components
import Hero from '../features/home/components/Hero';

// Redux
import { useSelector } from 'react-redux';

const Home = () => {
  const { data, loading, error } = useSelector((state) => state.user);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Hero />
      <p>{data?.legalName.firstName}</p>
      <p>{data?.email}</p>
      <p>{data?.userId}</p>
      <p>{data?.authProvider}</p>
      <p>{data?.userType}</p>
    </div>
  );
};

export default Home;
