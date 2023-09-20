// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/products" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "", // Endpoint to fetch all products
    }),
    getAllProductsHome: builder.query({
      query: (options) => {
        const params = new URLSearchParams({ showInHome: true });
        return `?${params}`;
      },
    }),
    getPopularProducts: builder.query({
      query: (options) => {
        const params = new URLSearchParams({ isPopular: true });
        return `?${params}`;
      },
    }),
    getProductById: builder.query({
      query: (id) => `/${id}`, // Endpoint to fetch a product by ID
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllProductsQuery,
  useGetPopularProductsQuery,
  useGetProductByIdQuery,
  useGetAllProductsHomeQuery,
} = productsApi;
