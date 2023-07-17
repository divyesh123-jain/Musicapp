import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { BsDisc } from "react-icons/bs";

const AlbumDetails = ({ albumData, artistNo }) => {
  const router = useRouter();
  const scrollContainerRef = useRef(null);

  const handleMouseScroll = (event) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = event.deltaY;

      container.scrollTo({
        left: container.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="overflow-hidden"
      onWheel={handleMouseScroll}
      style={{ scrollBehavior: "smooth" }}
    >
    {albumData && albumData.length > 0 ? (
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
                // src={album.image}
                src="https://admin.emergencemusicdistribution.com/uploads/album/thumbnail/1687028749-file.jpg"
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
    ) : (
      <div className="empty py-3">
          <BsDisc className="text-5xl font-extrabold flex ml-auto mr-auto text-gray-500"/>
          <p className="m-0">Empty list!</p>
          <p className="m-0">This artist has no albums at this moment.</p>
        </div>
      )}
    </div>
  );
};

export default AlbumDetails;
