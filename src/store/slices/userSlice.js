import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';

// Axios facade
import { get, post, patch } from '../../lib/axios';
import {
  CREATE_USER,
  GET_USER_DETAILS,
  UPDATE_USER,
} from '../../constants/apiEndpoints';

// Async thunk to create user data
// const email: 'caleb@caleb.com'
// const uid: '123'
// dispatch(createUser({ email, uid }));
const createUser = createAsyncThunk(
  'user/createUser',
  async ({ email, uid }) => {
    try {
      const response = await post(CREATE_USER, { email, uid });
      return response.user;
    } catch (error) {
      throw new Error('Failed to create user data.');
    }
  }
);

// Async thunk to fetch user data
// const uid = '123'
// dispatch(fetchUser(uid));
const fetchUser = createAsyncThunk('user/fetchUser', async (uid) => {
  try {
    const response = await get(GET_USER_DETAILS, { uid });
    return response;
  } catch (error) {
    throw new Error('Failed to fetch user data.');
  }
});

// Async thunk to create user data
// const uid = '123'
// const updateData = {
//   name: {
//     firstName: 'Caleb',
//     lastName: 'Abbott',
//   },
// };

// dispatch(updateUser({ uid, updateData }));
const updateUser = createAsyncThunk(
  'user/updateUser',
  async ({ uid, updateData }) => {
    try {
      const response = await patch(UPDATE_USER, { uid, updateData });
      return response.user;
    } catch (error) {
      throw new Error('Failed to update user data.');
    }
  }
);

const clearData = createAction('user/clearData');

// User slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearData: (state) => {
      return {
        data: null,
        loading: false,
        error: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      // createUser
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // fetchUser
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // updateUser
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export the async thunk and reducer
export const { reducer: userReducer } = userSlice;
export { createUser, fetchUser, updateUser, clearData };
