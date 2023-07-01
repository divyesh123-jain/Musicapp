import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";

function SideNavbar() {
  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 bg-[#0066] hover:bg-[#0066] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="p-6 w-1/2 h-screen z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200 bg-[#00000066] ">
          <div className="flex flex-col justify-start item-center ">
            <h1 className="text-base text-center cursor-pointer font-bold pb-4 w-full">
              {" "}
            </h1>
            <div className=" my-4 pb-4 ">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 p-2 rounded-lg group cursor-pointer m-auto backdrop-opacity-25 hover:bg-white/10 hover:rounded-xl text-[#fafafa] opacity-60 hover:text-white hover:opacity-100 transition-all duration-500 ease-in-out">
                <h3 className="text-base font-semibold ">Dashboard</h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 p-2 rounded-lg group cursor-pointer m-auto backdrop-opacity-25 hover:bg-white/10 hover:rounded-xl text-[#fafafa] opacity-60 hover:text-white hover:opacity-100 transition-all duration-500 ease-in-out">
                <h3 className="text-base font-semibold ">EMAC</h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 p-2 rounded-lg group cursor-pointer m-auto backdrop-opacity-25 hover:bg-white/10 hover:rounded-xl text-[#fafafa] opacity-60 hover:text-white hover:opacity-100 transition-all duration-500 ease-in-out">
                <h3 className="text-base font-semibold ">Artist</h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 p-2 rounded-lg group cursor-pointer m-auto backdrop-opacity-25 hover:bg-white/10 hover:rounded-xl text-[#fafafa] opacity-60 hover:text-white hover:opacity-100 transition-all duration-500 ease-in-out">
                <h3 className="text-base font-semibold ">Music Details</h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 p-2 rounded-lg group cursor-pointer m-auto backdrop-opacity-25 hover:bg-white/10 hover:rounded-xl text-[#fafafa] opacity-60 hover:text-white hover:opacity-100 transition-all duration-500 ease-in-out">
                <h3 className="text-base font-semibold ">Subscription</h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 p-2 rounded-lg group cursor-pointer m-auto backdrop-opacity-25 hover:bg-white/10 hover:rounded-xl text-[#fafafa] opacity-60 hover:text-white hover:opacity-100 transition-all duration-500 ease-in-out">
                <h3 className="text-base font-semibold ">Settings</h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 p-2 rounded-lg group cursor-pointer m-auto backdrop-opacity-25 hover:bg-white/10 hover:rounded-xl text-[#fafafa] opacity-60 hover:text-white hover:opacity-100 transition-all duration-500 ease-in-out">
                <h3 className="text-base font-semibold ">Log Out</h3>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;
