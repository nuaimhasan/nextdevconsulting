export default function Leadership() {
  return (
    <section className="container py-12">
      <h3 className="hidden border-b pb-3 md:block">Who We Are</h3>
      <div className="mt-6 text-center md:w-[70%] md:text-start">
        <h2 className="text-3xl font-bold">Leadership</h2>
        <p className="tracking-wider">
          Our values are the foundation of our company. They define who we are
          and how we work. They are the guiding principles that help us make
          decisions, build relationships, and achieve our goals.
          <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          suscipit cum libero aperiam! Tempore, officia vitae! Magni distinctio
          totam optio, ratione eveniet odio? Sint voluptates atque doloribus
          libero ut deleniti.
          <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam culpa
          nulla magni laboriosam aperiam veritatis autem omnis facilis dolore.
          Voluptatem nisi quaerat, dolore necessitatibus magni enim voluptas
          expedita! Voluptatem, officia?
        </p>
      </div>
      <div className="mt-5 text-center md:text-start">
        <h3 className="text-2xl font-bold text-secondary">
          Our Leadership Team
        </h3>
        <p className="mt-3 md:w-[70%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet nihil
          rerum quaerat quasi ipsam fugiat enim earum, esse, sit veniam illum,
          nemo quis ipsum numquam adipisci ratione! Non, ea culpa!
        </p>

        <div className="mt-8 grid gap-7 border-t pt-12 sm:grid-cols-3 md:grid-cols-4">
          <div className="round overflow-hidden border text-center shadow">
            <img
              className="w-full duration-300 hover:scale-105"
              src="/images/leader.jpg"
              alt=""
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold leading-4">
                Chris Bartner
              </h3>
              <h5 className="mt-2.5">Partner</h5>
            </div>
          </div>
          <div className="round overflow-hidden border text-center shadow">
            <img
              className="w-full duration-300 hover:scale-105"
              src="/images/leader.jpg"
              alt=""
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold leading-4">
                Chris Bartner
              </h3>
              <h5 className="mt-2.5">Partner</h5>
            </div>
          </div>
          <div className="round overflow-hidden border text-center shadow">
            <img
              className="w-full duration-300 hover:scale-105"
              src="/images/leader.jpg"
              alt=""
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold leading-4">
                Chris Bartner
              </h3>
              <h5 className="mt-2.5">Partner</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
