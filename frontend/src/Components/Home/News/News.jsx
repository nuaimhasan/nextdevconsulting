import { Link } from "react-router-dom";
import NewsCard from "../../NewsCard/NewsCard";

export default function News() {
  return (
    <section className="py-14">
      <div className="container">
        <div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-secondary md:text-3xl md:font-bold">
            Real Stories, Real Impact
            </h2>
            <p className="mx-auto mt-2 text-xs md:w-[60%] md:text-[15px]">
            Discover how <strong>NextDev Consulting</strong> is making a tangible difference through innovative solutions. From sustainable agriculture initiatives to transforming urban mobility, our projects reflect our commitment to creating positive, lasting change.
            </p>
          </div>
          <h2 className="text-3xl font-bold text-center mt-4 text-secondary">Case Studies</h2>
          <div className="mt-5">
            <NewsCard />
          </div>
          <div className="mt-4 flex justify-center">
            <Link
              className="orange_btn"
              to="/news-insights"
            >
              Read More Success Stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
