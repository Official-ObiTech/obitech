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
      id: "1",
      title: "Master Builder",
      date: "2023-10-1",
      category: "NuxtJs, VueJs",
      image: "app.skaldongroup.com.png",
      alt: "First project",
      progressLabel: "In Progress",
      progressValue: 75,
      description:
        "This application helps manage various parts of the company’s daily operations, such as construction projects, supplies, inventory, payments, and audits. As a result, it improved construction efficiency by providing real-time tracking.",
      to: "https://app.skaldongroup.com/",
    },
    {
      id: "2",
      title: "Obitech Blog",
      date: "2024-12-14",
      category: "NextJs, ReactJs",
      image: "Obitech Blog Website.png",
      alt: "obitech-blog-website",
      progressLabel: "Completed",
      progressValue: 100,
      description:
        "I led the design of the database schema. By integrating Tailwind CSS, I made sure the website was fully responsive across devices. I incorporated Auth.js for secure authentication and AOS for smooth CSS animations....... ",
      to: "https://obitech-blog-website.vercel.app/",
    },
  ];

  // obitech-blog-backend.vercel.app/login

  https: return (
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

        <Link href="/project" className="cursor-pointer ">
          <ReusbleButton
            title="See More Projects"
            className="max-sm:w-full mt-8"
          />
        </Link>
      </div>
    </>
  );
}
