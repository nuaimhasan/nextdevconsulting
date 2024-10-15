import { apiSlice } from "../api/apiSlice";

export const subscribersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSubscribers: builder.query({
      query: () => ({
        url: "/subscriber",
        method: "GET",
      }),
      providesTags: ["subscriber"],
    }),

    addSubscriber: builder.mutation({
      query: (data) => ({
        url: "/subscriber/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["subscriber"],
    }),

    deleteSubscriber: builder.mutation({
      query: (id) => ({
        url: `/subscriber/delete/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["subscriber"],
    }),
  }),
});

export const {
  useGetSubscribersQuery,
  useAddSubscriberMutation,
  useDeleteSubscriberMutation,
} = subscribersApi;
