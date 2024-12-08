"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import MappedLinks from "./components/MapedLinks";
import ReusbleButton from "./components/Reusbal/ReusbleButton";
import SectHeader from "./components/Sect/Header";
import SectLanguages from "./components/Sect/Languages";
import SectExperience from "./components/Sect/Experience";
import SectSkills from "./components/Sect/Skills";
// import SectProjects from "./components/Sect/Projects";
// import SectBlog from "./components/Sect/Blog";
// import SectHireMe from "./components/Sect/HireMe";
// import SectHandle from "./components/Sect/Handle";
// import Footer from "./components/Footer";

export default function Home() {
  // const isClient = typeof window !== 'undefined';
  const [mounted, setMounted] = useState(false); // To prevent SSR issues
  const { theme, setTheme } = useTheme(); // Assume you have a context that handles theme switching

  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  useEffect(() => {
    setMounted(true); // Once the component is mounted, update the state
  }, []);

  if (!mounted) return null; // Prevent rendering until the component is mounted

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.checked ? "dark" : "light"); // Update theme based on checkbox state
  };

  return (
    <>
      <div className="main_container space-y-8 !bg-black  ">
        <section className="about_bg ">
          <div className="name">
            <h1 className="md:text-3xl font-bold text-xl">
              <Link href="/">ObiTech</Link>
            </h1>
            <div className="flex gap-8 items-center">
              <div className="hidden lg:flex  ">

              <MappedLinks links={links} />
              </div>

              <div className="darkmode ">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={theme === "dark"} // Control the checkbox based on the current theme
                    onChange={handleCheckboxChange} // Toggle theme when checked
                  />
                  <span className="slider_header"></span>
                </label>
              </div>

              <ReusbleButton title={"Hire Me"} />
            </div>
          </div>

          <SectHeader />
        </section>

        <section
          className="dark:bg-gradient-to-br dark:from-slate-700 bg-gradient-to-br from-slate-50 via-pink-100 to-purple-300   "
          id="Bio Section"
        >
          <SectLanguages />
        </section>

        <section
          className=" md:px-24 px-8 mx-auto  dark:bg-slate-900 bg-slate-50"
          id="About Section"
        >
          <SectExperience />
        </section>

        <section
          id="My Skills"
          className="md:pb-20 pb-8 md:px-24 px-8 py-12 md:py-6 mx-auto  dark:bg-slate-900 bg-slate-50  "
        >
          <SectSkills />
        </section>

        {/* <section
          id="My Project"
          className="md:pb-20 pb-8py-12 md:py-6 mx-auto  dark:bg-slate-900 bg-slate-50  "
        >
          <SectProjects />
        </section>

        <section
          id="My Blog"
          className=" dark:bg-slate-900 bg-slate-50 md:py-24 py-16  "
        >
          <SectBlog />
        </section>

        <section
          id="Contact Me"
          className=" dark:bg-slate-900 bg-slate-50   md:px-24 px-8 md:py-24 py-8"
        >
          <SectHireMe />
        </section>

        <section
          id="Social Links"
          className=" about_bg !md:pb-0 !pb-0 md:px-24 px-8 mx-auto"
        >
          <SectHandle />
        </section>

        <section
          id="Footer"
          className=" dark:bg-slate-900 bg-slate-50 py-10   "
        >
          <Footer />
        </section> */}
      </div>
    </>
  );
}
