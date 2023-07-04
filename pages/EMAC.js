import Image from "next/image";
import EMACpop from "../components/EMACpop";
import React, { useState } from "react";
import { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";

const EMAC = () => {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="mt-8 md:mt-0 md:ml-[270px] min-h-[100vh] text-white p-5">
        <div>
          <div className="text-2xl md:text-3xl text-white font-bold">
            <span className="text-red-400 to">Emergence Music Ambassadors</span> Clubs Standings
          </div>
          <div className="text-gray-400 mt-2 text-lg font-semibold">
            Season 2023
          </div>
        </div>

        <div className="mt-10">
          <div className="flex text-white justify-between items-center backdrop-opacity-25 bg-white/10 border-white/40 rounded-lg w-full md:w-[76vw] text-lg p-3 mt-3">
            <div className="w-1/6">Ranking</div>
            <div className="w-1/6">Artist</div>
            <div className="w-1/6">Country</div>
            <div className="w-1/6">Genre</div>
            <div className="w-2/6">Track</div>
            <div className="w-1/6">TSS</div>
          </div>
          <div className="flex text-white justify-between items-center backdrop-opacity-25 bg-white/20 rounded-lg w-full md:w-[76vw] text-lg p-3 mt-3" onClick={openModal}>

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
              <div>
                <EMACpop closeModal={closeModal} />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

            <div className="w-1/12">1</div>
            <div className="w-1/4 flex justify-center items-center space-x-2">
              <div>
                <Image
                  src="/../public/imggg.png"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <div className="w-[fit]">
                <div>Charlie Puth</div>
                <div>
                  <div className="p-1 flex justify-center items-center space-x-2 backdrop-opacity-20 bg-gray-900 text-gray-200 pl-2 pr-2 rounded-full text-xs">
                    <div>
                      <Image
                        src="/../public/albumCover.jpg"
                        width={20}
                        height={20}
                        rounded-lg
                      />
                    </div>
                    <div className="whitespace-nowrap">AWB | Artist With Benefit</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/6 ml-3">USA</div>
            <div className="w-1/6">POP</div>
            <div className="w-2/6 overflow-hidden">We Don&apos;t Talk Anymore</div>
            <div className="w-1/6">123</div>
          </div>
        </div>

        <div className="pl-10 pr-10 pt-2 pb-2 fixed bottom-3 right-5 text-gray-200 bg-gradient-to-r from-blue-700 to-red-500 rounded-full">
          SAVE
        </div>
      </div>
    </>
  );
};

export default EMAC;
