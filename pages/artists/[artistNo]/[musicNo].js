import React from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { useRouter } from "next/router";
import styles from "../../../sass/_em-artistProfile.module.scss";
import TrackDetails from "@/components/Artists/MusicDetail/TrackDetails";
import SongPlayer from "@/components/Artists/MusicDetail/SongPlayer";

const MusicDetails = () => {
  const router = useRouter();
  const artistName = router.query.artistNo;
  const musicNumber = router.query.musicNo;

  // Example array of songs
  const songs = [
    {
      id: 1,
      albumCover: "/../public/albumCover1.jpg",
      trackTitle: "Song 1",
      artist: "Artist 1",
      duration: "4:30",
    },
  ];

  const tracks = [
    {
      id: 1,
      trackTitle: "Track 1",
      primaryArtist: "Artist 1",
      featuredArtist: "Featured Artist 1",
      label: "Label 1",
      copyrightHolder: "Copyright Holder 1",
      copyrightYear: "2023",
      recordLabel: "Record Label 1",
      imageSrc:"https://via.placeholder.com/363x366",
    },
  ];

  return (
    <>
      <div className="mt-8 md:mt-0 md:ml-[270px] min-h-[100vh] text-white p-5">
        <div className="align-items-center justify-content-between flex text-white">
          <BsArrowLeftCircle
            className="text-[30px] flex justify-center items-center cursor-pointer"
            onClick={() => {
              router.push(`/artists/${artistName}/`);
            }}
          />
          <h2 className="text-white ml-[10px] font-sf-pro-text text-[24px] font-semibold tracking-normal text-left sm:text-[20px]">
            {musicNumber}
          </h2>
        </div>
        <div
          className={`${styles["em-db-content-body"]} grid lg:grid-cols-3 grid-cols-1 p-3 mt-2 space-x-2`}
        ></div>
        {/* <div className="grid lg:grid-cols-2 grid-cols-1 p-3  space-x-2"> */}
          {/* <div className="grid1">
            <img
              className="w-[363px] left-[46px] h-[366px] rounded-2xl"
              src="https://via.placeholder.com/363x366"
            />
          </div> */}
          {tracks.map((track) => (
            <TrackDetails
              key={track.id}
              trackTitle={musicNumber}
              primaryArtist={track.primaryArtist}
              featuredArtist={track.featuredArtist}
              label={track.label}
              copyrightHolder={track.copyrightHolder}
              copyrightYear={track.copyrightYear}
              recordLabel={track.recordLabel}
              imageSrc={track.imageSrc}
            />
          ))}
        {/* </div> */}
        {songs.map((song) => (
          <SongPlayer
            key={song.id}
            albumCover={song.albumCover}
            trackTitle={song.trackTitle}
            artist={song.artist}
            duration={song.duration}
          />
        ))}
      </div>
    </>
  );
};

export default MusicDetails;







// import React from "react";
// import { BsArrowLeftCircle } from "react-icons/bs";
// import styles from "../../../sass/_em-artistProfile.module.scss";
// import { BsClock } from "react-icons/bs";
// import { TiMediaPlay } from "react-icons/ti";
// import Image from "next/image";
// import { useRouter } from "next/router";

// const MusicDetails = () => {
//   const router = useRouter();
//   const artistName = router.query.artistNo;
//   const musicNumber = router.query.musicNo;
//   return (
//     <>
//       <div className="mt-8 md:mt-0 md:ml-[270px] min-h-[100vh] text-white p-5">
//         <div className="align-items-center justify-content-between flex text-white">
//           <BsArrowLeftCircle
//             className="text-[30px] flex justify-center items-center cursor-pointer"
//             onClick={() => {
//               router.push(`/artists/${artistName}/`);
//             }}
//           />
//           <h2 className="text-white ml-[10px] font-sf-pro-text text-[24px] font-semibold tracking-normal text-left sm:text-[20px]">
//             {musicNumber}
//           </h2>
//         </div>
//         <div
//           className={`${styles["em-db-content-body"]} grid lg:grid-cols-3 grid-cols-1 p-3 mt-2 space-x-2`}
//         ></div>
//         <div className="grid lg:grid-cols-2 grid-cols-1 p-3  space-x-2">
//           <div className="grid1">
//             <img
//               className="w-[363px] left-[46px] h-[366px] rounded-2xl"
//               src="https://via.placeholder.com/363x366"
//             />
//           </div>

//           <div className="left-[46px] grid grid-cols-2 gap-4 mt-5 md:mt-0">
//             <div className="flex-col justify-start items-start gap-2 flex">
//               <div className="text-neutral-400 text-[16px] font-medium leading-tight">
//                 Track Title
//               </div>
//               <div className="text-gray-200 text-[16px] font-medium leading-tight">
//                 {musicNumber}
//               </div>
//             </div>
//             <div className="flex-col justify-start items-start gap-2 flex">
//               <div className="text-neutral-400 text-[16px] font-medium leading-tight">
//                 Primary Artist
//               </div>
//               <div className="text-gray-200 text-[16px] font-medium leading-tight">
//                 Che
//               </div>
//             </div>
//             <div className="flex-col justify-start items-start gap-2 flex">
//               <div className="text-neutral-400 text-[16px] font-medium leading-tight">
//                 Featured Artist
//               </div>
//               <div className="text-gray-200 text-[16px] font-medium leading-tight">
//                 Jamjaitian
//               </div>
//             </div>
//             <div className="flex-col justify-start items-start gap-2 flex">
//               <div className="text-neutral-400 text-[16px] font-medium leading-tight">
//                 Label
//               </div>
//               <div className="text-gray-200 text-[16px] font-medium leading-tight">
//                 We are
//               </div>
//             </div>
//             <div className="flex-col justify-start items-start gap-2 flex">
//               <div className="text-neutral-400 text-[16px] font-medium leading-tight">
//                 Copyright Holder
//               </div>
//               <div className="text-gray-200 text-[16px] font-medium leading-tight">
//                 Charlie Puth
//               </div>
//             </div>
//             <div className="flex-col justify-start items-start gap-2 flex">
//               <div className="text-neutral-400 text-[16px] font-medium leading-tight">
//                 Copyright Year
//               </div>
//               <div className="text-gray-200 text-[16px] font-medium leading-tight">
//                 2023
//               </div>
//             </div>
//             <div className="flex-col justify-start items-start gap-2 flex">
//               <div className="text-neutral-400 text-[16px] font-medium leading-tight">
//                 Record Label
//               </div>
//               <div className="text-gray-200 text-[16px] font-medium leading-tight">
//                 Independent
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="relative">
//           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
//           <label className="flex justify-between items-center p-2 border-b border-gray-200 last:border-b-0 relative z-10">
//             <div className="flex items-center space-x-6">
//               <TiMediaPlay className="w-6 h-6 text-white" />
//               <div className="ml-4 flex items-center space-x-3">
//                 <Image
//                   src="/../public/albumCover.jpg"
//                   alt="album cover"
//                   width={50}
//                   height={50}
//                   className="w-12 h-12 object-cover rounded-md"
//                 />
//                 <div>
//                   <p className="text-lg font-bold text-white">Need to know</p>
//                   <p className="text-sm text-gray-500">Doja Cat</p>
//                 </div>
//               </div>
//             </div>
//             <div className="flex justify-between items-center space-x-1 mr-6">
//               <BsClock className="" />
//               <span>10:00</span>
//             </div>
//           </label>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MusicDetails;
