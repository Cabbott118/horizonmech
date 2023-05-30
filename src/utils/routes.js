import { createBrowserRouter } from 'react-router-dom';

// Pages
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Profile from '../pages/Profile';
import CustomerEnrollment from '../pages/CustomerEnrollment';
import ContractorEnrollment from '../pages/ContractorEnrollment';
import Error from '../pages/Error';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: '/signup',
    element: <Signup />,
    errorElement: <Error />,
  },
  {
    path: '/profile/:userId',
    element: <Profile />,
    errorElement: <Error />,
  },
  {
    path: '/enrollment/customer',
    element: <CustomerEnrollment />,
    errorElement: <Error />,
  },
  {
    path: '/enrollment/contractor',
    element: <ContractorEnrollment />,
    errorElement: <Error />,
  },
]);
