"use client";
"use client";
"use client";
"use client";
"use client";
"use client";
"use client";
"use client";
"use client";
"use client";
"use client";

import * as React from "react";
import dynamic from "next/dynamic";

const SectLanguages = dynamic(() => import("./components/Sect/Languages"));
const SectExperience = dynamic(() => import("./components/Sect/Experience"));
const SectSkills = dynamic(() => import("./components/Sect/Skills"));
const SectProjects = dynamic(() => import("./components/Sect/Projects"));
const SectBlog = dynamic(() => import("./components/Sect/Blog"));
const SectHireMe = dynamic(() => import("./components/Sect/Hireme"));
const SectHandle = dynamic(() => import("./components/Sect/Handle"));
const SectHeader = dynamic(() => import("./components/Sect/Header"));

export default function Home() {
  return (
    <>
      <div className="main_container  ">
        <section className="about_bg !pt-0">
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
          className=" dark:bg-slate-900 bg-slate-50  py-12  "
        >
          <SectBlog />
        </section>

        <section
          id="Contact Me"
          className=" dark:bg-slate-900 bg-slate-50 lg:px-20 px-8 md:py-24 py-8"
        >
          <SectHireMe />
        </section>

        <section
          id="Social Links"
          className=" about_bg !md:pb-0 !pb-0 md:px-24 px-8 mx-auto"
        >
          <SectHandle />
        </section>
      </div>
    </>
  );
}
