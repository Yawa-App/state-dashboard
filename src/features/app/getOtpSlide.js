import { apiSlice } from './apiSlice';

export const authGetOtpApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
      getOtp: builder.mutation({
        query: (credentials) => ({
          url: '/api/state/resend/email',
          method: 'POST',
          body: credentials,
        }),
      }),
    }),
});

export const { useGetOtpMutation } = authGetOtpApiSlice;
