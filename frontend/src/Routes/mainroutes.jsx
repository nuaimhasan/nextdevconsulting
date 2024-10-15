import MainLayout from "../Layout/MainLayout";
import Career from "../Pages/Main/Career/Career";
// import Aboutus from "../Pages/Main/Aboutus/Aboutus";
import Contactus from "../Pages/Main/Contactus/Contactus";
import Home from "../Pages/Main/Home/Home";
import NewsInsights from "../Pages/Main/NewsInsights/NewsInsights";
import Clients from "../Pages/Main/WhatWeDo/Clients/Clients";
import Impact from "../Pages/Main/WhatWeDo/Impact/Impact";
import Projects from "../Pages/Main/WhatWeDo/Projects/Projects";
import Regions from "../Pages/Main/WhatWeDo/Regions/Regions";
import Evalution from "../Pages/Main/WhatWeDo/Services/Evalution/Evalution";
import Services from "../Pages/Main/WhatWeDo/Services/Services";
import Strategy from "../Pages/Main/WhatWeDo/Services/Strategy/Strategy";
import Topics from "../Pages/Main/WhatWeDo/Topics/Topics";
import WhatWeDo from "../Pages/Main/WhatWeDo/WhatWeDo";
import History from "../Pages/Main/WhoWeAre/History/History";
import Leadership from "../Pages/Main/WhoWeAre/Leadership/Leadership";
import Offices from "../Pages/Main/WhoWeAre/Ofiices/Offices";
import People from "../Pages/Main/WhoWeAre/People/People";
import Policies from "../Pages/Main/WhoWeAre/Policies/Policies";
import Values from "../Pages/Main/WhoWeAre/Values/Values";
import WhoWeAre from "../Pages/Main/WhoWeAre/WhoWeAre";
import PrivacyPolicy from "../Pages/Main/PrivacyPolicy/PrivacyPolicy";
import ProjectDetails from "../Pages/Main/ProjectDetails/ProjectDetails";
// import Projects from "../Pages/Main/Projects/Projects";

export const mainRoutes = {
  id: "main",
  path: "/",
  element: <MainLayout />,
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
      element: <Career/> ,
    },
    {
      path: "/work-with-us/careers",
      element: <Career/> ,
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
