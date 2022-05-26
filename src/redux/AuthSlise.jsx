import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedin: false,
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, { payload }) {
      console.log(payload);
      return (state = payload);
      // state.auth.user.name = payload;
      // state.auth.token = payload.token;
      // state.auth.isLoggedIn = true;
    },
  },
});

export const { setUser } = AuthSlice.actions;
