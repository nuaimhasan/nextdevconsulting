import { FaArrowRightLong } from "react-icons/fa6";
import { useGetLatestNewsProjectsQuery } from "../../Redux/projects/projectsApi";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

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

export default function NewsCard() {
  const { data, isSuccess } = useGetLatestNewsProjectsQuery();

  if (!isSuccess || !data?.data) {
    return <p>Loading...</p>;
  }

  const projects = data.data;

  return (
    <div className="grid gap-y-4 sm:grid-cols-2 md:grid-cols-3">
      {projects.map((project) => (
        <Link
          data-aos="zoom-in-up"
          to={`/project/${project._id}`}
          key={project._id}
          className="max-w-sm overflow-hidden rounded-lg border border-gray-200 bg-white shadow"
        >
          <Link to={`/project/${project._id}`}>
            <img
              className="h-48 w-full rounded-t-lg md:h-56 hover:scale-105 transition-transform duration-300"
              src={`${import.meta.env.VITE_BACKEND_URL}/${project.image}`}
              alt={project.title}
            />
          </Link>
          <div className="p-5">
            <p className="text-sm">{project.category.name}</p>
            <Link to={`/project/${project._id}`}>
              <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
                {project.title}
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700">
              {parse(truncateDescription(project?.description, 100))}
            </p>
            <Link
              to={`/project/${project._id}`}
              className="inline-flex items-center gap-1 rounded-lg border border-secondary bg-secondary px-3 py-2 text-sm font-medium text-white duration-300 hover:bg-secondary hover:bg-transparent hover:text-secondary"
            >
              Read more
              <FaArrowRightLong />
            </Link>
          </div>
        </Link>
      ))}
    </div>
  );
}
