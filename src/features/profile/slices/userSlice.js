import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Axios Facade
import { get } from '../../../lib/axios';

// Constants
import { GET_USER_DETAILS } from '../../../constants/api';

export const fetchUserInfo = createAsyncThunk(
  'user/fetchUserInfo',
  async (userId) => {
    try {
      const data = await get(GET_USER_DETAILS, { userId });
      return data;
    } catch (error) {
      throw Error('Failed to fetch user info');
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectUserInfo = (state) => state.user.userInfo;
export default userSlice.reducer;
