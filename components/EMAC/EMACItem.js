import React from "react";
import Image from "next/image";

const EMACItem = ({ ranking, artist, country, genre, track, tss, openModal }) => {
  return (
    <div
      className="flex text-white justify-between items-center backdrop-opacity-25 bg-white/20 rounded-lg w-full md:w-[76vw] text-lg p-3 mt-3"
      onClick={openModal}
    >
      <div className="w-1/12">{ranking}</div>
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
          <div>{artist}</div>
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
              <div className="whitespace-nowrap text-xs">AWB | Artist With Benefit</div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block w-1/6 ml-3">{country}</div>
      <div className="w-1/6">{genre}</div>
      <div className="w-2/6 overflow-hidden">{track}</div>
      <div className="w-1/6">{tss}</div>
    </div>
  );
};

export default EMACItem;
