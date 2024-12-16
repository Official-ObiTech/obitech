import Image from "next/image";
import ReusbleButton from "../Reusable/ReusbleButton";
import { FiArrowDownRight } from "react-icons/fi";
import Link from "next/link";

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
            I am a highly motivated, tech-savvy Full-Stack Developer with years
            of experience in creating, building, and launching web, desktop, and
            mobile apps used by thousands of people. These apps improve user
            experience and help grow businesses. My career in software
            development started as a front-end engineer in 2022, and since then,
            I have worked hard to develop my skills and move into a full-stack
            developer role
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
          <Link href="/contact" prefetch>
            <ReusbleButton title={"Hire Me "} className={"max-sm:w-full mt-6 "} />
          </Link>
        </div>
      </div>
    </>
  );
}
