import Image from "next/image";
import ReusbleButton from "../Reusable/ReusbleButton";
import { FiArrowDownRight } from "react-icons/fi";

export default function Experience() {
  const stats = [
    { title: "Project Completed", number: 210 },
    { title: "Years Experience", number: 10 },
  ];
  return (
    <>
      <div className="experience_contanier  ">
        <div className="experience_bg_anim " />
        <div className="flex justify-center md:w-2/4">
          <div className="Image_contanier">
            <Image
              src="/code.webp"
              alt="about image"
              width={900}
              height={900}
              className="w-full h-full "
            />
          </div>
        </div>
        <div className="lg:w-1/4 space-y-8 z-30">
          <p className="text_contanier md:block flex">
            <span className="md:block mr-3">About</span>
            <span className="flex gap-2">
              Me <FiArrowDownRight className="text-pink-500 md:mt-2" />
            </span>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus earum odit impedit sapiente aspernatur ad temporibus,
            rem quasi quia tempora fugit molestias, vero eum iusto hic, fugiat
            vitae labore dolores.
          </p>
          <div className="flex justify-between items-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <h2 className="text-4xl font-semibold font-serif">
                  {stat.number}
                  <span className="text-pink-500">+</span>
                </h2>
                <p className="text-gray-700 dark:text-gray-300  text-sm font-semibold">
                  {stat.title}
                </p>
              </div>
            ))}
          </div>

          <ReusbleButton title={"Hire Me "} className={"max-sm:w-full "} />
        </div>
      </div>
    </>
  );
}
