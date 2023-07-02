import React from "react";
import { Disclosure } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";

const EditMemberCard = () => {
  return (
    <div>
      <div className="w-[500px] h-[250px] bg-black/50 p-[20px] rounded-3xl relative">
        <div className="font-semibold">Edit Membership:</div>
        <div className="mt-3 text-gray-400">
          Select Ambassador Program
          <div className="w-full pt-1">
            <div className="mx-auto w-full max-w-md rounded-lg border backdrop-opacity-25 bg-white/10 border-white/40 p-2">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className=" flex items-center justify-between w-[90%] h-[40px] text-gray-200  rounded-lg overflow-hidden">
                      <span>What is your refund policy?</span>
                      <span>
                        <BsChevronDown
                          className={`${open ? "rotate-180 transform" : ""} `}
                        />
                      </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 z-10 text-sm text-gray-200">
                      If you`re unhappy with your purchase for any reason, email
                      us within 90 days and we`ll refund you in full, no
                      questions asked.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
        <div className="flex justify-end space-x-10 items-center mt-10">
            <div>Cancel</div>
            <div className="pl-10 pr-10 pt-2 pb-2 text-gray-200 bg-gradient-to-r from-blue-700 to-red-500 rounded-full">
            Save
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditMemberCard;
