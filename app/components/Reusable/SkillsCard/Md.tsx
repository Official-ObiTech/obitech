import ReusableCard from "../Card";
import {
  SiPython,
  SiJavascript,
  SiMongodb,
  SiNuxtdotjs,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiFlask,
  SiDjango,
  SiTypescript,
  SiGithub,
} from "react-icons/si";
import {
  RiNextjsLine,
  RiReactjsLine,
  RiVuejsFill,
  RiTailwindCssFill,
} from "react-icons/ri";

export default function Md() {
  const skills = [
    { icon: <SiPython />, text: "Python" },
    { icon: <SiJavascript />, text: "JavaScript" },
    { icon: <RiNextjsLine />, text: "Next Js" },
  ];

  const skills1 = [
    { icon: <RiReactjsLine />, text: "React Js" },
    { icon: <SiMongodb />, text: "Mongodb" },
    { icon: <RiVuejsFill />, text: "Vue Js" },
  ];

  const skills2 = [
    { icon: <SiNuxtdotjs />, text: "Nuxt Js" },
    { icon: <SiHtml5 />, text: "html  " },
    { icon: <SiCss3 />, text: "Css" },
  ];
  const skills3 = [
    { icon: <RiTailwindCssFill />, text: "TailwindCss" },
    { icon: <SiPostgresql />, text: "Postgresql" },
    { icon: <SiFlask />, text: "Flask" },
  ];
  const skills4 = [
    { icon: <SiDjango />, text: "Django " },
    { icon: <SiTypescript />, text: "Typescript " },
    { icon:   <SiGithub />, text: "Github " },
  ];


  return (
    <>
      <div className="md:flex justify-center items-center gap-6 hidden lg:hidden">
        <ReusableCard skills={skills} />
      </div>

      <div className="md:flex justify-center items-center gap-6 hidden lg:hidden">
        <ReusableCard skills={skills1} />
      </div>

      <div className="md:flex justify-center items-center gap-6 hidden lg:hidden">
        <ReusableCard skills={skills2} />
      </div>

      <div className="md:flex justify-center items-center gap-6 hidden lg:hidden">
        <ReusableCard skills={skills3} />
      </div>

      <div className="md:flex justify-center items-center gap-6 hidden lg:hidden">
        <ReusableCard skills={skills4} />
      </div>
    </>
  );
}
