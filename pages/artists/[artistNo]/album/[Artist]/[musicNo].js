import React, { useEffect, useState } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { useRouter } from "next/router";
import styles from "../../../../../sass/_em-artistProfile.module.scss";
import TrackDetails from "@/components/Artists/MusicDetail/TrackDetails";
import SongPlayer from "@/components/Artists/MusicDetail/SongPlayer";
import axios from "axios";

const MusicDetails = ({
  artistData: initialArtistData,
  albumData: initialAlbumData,
}) => {
  const router = useRouter();
  const artistName = router.query.artistNo;
  const trackArtist = router.query.Artist;
  const musicNumber = router.query.musicNo;

  const [artist, setArtist] = useState(initialArtistData);
  const [albumData, setAlbumData] = useState(initialAlbumData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const artistsResponse = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/artists`
        );
        const artists = artistsResponse.data.data;

        // Find the artist based on the username
        const foundArtist = artists.find(
          (artist) => artist.username === artistName
        );

        setArtist(foundArtist);
c
        if (foundArtist) {

          const albumResponse = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}/albums/list/${foundArtist.id}`
          );
          const fetchedAlbumData = albumResponse.data.data;
          // console.log("fetchedAlbumData: ", fetchedAlbumData );

          setAlbumData(fetchedAlbumData);

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

  // Example array of songs
  // const songs = [
  //   {
  //     id: 1,
  //     albumCover: "/../public/albumCover1.jpg",
  //     trackTitle: "Song 1",
  //     artist: "Artist 1",
  //     duration: "4:30",
  //   },
  // ];

  // const tracks = [
  //   {
  //     id: 1,
  //     trackTitle: "Track 1",
  //     primaryArtist: "Artist 1",
  //     featuredArtist: "Featured Artist 1",
  //     label: "Label 1",
  //     copyrightHolder: "Copyright Holder 1",
  //     copyrightYear: "2023",
  //     recordLabel: "Record Label 1",
  //     imageSrc:"https://via.placeholder.com/363x366",
  //   },
  // ];

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
          {albumData.map((track) => (
            <TrackDetails
              key={track.id}
              trackTitle={track.title} // Use the track title from the API response
              primaryArtist={track.artist} // Use the artist from the API response
              featuredArtist={null} // If there is no featured artist in the API response, use null or omit this prop
              label={null} // If there is no label in the API response, use null or omit this prop
              copyrightHolder={null} // If there is no copyrightHolder in the API response, use null or omit this prop
              copyrightYear={null} // If there is no copyrightYear in the API response, use null or omit this prop
              recordLabel={null} // If there is no recordLabel in the API response, use null or omit this prop
              imageSrc={track.thumbnail} // Use the thumbnail from the API response
            />
          ))}
        {/* </div> */}
        {albumData.map((song) => (
          <SongPlayer
            key={song.id}
            albumCover={song.thumbnail} // Use the thumbnail from the API response
            trackTitle={song.title} // Use the track title from the API response
            artist={song.artist} // Use the artist from the API response
            duration={null} // If there is no duration in the API response, use null or omit this prop
          />
        ))}
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  try {
    const { artistNo } = context.query;
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

    const albumResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/albums/list/${artist.id}`
    );
    const albumData = albumResponse.data.data;

    return {
      props: {
        artistData: artist,
        albumData: albumData,
      },
    };
  } catch (error) {
    console.error("Error fetching artist data:", error);
    return {
      props: {
        artistData: null,
        albumData: null,
      },
    };
  }
}



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




