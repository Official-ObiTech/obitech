import Image from "next/image";

export default function Handle() {
  return (
    <>
      <div className="flex items-center gap-8 md:py-24 container mx-auto ">
        <div>
          <h1 className="md:text-8xl font-black tracking-widest font-serif py-8 ">
            Follow Me
          </h1>
          <div className="flex space-x-6 pb-6">
            <span className="rounded-full border p-1 w-10 h-10 text-center ">icon</span>
            <span className="rounded-full border p-1 w-10 h-10 text-center ">icon</span>
            <span className="rounded-full border p-1 w-10 h-10 text-center ">icon</span>
            <span className="rounded-full border p-1 w-10 h-10 text-center ">icon</span>
          </div>
          <p className="mt-12">icon</p>
        </div>

        <div className="relative rounded-full h-96 w-96 border-gray-500 items-center flex justify-center ">
          <Image
            src="/code.webp"
            alt="Obitech Image"
            width={100}
            height={100}
            className=" w-56 h-60 z-50 absolute -left-20"
          />
        </div>
      </div>
    </>
  );
}
