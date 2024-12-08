import MappedLinks from "./MapedLinks";

export default function Footer() {

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
  return (
    <>
      <div className="py-8 px-24 container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">ObiTech</h1>

          <MappedLinks links={links} />
        </div>
        <hr className=" border-none bg-purple-300 my-4 dark:bg-gray-300 h-px rounded-full" />
        <div className="flex justify-between items-center text-gray-500 dark:text-gray-400">
          <p className="text-xs">
            &copy; 2024 Official ObiTech All rihts reserved
          </p>
          <ul className="flex space-x-6">
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </>
  );
}
