import { Card } from "@nextui-org/react";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <section className="dark:bg-slate-800 bg-slate-50 dark:text-gray-100">
        <div className="py-16 container mx-auto md:px-20 px-6">
          <div className="dark:bg_gradient" />
          <div className="w-2/4">
            <h1 className="dark:text-gray-100 md:text-3xl text-2xl font-semibold">
              Let's Build Something Awesome <span>Together</span>
            </h1>
            <p className="text-xs w-2/5">
              You can alway send message or email, 
              I will do be happy to help out.
              Support hours 24/7
             
            </p>
          </div>

          <Card>

          </Card>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
