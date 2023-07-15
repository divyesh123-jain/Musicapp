import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const AlbumDetails = ({ albumData, artistNo }) => {
  const router = useRouter();
  const scrollContainerRef = useRef(null);

  const handleMouseScroll = (event) => {
    const container = scrollContainerRef.current;
    const scrollAmount = event.deltaY;

    container.scrollTo({
      left: container.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="overflow-hidden"
      onWheel={handleMouseScroll}
      style={{ scrollBehavior: "smooth" }}
    >
      <div ref={scrollContainerRef} className="flex">
        {albumData?.map((album) => (
          <div
            key={album.id}
            className="mt-4 flex flex-col mr-4"
            onClick={() => {
              router.push(
                `/artists/${artistNo}/album/${album.artist}/${album.title}`
              );
            }}
          >
            <div
              className="flex flex-col w-[fit] hover:bg-white/5 p-3 rounded-xl cursor-pointer"
              onClick={() => {
                // Handle click event, e.g., navigate to album details
              }}
            >
              <Image
                src={album.image}
                width={200}
                height={200}
                className="rounded-xl"
                alt="Album Cover"
              />
              <div className="font-semibold text-lg mt-3 ml-1">
                {album.title}
              </div>
              <div className="text-gray-400 text-base ml-1">{album.artist}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumDetails;
