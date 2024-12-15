import ReusbleButton from "../Reusable/ReusbleButton";
import { FiArrowDownRight } from "react-icons/fi";
import ProLanguages from "../Reusable/Languages";
import Link from "next/link";
import ProjectCard from "../Reusable/m/ProjectCard";

export default function Projects() {
  const projectsLang = [
    {
      text: "IOS-Development",
      gradient: false,
    },
    {
      text: "Website-Development",
      gradient: true,
    },
    {
      text: "Android-Development",
      gradient: false,
    },
    {
      text: "Backend-Development",
      gradient: false,
    },
    {
      text: "Webflow-Development",
      gradient: false,
    },
    {
      text: "Website-Development",
      gradient: false,
    },
  ];

  const cardData = [
    {
      id: 1,
      title: "Title",
      date: "2024-12-14",
      category: "Technology",
      image: "https://nextui.org/images/album-cover.png",
      alt: "First project",
      progressLabel: "Completed",
      progressValue: 65,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque molestiae sapiente sit eum, distinctio aspernatur odio rerum enim magni quae neque commodi libero",
    },
    {
      id: 1,
      title: "Title",
      date: "2024-12-14",
      category: "Technology",
      image: "https://nextui.org/images/album-cover.png",
      alt: "First project",
      progressLabel: "Completed",
      progressValue: 65,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque molestiae sapiente sit eum, distinctio aspernatur odio rerum enim magni quae neque commodi libero",
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

          <ProLanguages languages={projectsLang} />

          <div className="h-full   border border-gray-500  md:w-[250px] lg:w-[350px]  hidden lg:block" />
        </div>

        <ProjectCard cardData={cardData} />

        <Link href="/project" className="cursor-pointer">
          <ReusbleButton title="See More Projects" className="max-sm:w-full " />
        </Link>
      </div>
    </>
  );
}
