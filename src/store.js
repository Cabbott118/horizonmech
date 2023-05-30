import { configureStore } from '@reduxjs/toolkit';

// Import your reducers here
import userReducer from './features/profile/slices/userSlice';

const store = configureStore({
  reducer: {
    // Add your reducers here
    user: userReducer,
  },
});

export default store;
