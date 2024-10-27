import CountUp from "react-countup";
import { useGetAboutUsQuery } from "../../../Redux/about/aboutApi";
import Spinner from "../../Spinner/Spinner";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

export default function AboutUs() {
  const { data, isLoading } = useGetAboutUsQuery();

  const aboutUs = data?.data;

  console.log(aboutUs);
  const description = aboutUs?.description && parse(aboutUs?.description);

  if (isLoading) return <Spinner />;

  return (
    <div className="bg-secondary py-6 md:py-12 text-white">
      <div className="container grid px-6 md:grid-cols-2">
        <div data-aos="fade-right">
          <div className="mb-8">
            <h2 className="text-2xl font-bold md:mb-4 md:text-4xl">
              {aboutUs?.title}
            </h2>
            <div className="mb-5 text-xs md:text-lg">{description}</div>
            <Link className="orange_btn" to="/aboutus">
              Read More
            </Link>
          </div>
          <div className="flex space-x-12">
            <div className="text-center md:min-w-36">
              <CountUp
                end={aboutUs?.projectCount}
                duration={5}
                className="text-2xl font-bold md:text-4xl"
              />
              <p className="mt-2 md:text-lg">projects</p>
            </div>
            <div className="text-center md:min-w-36">
              <CountUp
                end={aboutUs?.clientCount}
                duration={5}
                className="text-2xl font-bold md:text-4xl"
              />
              <p className="mt-2 md:text-lg">clients</p>
            </div>
            <div className="text-center md:min-w-36">
              <CountUp
                end={aboutUs?.countriesCount}
                duration={5}
                className="text-2xl font-bold md:text-4xl"
              />
              <p className="mt-2 md:text-lg">countries</p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="mt-5 hidden md:flex items-center justify-center md:mt-0"
        >
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/${aboutUs?.image}`}
            className="w-[90%]"
            alt="aboutus"
          />
        </div>
      </div>
    </div>
  );
}
