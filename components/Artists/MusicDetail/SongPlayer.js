// SongPlayer.js
import React from "react";
import { TiMediaPause, TiMediaPlay } from "react-icons/ti";
import Image from "next/image";
import { BsClock } from "react-icons/bs";

const SongPlayer = ({ albumCover,
  trackTitle,
  artist,
  id,
  duration,
  isPlaying,
  onPlayPause,
  onAudioPause,
}) => {

  const handlePlayPause = () => {
    onPlayPause(!isPlaying); // Call the onPlayPause function to toggle audio player visibility
  };


  return (
    <div className="relative h-[88px] ">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <label className="flex justify-between p-2 border-b border-gray-200 last:border-b-0 relative z-10">
        <div className="flex items-center space-x-6">
        <div>
            {isPlaying ? (
              <TiMediaPause
                className="w-6 h-6 text-white cursor-pointer"
                onClick={onPlayPause} // Call the onPlayPause function to toggle audio player visibility
              />
            ) : (
              <TiMediaPlay
                className="w-6 h-6 text-white cursor-pointer"
                onClick={onPlayPause} // Call the onPlayPause function to toggle audio player visibility
              />
            )}
          </div>
          <div className="ml-4 flex items-center space-x-3">
            <Image
              src={albumCover}
              alt="album cover"
              width={50}
              height={50}
              className="w-12 h-12 object-cover rounded-md"
            />
            <div>
              <p className="text-base md:text-lg  font-bold text-white">{trackTitle}</p>
              <p className="text-xs md:text-sm text-gray-500">{artist}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center space-x-1 mr-6">
          <BsClock className="" />
          <span>{duration}</span>
        </div>
      </label>
    </div>
  );
};

export default SongPlayer;



//!not good behaviour of play pause
// import React, { useState } from "react";
// import { TiMediaPause, TiMediaPlay } from "react-icons/ti";
// import Image from "next/image";
// import { BsClock } from "react-icons/bs";

// const SongPlayer = ({ albumCover, trackTitle, artist, audioFile, id, duration }) => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [audioPlayerVisible, setAudioPlayerVisible] = useState(false);

//   const handlePlayPause = () => {
//     setIsPlaying(!isPlaying);
//     setAudioPlayerVisible(true);
//   };

//   const handleAudioPause = () => {
//     setIsPlaying(false);
//     setAudioPlayerVisible(false); // Hide the audio player when paused
//   };

//   return (
//     <div className="relative h-[88px] ">
//       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
//       <label className="flex justify-between p-2 border-b border-gray-200 last:border-b-0 relative z-10">
//         <div className="flex items-center space-x-6">
//           <div>
//             {isPlaying ? (
//               <TiMediaPause
//                 className="w-6 h-6 text-white cursor-pointer"
//                 onClick={() => handlePlayPause()}
//               />
//             ) : (
//               <TiMediaPlay
//                 className="w-6 h-6 text-white cursor-pointer"
//                 onClick={() => handlePlayPause()}
//               />
//             )}
//           </div>
//           <div className="ml-4 flex items-center space-x-3">
//             <Image
//               src={albumCover}
//               alt="album cover"
//               width={50}
//               height={50}
//               className="w-12 h-12 object-cover rounded-md"
//             />
//             <div>
//               <p className="text-lg font-bold text-white">{trackTitle}</p>
//               <p className="text-sm text-gray-500">{artist}</p>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-between items-center space-x-1 mr-6">
//           <BsClock className="" />
//           <span>{duration}</span>
//         </div>
//       </label>

//       {audioPlayerVisible && (
//         <div className="position-fixed bg-red-500 bottom-0 start-50 translate-middle-x w-25 px-2">
//           <audio
//             autoPlay={isPlaying}
//             className="react-audio-player w-100"
//             controls
//             id={`audio-${id}`}
//             src={audioFile}
//             title={trackTitle}
//             onPause={() => handleAudioPause()} // Call the function to hide the audio player when paused
//           >
//             <p>
//               Your browser does not support the <code>audio</code> element.
//             </p>
//           </audio>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SongPlayer;




// !before work
// import React, { useState } from "react";
// import { TiMediaPause, TiMediaPlay } from "react-icons/ti";
// import Image from "next/image";
// import { BsClock } from "react-icons/bs";

// const SongPlayer = ({ albumCover, trackTitle, artist, duration }) => {

//   const [isPlaying, setIsPlaying] = useState(false);

//   const handlePlayPause = () => {
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div className="relative h-[88px] ">
//       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
//       <label className="flex justify-between p-2 border-b border-gray-200 last:border-b-0 relative z-10">
//         <div className="flex items-center space-x-6">
//           <div>
//             {isPlaying ? (
//               <TiMediaPause
//                 className="w-6 h-6 text-white cursor-pointer"
//                 onClick={() => handlePlayPause()}
//               />
//             ) : (
//               <TiMediaPlay
//                 className="w-6 h-6 text-white cursor-pointer"
//                 onClick={() => handlePlayPause()}
//               />
//             )}
//           </div>
//           <div className="ml-4 flex items-center space-x-3">
//             <Image
//               src={albumCover}
//               alt="album cover"
//               width={50}
//               height={50}
//               className="w-12 h-12 object-cover rounded-md"
//             />
//             <div>
//               <p className="text-lg font-bold text-white">{trackTitle}</p>
//               <p className="text-sm text-gray-500">{artist}</p>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-between items-center space-x-1 mr-6">
//           <BsClock className="" />
//           <span>{duration}</span>
//         </div>
//       </label>
//     </div>
//   );
// };

// export default SongPlayer;







