import parse from "html-react-parser";
import { useGetHistoryQuery } from "../../../../Redux/whoWeAre/history/historyApi";

export default function History() {
  window.scrollTo(0, 0);
  const { data } = useGetHistoryQuery();

  const history = data?.data;

  const description = history?.description && parse(history?.description);

  return (
    <section className="container py-12">
      <h3 className="hidden border-b pb-3 md:block">Who We Are</h3>
      <div className="mt-6 text-center md:w-[70%] md:text-start">
        <h2 className="text-3xl font-bold">Our History</h2>
        <div className="tracking-wider">{description}</div>
      </div>
    </section>
  );
}
