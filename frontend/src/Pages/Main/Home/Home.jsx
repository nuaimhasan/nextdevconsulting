// import Features from "../../../Components/Home/Features/Features";
// import Gallery from "../../../Components/Home/Gallery/Gallery";
import Hero from "../../../Components/Home/Hero/Hero";
import ProjectHighlight from "../../../Components/Home/ProjectHighlight/ProjectHighlight";
// import WhyChoose from "../../../Components/Home/WhyChoose/WhyChoose";
import { useEffect } from "react";
import News from "../../../Components/Home/News/News";
import AboutUs from "../../../Components/Home/AboutUs/AboutUs";
import Mission from "../../../Components/Home/Mission/Mission";
import Services from "../../../Components/Home/Services/Services";
import Roster from "../../../Components/Home/Roster/Roster";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <Mission />
      <Services />
      <News />
      <AboutUs />
      <ProjectHighlight />
      <Roster />
    </>
  );
}
