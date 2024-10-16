import { apiSlice } from "../../api/apiSlice";


export const valuesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getValues: builder.query({
      query: () => ({
        url: "/value",
        method: "GET",
      }),
      providesTags: ["value"],
    }),

    addValues: builder.mutation({
      query: (data) => ({
        url: "/value/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["value"],
    }),

    updateValues: builder.mutation({
      query: ({ id, data }) => ({
        url: `/value/update/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["value"],
    }),
  }),
});

export const {
  useGetValuesQuery,
  useAddValuesMutation,
  useUpdateValuesMutation,
} = valuesApi;
