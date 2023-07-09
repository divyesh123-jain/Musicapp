import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import EditMarketingCard from "./EditMarketingCard";

const SubscriptionItem = ({ name, price, features }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="p-5 border rounded-lg backdrop-opacity-25 bg-white/10 border-white/40 md:w-[30vw]">
      <div className="flex justify-between">
        <div>{name}</div>
        <div>{price} / annum</div>
      </div>
      <div className="grid grid-cols-2 mt-5">
        {features.map((feature, index) => (
          <div className="flex" key={index}>
            <div>
              <TiTick className="text-green-400 text-xl" />
            </div>
            <div>{feature}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-col space-y-3 md:space-y-0 mt-5 md:flex md:flex-row md:justify-between">
        <div
          className="pl-16 pr-16 pt-2 pb-2 text-gray-200 bg-gray-900 rounded-full flex justify-center items-center cursor-pointer"
          onClick={openModal}
        >
          EDIT
        </div>

        {isOpen && (
          <Transition.Root show={isOpen} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 z-10 overflow-y-auto"
              onClose={closeModal}
            >
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
                  <EditMarketingCard closeModal={closeModal} />
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>
        )}

        <div className="pl-10 pr-10 pt-2 pb-2 text-gray-200 bg-gradient-to-r from-blue-700 to-red-500 rounded-full flex justify-center items-center cursor-pointer">
          DEACTIVATE
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SubscriptionItem;
