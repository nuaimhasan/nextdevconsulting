import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function WhatWeDo() {
  return (
    <section className="py-12">
      <div className="container">
        <div>
          <div className="md:w-[65%] text-center md:text-start">
            <h2 className="text-3xl font-bold">Who we do</h2>
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

            <h2 className="mt-5 text-2xl font-semibold text-secondary">
              Who is NextDev Consulting? What do we do?
            </h2>
            <div className="mt-3">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Gw-k4GKhrAY?si=rbcEMdczrdKIYXPq"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis fugit saepe distinctio eius, delectus voluptatem
              placeat porro quod quisquam similique eveniet doloremque ea
              assumenda illo modi dicta expedita debitis et.
            </p>
          </div>
          <div className="mt-7 grid md:grid-cols-2 gap-8">
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
              to="/what-we-do/projetcs"
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
            <Link
              className="border-t border-black py-5"
              to="/what-we-do/topics"
            >
              <h2 className="flex items-center gap-1 text-2xl font-medium duration-300 hover:underline">
                Topics{" "}
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
            <Link
              className="border-t border-black py-5"
              to="/what-we-do/regions"
            >
              <h2 className="flex items-center gap-1 text-2xl font-medium duration-300 hover:underline">
                Regions{" "}
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
