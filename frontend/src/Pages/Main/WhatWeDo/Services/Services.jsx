// import { FaArrowRightLong } from "react-icons/fa6";
// import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { useGetHistoryQuery } from "../../../../Redux/whoWeAre/history/historyApi";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

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
          <div className=" md:w-[65%] md:text-start">
            <h2 className="text-3xl font-bold">
              Our services - NextDev Consulting
            </h2>
            <div className="mt-2 text-lg tracking-wider">{description}</div>
          </div>
        </div>
        <div className="mt-7 grid gap-8 md:grid-cols-2">
          <Link
            className="border-t border-black py-5"
            to="/services/impact-assessment-and-evaluation"
          >
            <h2 className="flex items-center gap-1 text-2xl font-medium duration-300 hover:underline">
              Impact Assessment and Evaluation{" "}
              <FaArrowRightLong className="text-base text-neutral-content" />
            </h2>
            <p className="mt-4">
              We conduct rigorous impact assessments and evaluations to help
              organizations measure the effectiveness...
            </p>
            <img
              className="mt-4 h-[330px] w-full"
              src="/images/services/impact.jpg"
              alt=""
            />
          </Link>
          <Link
            className="border-t border-black py-5"
            to="/services/sustainable-agriculture-and-food-systems"
          >
            <h2 className="flex items-center gap-1 text-2xl font-medium duration-300 hover:underline">
              Sustainable Agriculture and Food Systems{" "}
              <FaArrowRightLong className="text-base text-neutral-content" />
            </h2>
            <p className="mt-4">
              We address pressing challenges such as climate change, food
              security, and rural development by designing and...
            </p>
            <img
              className="mt-4 h-[330px] w-full"
              src="/images/services/agriculture.jpg"
              alt=""
            />
          </Link>
          <Link
            className="border-t border-black py-5"
            to="/services/transport-infrastructure-and-mobility"
          >
            <h2 className="flex items-center gap-1 text-2xl font-medium duration-300 hover:underline">
              Transport, Infrastructure, and Mobility
              <FaArrowRightLong className="text-base text-neutral-content" />
            </h2>
            <p className="mt-4">
              Our expertise in transport systems, sustainable infrastructure,
              and urban mobility helps clients create smarter, more...
            </p>
            <img
              className="mt-4 h-[330px] w-full"
              src="/images/services/transport.jpg"
              alt=""
            />
          </Link>
          <Link className="border-t border-black py-5" to="/services/climate-energy-and-environment">
            <h2 className="flex items-center gap-1 text-2xl font-medium duration-300 hover:underline">
              Climate, Energy, and Environment{" "}
              <FaArrowRightLong className="text-base text-neutral-content" />
            </h2>
            <p className="mt-4">
            We lead the way in sustainability consulting, helping governments and businesses transition to low-carbon models while...
            </p>
            <img
              className="mt-4 h-[330px] w-full"
              src="/images/services/climate.jpg"
              alt=""
            />
          </Link>
          <Link className="border-t border-black py-5" to="/services/policy-formulation-and-strategy-development">
            <h2 className="flex items-center gap-1 text-2xl font-medium duration-300 hover:underline">
            Policy Formulation and Strategy Development{" "}
              <FaArrowRightLong className="text-base text-neutral-content" />
            </h2>
            <p className="mt-4">
            We collaborate closely with our clients to design clear, evidence-based policies and strategies that deliver...
            </p>
            <img
              className="mt-4 h-[330px] w-full"
              src="/images/services/policyFormulation.jpg"
              alt=""
            />
          </Link>
          <Link className="border-t border-black py-5" to="/services/qualitative-and-quantitative-research">
            <h2 className="flex items-center gap-1 text-2xl font-medium duration-300 hover:underline">
            Qualitative and Quantitative Research{" "}
              <FaArrowRightLong className="text-base text-neutral-content" />
            </h2>
            <p className="mt-4">
            Our team of research experts provides customized qualitative and quantitative research services that help clients...
            </p>
            <img
              className="mt-4 h-[330px] w-full"
              src="/images/services/research.jpg"
              alt=""
            />
          </Link>
          <Link className="border-t border-black py-5" to="/services/full-cycle-grant-management">
            <h2 className="flex items-center gap-1 text-2xl font-medium duration-300 hover:underline">
            Full-Cycle Grant Management{" "}
              <FaArrowRightLong className="text-base text-neutral-content" />
            </h2>
            <p className="mt-4">
            We offer end-to-end grant management services, supporting organizations from the initial funding proposal through to final...
            </p>
            <img
              className="mt-4 h-[330px] w-full"
              src="/images/services/grant.jpg"
              alt=""
            />
          </Link>
          <Link className="border-t border-black py-5" to="/services/capacity-building-and-training">
            <h2 className="flex items-center gap-1 text-2xl font-medium duration-300 hover:underline">
            Capacity Building and Training{" "}
              <FaArrowRightLong className="text-base text-neutral-content" />
            </h2>
            <p className="mt-4">
            Our capacity building and training programs equip organizations and individuals with the skills they need to...
            </p>
            <img
              className="mt-4 h-[330px] w-full"
              src="/images/services/capacity.jpg"
              alt=""
            />
          </Link>
          <Link className="border-t border-black py-5" to="/services/technical-assistance">
            <h2 className="flex items-center gap-1 text-2xl font-medium duration-300 hover:underline">
            Technical Assistance{" "}
              <FaArrowRightLong className="text-base text-neutral-content" />
            </h2>
            <p className="mt-4">
            We provide targeted technical assistance to help organizations overcome challenges in policy implementation...
            </p>
            <img
              className="mt-4 h-[330px] w-full"
              src="/images/services/technical.jpg"
              alt=""
            />
          </Link>
          <Link className="border-t border-black py-5" to="/services/digital-transformation-and-innovation">
            <h2 className="flex items-center gap-1 text-2xl font-medium duration-300 hover:underline">
            Digital Transformation and Innovation{" "}
              <FaArrowRightLong className="text-base text-neutral-content" />
            </h2>
            <p className="mt-4">
            Our team provides strategic support and hands-on expertise in helping organizations digitally transform their operations...
            </p>
            <img
              className="mt-4 h-[330px] w-full"
              src="/images/services/digital.jpg"
              alt=""
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
