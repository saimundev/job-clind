import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const prodectApi = createApi({
  reducerPath: "prodectApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://job-wajq.onrender.com/api/" }),
  tagTypes: ["Prodect"],
  endpoints: (builder) => ({
    createProdect: builder.mutation({
      query: (name) => ({
        method: "POST",
        url: "prodect/create-prodect",
        body: name,
      }),
      invalidatesTags: ["Prodect"],
    }),

    getProdect: builder.query({
      query: () => ({
        method: "GET",
        url: "prodect/get-prodect",
      }),
      providesTags: ["Prodect"],
    }),

    getSingleProdect: builder.query({
      query: (id) => ({
        method: "GET",
        url: `prodect/single-prodect/${id}`,
      }),
      providesTags: ["Prodect"],
    }),

    updateProdect: builder.mutation({
      query: ({ updateData, id }) => ({
        method: "PUT",
        url: `prodect/edit-prodect/${id}`,
        body: updateData,
      }),
      invalidatesTags: ["Prodect"],
    }),

    deleteProdect: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `prodect/delete-prodect/${id}`,
      }),
      invalidatesTags: ["Prodect"],
    }),

    createOrder: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "order/create-order",
        body: data,
      }),
      invalidatesTags: ["Prodect"],
    }),

    getOrder: builder.query({
      query: () => ({
        method: "GET",
        url: "order/get-order",
      }),
      providesTags: ["Prodect"],
    }),

    orderDetails: builder.query({
      query: (id) => ({
        method: "GET",
        url: `order/details-order/${id}`,
      }),
      providesTags: ["Prodect"],
    }),

    editOrder: builder.mutation({
      query: ({data,id}) => ({
        method: "PUT",
        url: `order/edit-order/${id}`,
        body:data
      }),
      invalidatesTags: ["Prodect"],
    }),


    deleteOrder: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `order/delete-order/${id}`,
      }),
      invalidatesTags: ["Prodect"],
    }),


  }),
});

export const {
  useCreateProdectMutation,
  useGetProdectQuery,
  useGetSingleProdectQuery,
  useUpdateProdectMutation,
  useDeleteProdectMutation,
  useCreateOrderMutation,
  useGetOrderQuery,
  useOrderDetailsQuery,
  useDeleteOrderMutation,
  useEditOrderMutation
} = prodectApi;
