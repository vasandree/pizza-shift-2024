import { getUserSession } from '@api/requests/getUserSession.ts';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { GetUserSessionConfig, User } from '@/utils/api';

export interface UserSlice {
  value?: User;
}

const initialState: UserSlice = {
  value: null
};

export const fetchUserSession = createAsyncThunk<User, GetUserSessionConfig>(
  'fetchUserSession',
  async (config, { rejectWithValue }) => {
    try {
      const response = await getUserSession(config);
      return response.user;
    } catch (error) {
      return rejectWithValue('Failed to fetch user session');
    }
  }
);

export const userSlice = createSlice({
  name: 'fetchUserSession',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      return { ...state, value: action.payload };
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserSession.fulfilled, (state, action: PayloadAction<User>) => {
      return { ...state, value: action.payload };
    });
  }
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
