import React from "react";
import { useRouter } from "next/router";

const ArtistCard = ({ data, profileImage }) => {
  const { full_name, username  } = data;

  const router = useRouter();
  return (
    <div className="relative group w-[214.8px] h-[207.8px] border-[1px] justify-center items-center sm:py-12 px-4 flex flex-col space-y-2 cursor-pointer rounded-xl backdrop-opacity-25 bg-white/10 border-white/40 hover:smooth-hover hover:backdrop-opacity-25 hover:bg-black/20 hover:border-red-500"
    onClick={() => {
            router.push(`/artists/${username}`);
          }}>
      <img
        className="w-[112px] h-[112px] mx-10 justify-center object-cover object-center rounded-full"
        href="/ArtistProfile"
        src={profileImage}
        alt={full_name}
      />

      <div className="bottom-4 left-3 relative">
<<<<<<< HEAD
        <div className="w-[78px] h-[37px] pb-2 top-0 absolute">
          <div className="left-1 top-[15px] absolute text-white text-[16px] font-normal">
            {full_name}
=======
        <div className="w-[58px] h-[27px] pb-2 top- absolute">
        <div
            className="left-[-5] top-[25px] absolute text-white text-xs font-normal overflow-hidden whitespace-nowrap  max-w-[100px]"
            style={{ textOverflow: "ellipsis" }}
          >
            {name}
>>>>>>> 3826592b2d0dae6287d9d4bbeaece395948040dd
          </div>
          <div className="left-[41px] top-0 pb-3 absolute text-stone-500 text-[12px] font-normal">
            Profile
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;

