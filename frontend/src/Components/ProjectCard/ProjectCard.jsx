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

export default function ProjectCard({ data }) {
  const projectData = data;

  const description =
    projectData?.description && parse(projectData?.description);

  return (
    <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-4">
      {projectData?.map((project) => (
        <div
          // data-aos="zoom-in-up"
          key={project?._id}
          className="max-w-sm overflow-hidden border-[1px] border-[#C2D4BB] bg-white hover:bg-[#C2D4BB] duration-500"
        >
          <Link to={`/project/${project?._id}`}>
            <img
              className="h-44 w-full transform transition-transform duration-300 hover:scale-105"
              src={`${import.meta.env.VITE_BACKEND_URL}/${project?.image}`}
              alt=""
            />
          </Link>
          <div className="p-5">
            <p className="text-sm">{project?.category?.name}</p>
            <Link to="/project/:slug">
              <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
                {project?.title}
              </h5>
            </Link>
            <div className="mb-3 font-normal text-gray-700">
              {parse(truncateDescription(project?.description, 100))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
