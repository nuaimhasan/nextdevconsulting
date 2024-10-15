import { useEffect } from "react";
import { FaBath, FaBed, FaMapMarkerAlt } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import { useGetProjectsQuery } from "../../../Redux/projects/projectsApi";
import parse from "html-react-parser";

const truncateDescription = (description, maxLength = 100) => {
  const stripHtmlTags = (html) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  const plainText = stripHtmlTags(description);
  const truncatedText = plainText.length > maxLength
    ? plainText.substring(0, maxLength) + "..."
    : plainText;

  return truncatedText;
};

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data } = useGetProjectsQuery();
  const projects = data?.data;


  return (
    <section className="py-5 sm:py-10">
      <div className="container">
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects?.map((project) => (
            <Link key={project?._id} to={`/project/${project?._id}`} className="project_card">
              <div className="relative h-60 w-full overflow-hidden rounded-lg">
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}/${project?.image}`}
                  className="h-full w-full"
                  alt="project"
                />

                <div className="absolute left-0 top-0 h-full w-full bg-black/30">
                  <div className="absolute bottom-0 p-3">
                    <p className="flex items-center gap-2 text-[13px] text-base-100">
                      <FaMapMarkerAlt /> {project?.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3">
                <h2 className="text-2xl font-medium">{project?.title}</h2>
                <p className="text-lg font-medium text-primary">
                  $ {project?.price}
                </p>
                <p className="mt-2 text-sm text-neutral-content">
                  {parse(truncateDescription(project?.description, 100))}
                </p>
              </div>

              <div className="flex items-center gap-3 border-t p-3 text-xs">
                <div className="flex items-center gap-2 border-r pr-3">
                  <p className="text-secondary">
                    <FaBed className="text-base" />
                  </p>
                  <p>{project?.bed} Beds</p>
                </div>

                <div className="flex items-center gap-2 border-r pr-3">
                  <p className="text-secondary">
                    <FaBath className="text-base" />
                  </p>
                  <p>{project?.bath} Bath</p>
                </div>

                <div className="flex items-center gap-2">
                  <p className="text-secondary">
                    <MdSpaceDashboard className="text-base" />
                  </p>
                  <p>{project?.sqft} sqft</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
