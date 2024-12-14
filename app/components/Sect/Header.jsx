import Image from "next/image";

export default function Header() {

  const circles = [
    { size: "22rem", color: "bg-gray-600" },
    { size: "20rem", color: "bg-gray-500" },
    { size: "18rem", color: "bg-gray-400" },
    { size: "16rem", color: "bg-gray-300" },
  ];
  return (
    <>
      <div className="header_container  ">
        <div>
          <h1 className="sub_header_text">FULL-STACK WEB DEVELOPER</h1>
          <h1 className="header_text ">
            <span className="block">OFFICIAL </span>

            <span className="md:text-7xl font-medium md:py-4 py-2 block">
              OBITECH
            </span>
          </h1>
          <div>
            <p className="ptag_container">
              <div className="h-full w-1 bg-gray-400" />
              <span className="italic">
                I am a full stack web developer with many years Experience, I
                work Remotely from Abuja Nigeria
              </span>
            </p>
          </div>
        </div>

        <div className="circles_container">
          {circles.map((circle, index) => (
            <div
              key={index}
              className={`absolute rounded-full ${circle.color} `}
              style={{ width: circle.size, height: circle.size }}
            />
          ))}
          <Image
            src="/obitech.png"
            alt="Obitech Image"
            width={100}
            height={100}
            className="w-full h-96 z-50 rounded-b-full"
          />
        </div>
      </div>
    </>
  );
}
