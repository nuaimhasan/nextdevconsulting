import { Link } from "react-router-dom";
import "../../../assets/css/hero.css";
import { useGetBannerQuery } from "../../../Redux/banner/bannerApi";

export default function Hero() {
  const { data: bannerData, isLoading: isBannerLoading } = useGetBannerQuery();

  const banner = bannerData?.data;

  if (isBannerLoading) return <div className="h-[55vh]"></div>;

  return (
    <section>
      <div className="grid-cols-2 md:grid">
        <div className="order-2 flex items-center justify-center md:justify-end bg-secondary pr-5 md:order-1">
          <div className="w-[75%] animate-slideInLeft py-6 text-white md:py-0">
            <h3 className="text-xs font-normal md:text-sm">{banner?.title}</h3>
            <h1 className="mt-2 text-lg font-bold md:text-3xl">
              {banner?.subtitle}
            </h1>
            <h2 className="mb-7 mt-3 text-sm md:mt-5 md:text-base">
              {banner?.description}
            </h2>
            <Link className="orange_btn" to="/news-insights">
              Read More
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img
            className="w-full"
            src={`${import.meta.env.VITE_BACKEND_URL}/${banner?.image}`}
            alt="Banner"
          />
        </div>
      </div>
    </section>
  );
}
