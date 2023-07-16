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
          <h2 className="text-white ml-[10px] font-sf-pro-text text-[24px] font-semibold tracking-normal text-left mx-4 sm:text-[20px]">
            {musicNumber}
          </h2>
        </div>
        <div
          className={`${styles["em-db-content-body"]} grid lg:grid-cols-2 grid-cols-1 p-3 mt-2 space-x-2`}
        ></div>
        {/* <div className="grid lg:grid-cols-2 grid-cols-1 p-3  space-x-2"> */}
          {/* <div className="grid1">
            <img
              className="w-[363px] left-[46px] h-[366px] rounded-2xl"
              src="https://via.placeholder.com/363x366"
            />
          </div> */}
          <div className=" mx-5">
          {albumData.map((track) => (
            <TrackDetails
              key={track.id}
              trackTitle={track.title}
              primaryArtist={track.artist}
              featuredArtist={null}
              label={null} 
              copyrightHolder={null} 
              copyrightYear={null} 
              recordLabel={null} 
              imageSrc={track.thumbnail} 
            />
          ))}
        {/* </div> */}
        {albumData.map((song) => (
          <SongPlayer
            key={song.id}
            albumCover={song.thumbnail} 
            trackTitle={song.title}
            artist={song.artist}
            duration={null} 
          />
        ))}
      </div>
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
