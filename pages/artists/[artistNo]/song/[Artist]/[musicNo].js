// (this is not) below code is the one in which all songs are being displayed at once

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
  selectedSongData, // Added to receive the selected song data from the query parameters
}) => {
  const router = useRouter();
  const artistName = router.query.artistNo;
  const musicNumber = router.query.musicNo;

  const [artist, setArtist] = useState(initialArtistData);
  const [singlesData, setSinglesData] = useState(initialSinglesData);

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
        <div className="grid lg:grid-cols-2 grid-cols-1 p-3 space-x-2">
          <TrackDetails
            key={selectedSongData?.id}
            trackTitle={selectedSongData?.track.title}
            primaryArtist={selectedSongData?.artist}
            featuredArtist={null} // If there is no featured artist in the API response, use null or omit this prop
            label={null} // If there is no label in the API response, use null or omit this prop
            copyrightHolder={null} // If there is no copyrightHolder in the API response, use null or omit this prop
            copyrightYear={null} // If there is no copyrightYear in the API response, use null or omit this prop
            recordLabel={null} // If there is no recordLabel in the API response, use null or omit this prop
            imageSrc={selectedSongData?.track.thumbnail} // Use the thumbnail from the API response
          />
        </div>
        <SongPlayer
          key={selectedSongData?.id}
          albumCover={selectedSongData?.track.thumbnail}
          trackTitle={selectedSongData?.track.title}
          artist={selectedSongData?.artist}
          audioFile={selectedSongData?.track.file}
          // Add other props based on your SongPlayer component
        />
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
