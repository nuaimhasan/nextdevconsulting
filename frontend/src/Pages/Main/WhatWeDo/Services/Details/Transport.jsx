import parse from "html-react-parser";
import { useGetHistoryQuery } from "../../../../../Redux/whoWeAre/history/historyApi";
import { useEffect } from "react";

export default function Transport() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, isLoading } = useGetHistoryQuery();

  const transport =
    data?.data?.transportInfrastructure &&
    parse(data?.data?.transportInfrastructure);

  return (
    <section className="min-h-[70vh] py-8">
      <div className="container">
        <div>
          <h2 className="border-b border-primary pb-4 text-2xl font-bold">
            Transport, Infrastructure, and Mobility
          </h2>
          <div className="mt-8">{transport}</div>
        </div>
      </div>
    </section>
  );
}
