import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const basketProductsApi = createApi({
  reducerPath: "basketProductsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/basketProduct",
  }),
  endpoints: (builder) => ({
    getAllBasketProducts: builder.query({
      query: () => "",
    }),
    deleteBasketProduct: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    }),
    addItemToBasket: builder.mutation({
      query: (data) => ({
        method: "POST",
        body: data,
      }),
      // Define `onSuccess` callback to handle the response
      onSuccess: (data, variables, context) => {
        // Check if an item with the same `productId` and `colorId` already exists in the basket
        const { productId, colorId, quantity } = variables;
        const existingItem = context
          .getState()
          .basketProductsApi.data.find(
            (item) => item.productId === productId && item.colorId === colorId
          );

        if (existingItem) {
          // Item already exists, increase its count
          const updatedData = context
            .getState()
            .basketProductsApi.data.map((item) => {
              if (item.productId === productId && item.colorId === colorId) {
                return {
                  ...item,
                  count: item.count + quantity,
                };
              }
              return item;
            });

          // Update the store with the updated data
          context.dispatch({
            type: "basketProductsApi/updateData",
            data: updatedData,
          });
        }
      },
    }),
  }),
});

export const {
  useGetAllBasketProductsQuery,
  useDeleteBasketProductMutation,
  useAddItemToBasketMutation,
} = basketProductsApi;
