import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useGetWhatWeDoQuery } from "../../../Redux/whatWeDo/whatWeDo";
import parse from "html-react-parser";

export default function WhatWeDo() {
  const { data } = useGetWhatWeDoQuery();

  const whatWeDo = data?.data;

  const description = whatWeDo?.description && parse(whatWeDo?.description);

  return (
    <section className="py-12">
      <div className="container">
        <div>
          <div className="text-center md:w-[65%] md:text-start">
            <h2 className="text-3xl font-bold">what we do</h2>
            <div className="mt-2 text-lg tracking-wider">{description}</div>
          </div>
          <div className="mt-7 grid gap-8 md:grid-cols-2">
            <Link
              className="border-t border-black py-5"
              to="/what-we-do/services"
            >
              <h2 className="flex items-center gap-1 text-2xl font-medium duration-300 hover:underline">
                Services{" "}
                <FaArrowRightLong className="text-base text-neutral-content" />
              </h2>
              <p className="mt-4">
                Our values influence all of our work and the way we run our
                organisation. Explore our values.
              </p>
              <img
                className="mt-4 h-[330px] w-full"
                src="/images/values.jpg"
                alt=""
              />
            </Link>
            <Link
              className="border-t border-black py-5"
              to="/what-we-do/impact"
            >
              <h2 className="flex items-center gap-1 text-2xl font-medium duration-300 hover:underline">
                Impact{" "}
                <FaArrowRightLong className="text-base text-neutral-content" />
              </h2>
              <p className="mt-4">
                Our values influence all of our work and the way we run our
                organisation. Explore our values.
              </p>
              <img
                className="mt-4 h-[330px] w-full"
                src="/images/history.jpg"
                alt=""
              />
            </Link>
            <Link
              className="border-t border-black py-5"
              to="/what-we-do/clients"
            >
              <h2 className="flex items-center gap-1 text-2xl font-medium duration-300 hover:underline">
                Clients{" "}
                <FaArrowRightLong className="text-base text-neutral-content" />
              </h2>
              <p className="mt-4">
                Our values influence all of our work and the way we run our
                organisation. Explore our values.
              </p>
              <img
                className="mt-4 h-[330px] w-full"
                src="/images/people.jpg"
                alt=""
              />
            </Link>
            <Link
              className="border-t border-black py-5"
              to="/news-insights"
            >
              <h2 className="flex items-center gap-1 text-2xl font-medium duration-300 hover:underline">
                Projects{" "}
                <FaArrowRightLong className="text-base text-neutral-content" />
              </h2>
              <p className="mt-4">
                Our values influence all of our work and the way we run our
                organisation. Explore our values.
              </p>
              <img
                className="mt-4 h-[330px] w-full"
                src="/images/office.webp"
                alt=""
              />
            </Link>
            
          </div>
        </div>
      </div>
    </section>
  );
}
