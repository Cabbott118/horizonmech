import React from 'react';

// Components
import Button from '../../../components/common/Button';

// Redux
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../store/slices/authSlice';
import { clearData } from '../../../store/slices/userSlice';

// Routes
import { HOME_ROUTE } from '../../../constants/routes';

// React Router
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(clearData());
    navigate(HOME_ROUTE);
  };

  return <Button text='Logout' color='error' onClick={handleLogout}></Button>;
};

export default Logout;
