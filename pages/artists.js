import Artists from "@/components/Artists/Artists";
import React from "react";
import { BiSearch } from "react-icons/bi";

const artists = () => {
  return (
    <>
      <div class="flex-1  justify-center items-center w-[256px] px-2 sm:px-0">
        <div class="flex justify-center items-center w-[756px]">
          <h3 class=" mt-12 text-4xl text-white">All Artists</h3>
        </div>

        {/* ----search------ */}
        <div class="max-w-md mx-72 pt-5 ">
          <div class="relative flex items-center w-[931px] h-[56px] border backdrop-opacity-25 bg-white/10 border-white/40  rounded-lg focus-within:shadow-lg overflow-hidden">
            <input
              class="peer h-full w-full outline-none text-xl p-2 backdrop-opacity-25 bg-white/10 border-white/40 pr-2"
              type="text"
              id="search"
              placeholder="Artists"
            />

            <div class="grid place-items-center h-full w-12 text-gray-300 backdrop-opacity-25 bg-white/10 border-white/40">
              <BiSearch className="text-3xl" />
            </div>
          </div>
        </div>

        <div className=" mx-72  sm:mb-0 mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center lg:grid-cols-4">
          <div className="relative group w-[214.8px] h-[207.8px] border-[1px] items-center sm:py-12 px-4 flex flex-col space-y-2 cursor-pointer rounded-xl backdrop-opacity-25 bg-white/10 border-white/40 hover:smooth-hover hover:backdrop-opacity-25 hover:bg-black/20 hover:border-red-500">
            <img
              className="w-[112px] h-[112px]   mx-10 justify-center  object-cover object-center rounded-full"
              src="https://via.placeholder.com/112x112"
            />

            {/*------- text------- */}
            <div className="bottom-4 left-3 relative">
              <div className="w-[78px] h-[37px] pb-2 top-0 absolute">
                <div className="left-1 top-[15px] absolute text-white text-[18px] font-normal">
                  Ari Elkins
                </div>
                <div className="left-[41px] top-0 pb-3 absolute text-stone-500 text-[12px] font-normal">
                  Profile
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default artists;
