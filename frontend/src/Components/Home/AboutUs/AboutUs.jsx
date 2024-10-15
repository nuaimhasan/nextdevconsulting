import CountUp from "react-countup";

export default function AboutUs() {
  return (
    <div className="bg-secondary py-12 text-white">
      <div className="container grid px-6 md:grid-cols-2">
        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold md:mb-4 md:text-4xl">About us</h2>
            <p className="text-xs md:text-lg">
              We are a global consultancy united by a strong set of values and a
              common purpose: to help build a more equitable and sustainable
              world for all.
            </p>
          </div>
          <div className="flex space-x-12">
            <div className="text-center md:min-w-36">
              <CountUp
                end={822}
                duration={5}
                className="text-3xl font-bold md:text-4xl"
              />
              <p className="mt-2 md:text-lg">projects</p>
            </div>
            <div className="text-center md:min-w-36">
              <CountUp
                end={195}
                duration={5}
                className="text-3xl font-bold md:text-4xl"
              />
              <p className="mt-2 md:text-lg">clients</p>
            </div>
            <div className="text-center md:min-w-36">
              <CountUp
                end={110}
                duration={5}
                className="text-3xl font-bold md:text-4xl"
              />
              <p className="mt-2 md:text-lg">countries</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center animate-slideInRight">
          <img src="/images/aboutus.png" className="w-[90%]" alt="aboutus" />
        </div>
      </div>
    </div>
  );
}
