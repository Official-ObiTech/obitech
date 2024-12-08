import Card from "@/app/components/Reusbal/Card";
// import SectSkills from "./components/Sect/Skills";

export default function Skills() {
  const skills1 = [
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
      <div className="text-center space-y-6 container mx-auto relative md:px-20 px-4">
        <div className="absolute bg_blur w-96 h-96 bg-gradient-to-bl from-purple-500 to-pink-300 -bottom-20 left-0 hidden md:block" />
        <h1 className="header">
          My Skills <span>icon</span>
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 px-14 gap-6">
          <Card skills={skills1} />
        </div>

        <div className="px-36">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
            <Card skills={skills2} />
          </div>
        </div>

        <div className="px-52">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
            <Card skills={skills3} />
          </div>
        </div>

        <div className="px-52">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 ">
            <Card skills={skills4} />
          </div>
        </div>

        <div className="flex justify-center items-center gap-6">
          <div className=" rounded-xl w-36 shadow-sm dark:bg-slate-800 bg-slate-300/25 py-6 text-xl font-semibold">
            <span>icon</span>
            <p>vuejs</p>
          </div>
          <div className=" rounded-xl w-36 shadow-sm dark:bg-slate-800 bg-slate-300/25 py-6 text-xl font-semibold">
            <span>icon</span>
            <p>nuxtjs</p>
          </div>
          <div className="rounded-xl w-36 shadow-sm dark:bg-slate-800 bg-slate-300/25 py-6 text-xl font-semibold">
            <span>icon</span>
            <p>html & css</p>
          </div>
          <div className="rounded-xl w-36 shadow-sm dark:bg-slate-800 bg-slate-300/25 py-6 text-xl font-semibold">
            <span>icon</span>
            <p>html & css</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-6">
          <div className=" rounded-xl w-32 shadow-sm dark:bg-slate-800 bg-slate-300/25 py-6 text-xl font-semibold">
            <span>icon</span>
            <p>mysql</p>
          </div>
          <div className=" rounded-xl w-32 shadow-sm dark:bg-slate-800 bg-slate-300/25 py-6 text-xl font-semibold">
            <span>icon</span>
            <p>typescript</p>
          </div>
          <div className=" rounded-xl w-32 shadow-sm dark:bg-slate-800 bg-slate-300/25 py-6 text-xl font-semibold">
            <span>icon</span>
            <p>tailwindcss</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-6">
          <div className=" rounded-xl w-32 shadow-sm dark:bg-slate-800 bg-slate-300/25 py-6 text-xl font-semibold">
            <span>icon</span>
            <p>mysql</p>
          </div>
          <div className=" rounded-xl w-32 shadow-sm dark:bg-slate-800 bg-slate-300/25 py-6 text-xl font-semibold">
            <span>icon</span>
            <p>typescript</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-6">
          <div className=" rounded-xl w-32 shadow-sm dark:bg-slate-800 bg-slate-300/25 py-6 text-xl font-semibold">
            <span>icon</span>
            <p>mysql</p>
          </div>
        </div>

        <div className=" rounded-xl w-32 shadow-sm dark:bg-slate-800 bg-slate-300/25 p-4 text-xl font-semibold absolute bottom-0 right-52 grid grid-cols-3 gap-2">
          <div className="w-6 h-6 rounded-full dark:bg-gray-500 bg-gray-400 dark:hover:bg-gray-300 hover:bg-purple-600" />
          <div className="w-6 h-6 rounded-full dark:bg-gray-500 bg-gray-400 dark:hover:bg-gray-300 hover:bg-purple-600" />
          <div className="w-6 h-6 rounded-full dark:bg-gray-500 bg-gray-400 dark:hover:bg-gray-300 hover:bg-purple-600" />
          <div className="w-6 h-6 rounded-full dark:bg-gray-500 bg-gray-400 dark:hover:bg-gray-300 hover:bg-purple-600" />
          <div className="w-6 h-6 rounded-full dark:bg-gray-500 bg-gray-400 dark:hover:bg-gray-300 hover:bg-purple-600" />
          <div className="w-6 h-6 rounded-full dark:bg-gray-500 bg-gray-400 dark:hover:bg-gray-300 hover:bg-purple-600" />
          <div className="w-6 h-6 rounded-full dark:bg-gray-500 bg-gray-400 dark:hover:bg-gray-300 hover:bg-purple-600" />
          <div className="w-6 h-6 rounded-full dark:bg-gray-500 bg-gray-400 dark:hover:bg-gray-300 hover:bg-purple-600" />
          <div className="w-6 h-6 rounded-full dark:bg-gray-500 bg-gray-400 dark:hover:bg-gray-300 hover:bg-purple-600" />
        </div>
      </div>
    </>
  );
}
