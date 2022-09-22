import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_PURCHASE_URL } from "../config";

// Define a service using a base URL and expected endpoints
export const purchasesApi = createApi({
  reducerPath: "purchasesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_PURCHASE_URL,
  }),
  endpoints: (builder) => ({
    getPurchases: builder.query({
      query: () => `/purchases`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPurchasesQuery } = purchasesApi;
