import { useEffect } from "react";
import ProjectCard from "../../../../Components/ProjectCard/ProjectCard";
import { useGetLatestStoryProjectsQuery } from "../../../../Redux/projects/projectsApi";

export default function Impact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, isSuccess } = useGetLatestStoryProjectsQuery();

  if (!isSuccess) {
    return <p>Loading...</p>;
  }

  const project = data?.data;

  return (
    <section className="container py-12">
      <div className="mt-6 text-center md:w-[70%] md:text-start">
        <h2 className="text-3xl font-bold">Stories of impact</h2>
        <p className="mt-5 tracking-wider">
          Our values are the foundation of our company. They define who we are
          and how we work. They are the guiding principles that help us make
          decisions, build relationships, and achieve our goals.
          <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          suscipit cum libero aperiam! Tempore, officia vitae! Magni distinctio
          totam optio, ratione eveniet odio? Sint voluptates atque doloribus
          libero ut deleniti.
          <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam culpa
          nulla magni laboriosam aperiam veritatis autem omnis facilis dolore.
          Voluptatem nisi quaerat, dolore necessitatibus magni enim voluptas
          expedita! Voluptatem, officia?
        </p>
      </div>
      <div className="mt-8">
        <h3 className="mb-4 text-2xl font-semibold text-secondary">
          Our Impact Story
        </h3>
        <ProjectCard data={project} />
      </div>
    </section>
  );
}
