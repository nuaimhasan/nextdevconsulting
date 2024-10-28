import { useEffect } from "react";
import ProjectCard from "../../../../Components/ProjectCard/ProjectCard";
import { useGetLatestStoryProjectsQuery } from "../../../../Redux/projects/projectsApi";
import { useGetPeopleQuery } from "../../../../Redux/whoWeAre/people/peopleApi";
import parse from "html-react-parser";

export default function Impact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, isSuccess } = useGetLatestStoryProjectsQuery();

  const {data: sectionData} = useGetPeopleQuery();

  const section = sectionData?.data;

  const description = section?.description && parse(section?.description);

  if (!isSuccess) {
    return <p>Loading...</p>;
  }

  const project = data?.data;

  return (
    <section className="container py-12">
      <div className="mt-6 text-center mx-auto md:w-[70%] md:text-start">
        <h2 className="text-3xl font-bold">Stories of impact</h2>
        <p className="mt-5 tracking-wider">
          {description}
        </p>
      </div>
      <div className="mt-8">
        <h3 className="mb-4 text-2xl text-center font-semibold text-secondary">
          Our Impact Story
        </h3>
        <ProjectCard data={project} />
      </div>
    </section>
  );
}
