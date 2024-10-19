import { apiSlice } from './apiSlice';

export const authResetPasswordApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
      resetPassword: builder.mutation({
        query: (credentials) => ({
          url: '/api/auth/forgot-password',
          method: 'POST',
          body: credentials,
        }),
      }),
    }),
});

export const { useResetPasswordMutation } = authResetPasswordApiSlice;
