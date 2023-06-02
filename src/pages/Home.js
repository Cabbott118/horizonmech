// Components
import Hero from '../features/home/components/Hero';
import HomeMain from '../features/home/components/HomeMain';

// Redux
import { useSelector } from 'react-redux';

const Home = () => {
  const { data, loading, error } = useSelector((state) => state.user);

  if (error) return <>{error}</>;
  return (
    <>
      <Hero data={data} loading={loading} />
      <HomeMain />
    </>
  );
};

export default Home;
