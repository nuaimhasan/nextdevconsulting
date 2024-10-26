import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Subscribe from "../Components/Home/Subscribe/Subscribe";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Subscribe />
      <Footer />
    </>
  );
}
