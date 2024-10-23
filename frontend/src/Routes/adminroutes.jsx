import { lazy, Suspense } from "react";
import AdminLayout from "../Layout/AdminLayout";
import Spinner from "../Components/Spinner/Spinner";

// Lazy-loaded components
const About = lazy(() => import("../Pages/Admin/AboutUs/AboutUs"));
const AddAdministrator = lazy(
  () => import("../Pages/Admin/Administrator/AddAdministrator"),
);
const Administrator = lazy(
  () => import("../Pages/Admin/Administrator/Administrator"),
);
const Dashboard = lazy(() => import("../Pages/Admin/Dashboard/Dashboard"));
const Banner = lazy(
  () => import("../Pages/Admin/FrontEndSetting/Banner/Banner"),
);
const AddProject = lazy(() => import("../Pages/Admin/Projects/AddProject"));
const EditProject = lazy(() => import("../Pages/Admin/Projects/EditProject"));
const ProjectList = lazy(() => import("../Pages/Admin/Projects/ProjectList"));
const ContactUs = lazy(() => import("../Pages/Admin/ContactUs/ContactUs"));
const HighlightProject = lazy(
  () => import("../Pages/Admin/HighlightProject/HighlightProject"),
);
const Favicon = lazy(
  () => import("../Pages/Admin/FrontEndSetting/Favicon/Favicon"),
);
const Logo = lazy(() => import("../Pages/Admin/FrontEndSetting/Logo/Logo"));
const Gallery = lazy(
  () => import("../Pages/Admin/FrontEndSetting/Gallery/Gallery"),
);
const BusinessInfo = lazy(
  () => import("../Pages/Admin/GeneralSetting/BusinessInfo/BusinessInfo"),
);
const SEO = lazy(() => import("../Pages/Admin/SEO/SEO"));
const FeaturesProjectList = lazy(
  () => import("../Pages/Admin/FeaturesProject/FeaturesProjectList"),
);
const AddFeaturesProject = lazy(
  () => import("../Pages/Admin/FeaturesProject/AddFeaturesProject"),
);
const EditFeaturesProject = lazy(
  () => import("../Pages/Admin/FeaturesProject/EditFeaturesProject"),
);
const PrivacyPolicy = lazy(
  () => import("../Pages/Admin/PrivacyPolicy/PrivacyPolicy"),
);
const WhyChooseSection = lazy(
  () => import("../Pages/Admin/WhyChoose/WhyChooseSection"),
);
const WhyChooseCards = lazy(
  () => import("../Pages/Admin/WhyChoose/WhyChooseCards"),
);
const AddWhyChooseCard = lazy(
  () => import("../Pages/Admin/WhyChoose/AddWhyChooseCard"),
);
const AddGallery = lazy(
  () => import("../Pages/Admin/FrontEndSetting/Gallery/AddGallery"),
);
const DirectorList = lazy(() => import("../Pages/Admin/Director/DirectorList"));
const AddDirector = lazy(() => import("../Pages/Admin/Director/AddDirector"));
const EditDirector = lazy(() => import("../Pages/Admin/Director/EditDirector"));
const ContactMsgList = lazy(
  () => import("../Pages/Admin/ContactMsg/ContactMsgList"),
);
const ContactMsgDetail = lazy(
  () => import("../Pages/Admin/ContactMsg/ContactMsgDetail"),
);
const AdminRoute = lazy(() => import("../AdminRoute/AdminRoute"));
const Subscribers = lazy(
  () => import("../Pages/Admin/Subscribers/Subscribers"),
);
const CategoryList = lazy(() => import("../Pages/Admin/Category/CategoryList"));
const AddCategory = lazy(() => import("../Pages/Admin/Category/AddCategory"));
const CareerList = lazy(() => import("../Pages/Admin/Career/CareerList"));
const AddCareer = lazy(() => import("../Pages/Admin/Career/AddCareer"));
const WhoWeAre = lazy(
  () => import("../Pages/Admin/AllSection/WhoWeAre/WhoWeAre"),
);
const Values = lazy(() => import("../Pages/Admin/AllSection/Values/Values"));
const History = lazy(() => import("../Pages/Admin/AllSection/History/History"));
const CareerSection = lazy(
  () => import("../Pages/Admin/AllSection/CareerSection/CareerSection"),
);
const People = lazy(() => import("../Pages/Admin/AllSection/People/People"));
const NewsInsight = lazy(
  () => import("../Pages/Admin/AllSection/NewsInsight/NewsInsight"),
);
const OurPurpose = lazy(() => import("../Pages/Admin/OurPurpose/OurPurpose"));
const ServiceList = lazy(() => import("../Pages/Admin/Services/ServiceList"));
const AddService = lazy(() => import("../Pages/Admin/Services/AddService"));
const EditService = lazy(() => import("../Pages/Admin/Services/EditService"));
const LeadershipSection = lazy(
  () => import("../Pages/Admin/Director/LeadershipSection"),
);
const WhatWeDo = lazy(
  () => import("../Pages/Admin/AllSection/WhatWeDo/WhatWeDo"),
);

export const adminRoutes = {
  path: "/admin",
  element: (
    <Suspense fallback={<Spinner />}>
      <AdminRoute>
        <AdminLayout />
      </AdminRoute>
    </Suspense>
  ),
  children: [
    {
      path: "dashboard",
      element: <Dashboard />,
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
      path: "project/all",
      element: <ProjectList />,
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
      path: "services/all",
      element: <ServiceList />,
    },
    {
      path: "services/add",
      element: <AddService />,
    },
    {
      path: "services/edit/:id",
      element: <EditService />,
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
      path: "leadershipSection",
      element: <LeadershipSection />,
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
      path: "/admin/what-we-do",
      element: <WhatWeDo />,
    },
    {
      path: "/admin/values",
      element: <Values />,
    },
    {
      path: "/admin/services",
      element: <History />,
    },
    {
      path: "/admin/impact",
      element: <People />,
    },
    {
      path: "/admin/careerSection",
      element: <CareerSection />,
    },
    {
      path: "/admin/newsInsight",
      element: <NewsInsight />,
    },
    {
      path: "/admin/ourPurpose",
      element: <OurPurpose />,
    },
  ],
};
