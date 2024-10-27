import parse from "html-react-parser";
import { useGetFeatureProjectsQuery } from "../../../Redux/featureProject/featureProjectApi";
import { Link } from "react-router-dom";
// import ProjectCard from "../../ProjectCard/ProjectCard";
import { useState } from "react";

const truncateDescription = (description, maxLength = 100) => {
  const stripHtmlTags = (html) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  const plainText = stripHtmlTags(description);
  const truncatedText =
    plainText.length > maxLength
      ? plainText.substring(0, maxLength) + "..."
      : plainText;

  return truncatedText;
};

export default function ProjectHighlight() {
  const { data } = useGetFeatureProjectsQuery();
  const projects = data?.data;

  const [expandedProjectId, setExpandedProjectId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedProjectId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="bg-white py-10">
      <div className="container">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-secondary md:text-3xl md:font-bold">
            Stay Updated with the Latest Insights
          </h2>
          <p className="mx-auto mt-2 text-xs md:w-[60%] md:text-[15px]">
            From thought leadership articles to news on global trends, our{" "}
            <strong>News & Insights</strong> section keeps you informed on
            topics that shape the future of business, sustainability, and
            development.
          </p>
        </div>
        <div className="md:my-10 my-3 border-b md:pb-3 text-secondary">
          <h2 className="text-xl font-medium md:text-5xl">Featured Posts</h2>
        </div>

        {/* Render ProductCard for each project */}
        <div className="grid gap-4 sm:grid-cols-3">
          {projects?.map((project) => (
            <div
              key={project?._id}
              className="max-w-sm overflow-hidden border-[1px] border-[#C2D4BB] bg-white duration-500 hover:bg-[#C2D4BB]"
            >
              <Link to={`/project/${project?._id}`}>
                <img
                  className="h-48 w-full transform transition-transform duration-300 hover:scale-105"
                  src={`${import.meta.env.VITE_BACKEND_URL}/${project?.image}`}
                  alt=""
                />
              </Link>
              <div className="p-5">
                <p className="text-sm">{project?.category?.name}</p>
                <Link to={`/project/${project?._id}`}>
                  <h5 className="mb-2 md:text-xl font-semibold tracking-tight text-gray-900">
                    {project?.title}
                  </h5>
                </Link>
                <div className="mb-3 font-normal text-xs md:text-sm text-gray-700">
                  {expandedProjectId === project?._id
                    ? parse(project?.description)
                    : parse(truncateDescription(project?.description, 250))}
                </div>
                <button
                  onClick={() => toggleExpand(project?._id)}
                  className="orange_btn"
                >
                  {expandedProjectId === project?._id
                    ? "Show Less"
                    : "Read More"}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex justify-center">
          <Link
            className="mx-auto underline duration-300 hover:text-secondary"
            to="/news-insights"
          >
            Read More Insights
          </Link>
        </div>
      </div>
    </section>
  );
}
