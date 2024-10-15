import { apiSlice } from "../api/apiSlice";

export const projectApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: (queryParams = "") => ({
        url: `/project${queryParams}`,
        method: "GET",
      }),
      providesTags: ["projects"],
    }),

    getRecentProjects: builder.query({
      query: () => ({
        url: "/project/recent",
        method: "GET",
      }),
      providesTags: ["projects"],
    }),

    getLatestNewsProjects: builder.query({
      query: () => ({
        url: "/project/latest-news",
        method: "GET",
      }),
      providesTags: ["projects"],
    }),

    getLatestStoryProjects: builder.query({
      query: () => ({
        url: "/project/latest-story",
        method: "GET",
      }),
      providesTags: ["projects"],
    }),

    getProjectById: builder.query({
      query: (id) => ({
        url: `/project/${id}`,
        method: "GET",
      }),
      providesTags: ["projects"],
    }),

    getProjectBySlug: builder.query({
      query: (slug) => ({
        url: `/project/${slug}`,
        method: "GET",
      }),
      providesTags: ["projects"],
    }),

    addProject: builder.mutation({
      query: (formData) => ({
        url: "/project/add",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["projects"],
    }),

    updateProject: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/project/update/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["projects"],
    }),

    deleteProject: builder.mutation({
      query: (id) => ({
        url: `/project/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["projects"],
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useGetRecentProjectsQuery,
  useGetLatestNewsProjectsQuery,
  useGetLatestStoryProjectsQuery,
  useGetProjectByIdQuery,
  useGetProjectBySlugQuery,
  useAddProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} = projectApi;
