import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import SidebarMenu from "./SidebarMenu";
import { useEffect, useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { useGetLogosQuery } from "../../Redux/logo/logoApi";
import { useSearchProjectsQuery } from "../../Redux/projects/projectsApi";
import { FaSearch } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

export default function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    whoWeAre: false,
    whatWeDo: false,
    workWithUs: false,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState(false);

  const { data: logoData } = useGetLogosQuery();
  const logo = logoData?.data;

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const { data: searchData } = useSearchProjectsQuery(debouncedSearchTerm, {
    skip: debouncedSearchTerm === "",
  });

  useEffect(() => {
    if (searchData) {
      setSearchResults(searchData?.data || []);
    }
  }, [searchData]);

  useEffect(() => {
    if (showSidebar) {
      document.addEventListener("click", (e) => {
        if (
          (!e.target.closest(".header_menu_btn") &&
            !e.target.closest(".sidebar_menu")) ||
          e.target.closest(".sidebar_menu a")
        ) {
          setShowSidebar(false);
        }
      });
    }
  }, [showSidebar]);

  const handleDropdown = (menu) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <header className="sticky top-0 z-50 bg-white py-3 shadow">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}/${logo?.logo}`}
              alt="logo"
              className="max-h-12 w-32"
            />
          </Link>

          <nav className="hidden sm:block">
            <ul className="flex gap-4 font-medium">
              {/* Who we are dropdown */}
              <li
                className="relative"
                onMouseEnter={() => handleDropdown("whoWeAre")}
                onMouseLeave={() => handleDropdown("whoWeAre")}
              >
                <Link
                  to="/who-we-are"
                  className="duration-200 hover:text-secondary"
                >
                  Who we are
                </Link>
                {dropdownOpen.whoWeAre && (
                  <ul className="absolute -left-5 w-48 rounded border bg-white shadow-lg">
                    <li>
                      <Link
                        to="/who-we-are/values"
                        className="line block px-4 py-2 duration-200 hover:text-secondary"
                      >
                        values
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/who-we-are/history"
                        className="line block px-4 py-2 duration-200 hover:text-secondary"
                      >
                        History
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/who-we-are/people"
                        className="line block px-4 py-2 duration-200 hover:text-secondary"
                      >
                        People
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/who-we-are/leadership"
                        className="line block px-4 py-2 duration-200 hover:text-secondary"
                      >
                        Leadership
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/who-we-are/offices"
                        className="line block px-4 py-2 duration-200 hover:text-secondary"
                      >
                        Offices
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/who-we-are/policies"
                        className="line block px-4 py-2 duration-200 hover:text-secondary"
                      >
                        Policies
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* What we do dropdown */}
              <li
                className="relative"
                onMouseEnter={() => handleDropdown("whatWeDo")}
                onMouseLeave={() => handleDropdown("whatWeDo")}
              >
                <Link
                  to="/what-we-do"
                  className="duration-200 hover:text-secondary"
                >
                  What we do
                </Link>
                {dropdownOpen.whatWeDo && (
                  <ul className="absolute left-0 w-48 rounded border bg-white shadow-lg">
                    <li>
                      <Link
                        to="/what-we-do/services"
                        className="line block px-4 py-2 duration-200 hover:text-secondary"
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/what-we-do/impact"
                        className="line block px-4 py-2 duration-200 hover:text-secondary"
                      >
                        Impact
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/what-we-do/clients"
                        className="line block px-4 py-2 duration-200 hover:text-secondary"
                      >
                        Clients
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/news-insights"
                        // to="/what-we-do/projects"
                        className="line block px-4 py-2 duration-200 hover:text-secondary"
                      >
                        Projects
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        to="/what-we-do/topics"
                        className="block px-4 py-2 line duration-200 hover:text-secondary"
                      >
                        Topics
                      </Link>
                    </li> */}
                    {/* <li>
                      <Link
                        to="/what-we-do/regions"
                        className="block px-4 py-2 line duration-200 hover:text-secondary"
                      >
                        Regions
                      </Link>
                    </li> */}
                  </ul>
                )}
              </li>
              <li>
                <Link
                  to="/news-insights"
                  className="duration-200 hover:text-secondary"
                >
                  News & insights
                </Link>
              </li>

              {/* Work with us dropdown */}
              <li
                className="relative"
                onMouseEnter={() => handleDropdown("workWithUs")}
                onMouseLeave={() => handleDropdown("workWithUs")}
              >
                <Link
                  to="/work-with-us"
                  className="duration-200 hover:text-secondary"
                >
                  Work with us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact-us"
                  className="duration-200 hover:text-secondary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <nav>
            <ul className="flex items-center gap-6">
              <div className={`${search ? "" : "hidden"}`}>
                <div className="relative flex items-center gap-2">
                  <input
                    type="text"
                    className="w-36 rounded-3xl border px-3 py-2 shadow md:w-60"
                    placeholder="Type here..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />

                  {debouncedSearchTerm && searchResults.length > 0 && (
                    <div className="absolute left-0 top-12 z-10 w-full bg-white shadow-lg">
                      <ul className="max-h-64 overflow-y-auto">
                        {searchResults.map((project) => (
                          <li
                            key={project._id}
                            className="flex gap-2 border-b px-4 py-2"
                          >
                            <img
                              src={`${import.meta.env.VITE_BACKEND_URL}/${project?.image}`}
                              className="h-8 w-10"
                              alt="Image"
                            />
                            <Link
                              to={`/project/${project._id}`}
                              onClick={() => setSearchTerm("")}
                            >
                              {project.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="">
                {search ? (
                  <MdCancel
                    onClick={() => setSearch(false)}
                    className="flex cursor-pointer items-center text-xl"
                  />
                ) : (
                  <FaSearch
                    onClick={() => setSearch(true)}
                    className="flex cursor-pointer items-center text-xl"
                  />
                )}
              </div>
              <div className="flex items-center gap-2">
                <li className="hidden sm:block">
                  <Link to="/" className="text-xl hover:text-primary">
                    <FaXTwitter />
                  </Link>
                </li>
                <li className="hidden sm:block">
                  <Link to="/" className="text-xl hover:text-primary">
                    <CiLinkedin />
                  </Link>
                </li>
              </div>

              <li>
                <button
                  onClick={() => setShowSidebar(!showSidebar)}
                  className="header_menu_btn"
                >
                  <RiMenu3Fill />
                </button>

                <SidebarMenu
                  showSidebar={showSidebar}
                  setShowSidebar={setShowSidebar}
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
