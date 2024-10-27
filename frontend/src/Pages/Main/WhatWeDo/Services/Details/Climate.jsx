import parse from "html-react-parser";
import { useGetHistoryQuery } from "../../../../../Redux/whoWeAre/history/historyApi";
import { useEffect } from "react";

export default function Climate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, isLoading } = useGetHistoryQuery();

  const climate = data?.data?.climateEnergy && parse(data?.data?.climateEnergy);

  return (
    <section className="min-h-[70vh] py-8">
      <div className="container">
        <div>
          <h2 className="border-b border-primary pb-4 text-2xl font-bold">
            Climate, Energy, and Environment
          </h2>
          <div className="mt-8">{climate}</div>
        </div>
      </div>
    </section>
  );
}
