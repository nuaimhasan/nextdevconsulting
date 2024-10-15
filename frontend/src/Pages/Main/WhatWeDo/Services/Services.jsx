import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section className="py-12">
      <div className="container">
        <div>
          <div className="md:w-[65%] text-center md:text-start">
            <h2 className="text-3xl font-bold">Our services</h2>
            <p className="mt-2 text-lg tracking-wider">
              We are a global consultancy united by a strong set of values and a
              common purpose: to help build a more equitable and sustainable
              world for all. <br /> <br /> We provide expert monitoring,
              evaluation, learning and strategy services that help organisations
              improve their performance and catalyse positive lasting social,
              economic and environmental change.
              <br /> <br /> In all our work, we are committed to equity,
              diversity, and technical excellence to meet the highest
              professional and ethical standards. Values
            </p>
          </div>
          <div className="mt-7 grid md:grid-cols-2 gap-8">
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
          </div>
        </div>
      </div>
    </section>
  );
}
