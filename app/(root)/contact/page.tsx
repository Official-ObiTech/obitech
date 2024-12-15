import CustomInput from "@/app/components/Reusable/CustomInput";
import { Avatar, Card, CardBody, Textarea } from "@nextui-org/react";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <section className="dark:bg-slate-800 bg-slate-50 dark:text-gray-100">
        <div className="py-16 container mx-auto md:px-20 px-6 space-y-11">
          <div className="dark:bg_gradient" />
          <div className="lg:w-2/4 md:w-3/4 space-y-4">
            <h1 className="dark:text-gray-100 md:text-3xl text-2xl font-semibold">
              Let&#39;s Build Something Awesome <span>Together</span>
            </h1>
            <p className="text-xs lg:w-2/5 md:w-3/5 text-gray-400">
              You can alway send message or email, I will do be happy to help
              out. Support hours 24/7
            </p>
          </div>

          <Card className="p-4">
            <CardBody>
              <div className="md:flex justify-between dark:text-white">
                <div className="lg:w-2/4 space-y-8 ">
                  <div>
                    <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold">
                      Get in touch <br /> with me today
                    </h1>
                    <p className="text-xs lg:w-2/5 md:w-3/5 text-gray-400">
                      you can contact me anytime
                    </p>
                  </div>
                  <div className="md:block flex items-center gap-2 md:mt-24">
                    <Avatar />
                    <div className="font-serif text-sm">
                      <p>icon official.info.obitech@gmail.com</p>
                      <p>icon (+234) 9030734697</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/4">
                  <CustomInput
                    label="First Name"
                    type="firstName"
                    variant="underlined"
                  />
                  <CustomInput
                    label="Last Name"
                    type="lastName"
                    variant="underlined"
                  />
                  <CustomInput
                    label="Email"
                    type="email"
                    variant="underlined"
                  />

                  <Textarea
                    className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                    labelPlacement="outside"
                    placeholder="Enter your description"
                    variant="underlined"
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
