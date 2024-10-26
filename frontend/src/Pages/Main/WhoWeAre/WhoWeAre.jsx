import { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useGetWhoWeAreQuery } from "../../../Redux/whoWeAre/whoWeAre";
import parse from "html-react-parser";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function WhoWeAre() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data } = useGetWhoWeAreQuery();
  const whoWeAre = data?.data;

  const description = whoWeAre?.description && parse(whoWeAre?.description);
  const truncatedDescription = description && truncateContent(description);

  return (
    <section className="py-12">
      <div className="container">
        <div>
          <div className="md:w-[65%] md:text-start">
            <h2 className="text-3xl font-bold">Who We Are</h2>
            <div className="mb-5 mt-2 text-lg tracking-wider">
              {truncatedDescription}
            </div>
            <Link className="flex items-center gap-2 underline" to="/aboutus">
              Learn More About Us <FaLongArrowAltRight />{" "}
            </Link>
          </div>
          <div className="mt-7 grid gap-8 md:grid-cols-2">
            <Link
              className="border-t border-black py-5"
              to="/who-we-are/values"
            >
              <h2 className="flex items-center gap-1 text-2xl font-medium duration-300 hover:underline">
                Values{" "}
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
              to="/who-we-are/offices"
            >
              <h2 className="flex items-center gap-1 text-2xl font-medium duration-300 hover:underline">
                Offices{" "}
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

function truncateContent(elements) {
  const MAX_WORDS = 150;
  let wordCount = 0;
  const truncatedElements = [];

  function processElement(element) {
    if (wordCount >= MAX_WORDS) return null;

    if (typeof element === "string") {
      const words = element.split(/\s+/);
      if (wordCount + words.length > MAX_WORDS) {
        const remainingWords = MAX_WORDS - wordCount;
        wordCount += remainingWords;
        return words.slice(0, remainingWords).join(" ") + "...";
      } else {
        wordCount += words.length;
        return element;
      }
    } else if (React.isValidElement(element)) {
      const children = React.Children.map(
        element.props.children,
        processElement,
      );
      return React.cloneElement(element, { children });
    }
    return element;
  }

  elements.forEach((element) => {
    if (wordCount < MAX_WORDS) {
      const truncatedElement = processElement(element);
      if (truncatedElement) truncatedElements.push(truncatedElement);
    }
  });

  return truncatedElements;
}
