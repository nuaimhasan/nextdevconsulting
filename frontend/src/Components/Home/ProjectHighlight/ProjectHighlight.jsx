import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import parse from "html-react-parser";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/autoplay";
import { useGetFeatureProjectsQuery } from "../../../Redux/featureProject/featureProjectApi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ProjectHighlight() {
  const { data } = useGetFeatureProjectsQuery();
  const projects = data?.data;

  const swiperRef = useRef(null);

  return (
    <section className="bg-white py-10">
      <div className="container relative">
        <div className="mb-10 border-b pb-3 text-secondary">
          <h2 className="text-2xl font-medium md:text-5xl">Recent Projects</h2>
        </div>
        <Swiper
          modules={[Navigation, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {projects?.map((project) => (
            <SwiperSlide key={project?._id}>
              <div className="grid grid-cols-2 gap-2 md:gap-10">
                <div>
                  <h2 className="text-xl font-medium uppercase text-neutral md:text-4xl">
                    {project?.title}
                  </h2>
                  <p className="mt-2 text-[8px] text-neutral-content md:text-base">
                    {parse(project?.description)}
                  </p>
                </div>
                <div className="max-h-80 min-h-60 md:max-h-[450px] md:min-h-96">
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}/${project?.image}`}
                    alt="Community Shop"
                    className="mx-auto h-full w-full rounded md:w-[80%]"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="hidden md:block">
          <div className="absolute bottom-10 right-10 z-50 flex gap-4 md:bottom-16 md:left-5">
            <button
              className="rounded-full bg-black/80 p-3 text-white duration-300 hover:bg-black"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <FaArrowLeft />
            </button>
            <button
              className="rounded-full bg-black/80 p-3 text-white duration-300 hover:bg-black"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
