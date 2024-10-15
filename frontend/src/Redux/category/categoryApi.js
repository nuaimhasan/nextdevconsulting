import { apiSlice } from "../api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => ({
        url: "/category",
        method: "GET",
      }),
      providesTags: ["category"],
    }),

    getCategoryById: builder.query({
      query: (id) => ({
        url: `/category/${id}`,
        method: "GET",
      }),
      providesTags: ["category"],
    }),

    addCategory: builder.mutation({
      query: (categoryData) => ({
        url: "/category/add",
        method: "POST",
        body: categoryData,
      }),
      invalidatesTags: ["category"],
    }),

    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/category/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["category"],
    }),
  }),
});

export const {
  useGetCategoryQuery,
  useGetCategoryByIdQuery,
  useAddCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;
