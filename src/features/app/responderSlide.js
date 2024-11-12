// authCirclesApiSlice.ts
import { apiSlice } from "./apiSlice";

export const authResponderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createResponder: builder.mutation({
        query: (credentials) => ({
            url: '/state/responders',
            method: 'POST',
            body: credentials,
        }),
    }),

    getResponder: builder.query({
      query: () => ({
        url: '/state/responders',
        method: 'GET',
      }),
    }),
  }),
});

export const { useCreateResponderMutation, useGetResponderQuery } = authResponderApiSlice;
