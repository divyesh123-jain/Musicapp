import React from "react";
import Image from "next/image";

const EMACItem = ({ ranking, artist, country, genre, track, tss, openModal }) => {
  return (
    <div
      className="flex text-white justify-between items-center backdrop-opacity-25 bg-white/20 rounded-lg w-[87vw] md:w-[76vw] text-[0.60rem] md:text-lg p-3 mt-3 "
      onClick={openModal}
    >
      <div className="w-1/12">{ranking}</div>
      <div className="w-1/4 flex justify-center items-center space-x-2">
        <div>
          <Image
            src="/../public/imggg.png"
            width={50}
            height={50}
            className="rounded-full hidden md:block"
          />
        </div>
        <div className="w-[fit]">
          <div className="">{artist}</div>
            <div className="hidden md:flex p-1 justify-center items-center space-x-2 backdrop-opacity-20 bg-gray-900 text-gray-200 pl-2 pr-2 rounded-full text-xs">
              <div>
                <Image
                  src="/../public/albumCover.jpg"
                  width={30}
                  height={30}
                  rounded-lg
                />
              </div>
              <div className="  text-xs">AWB</div>
            </div>
        </div>
      </div>
      <div className="hidden md:block w-1/6 ml-3 pl-2">{country}</div>
      <div className="w-1/6 pl-2">{genre}</div>
      <div className="w-2/6 pl-2 overflow-hidden flex justify-start">{track}</div>
      <div className="w-1/6 pl-2 flex justify-start">{tss}</div>
    </div>
  );
};

export default EMACItem;
