"use client";

import AllBlogCard from "@/app/components/Reusable/AllBlogCard";
import React from "react";

const BlogPage = () => {
  return (
    <>
      <section className="dark:bg-slate-800 bg-slate-50 ">
        <div className="pro_container !pt-10 ">
          <div className="dark:bg_gradient" />
          <div className="dark:text-white space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="md:text-3xl text-2xl font-bold ">All Blogs</h1>
              <p>Jan, 2023</p>
            </div>
          </div>
          <AllBlogCard />
        </div>
      </section>
    </>
  );
};

export default BlogPage;
