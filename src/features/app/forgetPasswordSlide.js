import { apiSlice } from './apiSlice';

export const authForgetPasswordApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
      forgetPassword: builder.mutation({
        query: (credentials) => ({
          url: '/api/auth/forgot-password',
          method: 'POST',
          body: credentials,
        }),
      }),
    }),
});

export const { useForgetPasswordMutation } = authForgetPasswordApiSlice;
