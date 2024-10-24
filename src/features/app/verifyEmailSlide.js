import { apiSlice } from './apiSlice';

export const authVerifyEmailApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
      verifyEmail: builder.mutation({
        query: (credentials) => ({
          url: '/api/state/email/verification',
          method: 'POST',
          body: credentials,
        }),
      }),
    }),
});

export const { useVerifyEmailMutation } = authVerifyEmailApiSlice;
