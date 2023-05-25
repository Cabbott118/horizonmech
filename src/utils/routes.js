import { createBrowserRouter } from 'react-router-dom';

// Pages
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
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
]);
