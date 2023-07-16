import {useEffect,useState} from "react";
import DropDown from "../DropDown";
import axios from "axios";
import { useRouter } from "next/router";

const EMACpop = ({ closeModal,onChange,isUpdated }) => {
  const router = useRouter();
  const [artists,setArtists] = useState([])
  const [selectedArtist, setSelectedArtist] = useState("");
  const [tracks,setTracks] = useState([])
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  useEffect(()=>{
    const fetchingData = async () => {
      try{
        const {data} =  await (await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/artists`)).data
        // return data
        setArtists(data.map(artist => [artist.username,artist.id]))
      }
      catch(err){
        console.log(err.message)
      }
    }
    fetchingData()
  },[])
  const handleArtistChange = (value) => {
    setSelectedArtist(value);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedArtist) {
          const { data } = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}/musics/details/${selectedArtist[0]}`
          )
          setTracks(data)
          
        } else {
          setTracks([]);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, [selectedArtist]);
  const handleSave = () => {
    // Send PUT request
    axios
      .put(
        `${process.env.NEXT_PUBLIC_BASE_URL}/musics/top-ten/${selectedArtist[0]}`,
        {
          tss: inputValue,
          isTopTen: true,
        }
      )
      .then((response) => {
        console.log(response.data);
        // Close modal
        closeModal();
        onChange(true)
        // setIsUpdated(true)
        setTimeout(()=>{
          onChange(false);
        },2000)
        // router.reload(window.location.pathname);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // console.log("artists",artists)
  // console.log("tracks", [tracks.data.track.title, tracks.data.id]);
  // console.log(inputValue)a
  return (
    <>
      <div>
        <div className="w-[90vw] md:w-[500px] bg-black rounded-3xl p-7">
          <div className="font-semibold text-white/90">Edit EMAC Item:</div>
          <div className="font-bold text-red-400">
            Ranking {selectedArtist[0] || 1}
          </div>
          <div className="relative mt-2 font-semibold text-gray-400">
            {/* Artist */}
            {artists.length > 0 && (
              <div className="relative mt-2 font-semibold text-gray-400">
                Artist
                <DropDown options={artists} onChange={handleArtistChange} />
              </div>
            )}
          </div>
          <div className="relative mt-16 font-semibold text-gray-400">
            Track
            <DropDown
              options={[[tracks?.data?.track?.title, tracks?.data?.id]]}
            />
          </div>
          <div className="mt-16 font-semibold text-gray-400">
            <label htmlFor="inputNumber" className="block">
              TSS
            </label>
            <input
              id="inputNumber"
              type="number"
              className="w-full p-2 mt-1 text-gray-200 border rounded-lg border-white/40 bg-white/10"
              value={inputValue}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-end mt-16 space-x-10">
            <div className="text-white cursor-pointer" onClick={closeModal}>
              Cancel
            </div>
            <div
              className="pt-2 pb-2 pl-10 pr-10 text-gray-200 rounded-full cursor-pointer bg-gradient-to-r from-blue-700 to-red-500"
              onClick={handleSave}
            >
              Save
            </div>
          </div>
        </div>
      </div>
      {isUpdated && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full backdrop-filter backdrop-blur-lg">
          <div className="p-10 text-white bg-black rounded-lg">
            <p>Your TSS has been updated!</p>
          </div>
        </div>
      )}
    </>
  );
};

export default EMACpop;