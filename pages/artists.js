import ArtistCard from "@/components/Artists/ArtistCard";
import SearchBar from "@/components/Artists/SearchBar";
import { useRouter } from "next/router";
import React from "react";
import { BsArrowLeftCircle } from "react-icons/bs";

const Artists = () => {
  const router = useRouter();

  return (
    <>
      <div className="md:ml-[270px] min-h-[100vh] text-white p-5">
        <div className="align-items-center justify-content-between flex text-white">
          <h2 className="text-white ml-[10px]  mt-[52px] font-sf-pro-text text-4xl font-semibold tracking-normal text-left ">
            All Artists
          </h2>
        </div>

        <SearchBar />
        <div className="flex justify-center items-center">
          <div className="sm:mb-0 mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center lg:grid-cols-4">
            <ArtistCard
              name="Ari Elkins"
              profileImage="https://via.placeholder.com/112x112"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Artists;
