import { useEffect, useState } from "react";
import ProjectCard from "../../../Components/ProjectCard/ProjectCard";
import { useGetProjectsQuery } from "../../../Redux/projects/projectsApi";
import { useGetCategoryQuery } from "../../../Redux/category/categoryApi";
import Spinner from "../../../Components/Spinner/Spinner";
import parse from "html-react-parser";
import { useGetNewsInsightQuery } from "../../../Redux/newsInsight/newsInsightApi";


export default function NewsInsights() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const { data: categoryData } = useGetCategoryQuery();
  const { data, refetch, isFetching } = useGetProjectsQuery(query);

  const { data: newsInsightData } = useGetNewsInsightQuery();

  const newsInsight = newsInsightData?.data;

  const description =
    newsInsight?.description && parse(newsInsight?.description);

  useEffect(() => {
    const newQuery = `?page=${page}&limit=8${
      selectedCategory ? `&category=${selectedCategory}` : ""
    }`;
    setQuery(newQuery);
    refetch();

    const categorySection = document.getElementById("category");
    if (categorySection) {
      categorySection.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedCategory, page, refetch]);

  const projects = data?.data;
  const category = categoryData?.data;
  const totalPages = data?.totalPages || 1;

  console.log(description)

  return (
    <section className="container py-12">
      <div className="mt-6 text-center md:w-[70%] md:text-start">
        <h2 className="text-2xl font-bold md:text-3xl">News & insights</h2>
        <div className="mt-5 text-sm tracking-wide md:text-base md:tracking-wider">
          {description}
        </div>
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
            id="category"
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
