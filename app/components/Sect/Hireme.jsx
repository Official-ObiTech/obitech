

export default function HireMe() {

  return (
    <>
      <div className="space-y-6 relative  ">
        <div className="absolute bg_blur w-96 h-96 bg-gradient-to-bl from-purple-500 to-pink-300 top-72 z-50" />
        <h1 className="md:text-6xl font-semibold py-10">Hire Me</h1>

        <div>
          <p className="text-3xl font-semibold py-3">Services</p>

          <div className="relative w-full  h-20 md:flex  space-x-3 items-center overflow-hidden font-semibold text-xl ">
        
            <div className=" h-full items-center flex justify-center text-center relative bg-gradient-to-tl from-30% from-purple-600 to-90% to-pink-400 cursor-pointer border text-white  border-gray-500  md:w-[250px] lg:w-[350px] w-[150px] ">
              Website <br /> Development
              <div className="absolute top-0 left-0 bg-white z-10 w-3 h-3 rounded-full" />
            </div>

            <div className=" h-full flex items-center justify-center text-center  cursor-pointer  border border-gray-500   md:w-[250px] lg:w-[350px] w-[150px]">
              IOS <br />
              Development
            </div>

            <div className=" h-full items-center flex justify-center text-center  cursor-pointer  border border-gray-500  md:w-[250px] lg:w-[350px] w-[150px] ">
              Android <br /> Development
            </div>
            <div className=" h-full items-center flex justify-center text-center cursor-pointer  border border-gray-500  md:w-[250px] lg:w-[350px] w-[150px] ">
              Backend <br /> Development
            </div>
            <div className=" h-full items-center flex justify-center text-center cursor-pointer  border border-gray-500  md:w-[250px] lg:w-[350px] w-[150px] ">
              Webflow <br /> Development
            </div>
          </div>
        </div>

        <div>
          <p className="text-3xl font-semibold py-3">Budget in USD</p>
          <div className="relative w-full  h-20 md:flex  items-center overflow-hidden font-semibold text-xl space-x-3">
            <div className="h-full items-center flex justify-center cursor-pointer  border border-gray-500  md:w-[250px] lg:w-[350px] w-[150px]">
              Up to 2K
            </div>
            <div className=" h-full items-center flex justify-center relative bg-gradient-to-tl from-30% from-purple-600 to-90% to-pink-400 cursor-pointer border text-white  border-gray-500  md:w-[250px] lg:w-[350px] w-[150px]">
              <span className="absolute left-0 top-0">icon</span> 2K-5K
            </div>

            <div className="h-full items-center flex justify-center cursor-pointer  border border-gray-500  md:w-[250px] lg:w-[350px] w-[150px]">
              5K-10K
            </div>
            <div className="h-full items-center flex justify-center cursor-pointer  border border-gray-500  md:w-[250px] lg:w-[350px] w-[150px]">
              More then 10K
            </div>
          </div>
        </div>

        <div>
          <p className="text-3xl font-semibold py-3">Personal Data</p>
          <div className="gap-10 space-y-8">
            <input
              type="text"
              placeholder="first name"
              className="bg-transparent border-b outline-none  "
            />
            <input
              type="text"
              placeholder="last name"
              className="bg-transparent border-b outline-none  "
            />
            <input
              type="email"
              placeholder="email"
              className="bg-transparent border-b outline-none  "
            />
            <div>
              <input
                type=""
                placeholder="project details (optional)"
                className="bg-transparent border-b outline-none  "
              />
              <span>icon</span>
            </div>
          </div>
          <p className="my-6">
            <span className="mr-3 ">
              <input type="checkbox" name="" id="" />
            </span>
            i aree to te processin of my data in accordance wit te privacy
            policy
          </p>
        </div>

      </div>
    </>
  );
}
