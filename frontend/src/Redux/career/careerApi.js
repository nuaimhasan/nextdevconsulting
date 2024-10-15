import { apiSlice } from "../api/apiSlice";

export const careerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Get all careers
    getCareers: builder.query({
      query: () => ({
        url: "/career",
        method: "GET",
      }),
      providesTags: ["Career"],
    }),

    // Get career by ID
    getCareerById: builder.query({
      query: (id) => ({
        url: `/career/${id}`,
        method: "GET",
      }),
      providesTags: ["Career"],
    }),

    // Add a new career
    addCareer: builder.mutation({
      query: (careerData) => ({
        url: "/career/add",
        method: "POST",
        body: careerData,
      }),
      invalidatesTags: ["Career"],
    }),

    // Update a career by ID
    updateCareer: builder.mutation({
      query: ({ id, careerData }) => ({
        url: `/career/update/${id}`,
        method: "PATCH",
        body: careerData,
      }),
      invalidatesTags: ["Career"],
    }),

    // Delete a career by ID
    deleteCareer: builder.mutation({
      query: (id) => ({
        url: `/career/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Career"],
    }),
  }),
});

export const {
  useGetCareersQuery,
  useGetCareerByIdQuery,
  useAddCareerMutation,
  useUpdateCareerMutation,
  useDeleteCareerMutation,
} = careerApi;
