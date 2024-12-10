import ProLanguages from "../Reusable/Languages";

export default function HireMe() {
  const hiremeLan = [
    {
      text: "Website-Development",
      gradient: true,
    },
    {
      text: "IOS-Development",
      gradient: false,
    },
    {
      text: "Android-Development",
      gradient: false,
    },
    {
      text: "Backend-Development",
      gradient: false,
    },
    {
      text: "Webflow-Development",
      gradient: false,
    },
    {
      text: "Website-Development",
      gradient: false,
    },
  ];

  const hirePrice = [
    {
      text: "Up to 2K",
      gradient: false,
    },
    {
      text: "2K to 5K",
      gradient: true,
    },
    {
      text: "5K to 10K",
      gradient: false,
    },
    {
      text: "More then 10K",
      gradient: false,
    },
  ];

  return (
    <>
      <div className="space-y-6 relative  ">
        <div className="absolute bg_blur w-80 h-80 bg-gradient-to-bl from-purple-500 to-pink-300 -bottom-72 right-0 max-sm:hidden" />
        <h1 className="header">Hire Me</h1>

        <div>
          <p className="header2">Services</p>
          <div className="relative w-full md:h-20 md:flex gap-2 items-center text-center font-semibold lg:text-xl ">
            <ProLanguages languages={hiremeLan} />
          </div>
        </div>

        <div>
          <p className="header2">Budget in USD</p>
          <div className="relative w-full md:h-20 md:flex gap-2 items-center text-center font-semibold lg:text-xl ">
            <ProLanguages languages={hirePrice} />
          </div>
        
        </div>

        <div>
          <p className="header2">Personal Data</p>
          <div className="gap-10 space-y-4">
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
