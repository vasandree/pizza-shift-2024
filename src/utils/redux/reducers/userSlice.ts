import { getUserSession } from '@api/requests/getUserSession.ts';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { GetUserSessionConfig, User } from '@/utils/api';

export type UserUpdate = Omit<User, '_id' | 'phone'>;

export interface UserSlice {
  value?: User;
  loading: boolean;
  error: string | null;
}

const initialState: UserSlice = {
  value: null,
  loading: false,
  error: null
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
      state.value = action.payload;
    },
    updateUser: (state, action: PayloadAction<UserUpdate>) => {
      if (state.value) {
        state.value = { ...state.value, ...action.payload };
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserSession.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserSession.fulfilled, (state, action: PayloadAction<User>) => {
        state.value = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchUserSession.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

export const { setUser, updateUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
