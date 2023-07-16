import React, { useEffect, useState } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { useRouter } from "next/router";
import styles from "../../../../../sass/_em-artistProfile.module.scss";
import TrackDetails from "@/components/Artists/MusicDetail/TrackDetails";
import SongPlayer from "@/components/Artists/MusicDetail/SongPlayer";
import axios from "axios";

const MusicDetails = ({
  artistData: initialArtistData,
  singlesData: initialSinglesData,
  selectedSongData,
}) => {
  const router = useRouter();
  const artistName = router.query.artistNo;
  const musicNumber = router.query.musicNo;

  const [artist, setArtist] = useState(initialArtistData);
  const [singlesData, setSinglesData] = useState(initialSinglesData);
  const [audioPlayerVisible, setAudioPlayerVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setAudioPlayerVisible(!audioPlayerVisible); // Show the audio player when play button is clicked
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const artistsResponse = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/artists`
        );
        const artists = artistsResponse.data.data;

        const foundArtist = artists.find(
          (artist) => artist.username === artistName
        );

        setArtist(foundArtist);

        if (foundArtist) {
          const singlesResponse = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_MUSICS}${process.env.NEXT_PUBLIC_LISTS}/${foundArtist.id}`
          );
          const fetchedSinglesData = singlesResponse.data.data;
          setSinglesData(fetchedSinglesData);
        }
      } catch (error) {
        console.error("Error fetching artist data:", error);
      }
    };

    fetchData();
  }, [artistName]);

  if (!artist) {
    return <div>Loading...</div>;
  }

  const handleAudioPause = () => {
    setAudioPlayerVisible(false);
  };


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
        <div className=" p-3 space-x-2">
          <TrackDetails
            key={selectedSongData?.id}
            trackTitle={selectedSongData?.track.title}
            primaryArtist={selectedSongData?.artist}
            featuredArtist={null}
            label={null}
            copyrightHolder={null}
            copyrightYear={null}
            recordLabel={null}
            imageSrc={selectedSongData?.track.thumbnail}
          />
        </div>
        <SongPlayer
        key={selectedSongData?.id}
        albumCover={selectedSongData?.track.thumbnail}
        trackTitle={selectedSongData?.track.title}
        artist={selectedSongData?.artist}
        audioFile={selectedSongData?.track.file}
        id={selectedSongData?.id}
        duration={selectedSongData?.duration} // Assuming you have duration in the API response
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        onAudioPause={handleAudioPause} // Pass the handleAudioPause function to the SongPlayer component
        audioPlayerVisible={audioPlayerVisible} // Pass the audio player visibility state to the SongPlayer component
      />

        {/* Audio Player */}
        {audioPlayerVisible && (
          <div className="position-fixed flex justify-center items-center bottom-0 start-50 translate-middle-x w-25 px-2">
            <audio
              autoPlay={isPlaying} // Start playing when isPlaying is true
              className="react-audio-player w-100"
              controls
              id={`audio-${selectedSongData?.id}`}
              src={selectedSongData?.track.file}
              title={selectedSongData?.track.title}
              // onPause={() => setAudioPlayerVisible(false)} // Call the function to hide the audio player when paused
            >
              <p>
                Your browser does not support the <code>audio</code> element.
              </p>
            </audio>
          </div>
        )}
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  try {
    const { artistNo, Artist, title } = context.query;
    const artistsResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/artists`
    );
    const artistsData = artistsResponse.data.data;

    // Find the artist based on the username
    const artist = artistsData.find((artist) => artist.username === artistNo);

    if (!artist) {
      return {
        notFound: true,
      };
    }

    const singlesResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/musics/list/${artist.id}`
    );
    const singlesData = singlesResponse.data.data;

    // Find the selected song data based on the artist and title
    const selectedSongData = singlesData.find(
      (single) => single.artist === Artist && single.track.title === title
    );

    return {
      props: {
        artistData: artist,
        singlesData: singlesData,
        selectedSongData: selectedSongData,
      },
    };
  } catch (error) {
    console.error("Error fetching artist data:", error);
    return {
      props: {
        artistData: null,
        singlesData: null,
        selectedSongData: null,
      },
    };
  }
}

export default MusicDetails;





// //! below code is the one in which all songs are being displayed at once

// import React, { useEffect, useState } from "react";
// import { BsArrowLeftCircle } from "react-icons/bs";
// import { useRouter } from "next/router";
// import styles from "../../../../../sass/_em-artistProfile.module.scss";
// import TrackDetails from "@/components/Artists/MusicDetail/TrackDetails";
// import SongPlayer from "@/components/Artists/MusicDetail/SongPlayer";
// import axios from "axios";

// const MusicDetails = ({
//   artistData: initialArtistData,
//   singlesData: initialSinglesData,
// }) => {
//   const router = useRouter();
//   const artistName = router.query.artistNo;
//   const trackArtist = router.query.Artist;
//   const musicNumber = router.query.musicNo;

//   const [artist, setArtist] = useState(initialArtistData);
//   const [singlesData, setSinglesData] = useState(initialSinglesData);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const artistsResponse = await axios.get(
//           `${process.env.NEXT_PUBLIC_BASE_URL}/artists`
//         );
//         const artists = artistsResponse.data.data;

//         // Find the artist based on the username
//         const foundArtist = artists.find(
//           (artist) => artist.username === artistName
//         );

//         setArtist(foundArtist);
// c
//         if (foundArtist) {

//           const singlesResponse = await axios.get(
//             `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_MUSICS}${process.env.NEXT_PUBLIC_LISTS}/${foundArtist.id}`
//           );
//           const fetchedSinglesData = singlesResponse.data.data;
//           // console.log("fetchedSinglesData: ", fetchedSinglesData );

//           setSinglesData(fetchedSinglesData);

//         }
//       } catch (error) {
//         console.error("Error fetching artist data:", error);
//       }
//     };

//     fetchData();
//   }, [artistName]);

//   if (!artist) {
//     return <div>Loading...</div>;
//   }

//   // Example array of songs
//   // const songs = [
//   //   {
//   //     id: 1,
//   //     albumCover: "/../public/albumCover1.jpg",
//   //     trackTitle: "Song 1",
//   //     artist: "Artist 1",
//   //     duration: "4:30",
//   //   },
//   // ];

//   // const tracks = [
//   //   {
//   //     id: 1,
//   //     trackTitle: "Track 1",
//   //     primaryArtist: "Artist 1",
//   //     featuredArtist: "Featured Artist 1",
//   //     label: "Label 1",
//   //     copyrightHolder: "Copyright Holder 1",
//   //     copyrightYear: "2023",
//   //     recordLabel: "Record Label 1",
//   //     imageSrc:"https://via.placeholder.com/363x366",
//   //   },
//   // ];

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
//           {singlesData?.map((single) => (
//             <TrackDetails
//               key={single.id}
//               trackTitle={single.track.title} // Use the track title from the API response
//               primaryArtist={single.artist} // Use the artist from the API response
//               featuredArtist={null} // If there is no featured artist in the API response, use null or omit this prop
//               label={null} // If there is no label in the API response, use null or omit this prop
//               copyrightHolder={null} // If there is no copyrightHolder in the API response, use null or omit this prop
//               copyrightYear={null} // If there is no copyrightYear in the API response, use null or omit this prop
//               recordLabel={null} // If there is no recordLabel in the API response, use null or omit this prop
//               imageSrc={single.track.thumbnail} // Use the thumbnail from the API response
//             />
//           ))}
//         {/* </div> */}
//         {singlesData.map((single) => (
//           <SongPlayer
//             key={single.id}
//             albumCover={single.track.thumbnail} // Use the thumbnail from the API response
//             trackTitle={single.track.title} // Use the track title from the API response
//             artist={single.artist} // Use the artist from the API response
//             duration={null} // If there is no duration in the API response, use null or omit this prop
//             audioFile={single.track.file} // Use the audio file URL from the API response
//           />
//         ))}
//       </div>
//     </>
//   );
// };

// export async function getServerSideProps(context) {
//   try {
//     const { artistNo } = context.query;
//     const artistsResponse = await axios.get(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/artists`
//     );
//     const artistsData = artistsResponse.data.data;

//     // Find the artist based on the username
//     const artist = artistsData.find((artist) => artist.username === artistNo);

//     if (!artist) {
//       return {
//         notFound: true,
//       };
//     }

//     const singlesResponse = await axios.get(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/musics/list/${artist.id}`
//     );
//     const singlesData = singlesResponse.data.data;

//     return {
//       props: {
//         artistData: artist,
//         singlesData: singlesData,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching artist data:", error);
//     return {
//       props: {
//         artistData: null,
//         singlesData: null,
//       },
//     };
//   }
// }

// export default MusicDetails;

// import React from "react";
// import { BsArrowLeftCircle } from "react-icons/bs";
// import { useRouter } from "next/router";
// import styles from "../../../../../sass/_em-artistProfile.module.scss";
// import TrackDetails from "@/components/Artists/MusicDetail/TrackDetails";
// import SongPlayer from "@/components/Artists/MusicDetail/SongPlayer";

// const MusicDetails = () => {
//   const router = useRouter();
//   const artistName = router.query.artistNo;
//   const trackArtist = router.query.Artist;
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
//               primaryArtist={trackArtist}
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
//             trackTitle={musicNumber}
//             artist={trackArtist}
//             duration={song.duration}
//           />
//         ))}
//       </div>
//     </>
//   );
// };

// export default MusicDetails;
