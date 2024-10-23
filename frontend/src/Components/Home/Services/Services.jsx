import { Link } from "react-router-dom";
import { useGetServicesQuery } from "../../../Redux/services/servicesApi";

export default function Services() {
  const { data } = useGetServicesQuery();

  const services = data?.data;

  console.log(services);

  return (
    <section className="bg-white py-10">
      <div className="container">
        <div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-secondary md:text-3xl md:font-bold">
              Our Services: Tailored for Global Impact
            </h2>
            <p className="mx-auto mt-2 text-xs md:w-[60%] md:text-[15px]">
              We offer a range of expert services designed to help organizations
              thrive in an ever-evolving world. Our solutions span across
              multiple sectors, delivering customized support that addresses
              both immediate needs and long-term objectives.
            </p>
          </div>
          <h3 className="mt-4 text-center text-2xl font-semibold text-secondary">
            Our Services
          </h3>
          <div className="mx-auto mt-5 grid grid-cols-2 gap-3 text-center text-sm font-bold md:grid-cols-4 md:text-lg">
            {/* Service card example */}
            {services?.map((service) => (
              <div key={service?._id} className="feature_card">
                <div className="mb-2 flex justify-center">
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}/${service?.image}`}
                    alt="Service Icon"
                    className="h-14 w-14 rounded-full object-cover"
                  />
                </div>
                <div>{service?.title}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-center">
            <Link className="orange_btn" to="/what-we-do/services">
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
