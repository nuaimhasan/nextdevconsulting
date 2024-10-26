import { useParams } from "react-router-dom";
import { useGetDirectorByIdQuery } from "../../../../Redux/director/directorApi";
import parse from "html-react-parser";

export default function LeaderBio() {
  const { id } = useParams();

  const { data: directorData } = useGetDirectorByIdQuery(id);
  const director = directorData?.data;

  const description = director?.bio && parse(director?.bio);

  return (
    <section className="py-7">
      <div className="container">
        <h2 className="mt-6 border-b border-green-400 pb-2 text-sm font-bold">
          Our Team
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}/${director?.image}`}
              alt="leader"
              className="w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold">{director?.name}</h2>
            <p className="mt-2 text-lg text-primary">{director?.designation}</p>
            <div className="mt-5 text-lg tracking-wider">{description}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
