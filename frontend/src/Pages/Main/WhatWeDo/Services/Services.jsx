// import { FaArrowRightLong } from "react-icons/fa6";
// import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { useGetHistoryQuery } from "../../../../Redux/whoWeAre/history/historyApi";
import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data } = useGetHistoryQuery();

  const services = data?.data;

  const description = services?.description && parse(services?.description);

  return (
    <section className="py-12">
      <div className="container">
        <div>
          <div className="text-center md:w-[65%] md:text-start">
            <h2 className="text-3xl font-bold">
              Our services - NextDev Consulting
            </h2>
            <div className="mt-2 text-lg tracking-wider">{description}</div>
          </div>
          {/* <div className="mt-7 grid gap-8 md:grid-cols-2">
            <Link
              className="border-t border-black py-5"
              to="/what-we-do/strategy"
            >
              <h2 className="flex items-center gap-1 text-2xl font-medium duration-300 hover:underline">
                Strategy{" "}
                <FaArrowRightLong className="text-base text-neutral-content" />
              </h2>
              <p className="mt-4">
                Our values influence all of our work and the way we run our
                organisation. Explore our values.
              </p>
              <img
                className="mt-4 h-[330px] w-full"
                src="/images/strategy.jpg"
                alt=""
              />
            </Link>
            <Link
              className="border-t border-black py-5"
              to="/what-we-do/evalution"
            >
              <h2 className="flex items-center gap-1 text-2xl font-medium duration-300 hover:underline">
                Evaluation{" "}
                <FaArrowRightLong className="text-base text-neutral-content" />
              </h2>
              <p className="mt-4">
                Our values influence all of our work and the way we run our
                organisation. Explore our values.
              </p>
              <img
                className="mt-4 h-[330px] w-full"
                src="/images/evalution.jpg"
                alt=""
              />
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
}
