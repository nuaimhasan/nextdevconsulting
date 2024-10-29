import { lazy, Suspense } from "react";
import MainLayout from "../Layout/MainLayout";

// Lazy-loaded components
import Home from "../Pages/Main/Home/Home";
import Spinner from "../Components/Spinner/Spinner";
import AboutUss from "../Pages/Main/WhoWeAre/AboutUss/AboutUss";
import LeaderBio from "../Pages/Main/WhoWeAre/Leadership/LeaderBio";
import ImpactAssessment from "../Pages/Main/WhatWeDo/Services/Details/ImpactAssessment";
import Sustainable from "../Pages/Main/WhatWeDo/Services/Details/Sustainable";
import Transport from "../Pages/Main/WhatWeDo/Services/Details/Transport";
import Climate from "../Pages/Main/WhatWeDo/Services/Details/Climate";
import PolicyFormulation from "../Pages/Main/WhatWeDo/Services/Details/PolicyFormulation";
import Qualitative from "../Pages/Main/WhatWeDo/Services/Details/Qualitative";
import FullCycle from "../Pages/Main/WhatWeDo/Services/Details/FullCycle";
import Capacity from "../Pages/Main/WhatWeDo/Services/Details/Capacity";
import Technical from "../Pages/Main/WhatWeDo/Services/Details/Technical";
import Transformation from "../Pages/Main/WhatWeDo/Services/Details/Transformation";
import ReadMore from "../Pages/Main/WhatWeDo/Services/Details/ReadMore";
import CareerDetails from "../Pages/Main/Career/CareerDetails";
const Career = lazy(() => import("../Pages/Main/Career/Career"));
const Contactus = lazy(() => import("../Pages/Main/Contactus/Contactus"));
const NewsInsights = lazy(
  () => import("../Pages/Main/NewsInsights/NewsInsights"),
);
const Clients = lazy(() => import("../Pages/Main/WhatWeDo/Clients/Clients"));
const Impact = lazy(() => import("../Pages/Main/WhatWeDo/Impact/Impact"));
const Projects = lazy(() => import("../Pages/Main/WhatWeDo/Projects/Projects"));
const Regions = lazy(() => import("../Pages/Main/WhatWeDo/Regions/Regions"));
const Evalution = lazy(
  () => import("../Pages/Main/WhatWeDo/Services/Evalution/Evalution"),
);
const Services = lazy(() => import("../Pages/Main/WhatWeDo/Services/Services"));
const Strategy = lazy(
  () => import("../Pages/Main/WhatWeDo/Services/Strategy/Strategy"),
);
const Topics = lazy(() => import("../Pages/Main/WhatWeDo/Topics/Topics"));
const WhatWeDo = lazy(() => import("../Pages/Main/WhatWeDo/WhatWeDo"));
const History = lazy(() => import("../Pages/Main/WhoWeAre/History/History"));
const Leadership = lazy(
  () => import("../Pages/Main/WhoWeAre/Leadership/Leadership"),
);
const Offices = lazy(() => import("../Pages/Main/WhoWeAre/Ofiices/Offices"));
const People = lazy(() => import("../Pages/Main/WhoWeAre/People/People"));
const Policies = lazy(() => import("../Pages/Main/WhoWeAre/Policies/Policies"));
const Values = lazy(() => import("../Pages/Main/WhoWeAre/Values/Values"));
const WhoWeAre = lazy(() => import("../Pages/Main/WhoWeAre/WhoWeAre"));
const PrivacyPolicy = lazy(
  () => import("../Pages/Main/PrivacyPolicy/PrivacyPolicy"),
);
const ProjectDetails = lazy(
  () => import("../Pages/Main/ProjectDetails/ProjectDetails"),
);

export const mainRoutes = {
  id: "main",
  path: "/",
  element: (
    <Suspense fallback={<Spinner />}>
      {" "}
      <MainLayout />{" "}
    </Suspense>
  ),
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/aboutus",
      element: <AboutUss />,
    },
    {
      path: "/who-we-are",
      element: <WhoWeAre />,
    },
    {
      path: "/who-we-are/values",
      element: <Values />,
    },
    {
      path: "/who-we-are/history",
      element: <History />,
    },
    {
      path: "/who-we-are/people",
      element: <People />,
    },
    {
      path: "/who-we-are/leadership",
      element: <Leadership />,
    },
    {
      path: "/who-we-are/leadership/:id",
      element: <LeaderBio />,
    },
    {
      path: "/who-we-are/offices",
      element: <Offices />,
    },
    {
      path: "/who-we-are/policies",
      element: <Policies />,
    },
    {
      path: "/news-insights",
      element: <NewsInsights />,
    },
    {
      path: "/projects",
      element: <NewsInsights />,
    },
    {
      path: "/what-we-do",
      element: <WhatWeDo />,
    },
    {
      path: "/what-we-do/strategy",
      element: <Strategy />,
    },
    {
      path: "/what-we-do/evalution",
      element: <Evalution />,
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/services/impact-assessment-and-evaluation",
      element: <ImpactAssessment />,
    },
    {
      path: "/services/sustainable-agriculture-and-food-systems",
      element: <Sustainable />,
    },
    {
      path: "/services/transport-infrastructure-and-mobility",
      element: <Transport />,
    },
    {
      path: "/services/climate-energy-and-environment",
      element: <Climate />,
    },
    {
      path: "/services/policy-formulation-and-strategy-development",
      element: <PolicyFormulation />,
    },
    {
      path: "/services/qualitative-and-quantitative-research",
      element: <Qualitative />,
    },
    {
      path: "/services/full-cycle-grant-management",
      element: <FullCycle />,
    },
    {
      path: "/services/capacity-building-and-training",
      element: <Capacity />,
    },
    {
      path: "/services/technical-assistance",
      element: <Technical />,
    },
    {
      path: "/services/digital-transformation-and-innovation",
      element: <Transformation />,
    },
    {
      path: "/services/digital-transformation-and-innovation/our-digital-transformation",
      element: <ReadMore />,
    },
    {
      path: "/what-we-do/impact",
      element: <Impact />,
    },
    {
      path: "/what-we-do/clients",
      element: <Clients />,
    },
    {
      path: "/what-we-do/projects",
      element: <Projects />,
    },
    {
      path: "/what-we-do/topics",
      element: <Topics />,
    },
    {
      path: "/what-we-do/regions",
      element: <Regions />,
    },

    {
      path: "/work-with-us",
      element: <Career />,
    },
    {
      path: "/work-with-us/career/:id",
      element: <CareerDetails/>,
    },
    {
      path: "/work-with-us/careers",
      element: <Career />,
    },
    // {
    //   path: "/projects",
    //   element: <Projects />,
    // },
    {
      path: "/project/:id",
      element: <ProjectDetails />,
    },
    // {
    //   path: "/about-us",
    //   element: <Aboutus />,
    // },
    {
      path: "/contact-us",
      element: <Contactus />,
    },
    {
      path: "/privacy-policy",
      element: <PrivacyPolicy />,
    },
  ],
};
