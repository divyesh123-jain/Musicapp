import React, { useState } from "react";
import { TiMediaPlay, TiMediaPause, TiDownload } from "react-icons/ti";
import Image from "next/image";
import { useRouter } from "next/router";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import axios from "axios";
import { BiMusic } from "react-icons/bi";

// const AllSinglesSection = ({ singlesData, artistNo, onTrackPlay, onTrackPause, selectedSongData  }) => {
const AllSinglesSection = ({
  singlesData,
  artistNo,
  onTrackPlay,
  onTrackPause,
}) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(-1);
  const [currentTrackUrl, setCurrentTrackUrl] = useState("");
  const router = useRouter();

  const [showAll, setShowAll] = useState(false);

  const [checkedItems, setCheckedItems] = useState([]);
  const [isPlaying, setIsPlaying] = useState(
    new Array(singlesData?.length).fill(false)
  );

  const handleSingleClick = (artist, title) => {
    // Instead of navigating to the [musicNo].js page directly,
    // pass the selected song data as query parameters to the [musicNo].js page
    router.push({
      pathname: `/artists/${artistNo}/song/${artist}/${title}`,
      query: {
        artist: artist,
        title: title,
      },
    });
  };

  const handleCheckboxChange = (id) => {
    if (checkedItems.includes(id)) {
      setCheckedItems(checkedItems.filter((item) => item !== id));
    } else {
      setCheckedItems([...checkedItems, id]);
    }
  };

  const handleDownloadSelected = async () => {
    try {
      const selectedSingles = singlesData.filter((single) =>
        checkedItems.includes(single.id)
      );
      for (const single of selectedSingles) {
        await handleDownload(
          "https://admin.emergencemusicdistribution.com/uploads/audio/track/1687028749-file.wav"
        );
        // await handleDownload(single.track.file);
      }
    } catch (error) {
      console.error("Error downloading selected singles:", error);
      // Add any error handling or user notification here, if needed
    }
  };

  const handleClick = () => {
    setShowAll(!showAll);
  };

  const handlePlayPause = (index, trackURL) => {
    if (currentTrackIndex === index) {
      // If the same song is clicked again, pause it
      if (isPlaying[index]) {
        onTrackPause();
        setIsPlaying((prevIsPlaying) => {
          const updatedIsPlaying = [...prevIsPlaying];
          updatedIsPlaying[index] = false;
          return updatedIsPlaying;
        });
        setCurrentTrackIndex(-1);
        setCurrentTrackUrl("");
      } else {
        // Resume playing the same song if it was paused
        setIsPlaying((prevIsPlaying) => {
          const updatedIsPlaying = [...prevIsPlaying];
          updatedIsPlaying[index] = true;
          return updatedIsPlaying;
        });
        onTrackPlay(trackURL, index);
      }
    } else {
      // Play a new song and pause the currently playing song
      onTrackPause();
      setIsPlaying(new Array(singlesData?.length).fill(false)); // Reset all isPlaying states
      setCurrentTrackIndex(index);
      setCurrentTrackUrl(trackURL);
      setIsPlaying((prevIsPlaying) => {
        const updatedIsPlaying = [...prevIsPlaying];
        updatedIsPlaying[index] = true;
        return updatedIsPlaying;
      });
      onTrackPlay(trackURL, index);
    }
  };

  const handleDownload = async (url) => {
    try {
      const response = await axios.get(url, { responseType: "blob" });
      const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.setAttribute("download", "song.mp3"); // Set the desired file name
      document.body.appendChild(link);
      link.click();
      link.remove();
      console.log("successfull download");
    } catch (error) {
      console.error("Error downloading the song:", error);
      console.log("error download");
    }
  };

  const handleSelectAll = () => {
    const allIds = singlesData?.map((single) => single.id);
    setCheckedItems(allIds);
  };

  const handleUnselectAll = () => {
    setCheckedItems([]);
  };

  return (
    <>
      <div className="flex justify-between p-3">
        <div className="text-xl font-semibold mt-5">ALL Singles</div>
        {!showAll ? (
          <div
            className="text-xl font-semibold mt-5 cursor-pointer"
            onClick={handleClick}
          >
            View All
          </div>
        ) : (
          <div
            className="text-xl font-semibold mt-5 cursor-pointer"
            onClick={handleClick}
          >
            View Less
          </div>
        )}
      </div>
      {singlesData && singlesData.length > 0 ? (
        <>
          <div className="mt-4 pr-3">
            {singlesData
              ?.slice(0, showAll ? singlesData.length : 3)
              .map((single, index) => (
                <label
                  key={single.id}
                  className="flex justify-between items-center p-2 last:border-b-0 backdrop-opacity-20 bg-white/[0.13] mb-4 rounded-lg"
                >
                  <div className="flex items-center">
                    <div className="mr-4">
                      {checkedItems.includes(single.id) ? (
                        <MdCheckBox
                          className="w-6 h-6 text-red-500 cursor-pointer"
                          onClick={() => handleCheckboxChange(single.id)}
                        />
                      ) : (
                        <MdCheckBoxOutlineBlank
                          className="w-6 h-6 cursor-pointer"
                          onClick={() => handleCheckboxChange(single.id)}
                        />
                      )}
                    </div>
                    <div
                      className="cursor-pointer"
                      onClick={() =>
                        handleSingleClick(
                          single.artist.split("|")[0],
                          single.track.title
                        )
                      }
                    >
                      <Image
                        // src={single.track.thumbnail}
                        src="https://admin.emergencemusicdistribution.com/uploads/audio/thumbnail/1687028628-file.png"
                        alt="Single Cover"
                        width={50}
                        height={50}
                        className="w-12 h-12 object-cover rounded-md"
                      />
                    </div>
                    <div
                      className="ml-4 cursor-pointer"
                      onClick={() =>
                        handleSingleClick(single.artist, single.track.title)
                      }
                    >
                      <p className="text-lg font-semibold">
                        {single.track.title}
                      </p>
                      <p className="text-sm text-gray-400">{single.artist}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex justify-between items-center space-x-1 mr-6">
                      <BsClock className="" />
                      <span>0.33</span>
                    </div>
                    <div>
                      {/* Play or pause icon and action */}
                      {isPlaying[index] ? (
                        <TiMediaPause
                          className="w-6 h-6 text-white cursor-pointer"
                          // onClick={() => handlePlayPause(index, single.track.file)}
                          onClick={() =>
                            handlePlayPause(
                              index,
                              "https://admin.emergencemusicdistribution.com/uploads/audio/track/1687028749-file.wav"
                            )
                          }
                        />
                      ) : (
                        <TiMediaPlay
                          className="w-6 h-6 text-white cursor-pointer"
                          // onClick={() => handlePlayPause(index, single.track.file)}
                          onClick={() =>
                            handlePlayPause(
                              index,
                              "https://admin.emergencemusicdistribution.com/uploads/audio/track/1687028749-file.wav"
                            )
                          }
                        />
                      )}
                    </div>
                    <TiDownload
                      className="w-6 h-6 text-white ml-4 cursor-pointer"
                      onClick={() =>
                        handleDownload(
                          "https://admin.emergencemusicdistribution.com/uploads/audio/track/1687028749-file.wav"
                        )
                      }
                    />
                  </div>
                </label>
              ))}
            {checkedItems.length > 0 && (
              <div className="md:flex md:justify-between border-2 pt-4 pb-4 pl-8 pr-8 items-center rounded-3xl text-lg">
                <div className="flex justify-center items-center md:flex-none">
                  <div>Selected: {checkedItems.length}</div>
                </div>
                <div className="md:flex md:justify-evenly md:space-x-16 items-center font-bold">
                  <div className="flex justify-around md:space-x-16 mt-3 md:mt-0">
                    <button onClick={handleSelectAll}>Select All</button>
                    <button onClick={handleUnselectAll}>Unselect All</button>
                  </div>
                  <div
                    className="flex justify-center items-center md:pl-16 md:pr-16 pt-4 pb-4 mt-5 md:mt-0 w-[fit] bg-gradient-to-r from-blue-700 to-red-500 rounded-full font-semi cursor-pointer"
                    onClick={handleDownloadSelected}
                  >
                    Download
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        // Render the "Empty list!" message when there are no songs
        <div className="empty py-3">
          <BiMusic className="text-5xl font-extrabold flex ml-auto mr-auto text-gray-500" />
          <p className="m-0">Empty list!</p>
          <p className="m-0">This artist has no songs at this moment.</p>
        </div>
      )}
    </>
  );
};

export default AllSinglesSection;
