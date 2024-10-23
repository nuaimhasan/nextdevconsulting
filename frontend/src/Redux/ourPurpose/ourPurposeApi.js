import { apiSlice } from "../api/apiSlice";

export const ourPurposeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOurPurpose: builder.query({
      query: () => ({
        url: "/ourPurpose",
      }),
      providesTags: ["ourPurpose"],
    }),

    addOurPurpose: builder.mutation({
      query: (seoData) => ({
        url: `/ourPurpose/add`,
        method: "POST",
        body: seoData,
      }),
      invalidatesTags: ["ourPurpose"],
    }),

    updateOurPurpose: builder.mutation({
      query: ({ id, seoData }) => ({
        url: `/ourPurpose/update/${id}`,
        method: "PATCH",
        body: seoData,
      }),
      invalidatesTags: ["ourPurpose"],
    }),
  }),
});

export const {
  useGetOurPurposeQuery,
  useAddOurPurposeMutation,
  useUpdateOurPurposeMutation,
} = ourPurposeApi;
