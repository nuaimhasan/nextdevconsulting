import NewsCard from "../../NewsCard/NewsCard";

export default function News() {
  return (
    <section className="py-14">
      <div className="container">
        <div>
          <h2 className="text-secondary font-bold text-3xl">Latest news and insights</h2>
          <div className="mt-7">
            <NewsCard/>
          </div>
        </div>
      </div>
    </section>
  );
}
