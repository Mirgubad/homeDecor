import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const aboutUsApi = createApi({
  reducerPath: "aboutUsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://home-decor-flax.vercel.app/aboutUs" }),
  endpoints: (builder) => ({
    getAboutUs: builder.query({
      query: () => "",
    }),
  }),
});

export const { useGetAboutUsQuery } = aboutUsApi;
