import { useState } from "react";
import { useGetCareersQuery } from "../../../Redux/career/careerApi";
import parse from "html-react-parser";
import { useGetCareerSectionQuery } from "../../../Redux/career/careerSectionApi";
import { useGetContactsQuery } from "../../../Redux/contact/contactApi";

export default function Career() {
  const { data } = useGetCareersQuery();
  const careers = data?.data;

  const { data: contactData } = useGetContactsQuery();
  const contact = contactData?.data;

  const { data: careerSection } = useGetCareerSectionQuery();
  const description =
    careerSection?.data?.description && parse(careerSection?.data?.description);

  const [showModal, setShowModal] = useState(false);

  const handleApplyClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className="container py-12">
      <div className="mt-6 text-center md:w-[70%] md:text-start">
        <h2 className="text-3xl font-bold">Current vacancies</h2>
        <p className="tracking-wider">{description}</p>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-3 md:grid-cols-4">
        {careers?.map((item) => (
          <div
            key={item?._id}
            className="min-h-52 rounded border bg-secondary p-4 text-white shadow duration-300 hover:bg-primary"
          >
            <h5 className="text-sm">{item?.title}</h5>
            <h2 className="text-2xl font-semibold">{item?.role}</h2>
            <p className="mb-5">{item?.location}</p>
            <button onClick={handleApplyClick} className="orange_btn">
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="max-w-sm rounded bg-white p-6 text-center shadow-lg">
            <h3 className="mb-4 text-xl font-bold">Choose Email Client</h3>
            <div className="flex flex-col gap-4">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact?.email}&su=Job%20Application`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Gmail
              </a>
              <a
                href={`https://outlook.live.com/owa/?path=/mail/action/compose&to=${contact?.email}&subject=Job%20Application`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Outlook
              </a>
              <a
                href={`https://compose.mail.yahoo.com/?to=${contact?.email}&subject=Job%20Application`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Yahoo
              </a>
            </div>
            <button onClick={closeModal} className="mt-4 text-red-500">
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
