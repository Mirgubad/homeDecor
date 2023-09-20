// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const statisticsApi = createApi({
  reducerPath: "statisticsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/statistics" }),
  endpoints: (builder) => ({
    getAllStatistics: builder.query({
      query: () => "", // Endpoint to fetch all products
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllStatisticsQuery } = statisticsApi;
