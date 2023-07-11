import React, { useState } from "react";
import { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import Image from "next/image";
import EMACpop from "../components/EMAC/EMACpop";
import EMACItem from "@/components/EMAC/EMACItem";

const EMAC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const items = [
    {
      ranking: "1",
      artist: "Charlie Puth",
      country: "USA",
      genre: "POP",
      track: "We Don't Talk Anymore",
      tss: "123",
    },
    {
      ranking: "2",
      artist: "Adele",
      country: "UK",
      genre: "Pop",
      track: "Someone Like You",
      tss: "98",
    },
  ];

  return (
    <>
      <div className="mt-8 md:mt-0 md:ml-[270px] min-h-[100vh] text-white p-5">
        <div>
          <div className="text-2xl md:text-3xl text-white font-bold">
            <span className="text-red-400 to">Emergence Music Ambassadors</span>{" "}
            Clubs Standings
          </div>
          <div className="text-gray-400 mt-2 text-lg font-semibold">
            Season 2023
          </div>
        </div>

        <div className="mt-10">
          <div className="flex text-white justify-between items-center backdrop-opacity-25 bg-white/10 border-white/40 rounded-lg w-[90vw] md:w-[76vw] p-3 mt-3 text-sm">
            <div className="w-1/6">Ranking</div>
            <div className="w-1/6">Artist</div>
            <div className="hidden md:block w-1/6">Country</div>
            <div className="w-1/6">Genre</div>
            <div className="w-2/6">Track</div>
            <div className="w-1/6">TSS</div>
          </div>
          {items.map((item) => (
            <EMACItem
              key={item.ranking}
              ranking={item.ranking}
              artist={item.artist}
              country={item.country}
              genre={item.genre}
              track={item.track}
              tss={item.tss}
              openModal={openModal}
            />
          ))}
        </div>

        <div className="pl-10 pr-10 pt-2 pb-2 fixed bottom-3 right-5 text-gray-200 bg-gradient-to-r from-blue-700 to-red-500 rounded-full">
          SAVE
        </div>
      </div>

      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto flex items-center justify-center"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0">
              <div className="absolute inset-0 bg-black opacity-75"></div>
            </div>
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
            <div className="relative bg-transparent rounded-lg px-4 py-6 overflow-hidden shadow-xl transform transition-all">
              <EMACpop closeModal={closeModal} />
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default EMAC;
