import ProjectCard from "../../../../Components/ProjectCard/ProjectCard";

export default function Projects() {
  return (
    <section className="container py-12">
      <div className="mt-6 w-[70%]">
        <h2 className="text-3xl font-bold">Our Projects</h2>
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
        <h3 className="mb-5 text-2xl font-semibold text-secondary">
          Our Projects
        </h3>
        <ProjectCard />
      </div>
    </section>
  );
}
