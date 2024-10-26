import { Link } from "react-router-dom";

export default function Roster() {
  return (
    <section className="py-10">
      <div className="container">
        <div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-secondary md:text-3xl md:font-bold">
              Join Our Consultant Roster
            </h2>
            <p className="mt-2 text-xs mx-auto md:w-[80%] md:text-[15px]">
              Are you an experienced professional or freelancer looking to
              contribute to impactful projects across the globe? Join our
              Consultant Roster and become part of a growing network of experts.
              We work across diverse sectors, and our projects span various
              continents, offering meaningful opportunities for consultants
              worldwide.
            </p>
          </div>
          <div className="mt-4 flex justify-center">
            <Link className="orange_btn" to="/work-with-us">
              Submit Your CV
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
