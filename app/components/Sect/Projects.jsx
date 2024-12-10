import { Card, CardBody, Image } from "@nextui-org/react";
// import  from "next/image";
import React from "react";
import { FiArrowDownRight } from "react-icons/fi";

export default function Projects() {
  const projectsLang = [
    {
      text: "IOS Development",
      gradient: false,
    },
    {
      text: "Website Development",
      gradient: true,
    },
    {
      text: "Android Development",
      gradient: false,
    },
    {
      text: "Backend Development",
      gradient: false,
    },
    {
      text: "Webflow Development",
      gradient: false,
    },
    {
      text: "Website Development",
      gradient: false,
    },
  ];
  return (
    <>
      <div className="pro_container  ">
        <div className="bg_gradient" />
        <h1 className="header ">
          My Projects
          <span>
            <FiArrowDownRight className="text-pink-500 md:mt-6" />
          </span>
        </h1>

        <div className="relative w-full  lg:h-20 md:flex  items-center overflow-hidden font-semibold lg:text-xl text-lg">
          <div className=" h-full   border border-gray-500  md:w-[250px] lg:w-[350px] w-[150px] hidden lg:block" />

          {projectsLang.map((items, index) => (
            <div
              key={index}
              className={`proj_item  ${items.gradient && "color"}`}
            >
              {items.text.split(" ").map((item, i) => (
                <React.Fragment key={i}>
                  {item}
                  <br />
                </React.Fragment>
              ))}
              {items.gradient && (
                <div className="absolute top-0 left-0 bg-white z-10 w-3 h-3 rounded-full" />
              )}
            </div>
          ))}

          <div className="h-full   border border-gray-500  md:w-[250px] lg:w-[350px] w-[150px] hidden lg:block" />
        </div>

        <div className="flex justify-between">
          <Card>
            <CardBody>
              <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                <div className="relative col-span-6 md:col-span-4">
                  <Image
                    alt="Album cover"
                    className="object-cover"
                    height={200}
                    shadow="md"
                    src="https://nextui.org/images/album-cover.png"
                    width="100%"
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* <div className="md:flex items-center justify-center gap-14 md:px-24 px-8 ">
          <div className="flex justify-center relative">
            <div className="relative group overflow-hidden">
              <div className="w-60 h-60 rounded-full overflow-hidden mt-4">
                <Image
                  src="/code.webp"
                  alt="about image"
                  width={900}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-blue-500/50 z-50 rounded-full flex items-center justify-center opacity-100 transition-opacity duration-300 group-hover:opacity-0 mt-4 text-white font-semibold text-lg gap-4 ">
                My Project <span>icon</span>
              </div>
            </div>
            <p className="absolute left-0 font-semibold">May 2024</p>
          </div>
          <div className="flex justify-center relative">
            <div className="relative group overflow-hidden">
              <div className="w-60 h-60 rounded-full overflow-hidden mt-4">
                <Image
                  src="/code.webp"
                  alt="about image"
                  width={900}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-blue-500/50 z-50 rounded-full flex items-center justify-center opacity-100 transition-opacity duration-300 group-hover:opacity-0 mt-4 text-white font-semibold text-lg gap-4 ">
                My Project <span>icon</span>
              </div>
            </div>
            <p className="absolute left-0 font-semibold">May 2024</p>
          </div>
          <div className="flex justify-center relative">
            <div className="relative group overflow-hidden">
              <div className="w-60 h-60 rounded-full overflow-hidden mt-4">
                <Image
                  src="/code.webp"
                  alt="about image"
                  width={900}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-blue-500/50 z-50 rounded-full flex items-center justify-center opacity-100 transition-opacity duration-300 group-hover:opacity-0 mt-4 text-white font-semibold text-lg gap-4 ">
                My Project <span>icon</span>
              </div>
            </div>
            <p className="absolute left-0 font-semibold">May 2024</p>
          </div>
        </div>
        <div className="md:flex items-center justify-center gap-14 md:px-24 px-8 ">
          <div className="flex justify-center relative">
            <div className="relative group overflow-hidden">
              <div className="w-60 h-60 rounded-full overflow-hidden mt-4">
                <Image
                  src="/code.webp"
                  alt="about image"
                  width={900}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-blue-500/50 z-50 rounded-full flex items-center justify-center opacity-100 transition-opacity duration-300 group-hover:opacity-0 mt-4 text-white font-semibold text-lg gap-4 ">
                My Project <span>icon</span>
              </div>
            </div>
            <p className="absolute left-0 font-semibold">May 2024</p>
          </div>
          <div className="flex justify-center relative">
            <div className="relative group overflow-hidden">
              <div className="w-60 h-60 rounded-full overflow-hidden mt-4">
                <Image
                  src="/code.webp"
                  alt="about image"
                  width={900}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-blue-500/50 z-50 rounded-full flex items-center justify-center opacity-100 transition-opacity duration-300 group-hover:opacity-0 mt-4 text-white font-semibold text-lg gap-4 ">
                My Project <span>icon</span>
              </div>
            </div>
            <p className="absolute left-0 font-semibold">May 2024</p>
          </div>
          <div className="flex justify-center relative">
            <div className="relative group overflow-hidden">
              <div className="w-60 h-60 rounded-full overflow-hidden mt-4">
                <Image
                  src="/code.webp"
                  alt="about image"
                  width={900}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-blue-500/50 z-50 rounded-full flex items-center justify-center opacity-100 transition-opacity duration-300 group-hover:opacity-0 mt-4 text-white font-semibold text-lg gap-4 ">
                My Project <span>icon</span>
              </div>
            </div>
            <p className="absolute left-0 font-semibold">May 2024</p>
          </div>
        </div> */}
      </div>
    </>
  );
}
