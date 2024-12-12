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

export default function Lg() {
  const skills = [
    { icon: <SiPython />, text: "Python" },
    { icon: <SiJavascript />, text: "JavaScript" },
    { icon: <RiNextjsLine />, text: "Next Js" },
    { icon: <RiReactjsLine />, text: "React Js" },
    { icon: <SiMongodb />, text: "Mongodb" },
  ];

  const skills2 = [
    { icon: <RiVuejsFill />, text: "Vue Js" },
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
  ];
  const skills5 = [{ icon: <SiGithub />, text: "Github " }];


  return (
    <>
      <div className="lg:flex justify-center items-center gap-6 hidden">
        <ReusableCard skills={skills} />
      </div>

      <div className="lg:flex justify-center items-center gap-6 hidden">
        <ReusableCard skills={skills2} />
      </div>

      <div className="lg:flex justify-center items-center gap-6 hidden">
        <ReusableCard skills={skills3} />
      </div>

      <div className="lg:flex justify-center items-center gap-6 hidden">
        <ReusableCard skills={skills4} />
      </div>

      <div className="lg:flex justify-center items-center gap-6 hidden">
        <ReusableCard skills={skills5} />
      </div>
    </>
  );
}
