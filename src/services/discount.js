// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const discountApi = createApi({
  reducerPath: "discountApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/discount" }),
  endpoints: (builder) => ({
    getDiscountData: builder.query({
      query: () => "", // Endpoint to fetch all products
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetDiscountDataQuery } = discountApi;
