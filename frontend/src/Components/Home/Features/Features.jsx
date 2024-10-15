import ProjectCard from "../../ProjectCard/ProjectCard";

export default function Features() {
  return (
    <section className=" py-14">
      <div className="container">
        <div>
          <h2 className="text-3xl font-bold text-secondary">
            Featured projects
          </h2>
          <div className="mt-7">
            <ProjectCard />
          </div>
        </div>
      </div>
    </section>
  );
}
