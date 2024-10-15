// import Features from "../../../Components/Home/Features/Features";
// import Gallery from "../../../Components/Home/Gallery/Gallery";
import Hero from "../../../Components/Home/Hero/Hero";
import ProjectHighlight from "../../../Components/Home/ProjectHighlight/ProjectHighlight";
// import WhyChoose from "../../../Components/Home/WhyChoose/WhyChoose";
import { useEffect } from "react";
import News from "../../../Components/Home/News/News";
import AboutUs from "../../../Components/Home/AboutUs/AboutUs";
import Subscribe from "../../../Components/Home/Subscribe/Subscribe";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <News />
      <AboutUs/>
      {/* <Features /> */}
      {/* <WhyChoose /> */}
      <ProjectHighlight />
      <Subscribe/>
      {/* <Gallery /> */}
    </>
  );
}
