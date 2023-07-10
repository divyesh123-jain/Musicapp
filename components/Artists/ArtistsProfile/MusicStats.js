import React from "react";
import { BsMusicNote } from "react-icons/bs";
import styles from "../../../sass/_em-artistProfile.module.scss";

const MusicStats = ({ dashboardInfo }) => {
  return (
    <div className={`${styles["em-db-music"]} m-0 p-0 md:ml-[16px] row gap-3 grid grid-cols-2`}>
      <li className="col m-0 pt-[12px] pr-[30px] pb-[12px] pl-[10px] list-none bg-[#00000066] rounded-2xl">
        <BsMusicNote className="img-fluid" />
        <span className="font-sfPro text-base font-medium text-white/60 block mt-4 whitespace-nowrap">Music</span>
        <em>567</em>
        {/* <em>{dashboardInfo?.totalMusic}</em> */}
      </li>
      <li className="col m-0 pt-[12px] pr-[30px] pb-[12px] pl-[10px] list-none bg-[#00000066] rounded-2xl">
        <BsMusicNote className="img-fluid" />
        <span className="font-sfPro text-base font-medium text-white/60 block mt-4 whitespace-nowrap">EP / Albums</span>
        <em>30</em>
        {/* <em>{dashboardInfo?.albums?.total}</em> */}
      </li>
      <li className="col m-0 pt-[12px] pr-[30px] pb-[12px] pl-[10px] list-none bg-[#00000066] rounded-2xl">
        <BsMusicNote className="img-fluid" />
        <span className="font-sfPro text-base font-medium text-white/60 block mt-4 whitespace-nowrap">Upcoming Music</span>
        <em>16</em>
        {/* <em>{dashboardInfo?.totalUpcomingMusic}</em> */}
      </li>
      <li className="col m-0 pt-[12px] pr-[30px] pb-[12px] pl-[10px] list-none bg-[#00000066] rounded-2xl">
        <BsMusicNote className="img-fluid" />
        <span className="font-sfPro text-base font-medium text-white/60 block mt-4 whitespace-nowrap">Published Music</span>
        <em>760</em>
        {/* <em>{dashboardInfo?.totalPublishedMusic}</em> */}
      </li>

      <style jsx>{`
        @media (max-width: 768px) {
          .col {
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default MusicStats;


