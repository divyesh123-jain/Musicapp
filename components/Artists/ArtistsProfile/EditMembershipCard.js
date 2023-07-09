import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import DropDown from "@/components/DropDown";

const EditMembershipCard = ({ isOpen, closeModal }) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal} static>
        <div className="flex items-center justify-center min-h-screen p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div>
              <div className="w-[70vw] md:w-[500px] bg-black rounded-3xl p-7">
                <div className="font-semibold text-white/90">Edit Membership:</div>
                <div className="mt-3 text-gray-400 relative">
                  Select Ambassador Program
                  <DropDown />
                </div>
                <div className="flex justify-end space-x-10 items-center mt-16">
                  <div className="text-white cursor-pointer" onClick={closeModal}>
                    Cancel
                  </div>
                  <div
                    className="pl-10 pr-10 pt-2 pb-2 text-gray-200 bg-gradient-to-r from-blue-700 to-red-500 rounded-full cursor-pointer"
                    onClick={closeModal}
                  >
                    Save
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default EditMembershipCard;
