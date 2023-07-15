import React from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { useRouter } from "next/router";
import styles from "../../../../sass/_em-artistProfile.module.scss";
import TrackDetails from "@/components/Artists/MusicDetail/TrackDetails";
import SongPlayer from "@/components/Artists/MusicDetail/SongPlayer";

const MusicDetails = () => {
  const router = useRouter();
  const artistName = router.query.artistNo;
  const trackArtist = router.query.Artist;
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
              primaryArtist={trackArtist}
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
            trackTitle={musicNumber}
            artist={trackArtist}
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
// import { useRouter } from "next/router";
// import styles from "../../../sass/_em-artistProfile.module.scss";
// import TrackDetails from "@/components/Artists/MusicDetail/TrackDetails";
// import SongPlayer from "@/components/Artists/MusicDetail/SongPlayer";

// const MusicDetails = () => {
//   const router = useRouter();
//   const artistName = router.query.artistNo;
//   const musicNumber = router.query.musicNo;

//   // Example array of songs
//   const songs = [
//     {
//       id: 1,
//       albumCover: "/../public/albumCover1.jpg",
//       trackTitle: "Song 1",
//       artist: "Artist 1",
//       duration: "4:30",
//     },
//   ];

//   const tracks = [
//     {
//       id: 1,
//       trackTitle: "Track 1",
//       primaryArtist: "Artist 1",
//       featuredArtist: "Featured Artist 1",
//       label: "Label 1",
//       copyrightHolder: "Copyright Holder 1",
//       copyrightYear: "2023",
//       recordLabel: "Record Label 1",
//       imageSrc:"https://via.placeholder.com/363x366",
//     },
//   ];

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
//         {/* <div className="grid lg:grid-cols-2 grid-cols-1 p-3  space-x-2"> */}
//           {/* <div className="grid1">
//             <img
//               className="w-[363px] left-[46px] h-[366px] rounded-2xl"
//               src="https://via.placeholder.com/363x366"
//             />
//           </div> */}
//           {tracks.map((track) => (
//             <TrackDetails
//               key={track.id}
//               trackTitle={musicNumber}
//               primaryArtist={track.primaryArtist}
//               featuredArtist={track.featuredArtist}
//               label={track.label}
//               copyrightHolder={track.copyrightHolder}
//               copyrightYear={track.copyrightYear}
//               recordLabel={track.recordLabel}
//               imageSrc={track.imageSrc}
//             />
//           ))}
//         {/* </div> */}
//         {songs.map((song) => (
//           <SongPlayer
//             key={song.id}
//             albumCover={song.albumCover}
//             trackTitle={song.trackTitle}
//             artist={song.artist}
//             duration={song.duration}
//           />
//         ))}
//       </div>
//     </>
//   );
// };

// export default MusicDetails;




