import ProLanguages from "../Reusable/Languages";

import { MdAttachEmail } from "react-icons/md";
import CustomInput from "../Reusable/CustomInput";
import { FiArrowDownRight } from "react-icons/fi";
import { FaUserSecret } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { MdOutlineAttachFile } from "react-icons/md";

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
        <div className="absolute bg_blur w-80 h-80 bg-gradient-to-bl from-purple-500 to-pink-300 -bottom-72 -right-20 max-sm:hidden" />
        <h1 className="header">
          Hire Me
          <span>
            <FiArrowDownRight className="text-pink-500 md:mt-6" />
          </span>
        </h1>

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
          <div className="gap-10 space-y-4 dark:text-white lg:w-3/4">
            <div className="md:flex gap-4">
              <CustomInput
                className="dark:text-white"
                endContent={
                  <FaUserSecret className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                label="First Name"
                type="text"
                variant="underlined"
              />
              <CustomInput
                endContent={
                  <FaUserSecret className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                label="Last Name"
                type="text"
                variant="underlined"
              />
            </div>
            <CustomInput
              endContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">
                    @gmail.com
                  </span>
                </div>
              }
              startContent={
                <IoIosMail className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
              }
              label="Email Add"
              type="email"
              variant="underlined"
            />
            <CustomInput
              endContent={
                <MdOutlineAttachFile className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
              }
              type="file"
              variant="underlined"
            />
          </div>
          <p className="my-6 text-xs text-gray-400">
            <span className="mr-3 ">
              <input type="checkbox" name="" id="" />
            </span>
            I agree to the processing of my data in accordance with the privacy
            policy
          </p>
        </div>
      </div>
    </>
  );
}
