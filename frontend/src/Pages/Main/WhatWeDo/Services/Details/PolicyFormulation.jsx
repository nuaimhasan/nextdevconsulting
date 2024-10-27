import parse from "html-react-parser";
import { useGetHistoryQuery } from "../../../../../Redux/whoWeAre/history/historyApi";
import { useEffect } from "react";
export default function PolicyFormulation() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, isLoading } = useGetHistoryQuery();

  const policyFormulation =
    data?.data?.policyFormulation && parse(data?.data?.policyFormulation);

  return (
    <section className="min-h-[70vh] py-8">
      <div className="container">
        <div>
          <h2 className="border-b border-primary pb-4 text-2xl font-bold">
            Policy Formulation and Strategy Development
          </h2>
          <div className="mt-8">{policyFormulation}</div>
        </div>
      </div>
    </section>
  );
}
