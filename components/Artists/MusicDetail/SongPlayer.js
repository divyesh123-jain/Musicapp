import React from "react";
import { TiMediaPlay } from "react-icons/ti";
import Image from "next/image";
import { BsClock } from "react-icons/bs";

const SongPlayer = ({ albumCover, trackTitle, artist, duration }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <label className="flex justify-between items-center p-2 border-b border-gray-200 last:border-b-0 relative z-10">
        <div className="flex items-center space-x-6">
          <TiMediaPlay className="w-6 h-6 text-white" />
          <div className="ml-4 flex items-center space-x-3">
            <Image
              src={albumCover}
              alt="album cover"
              width={50}
              height={50}
              className="w-12 h-12 object-cover rounded-md"
            />
            <div>
              <p className="text-lg font-bold text-white">{trackTitle}</p>
              <p className="text-sm text-gray-500">{artist}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center space-x-1 mr-6">
          <BsClock className="" />
          <span>{duration}</span>
        </div>
      </label>
    </div>
  );
};

export default SongPlayer;
