import { createSlice } from '@reduxjs/toolkit';
import {
  registration,
  logIn,
  logOut,
  fetchCurrentUser,
} from './authOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilledIn = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.isLoading = false;
  state.error = null;
};

const handleFulfilledOut = state => {
  state.isRefreshing = false;
  state.isLoading = false;
  state.error = null;
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const handleFulfilledCurrent = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
  state.isRefreshing = false;
};

const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(registration.fulfilled, handleFulfilledIn)
      .addCase(logIn.fulfilled, handleFulfilledIn)
      .addCase(logOut.fulfilled, handleFulfilledOut)
      .addCase(fetchCurrentUser.fulfilled, handleFulfilledCurrent)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
