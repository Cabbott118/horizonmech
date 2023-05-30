import { useState, useEffect } from 'react';

// React Router
import { useNavigate } from 'react-router-dom';

// API
import { patch } from '../lib/axios';
import { UPDATE_USER } from '../constants/api';

const useUpdateProfile = (data, uid) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
  });

  const updateProfile = async () => {
    setIsLoading(true);
    patch(UPDATE_USER, { data, uid });
    console.log('updated');
  };

  return { user, error, isLoading, updateProfile };
};

export default useUpdateProfile;
