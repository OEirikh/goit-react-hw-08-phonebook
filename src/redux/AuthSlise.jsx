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
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedin = true;
    },

    logOutUser(state, _) {
      return (state = initialState);
    },
  },
});

export const getUserName = state => state.auth.user.name;
export const getToken = state => state.auth.token;
export const getIsLogin = state => state.auth.isLoggedin;

export const { setUser, logOutUser } = AuthSlice.actions;
