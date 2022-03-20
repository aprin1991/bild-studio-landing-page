import React from "react";

function ContactSidebar() {
  return (
    <div className="w-full lg:w-4/12 pr-6 pl-2">
      <h2 className="text-2xl text-secondary mb-4">Contact Info</h2>
      <p className="text-sm text-secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit velit justo.
      </p>
      <div className="flex flex-col mt-3">
        <div className="flex justify-start items-center mb-1.5">
          <span className="text-secondary text-sm font-semibold mr-1.5">
            email:
          </span>
          <a href="mailto:info@display.com" className="text-green text-sm ">
            info@display.com
          </a>
        </div>
        <div className="flex justify-start items-center mb-2.5">
          <span className="text-secondary text-sm font-semibold mr-1.5">
            phone:
          </span>
          <a href="tel:1.306.222.4545" className="text-green text-sm ">
            1.306.222.4545
          </a>
        </div>
        <div className="flex justify-start items-center mb-1.5">
          <span className="text-secondary text-sm ">
            222 2nd Ave South
            <br /> Saskabush, SK S7M 1T6
          </span>
        </div>
      </div>
      <div className="mt-6 text-secondary text-sm">
        <h2 className="text-2xl text-secondary mb-4">Store Hours</h2>
        <div className="flex justify-between items-center mb-1.5">
          <span className="">Monday - Thursday</span>
          <span>8 am - 5 pm</span>
        </div>
        <div className="flex justify-between items-center mb-1.5">
          <span className="">Friday</span>
          <span>8 am - 6 pm</span>
        </div>
        <div className="flex justify-between items-center mb-1.5">
          <span className="">Saturday</span>
          <span>9 am - 5 pm</span>
        </div>
        <div className="flex justify-between items-center mb-1.5">
          <span className="">Sunday & Holidays</span>
          <span className="w-16 text-left mr-1"> Closed</span>
        </div>
      </div>
    </div>
  );
}

export default ContactSidebar;
