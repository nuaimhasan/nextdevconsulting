import { Link } from "react-router-dom";
import { useGetOurPurposeQuery } from "../../../Redux/ourPurpose/ourPurposeApi";

export default function Mission() {
  const { data } = useGetOurPurposeQuery();

  const ourPurpose = data?.data;

  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-10"
      style={{ backgroundImage: "url('/images/bg-image.jpg')" }}
    >
      <div className="container">
        <div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-secondary md:text-3xl md:font-bold">
              {ourPurpose?.title}
            </h2>
            <p className="mx-auto mt-2 text-xs md:w-[60%] md:text-[15px]">
              {ourPurpose?.description}
            </p>
            {/* <p className="mx-auto mt-2 text-xs md:w-[60%] md:text-[15px]">
              At <strong>NextDev Consulting</strong>, our mission is to create a
              more <strong>equitable, sustainable,</strong> and{" "}
              <strong>innovative</strong> world. We are guided by a set of core
              values that influence every aspect of our work—from the way we
              collaborate with clients to how we design impactful solutions that
              stand the test of time.
            </p> */}
          </div>
          <h3 className="mt-2 text-center text-lg font-semibold text-secondary">
            Key Values:
          </h3>
          <div className="mx-auto mt-3 grid w-[95%] grid-cols-2 gap-3 text-center text-sm font-bold md:w-[70%] md:grid-cols-3 md:text-lg">
            {ourPurpose?.keywords.map((value, index) => (
              <div
                key={index}
                data-aos="zoom-in-up"
                className="rounded bg-black/50 py-2 text-white duration-300 hover:bg-secondary"
              >
                <h3>{value}</h3>
              </div>
            ))}
          </div>
          <div className="mt-3 flex justify-center">
            <Link
              className="mx-auto underline duration-300 hover:text-secondary"
              to="/who-we-are"
            >
              Learn more About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
