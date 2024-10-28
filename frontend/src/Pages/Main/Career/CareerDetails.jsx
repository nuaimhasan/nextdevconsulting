import React from "react";
import { useParams } from "react-router-dom";
import { useGetCareerByIdQuery } from "../../../Redux/career/careerApi";

export default function CareerDetails() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetCareerByIdQuery(id);
  const career = data?.data;

  if (isLoading)
    return <div className="p-10 text-center text-gray-500">Loading...</div>;
  if (error)
    return (
      <div className="p-10 text-center text-red-500">
        Error loading career details.
      </div>
    );

  return (
    <div className="mx-auto my-10 max-w-2xl rounded-lg bg-white p-6 shadow-lg">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">{career?.role}</h1>
        <p className="text-sm text-gray-600">{career?.location}</p>
        <span className="mt-2 inline-block rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold text-blue-700">
          {career?.type}
        </span>
      </div>
      <div className="mt-6">
        <h2 className="mt-6 text-lg font-semibold text-gray-700">
          Description:
        </h2>
        <div
          className="mt-2 border-t pt-4 leading-relaxed text-gray-600"
          dangerouslySetInnerHTML={{ __html: career?.description }}
        ></div>
      </div>
    </div>
  );
}
