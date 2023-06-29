import Image from "next/image";
import React from "react";

const EMAC = () => {
  return (
    <>
      <div className="ml-[270px] pt-10 pr-6 pb-8 pl-6">
        <div>
          <div className="text-3xl text-white font-bold">
            <span className="text-red-400 to">Emergence Music Ambassadors</span>{" "}
            Clubs Standings
          </div>
          <div className="text-gray-400 mt-2 text-lg font-semibold">
            Season 2023
          </div>
        </div>

        <div className="mt-10 ">
          <div className="flex text-white justify-between items-center backdrop-opacity-25 bg-white/10 border-white/40  rounded-lg w-[76vw] text-lg p-3 mt-3">
            <div className="w-1/6">Ranking</div>
            <div className="w-1/6">Artist</div>
            <div className="w-1/6">Country</div>
            <div className="w-1/6">Genre</div>
            <div className="w-1/6">Track</div>
            <div className="w-1/6">TSS</div>
          </div>
          <div className="flex text-white justify-between items-center backdrop-opacity-25 bg-white/20  rounded-lg w-[76vw] text-lg p-3 mt-3">
            <div className="w-1/6">1</div>
            <div className="w-1/6 flex justify-center items-center space-x-2">
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
                    <div className="">AWB | Artist With Benefit</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/6 ml-3">USA</div>
            <div className="w-1/6">POP</div>
            <div className="w-1/6">We Don&apos;t Talk Anymore</div>
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
