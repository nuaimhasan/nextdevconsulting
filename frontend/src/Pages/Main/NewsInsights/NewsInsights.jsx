import { useEffect, useState } from "react";
import ProjectCard from "../../../Components/ProjectCard/ProjectCard";
import { useGetProjectsQuery } from "../../../Redux/projects/projectsApi";
import { useGetCategoryQuery } from "../../../Redux/category/categoryApi";
import Spinner from "../../../Components/Spinner/Spinner";

export default function NewsInsights() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const { data: categoryData } = useGetCategoryQuery();
  const { data, refetch, isFetching } = useGetProjectsQuery(query);

  useEffect(() => {
    const newQuery = `?page=${page}&limit=8${
      selectedCategory ? `&category=${selectedCategory}` : ""
    }`;
    setQuery(newQuery);
    refetch();
    window.scrollTo(0, 200);
  }, [selectedCategory, page, refetch]);

  const projects = data?.data;
  const category = categoryData?.data;
  const totalPages = data?.totalPages || 1;

  return (
    <section className="container py-12">
      <div className="mt-6 text-center md:w-[70%] md:text-start">
        <h2 className="text-2xl font-bold md:text-3xl">News & insights</h2>
        <p className="mt-5 text-sm tracking-wide md:text-base md:tracking-wider">
          Our values are the foundation of our company. They define who we are
          and how we work. They are the guiding principles that help us make
          decisions, build relationships, and achieve our goals.
          <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          suscipit cum libero aperiam! Tempore, officia vitae! Magni distinctio
          totam optio, ratione eveniet odio? Sint voluptates atque doloribus
          libero ut deleniti.
        </p>
      </div>
      <div className="mt-8">
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5">
          <select
            className="border border-orange"
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setPage(1);
            }}
            name="category"
            id=""
          >
            <option value="">All</option>
            {category?.map((cat) => (
              <option key={cat?._id} value={cat?._id}>
                {cat?.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-5">
          {isFetching ? <Spinner /> : <ProjectCard data={projects} />}
        </div>

        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              disabled={page === 1}
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              className="rounded-lg border border-orange bg-orange px-3 py-1 text-white duration-300 hover:bg-transparent hover:text-orange"
            >
              Previous
            </button>
            <span className="font-semibold">
              Page {page} of {totalPages}
            </span>
            <button
              disabled={page === totalPages}
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              className="rounded-lg border border-orange bg-orange px-3 py-1 text-white duration-300 hover:bg-transparent hover:text-orange"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
