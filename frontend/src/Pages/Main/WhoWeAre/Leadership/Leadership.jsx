import { Link } from "react-router-dom";
import { useGetDirectorQuery } from "../../../../Redux/director/directorApi";
import { useGetLeadershipSectionQuery } from "../../../../Redux/leadershipSection/leadershipSectionApi";
import parse from "html-react-parser";

export default function Leadership() {
  const { data } = useGetDirectorQuery();

  const director = data?.data;

  const { data: leadershipSectionData } = useGetLeadershipSectionQuery();

  const leadershipSection = leadershipSectionData?.data;

  const description =
    leadershipSection?.description && parse(leadershipSection?.description);

  return (
    <section className="container py-12">
      <h3 className="hidden border-b pb-3 md:block">Who We Are</h3>
      <div className="mt-6 text-center md:w-[70%] md:text-start">
        <h2 className="text-3xl font-bold">Leadership</h2>
        <div className="tracking-wider">{description}</div>
      </div>
      <div className="mt-5 text-center md:text-start">
        <h3 className="text-2xl font-bold text-secondary">
          Our Leadership Team
        </h3>

        <div className="mt-5 grid gap-7 border-t pt-12 sm:grid-cols-3 md:grid-cols-4">
          {director?.map((leader) => (
            <Link
              to={`/who-we-are/leadership/${leader?._id}`}
              key={leader?._id}
              className="overflow-hidden rounded-t-md border text-center shadow"
            >
              <img
                className="h-52 w-full rounded-t-md duration-300 hover:scale-105"
                src={`${import.meta.env.VITE_BACKEND_URL}/${leader?.image}`}
                alt="Leader Image"
              />
              <div className="p-5">
                <h3 className="text-2xl font-semibold leading-7">
                  {leader?.name}
                </h3>
                <h5 className="mt-2.5">{leader?.designation}</h5>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
