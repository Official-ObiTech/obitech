import { Card, CardBody, Image } from "@nextui-org/react";
import ReusbleButton from "../Reusable/ReusbleButton";
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

        <div className="relative w-full  lg:h-20 md:flex  items-center overflow-hidden font-semibold lg:text-xl ">
          <div className=" h-full   border border-gray-500  md:w-[250px] lg:w-[350px] hidden lg:block" />

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

          <div className="h-full   border border-gray-500  md:w-[250px] lg:w-[350px]  hidden lg:block" />
        </div>

        <div className="md:flex justify-between gap-6 lg:px-16 ">
          <Card
            className="border-none bg-background/60 dark:bg-default-100/50 max-w-[600px] my-4"
            shadow="sm"
          >
            <CardBody>
              <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                <div className="relative col-span-6 lg:col-span-4 md:col-span-12">
                  <Image
                    alt="Album cover"
                    className="object-cover"
                    height={200}
                    shadow="md"
                    src="https://nextui.org/images/album-cover.png"
                    width="100%"
                  />
                </div>

                <div className="flex flex-col col-span-6 md:col-span-8">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-0">
                      <p className="">Technology</p>
                      <h1 className="">Daily Mix</h1>
                      <p className="text-small text-foreground/80">12 Tracks</p>
                      <p className=" mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cumque molestiae sapiente sit eum, distinctio aspernatur
                        odio rerum enim magni quae neque commodi libero
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card
            className="border-none bg-background/60 dark:bg-default-100/50 max-w-[600px] my-4"
            shadow="sm"
          >
            <CardBody>
              <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center  ">
                <div className="relative col-span-6 lg:col-span-4 md:col-span-12">
                  <Image
                    alt="Album cover"
                    className="object-cover"
                    height={200}
                    shadow="md"
                    src="https://nextui.org/images/album-cover.png"
                    width="100%"
                  />
                </div>

                <div className="flex flex-col col-span-6 md:col-span-8">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-0">
                      <p className="">Technology</p>
                      <h1 className="">Daily Mix</h1>
                      <p className="text-small text-foreground/80">12 Tracks</p>
                      <p className=" mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cumque molestiae sapiente sit eum, distinctio aspernatur
                        odio rerum enim magni quae neque commodi libero
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        <ReusbleButton title="See More Projects" className="max-sm:w-full " />
      </div>
    </>
  );
}
