import parse from "html-react-parser";
import { useGetHistoryQuery } from "../../../../../Redux/whoWeAre/history/historyApi";
import { useEffect } from "react";
export default function Sustainable() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, isLoading } = useGetHistoryQuery();

  const sustainable =
    data?.data?.sustainableAgriculture &&
    parse(data?.data?.sustainableAgriculture);

  return (
    <section className="min-h-[70vh] py-8">
      <div className="container">
        <div>
          <h2 className="border-b border-primary pb-4 text-2xl font-bold">
            Sustainable Agriculture and Food Systems
          </h2>
          <div className="mt-8">{sustainable}</div>
        </div>
      </div>
    </section>
  );
}
