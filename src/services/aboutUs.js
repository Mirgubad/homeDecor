// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const aboutUsApi = createApi({
  reducerPath: "aboutUsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/aboutUs" }),
  endpoints: (builder) => ({
    getAboutUs: builder.query({
      query: () => "", // Endpoint to fetch all products
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAboutUsQuery } = aboutUsApi;
