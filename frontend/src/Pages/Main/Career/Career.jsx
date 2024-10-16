import { Link } from "react-router-dom";
import { useGetCareersQuery } from "../../../Redux/career/careerApi";
import parse from "html-react-parser";
import { useGetCareerSectionQuery } from "../../../Redux/career/careerSectionApi";

export default function Career() {
  const { data } = useGetCareersQuery();
  const careers = data?.data;

  const {data : careerSection} = useGetCareerSectionQuery();

  const description = careerSection?.data?.description && parse(careerSection?.data?.description);

  return (
    <section className="container py-12">
      <div className="mt-6 text-center md:w-[70%] md:text-start">
        <h2 className="text-3xl font-bold">Current vacancies</h2>
        <p className="tracking-wider">
          {description}
        </p>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-3 md:grid-cols-4">
        {careers?.map((item) => (
          <div
            key={item?._id}
            className="min-h-52 rounded border bg-secondary p-4 text-white shadow duration-300 hover:bg-primary"
          >
            <h5 className="text-sm">{item?.title}</h5>
            <h2 className="text-2xl font-semibold">{item?.role}</h2>
            <p className="mb-5">{item?.location}</p>
            <Link
              className="orange_btn"
              target="_blank"
              to="https://mail.google.com/mail/?view=cm&fs=1&to=support@emanagerit.com"
            >
              Apply Now
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
