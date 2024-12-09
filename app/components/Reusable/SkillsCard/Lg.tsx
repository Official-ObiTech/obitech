import ReusableCard from "../Card";

export default function Lg() {
  const skills = [
    { icon: "icom", text: "Python" },
    { icon: "icom", text: "JavaScript" },
    { icon: "icom", text: "Next Js" },
    { icon: "icom", text: "React Js" },
    { icon: "icom", text: "Mongodb" },
  ];

  const skills2 = [
    { icon: "icom", text: "Vue Js" },
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
        <div className=" rounded-xl w-32 shadow-sm dark:bg-slate-800 bg-slate-300/25 py-6 text-xl font-semibold">
          <span>icon</span>
          <p>mysql</p>
        </div>
      </div>
    </>
  );
}
