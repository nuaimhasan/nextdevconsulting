// import { useEffect } from "react";
// import { useGetPrivacyQuery } from "../../../Redux/privacy/privacyApi";
// import parse from "html-react-parser";

export default function PrivacyPolicy() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  // const { data: privacy } = useGetPrivacyQuery();
  // const data = privacy?.data;

  // const description = parse(data?.description || "");

  // console.log(description);

  return (
    <section className="py-14">
      <div className="container">
        <div>
          <div className="mt-4">
            {/* {Array.isArray(description) ? (
              description.map((item, index) => <div key={index}>{item}</div>)
            ) : (
              <div>{description}</div>
            )} */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            alias. Deleniti quia, corrupti culpa ex animi laborum impedit
            excepturi, voluptatum incidunt quisquam fugiat inventore cupiditate
            quis commodi saepe, asperiores modi.lorem Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Deserunt optio nisi quibusdam
            qui, porro quos eos, quae alias aliquam nemo veritatis iusto neque
            amet ut, laudantium dolores harum animi cum! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Sed facilis officia aliquid
            necessitatibus nam porro sequi alias laudantium quisquam vitae,
            maiores voluptatum quis. Facere asperiores illum non id odit
            molestias? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Omnis, fugit consequuntur nemo ducimus vel provident officiis vitae
            ipsa suscipit dolorem, ipsam quas nostrum sint nam dolore. Sunt,
            sint recusandae? Esse. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Doloremque repellendus, est fugit nostrum,
            accusantium nihil doloribus excepturi repellat perferendis
            blanditiis assumenda necessitatibus? Nemo quas voluptates quo est
            voluptatem odio ea!br <br /> <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
            labore deserunt, tempore ipsum odit dolor dolorum. Perferendis
            veritatis minima distinctio, dolore accusantium beatae illo nisi
            fuga provident blanditiis nostrum dolor.
          </div>
        </div>
      </div>
    </section>
  );
}
