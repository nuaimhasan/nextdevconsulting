import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGetContactsQuery } from "../../Redux/contact/contactApi";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { useGetLogosQuery } from "../../Redux/logo/logoApi";

export default function Footer() {
  const { data } = useGetContactsQuery();
  const contact = data?.data;

  const { data: logoData } = useGetLogosQuery();
  const logo = logoData?.data;

  console.log("contact", contact);

  return (
    <footer className="bg-white">
      <div className="container w-full p-4 py-6 lg:py-8">
        <div className="md:grid md:grid-cols-5">
          <div className="mb-6 md:col-span-2 md:mb-0">
            <Link to="/admin/dashboard" className="flex items-center">
              <img
                className="me-3 h-8"
                src={`${import.meta.env.VITE_BACKEND_URL}/${logo?.logo}`}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 sm:gap-6 md:col-span-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900">
                Resources
              </h2>
              <ul className="font-medium text-gray-500">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Flowbite
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900">
                Quick access
              </h2>
              <ul className="grid grid-cols-2 gap-x-10 font-medium text-gray-500">
                <li className="mb-4">
                  <Link to="/who-we-are" className="hover:underline">
                    Who We Are
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/what-we-do" className="hover:underline">
                    What We Do
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/news-insights" className="hover:underline">
                    News & Insights
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/work-with-us" className="hover:underline">
                    Work With Us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/contact-us" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/who-we-are/policies" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2023{" "}
            <a href="https://emanagerit.com/" className="hover:underline">
              eManager™
            </a>
            . All Rights Reserved. Developed by{" "}
            <a
              className="duration-300 hover:underline"
              target="_blank"
              href="https://emanagerit.com/"
            >
              {" "}
              eManager{" "}
            </a>
          </span>
          <div className="mt-4 flex gap-2 text-xl sm:mt-0 sm:justify-center">
            <a href={`${contact?.facebookLink}`} target="_blank" >
              <FaFacebookSquare />
            </a>
            <a href={contact?.youtubeLink} target="_blank">
              <FaInstagram />
            </a>
            <a href={contact?.twitterLink} target="_blank">
              <FaXTwitter />
            </a>
            <a href={contact?.linkedinLink} target="_blank">
              <CiLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
