import { useEffect } from "react";
import { useGetHistoryQuery } from "../../../../../Redux/whoWeAre/history/historyApi";
import parse from "html-react-parser";

export default function Capacity() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, isLoading } = useGetHistoryQuery();

  const capacity =
    data?.data?.capacityBuilding && parse(data?.data?.capacityBuilding);

  return (
    <section className="min-h-[70vh] py-8">
      <div className="container">
        <div>
          <h2 className="border-b border-primary pb-4 text-2xl font-bold">
            Capacity Building and Training
          </h2>
          <div className="mt-8">{capacity}</div>
        </div>
      </div>
    </section>
  );
}
