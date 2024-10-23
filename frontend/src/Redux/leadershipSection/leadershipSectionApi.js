import { apiSlice } from "../api/apiSlice";

export const leadershipSectionApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLeadershipSection: builder.query({
      query: () => ({
        url: "/leadershipSection",
        method: "GET",
      }),
      providesTags: ["leadershipSection"],
    }),

    addLeadershipSection: builder.mutation({
      query: (data) => ({
        url: "/leadershipSection/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["leadershipSection"],
    }),

    updateLeadershipSection: builder.mutation({
      query: ({ id, data }) => ({
        url: `/leadershipSection/update/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["leadershipSection"],
    }),
  }),
});

export const {
  useGetLeadershipSectionQuery,
  useAddLeadershipSectionMutation,
  useUpdateLeadershipSectionMutation,
} = leadershipSectionApi;
