import parse from "html-react-parser";
import { useGetPeopleQuery } from "../../../../Redux/whoWeAre/people/peopleApi";

export default function People() {

  const {data} = useGetPeopleQuery();

  const people = data?.data;

  const description = people?.description && parse(people?.description);

  return (
    <section className="container py-12">
      <h3 className="border-b pb-3 hidden md:block">Who We Are</h3>
      <div className="mt-6 md:w-[70%] text-center md:text-start">
        <h2 className="text-3xl font-bold">Our People</h2>
        <div className="tracking-wider">
          {description}
        </div>
      </div>
    </section>
  )
}
