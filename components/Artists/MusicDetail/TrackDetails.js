import React from "react";

const TrackDetails = ({ trackTitle, primaryArtist, featuredArtist, label, copyrightHolder, copyrightYear, recordLabel, imageSrc }) => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 p-3  space-x-2">
          <div className="grid1">
            <img
              className="w-[363px] left-[46px] h-[366px] rounded-2xl"
              src={imageSrc}
            />
          </div>
    <div className="left-[46px] grid grid-cols-2 gap-4 mt-5 md:mt-0">
      <div className="flex-col justify-start items-start gap-2 flex">
        <div className="text-neutral-400 text-[16px] font-medium leading-tight">
          Track Title
        </div>
        <div className="text-gray-200 text-[16px] font-medium leading-tight">
          {trackTitle}
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-2 flex">
        <div className="text-neutral-400 text-[16px] font-medium leading-tight">
          Primary Artist
        </div>
        <div className="text-gray-200 text-[16px] font-medium leading-tight">
          {primaryArtist}
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-2 flex">
        <div className="text-neutral-400 text-[16px] font-medium leading-tight">
          Featured Artist
        </div>
        <div className="text-gray-200 text-[16px] font-medium leading-tight">
          {featuredArtist}
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-2 flex">
        <div className="text-neutral-400 text-[16px] font-medium leading-tight">
          Label
        </div>
        <div className="text-gray-200 text-[16px] font-medium leading-tight">
          {label}
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-2 flex">
        <div className="text-neutral-400 text-[16px] font-medium leading-tight">
          Copyright Holder
        </div>
        <div className="text-gray-200 text-[16px] font-medium leading-tight">
          {copyrightHolder}
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-2 flex">
        <div className="text-neutral-400 text-[16px] font-medium leading-tight">
          Copyright Year
        </div>
        <div className="text-gray-200 text-[16px] font-medium leading-tight">
          {copyrightYear}
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-2 flex">
        <div className="text-neutral-400 text-[16px] font-medium leading-tight">
          Record Label
        </div>
        <div className="text-gray-200 text-[16px] font-medium leading-tight">
          {recordLabel}
        </div>
      </div>
    </div>
    </div>
  );
};

export default TrackDetails;
