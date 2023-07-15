import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const AlbumDetails = ({ albumData, artistNo }) => {
  const router = useRouter();
  return (
    <>
    {albumData?.map((album) => (
    <div
     key={album.id}
      className="mt-4 flex"
      onClick={() => {
        router.push(`/artists/${artistNo}/${album.artist}/${album.title}`);
      }}
    >
      
        <div
          key={album.id}
          className="flex flex-col w-[fit] hover:bg-white/5 p-3 rounded-xl cursor-pointer"
          onClick={() => {
            // Handle click event, e.g., navigate to album details page
          }}
        >
          <Image
            src={album.image}
            width={200}
            height={200}
            className="rounded-xl"
            alt="Album Cover"
          />
          <div className="font-semibold text-lg mt-3 ml-1">{album.title}</div>
          <div className="text-gray-400 text-base ml-1">{album.artist}</div>
        </div>
      
    </div>
    ))}
    </>
  );
};


export default AlbumDetails;

