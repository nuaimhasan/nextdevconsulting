import { useGetValuesQuery } from "../../../../Redux/whoWeAre/values/valuesApi";
import parse from "html-react-parser";

export default function Values() {
window.scrollTo(0, 0);
  const { data } = useGetValuesQuery();
  const values = data?.data;

  const description = values?.description && parse(values?.description);

  return (
    <section className="container py-12">
      <h3 className="border-b pb-3 hidden md:block">Who We Are</h3>
      <div className="mt-6 md:w-[70%] text-center md:text-start">
        <h2 className="text-3xl font-bold">Our Values</h2>
        <div className="tracking-wider">
          {description}
        </div>
      </div>
    </section>
  );
}
