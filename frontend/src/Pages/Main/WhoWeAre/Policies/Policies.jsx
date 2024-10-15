import parse from "html-react-parser";
import { useGetPrivacyQuery } from "../../../../Redux/privacy/privacyApi";

export default function Policies() {
  window.scrollTo(0, 0);

  const { data: privacy } = useGetPrivacyQuery();
  const data = privacy?.data;

  const description = parse(data?.description || "");

  return (
    <section className="container py-12">
      <h3 className="hidden border-b pb-3 md:block">Who We Are</h3>
      <div className="mt-6 text-center md:w-[70%] md:text-start">
        <h2 className="text-3xl font-bold">Our Policies</h2>
        <p className="tracking-wider">
          {Array.isArray(description) ? (
            description.map((item, index) => <div key={index}>{item}</div>)
          ) : (
            <div>{description}</div>
          )}
        </p>
      </div>
    </section>
  );
}
