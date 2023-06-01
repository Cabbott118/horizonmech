import React from 'react';

// Components
import Button from '../../../components/common/Button';

// Redux
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../store/slices/authSlice';
import { clearData } from '../../../store/slices/userSlice';

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(clearData());
  };

  return <Button text='Logout' onClick={handleLogout}></Button>;
};

export default Logout;
