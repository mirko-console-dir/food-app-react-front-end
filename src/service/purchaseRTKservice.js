import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_PURCHASE_URL } from "../config";

// Define a service using a base URL and expected endpoints
export const purchasesApi = createApi({
  reducerPath: "purchasesApi",
  tagTypes: ["Purchase"], //per invalidare cash by tag e getpurchase viene richiamata
  baseQuery: fetchBaseQuery({
    baseUrl: API_PURCHASE_URL,
  }),
  endpoints: (builder) => ({
    getPurchases: builder.query({
      query: () => "/purchases",
      providesTags: (result, error) => {
        if (error) {
          return [{ type: "Purchase" }];
        }
        return result.map((ele) => ({ type: "Purchase", id: ele.id }));
      },
    }),
    addPurchase: builder.mutation({
      query: (purchase) => ({
        url: "/purchase",
        method: "POST",
        body: purchase,
      }),
      invalidatesTags: ["Purchase"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPurchasesQuery, useAddPurchaseMutation } = purchasesApi;
