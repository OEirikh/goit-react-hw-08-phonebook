import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const AuthApi = createApi({
  reducerPath: 'contactsApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
  }),

  tagTypes: ['Users'],

  endpoints: builder => ({
    getInfoOfCurrentContact: builder.query({
      query: () => '/users/current',
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
