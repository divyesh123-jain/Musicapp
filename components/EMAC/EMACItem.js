import React from "react";
import Image from "next/image";

const EMACItem = ({ ranking, artist, country, genre, track, tss, openModal }) => {
  return (
    <div
      className="flex text-white justify-between items-center backdrop-opacity-25 bg-white/20 rounded-lg w-[87vw] md:w-[76vw] text-[0.60rem] md:text-lg p-3 mt-3 "
      onClick={openModal}
    >
      <div className="w-1/12">{ranking}</div>
      <div className="flex items-center justify-center w-1/4 space-x-2">
        <div>
          <Image
            src="/../public/imggg.png"
            width={50}
            height={50}
            className="hidden rounded-full md:block"
            alt="artist profile picture"
          />
        </div>
        <div className="w-[fit]">
          <div className="text-[8px] md:text-[16px]">{artist}</div>
            <div className="items-center justify-center hidden p-1 pl-2 pr-2 space-x-2 text-xs text-gray-200 bg-gray-900 rounded-full md:flex backdrop-opacity-20">
              <div>
                <Image
                  src="/../public/albumCover.jpg"
                  width={30}
                  height={30}
                  className="rounded-lg"
                  alt="album cover"
                />
              </div>
              <div className="text-xs ">AWB <span className="hidden md:inline">| Artist With Benefit</span></div>
            </div>
        </div>
      </div>
      <div className="hidden w-1/6 pl-2 ml-3 text-[8px] md:text-[16px] md:block">{country}</div>
      <div className="w-1/6 pl-2  break-all text-[8px] md:text-[16px] hyphens-auto">{genre}</div>
      <div className="flex justify-start text-[8px] md:text-[16px] w-2/6 pl-2 ">{track}</div>
      <div className="flex justify-start text-[8px] md:text-[16px] w-1/6 pl-2">{tss}</div>
    </div>
  );
};

export default EMACItem;