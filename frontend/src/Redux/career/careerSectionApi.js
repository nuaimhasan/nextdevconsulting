import { apiSlice } from "../api/apiSlice";

export const careerSectionApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCareerSection: builder.query({
      query: () => ({
        url: "/careerSection",
        method: "GET",
      }),
      providesTags: ["careerSection"],
    }),

    addCareerSection: builder.mutation({
      query: (data) => ({
        url: "/careerSection/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["careerSection"],
    }),

    updateCareerSection: builder.mutation({
      query: ({ id, data }) => ({
        url: `/careerSection/update/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["careerSection"],
    }),
  }),
});

export const {
  useGetCareerSectionQuery,
  useAddCareerSectionMutation,
  useUpdateCareerSectionMutation,
} = careerSectionApi;
