import AllProjectCard from "@/app/components/Reusable/AllProjectCard";
import { Card, CardBody, Image, Progress } from "@nextui-org/react";
import React from "react";

interface progressProps {
  nums: number;
  label: string;
}

const ProjectPage = () => {
  const projectProgress: progressProps[] = [
    { nums: 65, label: "Project Completed" },
    { nums: 45, label: "Project In Progress" },
    { nums: 100, label: "Total Project" },
  ];

  return (
    <>
      <section className="dark:bg-slate-800 bg-slate-50 ">
        <div className="pro_container !pt-10 ">
          <div className="dark:bg_gradient" />
          <div className="dark:text-white space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="md:text-3xl text-xl font-bold ">Projects</h1>
              <p>Jan, 2023</p>
            </div>
            <div className="flex gap-8">
              {projectProgress.map((progress, index) => (
                <div key={index} className="text-start font-bold">
                  <p className="md:text-2xl text-xl font-bold font-serif">
                    {progress.nums}
                  </p>
                  <p className="text-sm font-medium">{progress.label} </p>
                </div>
              ))}
            </div>
          </div>
          <AllProjectCard />
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
