// import Image from "next/image";
import { FiArrowDownRight } from "react-icons/fi";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";

export default function Blog() {
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
        
          
            <div className="gap-3 grid md:grid-cols-2">
            {/* <div className="border">
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
            </div> */}
           
              <Card
                isFooterBlurred
                className="w-full h-[300px] "
              >
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">
                    Your day your way
                  </p>
                  <h4 className="text-white/90 font-medium text-xl">
                    Your checklist for better sleep
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Relaxing app background"
                  className="z-0 w-full h-full object-cover"
                  src="https://nextui.org/images/card-example-5.jpeg"
                />
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                  <div className="flex flex-grow gap-2 items-center">
                    <Image
                      alt="Breathing app icon"
                      className="rounded-full w-10 h-11 bg-black"
                      src="https://nextui.org/images/breathing-app-icon.jpeg"
                    />
                    <div className="flex flex-col">
                      <p className="text-tiny text-white/60">Breathing App</p>
                      <p className="text-tiny text-white/60">
                        Get a good night&#39;s sleep.
                      </p>
                    </div>
                  </div>
                  <Button radius="full" size="sm">
                    Get App
                  </Button>
                </CardFooter>
              </Card>
              <Card
                isFooterBlurred
                className="w-full h-[300px] "
              >
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">
                    Your day your way
                  </p>
                  <h4 className="text-white/90 font-medium text-xl">
                    Your checklist for better sleep
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Relaxing app background"
                  className="z-0 w-full h-full object-cover"
                  src="https://nextui.org/images/card-example-5.jpeg"
                />
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                  <div className="flex flex-grow gap-2 items-center">
                    <Image
                      alt="Breathing app icon"
                      className="rounded-full w-10 h-11 bg-black"
                      src="https://nextui.org/images/breathing-app-icon.jpeg"
                    />
                    <div className="flex flex-col">
                      <p className="text-tiny text-white/60">Breathing App</p>
                      <p className="text-tiny text-white/60">
                        Get a good night&#39;s sleep.
                      </p>
                    </div>
                  </div>
                  <Button radius="full" size="sm">
                    Get App
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
      
      </div>
    </>
  );
}
