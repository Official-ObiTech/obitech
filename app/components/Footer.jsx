import Link from "next/link";
import MappedLinks from "./MapedLinks";
import MappedLinks from "./MapedLinks";
import MappedLinks from "./MapedLinks";


export default function Footer() {
  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Projects",
      href: "/project",
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
  return (
    <>
      <div className="py-8 md:px-24 px-8 container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/" className="cursor-pointer">
            <h1 className="md:text-3xl text-2xl font-bold">ObiTech</h1>
          </Link>

          <MappedLinks links={links} className="hidden md:flex" />
        </div>
        <hr className=" border-none bg-purple-300 my-4 dark:bg-gray-300 h-px rounded-full" />
        <div className="md:flex justify-between items-center text-center text-gray-500 dark:text-gray-400">
          <p className="text-xs">
            &copy; 2024 Official ObiTech All rihts reserved
          </p>
          <ul className="flex space-x-6 mt-8 md:mt-0 items-center justify-center text-xs">
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </>
  );
}
