import parse from "html-react-parser";
import { useGetHistoryQuery } from "../../../../../Redux/whoWeAre/history/historyApi";
import { useEffect } from "react";
export default function Qualitative() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, isLoading } = useGetHistoryQuery();
  const qualitative = data?.data?.research && parse(data?.data?.research);

  return (
    <section className="min-h-[70vh] py-8">
      <div className="container">
        <div>
          <h2 className="border-b border-primary pb-4 text-2xl font-bold">
            Qualitative and Quantitative Research
          </h2>
          <div className="mt-8">{qualitative}</div>
        </div>
      </div>
    </section>
  );
}
