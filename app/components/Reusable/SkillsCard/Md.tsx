import ReusableCard from "../Card";

export default function Md() {
  const skills = [
    { icon: "icom", text: "Python" },
    { icon: "icom", text: "JavaScript" },
    { icon: "icom", text: "Next Js" },
  ];

  const skills1 = [
    { icon: "icom", text: "React Js" },
    { icon: "icom", text: "Mongodb" },
    { icon: "icom", text: "Vue Js" },
  ];

  const skills2 = [
    { icon: "icom", text: "Nuxt Js" },
    { icon: "icom", text: "html  " },
    { icon: "icom", text: "Css" },
  ];
  const skills3 = [
    { icon: "icom", text: "Python" },
    { icon: "icom", text: "JavaScript" },
    { icon: "icom", text: "Next Js" },
  ];
  const skills4 = [
    { icon: "icom", text: "Python" },
    { icon: "icom", text: "JavaScript" },
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
