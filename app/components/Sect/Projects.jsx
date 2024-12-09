import Image from "next/image";


export default function Projects() {
  // const projs = [
  //   {
  //     title: "Website Development",
  //   },
  // ];
  return (
    <>
      <div className="text-center space-y-10 container mx-auto py-24 relative">
        <div className="absolute bg_blur w-96 h-96 bg-gradient-to-bl from-purple-500 to-pink-300 bottom-0 right-60" />
        <h1 className="text-5xl font-semibold">
          My Projects <span>icon</span>
        </h1>
        <div className="relative w-full  h-20 md:flex  items-center overflow-hidden font-semibold text-xl">
          <div className=" h-full   border border-gray-500  md:w-[250px] lg:w-[350px] w-[150px] " />
          <div className=" h-full flex items-center justify-center  cursor-pointer  border border-gray-500   md:w-[250px] lg:w-[350px] w-[150px]">
            IOS <br />
            Development
          </div>
          {/* {projs.map((pro) => (
            <div className=" h-16 items-center flex bg-gradient-to-l from-30% from-pink-400 to-70% to-purple-600 cursor-pointer border  border-gray-500  md:w-[250px] lg:w-[350px] w-[150px] ">
              {pro.title}
            </div>
          ))} */}
          <div className=" h-full items-center flex justify-center relative bg-gradient-to-tl from-30% from-purple-600 to-90% to-pink-400 cursor-pointer border text-white  border-gray-500  md:w-[250px] lg:w-[350px] w-[150px] ">
            Website <br /> Development
            <div className="absolute top-0 left-0 bg-white z-10 w-3 h-3 rounded-full" />
          </div>
          <div className=" h-full items-center flex justify-center  cursor-pointer  border border-gray-500  md:w-[250px] lg:w-[350px] w-[150px] ">
            Android <br /> Development
          </div>
          <div className=" h-full items-center flex justify-center cursor-pointer  border border-gray-500  md:w-[250px] lg:w-[350px] w-[150px] ">
            Backend <br /> Development
          </div>
          <div className=" h-full items-center flex justify-center cursor-pointer  border border-gray-500  md:w-[250px] lg:w-[350px] w-[150px] ">
            Webflow <br /> Development
          </div>
          <div className="h-full   border border-gray-500  md:w-[250px] lg:w-[350px] w-[150px] " />
        </div>

        <div className="md:flex items-center justify-center gap-14 md:px-24 px-8 ">
          <div className="flex justify-center relative">
            <div className="relative group overflow-hidden">
              <div className="w-60 h-60 rounded-full overflow-hidden mt-4">
                <Image
                  src="/code.webp"
                  alt="about image"
                  width={900}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-blue-500/50 z-50 rounded-full flex items-center justify-center opacity-100 transition-opacity duration-300 group-hover:opacity-0 mt-4 text-white font-semibold text-lg gap-4 ">
                My Project <span>icon</span>
              </div>
            </div>
            <p className="absolute left-0 font-semibold">May 2024</p>
          </div>
          <div className="flex justify-center relative">
            <div className="relative group overflow-hidden">
              <div className="w-60 h-60 rounded-full overflow-hidden mt-4">
                <Image
                  src="/code.webp"
                  alt="about image"
                  width={900}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-blue-500/50 z-50 rounded-full flex items-center justify-center opacity-100 transition-opacity duration-300 group-hover:opacity-0 mt-4 text-white font-semibold text-lg gap-4 ">
                My Project <span>icon</span>
              </div>
            </div>
            <p className="absolute left-0 font-semibold">May 2024</p>
          </div>
          <div className="flex justify-center relative">
            <div className="relative group overflow-hidden">
              <div className="w-60 h-60 rounded-full overflow-hidden mt-4">
                <Image
                  src="/code.webp"
                  alt="about image"
                  width={900}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-blue-500/50 z-50 rounded-full flex items-center justify-center opacity-100 transition-opacity duration-300 group-hover:opacity-0 mt-4 text-white font-semibold text-lg gap-4 ">
                My Project <span>icon</span>
              </div>
            </div>
            <p className="absolute left-0 font-semibold">May 2024</p>
          </div>
        </div>
        <div className="md:flex items-center justify-center gap-14 md:px-24 px-8 ">
          <div className="flex justify-center relative">
            <div className="relative group overflow-hidden">
              <div className="w-60 h-60 rounded-full overflow-hidden mt-4">
                <Image
                  src="/code.webp"
                  alt="about image"
                  width={900}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-blue-500/50 z-50 rounded-full flex items-center justify-center opacity-100 transition-opacity duration-300 group-hover:opacity-0 mt-4 text-white font-semibold text-lg gap-4 ">
                My Project <span>icon</span>
              </div>
            </div>
            <p className="absolute left-0 font-semibold">May 2024</p>
          </div>
          <div className="flex justify-center relative">
            <div className="relative group overflow-hidden">
              <div className="w-60 h-60 rounded-full overflow-hidden mt-4">
                <Image
                  src="/code.webp"
                  alt="about image"
                  width={900}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-blue-500/50 z-50 rounded-full flex items-center justify-center opacity-100 transition-opacity duration-300 group-hover:opacity-0 mt-4 text-white font-semibold text-lg gap-4 ">
                My Project <span>icon</span>
              </div>
            </div>
            <p className="absolute left-0 font-semibold">May 2024</p>
          </div>
          <div className="flex justify-center relative">
            <div className="relative group overflow-hidden">
              <div className="w-60 h-60 rounded-full overflow-hidden mt-4">
                <Image
                  src="/code.webp"
                  alt="about image"
                  width={900}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-blue-500/50 z-50 rounded-full flex items-center justify-center opacity-100 transition-opacity duration-300 group-hover:opacity-0 mt-4 text-white font-semibold text-lg gap-4 ">
                My Project <span>icon</span>
              </div>
            </div>
            <p className="absolute left-0 font-semibold">May 2024</p>
          </div>
        </div>

    
      </div>
    </>
  );
}
