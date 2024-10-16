import { apiSlice } from "../api/apiSlice";

export const whatWeDoApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWhatWeDo: builder.query({
      query: () => ({
        url: "/whatwedo",
        method: "GET",
      }),
      providesTags: ["whatwedo"],
    }),

    addWhatWeDo: builder.mutation({
      query: (data) => ({
        url: "/whatwedo/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["whatwedo"],
    }),

    updateWhatWeDo: builder.mutation({
      query: ({ id, data }) => ({
        url: `/whatwedo/update/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["whatwedo"],
    }),
  }),
});

export const {
  useGetWhatWeDoQuery,
  useAddWhatWeDoMutation,
  useUpdateWhatWeDoMutation,
} = whatWeDoApi;
