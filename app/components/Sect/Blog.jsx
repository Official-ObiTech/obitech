// import Image from "next/image";
import { FiArrowDownRight } from "react-icons/fi";
import { Input } from "@nextui-org/react";
import ReusbleButton from "../Reusable/ReusbleButton";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { FaSearchengin } from "react-icons/fa6";
import BlogCard from "../Reusable/m/BlogCard";

export default function Blog() {
  const cardData = [
    {
      id: "1",
      title: "Title",
      date: "2024-12-14",
      avatar: "https://nextui.org/images/breathing-app-icon.jpeg",
      image: "https://nextui.org/images/album-cover.png",
      alt: "First project",
      tag: "Css",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      id: "2",
      title: "Title",
      date: "2024-12-14",
      avatar: "https://nextui.org/images/breathing-app-icon.jpeg",
      image: "https://nextui.org/images/album-cover.png",
      alt: "First project",
      tag: "Html",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
  ];

  return (
    <>
      <div className="relative ">
        <div className="absolute bg_blur w-80 h-80 bg-gradient-to-bl from-purple-500 to-pink-300 -bottom-44 -left-10 max-sm:hidden" />
        <div className="md:flex justify-between items-center  md:px-36 px-10 mx-auto container gap-10">
          <h1 className="header flex w-full">
            My Blog
            <span>
              <FiArrowDownRight className="text-pink-500 md:mt-6" />
            </span>
          </h1>
          <p className="md:w-80 max-sm:text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus earum
          </p>
        </div>
        <hr className="my-10 bg-gray-500  h-0.5 border-none outline-none  " />

        <div className=" py-6 container mx-auto md:px-16 px-8 space-y-10 ">
          <div className="flex justify-between items-center ">
            <ul className="flex items-center justify-center  md:gap-8 gap-4 max-sm:text-sm">
              <li className="flex items-center gap-2">
                All topics
                <IoIosArrowDown className="mt-2" />
              </li>
              <li className="flex items-center gap-2">
                Most popular <IoIosArrowDown className="mt-2" />
              </li>
              <li className="flex items-center gap-2">
                Last year <IoIosArrowDown className="mt-2" />
              </li>
            </ul>
            <div className="max-sm:hidden">
              <Input
                isClearable
                variant="underlined"
                placeholder="Type to search..."
                startContent={
                  <FaSearchengin className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                }
              />
            </div>
          </div>

          <BlogCard cardData={cardData} />

          <Link
            href="/blog"
            className="flex items-center justify-center cursor-pointer"
          >
            <ReusbleButton title="See More Blogs" className="max-sm:w-full" />
          </Link>
        </div>
      </div>
    </>
  );
}
