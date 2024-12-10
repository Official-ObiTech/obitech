import Image from "next/image";

export default function Blog() {
  return (
    <>
      <div className="relative ">
        <div className="absolute bg_blur w-80 h-80 bg-gradient-to-bl from-purple-500 to-pink-300 -bottom-44 -left-10 max-sm:hidden" />
        <div className="md:flex justify-between items-center  md:px-36 px-10 mx-auto container gap-10">
          <h1 className="header flex w-full">My Blog</h1>
          <p className="md:w-80 max-sm:text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus earum
          </p>
        </div>
        <hr className="my-10 bg-gray-500  h-0.5 border-none outline-none  " />

        <div className=" py-6 container mx-auto md:px-24 px-8 space-y-10 ">
          <div className="flex justify-between items-center ">
            <ul className="flex items-center justify-center  md:gap-8 gap-4 max-sm:text-sm">
              <li>
                All topics <span>icon</span>
              </li>
              <li>
                Most popular <span>icon</span>
              </li>
              <li>
                Last year <span>icon</span>
              </li>
            </ul>
            <div className="max-sm:hidden">
              <input
                type="search"
                className="bg-transparent border-b outline-none"
                placeholder="Search"
              />
              <span>icon</span>
            </div>
          </div>
          <div className="md:flex space-x-4 ">
            <div className="border">
              <Image
                src="/code.webp"
                alt="about image"
                width={100}
                height={100}
                className="w-full "
              />
              <p className="p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus earum odit impedit
              </p>
              <p className="text-xs p-4 pt-0 ">24 May, 2024</p>
            </div>
            <div className="border">
              <Image
                src="/code.webp"
                alt="about image"
                width={100}
                height={100}
                className="w-full "
              />
              <p className="p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus earum odit impedit
              </p>
              <p className="text-xs p-4 pt-0 ">24 May, 2024</p>
            </div>
            <div className="border">
              <Image
                src="/code.webp"
                alt="about image"
                width={100}
                height={100}
                className="w-full "
              />
              <p className="p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus earum odit impedit
              </p>
              <p className="text-xs p-4 pt-0 ">24 May, 2024</p>
            </div>
            <div className="border">
              <Image
                src="/code.webp"
                alt="about image"
                width={100}
                height={100}
                className="w-full "
              />
              <p className="p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus earum odit impedit
              </p>
              <p className="text-xs p-4 pt-0 ">24 May, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
