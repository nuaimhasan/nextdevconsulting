import { apiSlice } from "../api/apiSlice";

export const whoWeAreApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWhoWeAre: builder.query({
      query: () => ({
        url: "/whoweare",
        method: "GET",
      }),
      providesTags: ["whoweare"],
    }),

    addWhoWeAre: builder.mutation({
      query: (data) => ({
        url: "/whoweare/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["whoweare"],
    }),

    updateWhoWeAre: builder.mutation({
      query: ({ id, data }) => ({
        url: `/whoweare/update/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["whoweare"],
    }),
  }),
});

export const {
  useGetWhoWeAreQuery,
  useAddWhoWeAreMutation,
  useUpdateWhoWeAreMutation,
} = whoWeAreApi;
