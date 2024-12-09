import ReusableCard from "../Card";

export default function Sm() {
  const skills = [
    { icon: "icom", text: "Python" },
    { icon: "icom", text: "JavaScript" },
  ];

  const skills1 = [
    { icon: "icom", text: "Next Js" },
    { icon: "icom", text: "React Js" },
  ];

  const skills2 = [
    { icon: "icom", text: "Mongodb" },
    { icon: "icom", text: "Vue Js" },
  ];

  const skills3 = [
    { icon: "icom", text: "Nuxt Js" },
    { icon: "icom", text: "html  " },
  ];

  const skills4 = [
    { icon: "icom", text: "Css" },
    { icon: "icom", text: "Python" },
  ];
  const skills5 = [
    { icon: "icom", text: "JavaScript" },
    { icon: "icom", text: "Next Js" },
  ];
  const skills6 = [
    { icon: "icom", text: "Python" },
    { icon: "icom", text: "JavaScript" },
  ];
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
        <div className=" rounded-xl w-32 shadow-sm dark:bg-slate-800 bg-slate-300/25 py-6 text-xl font-semibold">
          <span>icon</span>
          <p>mysql</p>
        </div>
      </div>
    </>
  );
}
