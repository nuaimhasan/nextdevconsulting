import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  useGetProjectByIdQuery,
  useGetRecentProjectsQuery,
} from "../../../Redux/projects/projectsApi";
import parse from "html-react-parser";
import Spinner from "../../../Components/Spinner/Spinner";

export default function ProjectDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();

  const { data: projectData, isLoading } = useGetProjectByIdQuery(id);
  const project = projectData?.data;

  const { data } = useGetRecentProjectsQuery();
  const recentProjects = data?.data;

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

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="py-10">
      <div className="container">
        <div className="grid items-start gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <div>
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/${project?.image}`}
                alt="project"
                className="h-56 w-full rounded-md sm:h-[360px]"
              />
            </div>

            <div className="mt-2">
              <h2 className="text-xl">{project?.category?.name}</h2>
              <h2 className="text-2xl font-bold text-secondary md:text-4xl">
                {project?.title}
              </h2>
              <div className="mt-3 text-xs text-neutral-content md:text-sm">
                {project?.description && parse(project?.description)}
              </div>
            </div>
          </div>
          <div>
            <h2 className="-mt-2 text-2xl font-medium">Recent Projects</h2>
            {recentProjects?.map((recentProject) => (
              <Link
                to={`/project/${recentProject?._id}`}
                key={recentProject?._id}
                className="mt-2 flex flex-col gap-6"
              >
                <div className="flex gap-4 md:gap-2">
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}/${recentProject?.image}`}
                    alt="project"
                    className="h-16 w-[100px] rounded-md"
                  />
                  <div>
                    <h3 className="text-sm font-medium md:text-lg">
                      {recentProject?.title}
                    </h3>

                    <div className="mt-1 text-[10px] text-neutral-content md:text-xs">
                      {truncateDescription(recentProject?.description, 68)}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
