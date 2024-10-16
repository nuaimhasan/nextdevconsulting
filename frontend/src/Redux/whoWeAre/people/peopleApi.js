import { apiSlice } from "../../api/apiSlice";

export const peopleApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPeople: builder.query({
      query: () => ({
        url: "/peopleSection",
        method: "GET",
      }),
      providesTags: ["peopleSection"],
    }),

    addPeople: builder.mutation({
      query: (data) => ({
        url: "/peopleSection/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["peopleSection"],
    }),

    updatePeople: builder.mutation({
      query: ({ id, data }) => ({
        url: `/peopleSection/update/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["peopleSection"],
    }),
  }),
});

export const {
  useGetPeopleQuery,
  useAddPeopleMutation,
  useUpdatePeopleMutation,
} = peopleApi;
