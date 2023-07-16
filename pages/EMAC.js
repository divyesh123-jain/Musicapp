import React, { useState,useEffect } from "react";
import { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import Image from "next/image";
import EMACpop from "../components/EMAC/EMACpop";
import EMACItem from "@/components/EMAC/EMACItem";
import axios from "axios";

const EMAC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [items,setItem] = useState([])
   const [isUpdated, setIsUpdated] = useState(false);
   const [currentId, setCurrentId] = useState(null);

   const handleUpdate = (updatedData) => {
     setIsUpdated(updatedData);
   };
  const openModal = (id) => {
    setIsOpen(true);
    setCurrentId(id);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  useEffect(()=>{
    const fetchingData = async () => {
      try{
        const {data} =  await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/musics/top-ten`)
        setItem(data)
      }
      catch(err){
        console.log(err.message)
      }
    }
    fetchingData()
  },[isUpdated])
  // console.log("api",items)

  return (
    <>
      <div className="mt-8 md:mt-0 md:ml-[270px] min-h-[100vh] text-white p-5">
        <div>
          <div className="text-2xl font-bold text-white md:text-3xl">
            <span className="text-red-400 to">Emergence Music Ambassadors</span>{" "}
            Clubs Standings
          </div>
          <div className="mt-2 text-lg font-semibold text-gray-400">
            Season 2023
          </div>
        </div>

        <div className="mt-10">
          <div className="flex text-white justify-between items-center backdrop-opacity-25 bg-white/10 border-white/40 rounded-lg w-[87vw] md:w-[76vw] p-3 mt-3 text-[0.60rem] md:text-lg">
            <div className="w-1/6">Ranking</div>
            <div className="w-1/6 ml-1">Artist</div>
            <div className="hidden w-1/6 pl-2 md:block">Country</div>
            <div className="w-1/6 pl-2">Genre</div>
            <div className="w-2/6 pl-2">Track</div>
            <div className="flex justify-start w-1/6 pl-2">TSS</div>
          </div>
          {items?.map((item) => (
            <EMACItem
              key={item.id}
              ranking={item.id}
              artist={item.user?.username}
              country={item?.user?.country}
              genre={item?.secondary_genre}
              track={item?.label}
              tss={item?.tss || 0}
              openModal={()=>openModal(item.id)}
            />
          ))}
        </div>

        <div className="fixed pt-2 pb-2 pl-10 pr-10 text-gray-200 rounded-full bottom-3 right-5 bg-gradient-to-r from-blue-700 to-red-500">
          SAVE
        </div>
      </div>

      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto"
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
            <div className="relative px-4 py-6 overflow-hidden transition-all transform bg-transparent rounded-lg shadow-xl">
              <EMACpop itemId={currentId} onChange={handleUpdate} closeModal={closeModal} isUpdated={isUpdated} />
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
      {isUpdated && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full backdrop-filter backdrop-blur-lg">
          <div className="p-10 text-white bg-black rounded-lg">
            <p>Your TSS has been updated</p>
          </div>
        </div>
      )}
    </>
  );
};

export default EMAC;
