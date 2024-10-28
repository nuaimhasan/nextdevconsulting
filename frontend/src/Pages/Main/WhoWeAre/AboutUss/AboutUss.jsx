import { useEffect } from "react";
import { useGetWhoWeAreQuery } from "../../../../Redux/whoWeAre/whoWeAre";
import parse from "html-react-parser";

export default function AboutUss() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data } = useGetWhoWeAreQuery();
  const whoWeAre = data?.data;

  const description = whoWeAre?.description && parse(whoWeAre?.description);

  return (
    <section className="py-12">
      <div className="container">
        <div className="flex justify-center">
          <div className="md:w-[65%] md:text-start">
            <h2 className="text-3xl font-bold">About Us</h2>
            <div className="mb-5 mt-2 text-lg tracking-wider">
              {description}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
