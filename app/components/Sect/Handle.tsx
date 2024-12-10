import Image from "next/image";
import {
  FaXTwitter,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa6";

import {FiArrowDownRight } from "react-icons/fi"


export default function Handle() {
  return (
    <>
      <div className="header_container md:py-10 ">
        <div>
          <h1 className="header_text ">Follow Me</h1>
          <div className="flex space-x-6 pb-6">
            <span className="rounded-full border p-1 w-10 h-10 text-center ">
              <FaXTwitter className="w-full h-full p-1" />
            </span>
            <span className="rounded-full border p-1 w-10 h-10 text-center ">
              <FaInstagram className="w-full h-full p-1" />
            </span>
            <span className="rounded-full border p-1 w-10 h-10 text-center ">
              <FaLinkedin className="w-full h-full p-1" />
            </span>
            <span className="rounded-full border p-1 w-10 h-10 text-center ">
              <FaFacebook className="w-full h-full p-1" />
            </span>
          </div>
          <p className="mt-12">
            <FiArrowDownRight size={24} />
          </p>
        </div>

        <div className="relative rounded-full h-60 w-60 border-gray-500 items-center lg:flex justify-center hidden -left-16 ">
          <Image
            src="/code.webp"
            alt="Obitech Image"
            width={100}
            height={100}
            className=" w-full h-full  "
          />
        </div>
      </div>
    </>
  );
}
