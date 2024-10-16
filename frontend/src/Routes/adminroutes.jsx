import AdminLayout from "../Layout/AdminLayout";
import About from "../Pages/Admin/AboutUs/AboutUs";
import AddAdministrator from "../Pages/Admin/Administrator/AddAdministrator";
import Administrator from "../Pages/Admin/Administrator/Administrator";
import Dashboard from "../Pages/Admin/Dashboard/Dashboard";
import Banner from "../Pages/Admin/FrontEndSetting/Banner/Banner";
import AddProject from "../Pages/Admin/Projects/AddProject";
import EditProject from "../Pages/Admin/Projects/EditProject";
import ProjectList from "../Pages/Admin/Projects/ProjectList";
import ContactUs from "../Pages/Admin/ContactUs/ContactUs";
import HighlightProject from "../Pages/Admin/HighlightProject/HighlightProject";
import Favicon from "../Pages/Admin/FrontEndSetting/Favicon/Favicon";
import Logo from "../Pages/Admin/FrontEndSetting/Logo/Logo";
import Gallery from "../Pages/Admin/FrontEndSetting/Gallery/Gallery";
import BusinessInfo from "../Pages/Admin/GeneralSetting/BusinessInfo/BusinessInfo";
import SEO from "../Pages/Admin/SEO/SEO";
import FeaturesProjectList from "../Pages/Admin/FeaturesProject/FeaturesProjectList";
import AddFeaturesProject from "../Pages/Admin/FeaturesProject/AddFeaturesProject";
import EditFeaturesProject from "../Pages/Admin/FeaturesProject/EditFeaturesProject";
import PrivacyPolicy from "../Pages/Admin/PrivacyPolicy/PrivacyPolicy";
import WhyChooseSection from "../Pages/Admin/WhyChoose/WhyChooseSection";
import WhyChooseCards from "../Pages/Admin/WhyChoose/WhyChooseCards";
import AddWhyChooseCard from "../Pages/Admin/WhyChoose/AddWhyChooseCard";
import AddGallery from "../Pages/Admin/FrontEndSetting/Gallery/AddGallery";
import DirectorList from "../Pages/Admin/Director/DirectorList";
import AddDirector from "../Pages/Admin/Director/AddDirector";
import EditDirector from "../Pages/Admin/Director/EditDirector";
import ContactMsgList from "../Pages/Admin/ContactMsg/ContactMsgList";
import ContactMsgDetail from "../Pages/Admin/ContactMsg/ContactMsgDetail";
import AdminRoute from "../AdminRoute/AdminRoute";
import Subscribers from "../Pages/Admin/Subscribers/Subscribers";
import CategoryList from "../Pages/Admin/Category/CategoryList";
import AddCategory from "../Pages/Admin/Category/AddCategory";
import CareerList from "../Pages/Admin/Career/CareerList";
import AddCareer from "../Pages/Admin/Career/AddCareer";
import WhoWeAre from "../Pages/Admin/AllSection/WhoWeAre/WhoWeAre";
import Values from "../Pages/Admin/AllSection/Values/Values";
import History from "../Pages/Admin/AllSection/History/History";
import People from "../Pages/Admin/AllSection/People/people";
import CareerSection from "../Pages/Admin/AllSection/CareerSection/CareerSection";

export const adminRoutes = {
  path: "/admin",
  element: (
    <AdminRoute>
      <AdminLayout />
    </AdminRoute>
  ),
  children: [
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      path: "project/all",
      element: <ProjectList />,
    },
    {
      path: "category",
      element: <CategoryList />,
    },
    {
      path: "career",
      element: <CareerList />,
    },
    {
      path: "career/add",
      element: <AddCareer />,
    },
    {
      path: "category/add",
      element: <AddCategory />,
    },
    {
      path: "project/add",
      element: <AddProject />,
    },
    {
      path: "project/edit/:id",
      element: <EditProject />,
    },
    {
      path: "featuresProject/all",
      element: <FeaturesProjectList />,
    },
    {
      path: "featuresProject/add",
      element: <AddFeaturesProject />,
    },
    {
      path: "featuresProject/edit/:id",
      element: <EditFeaturesProject />,
    },
    {
      path: "director/all",
      element: <DirectorList />,
    },
    {
      path: "director/add",
      element: <AddDirector />,
    },
    {
      path: "director/edit/:id",
      element: <EditDirector />,
    },
    {
      path: "front-end/banner",
      element: <Banner />,
    },
    {
      path: "front-end/favicon",
      element: <Favicon />,
    },
    {
      path: "front-end/logo",
      element: <Logo />,
    },
    {
      path: "front-end/gallery",
      element: <Gallery />,
    },
    {
      path: "front-end/gallery/add",
      element: <AddGallery />,
    },
    {
      path: "general-setting/business-info",
      element: <BusinessInfo />,
    },
    {
      path: "seo",
      element: <SEO />,
    },
    {
      path: "privacy-policy",
      element: <PrivacyPolicy />,
    },
    {
      path: "administrator/all",
      element: <Administrator />,
    },
    {
      path: "administrator/add",
      element: <AddAdministrator />,
    },
    {
      path: "about-us",
      element: <About />,
    },
    {
      path: "subscribers",
      element: <Subscribers />,
    },
    {
      path: "highlightProject",
      element: <HighlightProject />,
    },
    {
      path: "contact-us",
      element: <ContactUs />,
    },
    {
      path: "contact-msg",
      element: <ContactMsgList />,
    },
    {
      path: "contact-msg/:id",
      element: <ContactMsgDetail />,
    },
    {
      path: "whyChoose/section",
      element: <WhyChooseSection />,
    },
    {
      path: "whyChoose/cards/all",
      element: <WhyChooseCards />,
    },
    {
      path: "whyChoose/cards/add",
      element: <AddWhyChooseCard />,
    },
    {
      path: "/admin/who-we-are",
      element: <WhoWeAre />,
    },
    {
      path: "/admin/values",
      element: <Values />,
    },
    {
      path: "/admin/history",
      element: <History />,
    },
    {
      path: "/admin/people",
      element: <People />,
    },
    {
      path: "/admin/careerSection",
      element: <CareerSection />,
    },
  ],
};
