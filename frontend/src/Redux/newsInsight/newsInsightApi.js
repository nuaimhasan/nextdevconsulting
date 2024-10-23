import { apiSlice } from "../api/apiSlice";


export const newsInsightApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNewsInsight: builder.query({
      query: () => ({
        url: "/newsInsight",
        method: "GET",
      }),
      providesTags: ["newsInsight"],
    }),

    addNewsInsight: builder.mutation({
      query: (data) => ({
        url: "/newsInsight/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["newsInsight"],
    }),

    updateNewsInsight: builder.mutation({
      query: ({ id, data }) => ({
        url: `/newsInsight/update/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["newsInsight"],
    }),
  }),
});

export const {
  useGetNewsInsightQuery,
  useAddNewsInsightMutation,
  useUpdateNewsInsightMutation,
} = newsInsightApi;
