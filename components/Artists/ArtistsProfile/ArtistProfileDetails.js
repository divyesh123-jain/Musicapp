import React, { useState } from "react";
import Image from "next/image";
import { IoTicket } from "react-icons/io5";
import EditMembershipCard from "./EditMembershipCard";

const ArtistProfileDetails = ({ artistNumber }) => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <div className="flex justify-center items-center">
        <Image
          src="/../public/imggg.png"
          alt="artist-profile"
          width={150}
          height={150}
          className={`rounded-full mt-3 flex justify-center items-center`}
        />
      </div>
      <div className="font-semibold text-2xl flex justify-center items-center mt-5 md:mt-0">
        {artistNumber}
      </div>
      <div
        className="flex justify-center space-x-4 mt-3 p-1 backdrop-opacity-25 bg-black/50 rounded-full text-gray-300 cursor-pointer"
        onClick={openModal}
      >
        <div>
          <IoTicket className="text-5xl flex justify-center items-center ml-4 mt-2" />

          {isOpen && <EditMembershipCard isOpen={isOpen} closeModal={closeModal} />}
        </div>
        <div className="flex flex-col ">
          <div className="font-semibold bg-gradient-to-r from-blue-400 via-pink-500 text-transparent bg-clip-text">
            Membership:
          </div>
          <div>AWB | Artist With Benefit</div>
          <div>1496 Followers</div>
        </div>
      </div>
    </div>
  );
};

export default ArtistProfileDetails;

