import { Link } from "react-router-dom";

import {
  MdMonitor,
  MdOutlineDashboard,
  MdContactPhone,
  MdFeaturedPlayList,
  MdOutlinePrivacyTip,
  MdOutlineWorkOutline,
  MdStars,
} from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { RiAdminFill } from "react-icons/ri";
import { FaChartLine } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { CiMail } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

import SidebarItems from "./SidebarItems";
import { useGetLogosQuery } from "../../../Redux/logo/logoApi";

const adminSidebarItems = [
  {
    icon: <MdOutlineDashboard />,
    title: "Dashbaord",
    path: "/admin/dashboard",
  },

  {
    icon: <HiOutlineBuildingLibrary />,
    title: "Category",
    path: "/admin/category",
  },
  {
    icon: <HiOutlineBuildingLibrary />,
    title: "Projects",
    path: "/admin/project/all",
  },

  {
    icon: <RiAdminFill />,
    title: "Administrator",
    path: "/admin/administrator/all",
  },
  {
    icon: <MdFeaturedPlayList />,
    title: "Features Projects",
    path: "/admin/featuresProject/all",
  },
  {
    icon: <CgProfile />,
    title: "Directors",
    path: "/admin/director/all",
  },

  // {
  //   icon: <RiBarChartHorizontalFill />,
  //   title: "Why Choose Us",
  //   subMenu: [
  //     {
  //       title: "Why Choose Us Section",
  //       path: "/admin/whyChoose/section",
  //     },
  //     {
  //       title: "Why Choose Us Cards",
  //       path: "/admin/whyChoose/cards/all",
  //     },
  //   ],
  // },

  {
    icon: <FcAbout />,
    title: "About Us",
    path: "/admin/about-us",
  },
  {
    icon: <MdStars />,
    title: "Subscribers",
    path: "/admin/subscribers",
  },
  {
    icon: <MdOutlineWorkOutline />,
    title: "Career",
    path: "/admin/career",
  },

  {
    icon: <MdContactPhone />,
    title: "Contact Us",
    path: "/admin/contact-us",
  },
  {
    icon: <CiMail />,
    title: "Client Message",
    path: "/admin/contact-msg",
  },

  {
    icon: <MdMonitor />,
    title: "All Section",
    subMenu: [
      {
        title: "Who We Are",
        path: "/admin/who-we-are",
      },
      {
        title: "Values",
        path: "/admin/values",
      },
      {
        title: "History",
        path: "/admin/history",
      },
      {
        title: "People",
        path: "/admin/people",
      },
    ],
  },
  {
    icon: <MdMonitor />,
    title: "Front-End Setting",
    subMenu: [
      {
        title: "Logo",
        path: "/admin/front-end/logo",
      },
      {
        title: "Favicon",
        path: "/admin/front-end/favicon",
      },
      {
        title: "Banner",
        path: "/admin/front-end/banner",
      },
      {
        title: "Gallery",
        path: "/admin/front-end/gallery",
      },
    ],
  },

  {
    icon: <IoMdSettings />,
    title: "General Setting",
    subMenu: [
      {
        title: "Business Info",
        path: "/admin/general-setting/business-info",
      },
    ],
  },

  {
    icon: <FaChartLine />,
    title: "SEO Setting",
    path: "/admin/seo",
  },
  {
    icon: <MdOutlinePrivacyTip />,
    title: "Privacy Policy",
    path: "/admin/privacy-policy",
  },
];

export default function AdminSidebar() {
  const { data } = useGetLogosQuery();
  const logo = data?.data;

  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <nav className="admin_siderbar">
          <Link to="/admin/dashboard" className="block py-3">
            <img className="mx-auto w-3/5"  src={`${import.meta.env.VITE_BACKEND_URL}/${logo?.logo}`} alt="Logo" />
          </Link>

          <ul>
            {adminSidebarItems?.map((item, i) => (
              <SidebarItems item={item} key={i} />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
