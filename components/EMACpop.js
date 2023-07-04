import React from "react";
import DropDown from "./DropDown";


const EMACpop = ({ closeModal }) => {
  return (
    <div>
      <div className=" w-[full] md:w-[500px] bg-black rounded-3xl p-7">
        <div className="font-semibold text-white/90">Edit EMAC Item:</div>
        <div className="text-red-400 font-bold">Ranking 1</div>
        <div className="mt-2 text-gray-400 relative font-semibold">
          Artist
          <DropDown />
        </div>
        <div className="mt-16 text-gray-400 relative font-semibold">
          Track
          <DropDown />
        </div>
        <div className="mt-16 text-gray-400 font-semibold">
          <label htmlFor="inputNumber" className="block">
            TSS
          </label>
          <input
            id="inputNumber"
            type="number"
            className="w-full mt-1 rounded-lg border border-white/40 bg-white/10 text-gray-200 p-2"
          />
        </div>
        <div className="flex justify-end space-x-10 items-center mt-16">
          {/* <div className="text-white cursor-pointer">Cancel</div> */}
          <div className="pl-10 pr-10 pt-2 pb-2 text-gray-200 bg-gradient-to-r from-blue-700 to-red-500 rounded-full cursor-pointer" onClick={closeModal}>
            Save
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMACpop;
