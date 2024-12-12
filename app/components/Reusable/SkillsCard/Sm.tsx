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

export default function Sm() {
  const skills = [
    { icon: <SiPython />, text: "Python" },
    { icon: <SiJavascript />, text: "JavaScript" },
  ];

  const skills1 = [
    { icon: <RiNextjsLine />, text: "Next Js" },
    { icon: <RiReactjsLine />, text: "React Js" },
  ];

  const skills2 = [
    { icon: <SiMongodb />, text: "Mongodb" },
    { icon: <RiVuejsFill />, text: "Vue Js" },
  ];

  const skills3 = [
    { icon: <SiNuxtdotjs />, text: "Nuxt Js" },
    { icon: <SiHtml5 />, text: "html  " },
  ];

  const skills4 = [
    { icon: <SiCss3 />, text: "Css" },
    { icon: <RiTailwindCssFill />, text: "TailwindCss" },
  ];
  const skills5 = [
    { icon: <SiPostgresql />, text: "Postgresql" },
    { icon: <SiFlask />, text: "Flask" },
  ];
  const skills6 = [
    { icon: <SiDjango />, text: "Django " },
    { icon: <SiTypescript />, text: "Typescript " },
  ];
  const skills7 = [{ icon: <SiGithub />, text: "Github " }];
  
  return (
    <>
      <div className="flex justify-center items-center gap-6 md:hidden">
        <ReusableCard skills={skills} />
      </div>

      <div className="flex justify-center items-center gap-6 md:hidden">
        <ReusableCard skills={skills1} />
      </div>

      <div className="flex justify-center items-center gap-6 md:hidden">
        <ReusableCard skills={skills2} />
      </div>

      <div className="flex justify-center items-center gap-6 md:hidden">
        <ReusableCard skills={skills3} />
      </div>

      <div className="flex justify-center items-center gap-6 md:hidden">
        <ReusableCard skills={skills4} />
      </div>

      <div className="flex justify-center items-center gap-6 md:hidden">
        <ReusableCard skills={skills5} />
      </div>

      <div className="flex justify-center items-center gap-6 md:hidden">
        <ReusableCard skills={skills6} />
      </div>
      <div className="flex justify-center items-center gap-6 md:hidden">
        <ReusableCard skills={skills7} />
      </div>
    </>
  );
}
