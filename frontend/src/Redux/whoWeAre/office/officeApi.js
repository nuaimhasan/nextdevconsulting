import { apiSlice } from "../../api/apiSlice";

export const officeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOffice: builder.query({
      query: () => ({
        url: "/officeSection",
        method: "GET",
      }),
      providesTags: ["officeSection"],
    }),

    addOffice: builder.mutation({
      query: (data) => ({
        url: "/officeSection/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["officeSection"],
    }),

    updateOffice: builder.mutation({
      query: ({ id, data }) => ({
        url: `/officeSection/update/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["officeSection"],
    }),
  }),
});

export const {
  useGetOfficeQuery,
  useAddOfficeMutation,
  useUpdateOfficeMutation,
} = officeApi;
