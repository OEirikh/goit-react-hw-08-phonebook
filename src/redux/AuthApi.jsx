import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const AuthApi = createApi({
  reducerPath: 'AuthApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ['Users'],

  endpoints: builder => ({
    getInfoOfCurrentContact: builder.query({
      query: () => '/users/current',
      method: 'GET',
      providesTags: ['Users'],
    }),

    userSignup: builder.mutation({
      query: user => ({
        url: `/users/signup`,
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['Users'],
    }),

    userLogin: builder.mutation({
      query: user => ({
        url: `/users/login`,
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['Users'],
    }),

    userLogout: builder.mutation({
      query: Authorization => ({
        url: `/users/logout`,
        method: 'POST',
        body: Authorization,
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export const {
  useGetInfoOfCurrentContactQuery,
  useUserLoginMutation,
  useUserLogoutMutation,
  useUserSignupMutation,
} = AuthApi;
