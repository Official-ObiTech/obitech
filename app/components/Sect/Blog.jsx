// import Image from "next/image";
import { FiArrowDownRight } from "react-icons/fi";
import {
  Card,
  CardHeader,
  CardFooter,
  Image,
  Button,
  Input,
} from "@nextui-org/react";
import ReusbleButton from "../Reusable/ReusbleButton";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { FaSearchengin } from "react-icons/fa6";

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

          <div className="gap-3 grid md:grid-cols-2">
            <Card isFooterBlurred className="w-full h-[300px] ">
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">
                  date
                </p>
                <h2 className="text-white/90 font-medium text-xl">title</h2>
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
                  <div className="">
                    <p className="text-tiny text-white/60">description</p>
                  </div>
                </div>
                <Button radius="full" size="sm">
                  tag
                </Button>
              </CardFooter>
            </Card>
            <Card isFooterBlurred className="w-full h-[300px] ">
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
