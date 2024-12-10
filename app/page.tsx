"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import MappedLinks from "./components/MapedLinks";
import ReusbleButton from "./components/Reusable/ReusbleButton";
import SectHeader from "./components/Sect/Header";
import SectLanguages from "./components/Sect/Languages";
import SectExperience from "./components/Sect/Experience";
import SectSkills from "./components/Sect/Skills";
import SectProjects from "./components/Sect/Projects";
import SectBlog from "./components/Sect/Blog";
import SectHireMe from "./components/Sect/Hireme";
import SectHandle from "./components/Sect/Handle";
import Footer from "./components/Footer";
// import { CgMenuHotdog } from "react-icons/cg";
// import { IoSunny } from "react-icons/io5";
// import { GiMoonBats } from "react-icons/gi";

export default function Home() {
  // To prevent SSR issues
  const [mounted, setMounted] = useState(false);

  // Assume you have a context that handles theme switching
  const { theme, setTheme } = useTheme();

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
    // Once the component is mounted, update the state
    setMounted(true);
  }, []);

  // Prevent rendering until the component is mounted
  if (!mounted) return null;

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Update theme based on checkbox state
    setTheme(event.target.checked ? "dark" : "light");
  };

  // import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/dropdown";

  return (
    <>
      <div className="main_container space-y-8 !bg-black  ">
        <section className="about_bg ">
          <div className="name">
            <h1 className="md:text-3xl text-2xl font-bold">
              <Link href="/">ObiTech</Link>
            </h1>
            <div className="flex gap-8 items-center">
              <div className="hidden md:flex  ">
                <MappedLinks links={links} />

                <div className="darkmode ">
                  <label className="switch">
                    <input
                      type="checkbox"
                      // Control the checkbox based on the current theme
                      checked={theme === "dark"}
                      // Toggle theme when checked
                      onChange={handleCheckboxChange}
                    />
                    <span className="slider_header"></span>
                  </label>
                </div>

                <ReusbleButton title={"Hire Me"} />
              </div>
              <div className="md:hidden">
                {/* <CgMenuHotdog size={24} /> */}
              </div>
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

        <section
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
        </section>
      </div>
    </>
  );
}
