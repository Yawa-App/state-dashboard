import { apiSlice } from './apiSlice';

export const authCreatePasswordApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
      createPassword: builder.mutation({
        query: (credentials) => ({
          url: '/api/state/create/password',
          method: 'POST',
          body: credentials,
        }),
      }),
    }),
});

export const { useCreatePasswordMutation } = authCreatePasswordApiSlice;
