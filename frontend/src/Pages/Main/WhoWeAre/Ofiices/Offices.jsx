import { useGetOfficeQuery } from "../../../../Redux/whoWeAre/office/officeApi";
z;
import parse from "html-react-parser";

export default function Offices() {
  window.scrollTo(0, 0);
  const { data } = useGetOfficeQuery();

  const office = data?.data;

  const description = office?.description && parse(office?.description);

  return (
    <section className="container py-12">
      <h3 className="hidden border-b pb-3 md:block">Who We Are</h3>
      <div className="mt-6 text-center md:w-[70%] md:text-start">
        <h2 className="text-3xl font-bold">Our Offices</h2>
        <div className="tracking-wider">{description}</div>
      </div>
    </section>
  );
}
