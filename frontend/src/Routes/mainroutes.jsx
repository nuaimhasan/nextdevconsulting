import { lazy, Suspense } from "react";
import MainLayout from "../Layout/MainLayout";

// Lazy-loaded components
import Home from "../Pages/Main/Home/Home";
import Spinner from "../Components/Spinner/Spinner";
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
      path: "/what-we-do",
      element: <WhatWeDo />,
    },
    {
      path: "/what-we-do/services",
      element: <Services />,
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
      path: "/what-we-do/services",
      element: <Services />,
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
