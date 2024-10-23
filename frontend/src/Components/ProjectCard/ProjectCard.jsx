import { Link } from "react-router-dom";
import parse from "html-react-parser";

export default function ProjectCard({ data }) {
  const projectData = data;

  const description =
    projectData?.description && parse(projectData?.description);

  return (
    <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-4">
      {projectData?.map((project) => (
        <div
          data-aos="zoom-in-up"
          key={project?._id}
          className="max-w-sm overflow-hidden rounded-lg border border-gray-200 bg-white shadow"
        >
          <Link to={`/project/${project?._id}`}>
            <img
              className="h-52 w-full transform rounded-t-lg transition-transform duration-300 hover:scale-105"
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
            <div className="mb-3 font-normal text-gray-700">{description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
