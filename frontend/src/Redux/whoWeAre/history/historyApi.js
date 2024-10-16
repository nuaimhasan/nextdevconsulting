import { apiSlice } from "../../api/apiSlice";


export const historyApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHistory: builder.query({
      query: () => ({
        url: "/history",
        method: "GET",
      }),
      providesTags: ["history"],
    }),

    addHistory: builder.mutation({
      query: (data) => ({
        url: "/history/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["history"],
    }),

    updateHistory: builder.mutation({
      query: ({ id, data }) => ({
        url: `/history/update/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["history"],
    }),
  }),
});

export const {
  useGetHistoryQuery,
  useAddHistoryMutation,
  useUpdateHistoryMutation,
} = historyApi;
