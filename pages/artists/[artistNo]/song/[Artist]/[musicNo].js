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
            // imageSrc={selectedSongData?.track.thumbnail}
            imageSrc="https://admin.emergencemusicdistribution.com/uploads/album/thumbnail/1687028749-file.jpg"
          />
        </div>
        <SongPlayer
        key={selectedSongData?.id}
        // albumCover={selectedSongData?.track.thumbnail}
        albumCover="https://admin.emergencemusicdistribution.com/uploads/album/thumbnail/1687028749-file.jpg"
        trackTitle={selectedSongData?.track.title}
        artist={selectedSongData?.artist}
        audioFile={selectedSongData?.track.file}
        id={selectedSongData?.id}
        duration={selectedSongData?.duration}
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        onAudioPause={handleAudioPause} 
        audioPlayerVisible={audioPlayerVisible}
      />

        {/* Audio Player */}
        {audioPlayerVisible && (
          <div className="position-fixed flex justify-center items-center bottom-0 start-50 translate-middle-x w-25 px-2">
            <audio
              autoPlay={isPlaying}
              className="react-audio-player w-100"
              controls
              id={`audio-${selectedSongData?.id}`}
              // src={selectedSongData?.track.file}
              src="https://admin.emergencemusicdistribution.com/uploads/audio/track/1687028749-file.wav"
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
