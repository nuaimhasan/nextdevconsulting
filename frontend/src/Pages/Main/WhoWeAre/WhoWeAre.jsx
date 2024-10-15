import { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function WhoWeAre() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <section className="py-12">
      <div className="container">
        <div>
          <div className="md:w-[65%] text-center md:text-start">
            <h2 className="text-3xl font-bold">Who we are</h2>
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
          <div className="grid md:grid-cols-2 mt-7 gap-8">
            <Link className="py-5 border-t border-black" to="/who-we-are/values">
              <h2 className="flex items-center gap-1 text-2xl font-medium duration-300 hover:underline">
                Values{" "}
                <FaArrowRightLong className="text-base text-neutral-content" />
              </h2>
              <p className="mt-4">
                Our values influence all of our work and the way we run our
                organisation. Explore our values.
              </p>
              <img className="w-full h-[330px] mt-4"  src="/images/values.jpg" alt="" />
            </Link>
            <Link className="py-5 border-t border-black" to="/who-we-are/history">
              <h2 className="flex items-center gap-1 text-2xl font-medium duration-300 hover:underline">
                History{" "}
                <FaArrowRightLong className="text-base text-neutral-content" />
              </h2>
              <p className="mt-4">
                Our values influence all of our work and the way we run our
                organisation. Explore our values.
              </p>
              <img className="w-full mt-4 h-[330px]" src="/images/history.jpg" alt="" />
            </Link>
            <Link className="py-5 border-t border-black" to="/who-we-are/people">
              <h2 className="flex items-center gap-1 text-2xl font-medium duration-300 hover:underline">
                People{" "}
                <FaArrowRightLong className="text-base text-neutral-content" />
              </h2>
              <p className="mt-4">
                Our values influence all of our work and the way we run our
                organisation. Explore our values.
              </p>
              <img className="w-full mt-4 h-[330px]" src="/images/people.jpg" alt="" />
            </Link>
            <Link className="py-5 border-t border-black" to="/who-we-are/offices">
              <h2 className="flex items-center gap-1 text-2xl font-medium duration-300 hover:underline">
              Offices{" "}
                <FaArrowRightLong className="text-base text-neutral-content" />
              </h2>
              <p className="mt-4">
                Our values influence all of our work and the way we run our
                organisation. Explore our values.
              </p>
              <img className="w-full mt-4 h-[330px]" src="/images/office.webp" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
