import React, { useState } from "react";
import { TiMediaPlay, TiMediaPause, TiDownload } from "react-icons/ti";
import Image from "next/image";
import { useRouter } from "next/router";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import axios from "axios";

const AllSinglesSection = ({ singlesData, artistNo  }) => {
  const router = useRouter();

  const [showAll, setShowAll] = useState(false);

  const [checkedItems, setCheckedItems] = useState([]);
  const [isPlaying, setIsPlaying] = useState(
    new Array(singlesData?.length).fill(false)
  );

  // const handleSingleClick = (artist, title) => {
  //   // Handle click event, e.g., navigate to single details page
  //   router.push(`/artists/${artist}/${title}`);
  // };

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

  const handleClick = () => {
    setShowAll(!showAll);
  };

  const handlePlayPause = (index) => {
    const updatedIsPlaying = [...isPlaying];
    updatedIsPlaying[index] = !updatedIsPlaying[index];
    setIsPlaying(updatedIsPlaying);
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
    } catch (error) {
      console.error("Error downloading the song:", error);
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

<div className="flex justify-between md:p-3">
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


    <div className="mt-4 pr-3">

      {singlesData?.slice(0, showAll ? singlesData.length : 3).map((single, index) => (
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
                handleSingleClick(single.artist.split("|")[0], single.track.title)
              }
            >
              <Image
                src={single.track.thumbnail}
                alt="Single Cover"
                width={50}
                height={50}
                className="w-12 h-12 object-cover rounded-md"
              />
            </div>
            <div
            className="ml-4 cursor-pointer"
            onClick={() => handleSingleClick(single.artist, single.track.title)}
          >
              <p className="text-lg font-semibold">{single.track.title}</p>
              <p className="text-sm text-gray-400">{single.artist}</p>
            </div>
          </div>
          <div className="flex items-center">
          <div className="flex justify-between items-center space-x-1 mr-6">
          <BsClock className="" />
          <span>2:00</span>
        </div>
            <div>
              {isPlaying[index] ? (
                <TiMediaPause
                  className="w-6 h-6 text-white cursor-pointer"
                  onClick={() => handlePlayPause(index)}
                />
              ) : (
                <TiMediaPlay
                  className="w-6 h-6 text-white cursor-pointer"
                  onClick={() => handlePlayPause(index)}
                />
              )}
            </div>
            <TiDownload
              className="w-6 h-6 text-white ml-4 cursor-pointer"
              onClick={() => handleDownload(single.track.file)}
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
            <div className="flex justify-center items-center md:pl-16 md:pr-16 pt-4 pb-4 mt-5 md:mt-0 w-[fit] bg-gradient-to-r from-blue-700 to-red-500 rounded-full font-semi">
              Download
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default AllSinglesSection;
// import React, { useState } from "react";
// import { TiMediaPlay, TiMediaPause, TiDownload } from "react-icons/ti";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
// import axios from "axios";

// const AllSinglesSection = ({ singlesData, artistNo  }) => {
//   const router = useRouter();

//   const [checkedItems, setCheckedItems] = useState([]);
//   const [isPlaying, setIsPlaying] = useState(
//     new Array(singlesData?.length).fill(false)
//   );

//   // const handleSingleClick = (artist, title) => {
//   //   // Handle click event, e.g., navigate to single details page
//   //   router.push(`/artists/${artist}/${title}`);
//   // };

//   const handleSingleClick = (artist, title) => {
//     router.push(`/artists/${artistNo}/song/${artist}/${title}`);
//   };

//   const handleCheckboxChange = (id) => {
//     if (checkedItems.includes(id)) {
//       setCheckedItems(checkedItems.filter((item) => item !== id));
//     } else {
//       setCheckedItems([...checkedItems, id]);
//     }
//   };

//   const handlePlayPause = (index) => {
//     const updatedIsPlaying = [...isPlaying];
//     updatedIsPlaying[index] = !updatedIsPlaying[index];
//     setIsPlaying(updatedIsPlaying);
//   };

//   const handleDownload = () => {
//     // Handle download event
//   };

//   const handleSelectAll = () => {
//     const allIds = singlesData?.map((single) => single.id);
//     setCheckedItems(allIds);
//   };

//   const handleUnselectAll = () => {
//     setCheckedItems([]);
//   };

//   return (
//     <div className="mt-4 pr-3">
//       {singlesData?.map((single, index) => (
//         <label
//           key={single.id}
//           className="flex justify-between items-center p-2 last:border-b-0 backdrop-opacity-20 bg-white/[0.13] mb-4 rounded-lg"
//         >
//           <div className="flex items-center">
//             <div className="mr-4">
//               {checkedItems.includes(single.id) ? (
//                 <MdCheckBox
//                   className="w-6 h-6 text-red-500 cursor-pointer"
//                   onClick={() => handleCheckboxChange(single.id)}
//                 />
//               ) : (
//                 <MdCheckBoxOutlineBlank
//                   className="w-6 h-6 cursor-pointer"
//                   onClick={() => handleCheckboxChange(single.id)}
//                 />
//               )}
//             </div>
//             <div
//               className="cursor-pointer"
//               onClick={() =>
//                 handleSingleClick(single.artist.split("|")[0], single.track.title)
//               }
//             >
//               <Image
//                 src={single.track.thumbnail}
//                 alt="Single Cover"
//                 width={50}
//                 height={50}
//                 className="w-12 h-12 object-cover rounded-md"
//               />
//             </div>
//             <div
//               className="ml-4 cursor-pointer"
//               onClick={() =>
//                 handleSingleClick(single.artist, single.track.title)
//               }
//             >
//               <p className="text-lg font-semibold">{single.track.title}</p>
//               <p className="text-sm text-gray-400">{single.artist}</p>
//             </div>
//           </div>
//           <div className="flex items-center">
//             <div>
//               {isPlaying[index] ? (
//                 <TiMediaPause
//                   className="w-6 h-6 text-white cursor-pointer"
//                   onClick={() => handlePlayPause(index)}
//                 />
//               ) : (
//                 <TiMediaPlay
//                   className="w-6 h-6 text-white cursor-pointer"
//                   onClick={() => handlePlayPause(index)}
//                 />
//               )}
//             </div>
//             <TiDownload
//               className="w-6 h-6 text-white ml-4 cursor-pointer"
//               onClick={handleDownload}
//             />
//           </div>
//         </label>
//       ))}

//       {checkedItems.length > 0 && (
//         <div className="md:flex md:justify-between border-2 pt-4 pb-4 pl-8 pr-8 items-center rounded-3xl text-lg">
//           <div className="flex justify-center items-center md:flex-none">
//             <div>Selected: {checkedItems.length}</div>
//           </div>
//           <div className="md:flex md:justify-evenly md:space-x-16 items-center font-bold">
//             <div className="flex justify-around md:space-x-16 mt-3 md:mt-0">
//               <button onClick={handleSelectAll}>Select All</button>
//               <button onClick={handleUnselectAll}>Unselect All</button>
//             </div>
//             <div className="flex justify-center items-center md:pl-16 md:pr-16 pt-4 pb-4 mt-5 md:mt-0 w-[fit] bg-gradient-to-r from-blue-700 to-red-500 rounded-full font-semi">
//               Download
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllSinglesSection;





//!before working

// import React, { useState } from "react";
// import { TiMediaPlay, TiMediaPause, TiDownload } from "react-icons/ti";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

// const AllSinglesSection = ({ singlesData }) => {
//   const router = useRouter(); 

//   const [checkedItems, setCheckedItems] = useState([]);
//   const [isPlaying, setIsPlaying] = useState(
//     new Array(singlesData.length).fill(false)
//   );

//   const handleSingleClick = (artistNumber, title) => {
//     // Handle click event, e.g., navigate to single details page
//     router.push(`/artists/${artistNumber}/${title}`);
//   };

//   const handleCheckboxChange = (id) => {
//     if (checkedItems.includes(id)) {
//       setCheckedItems(checkedItems.filter((item) => item !== id));
//     } else {
//       setCheckedItems([...checkedItems, id]);
//     }
//   };

//   const handlePlayPause = (index) => {
//     const updatedIsPlaying = [...isPlaying];
//     updatedIsPlaying[index] = !updatedIsPlaying[index];
//     setIsPlaying(updatedIsPlaying);
//   };

//   const handleDownload = () => {
//     // Handle download event
//   };

//   const handleSelectAll = () => {
//     const allIds = singlesData.map((single) => single.id);
//     setCheckedItems(allIds);
//   };

//   const handleUnselectAll = () => {
//     setCheckedItems([]);
//   };

//   return (
//     <div className="mt-4 pr-3">
//       {singlesData.map((single, index) => (
//         <label
//           key={single.id}
//           className="flex justify-between items-center p-2 last:border-b-0 backdrop-opacity-20 bg-white/[0.13] mb-4 rounded-lg"
//         >
//           <div className="flex items-center">
//             <div className="mr-4">
//               {checkedItems.includes(single.id) ? (
//                 <MdCheckBox
//                   className="w-6 h-6 text-red-500 cursor-pointer"
//                   onClick={() => handleCheckboxChange(single.id)}
//                 />
//               ) : (
//                 <MdCheckBoxOutlineBlank
//                   className="w-6 h-6 cursor-pointer"
//                   onClick={() => handleCheckboxChange(single.id)}
//                 />
//               )}
//             </div>
//             <div
//               className="cursor-pointer"
//               onClick={() =>
//                 handleSingleClick(single.artistNumber, single.title)
//               }
//             >
//               <Image
//                 src={single.image}
//                 alt="Single Cover"
//                 width={50}
//                 height={50}
//                 className="w-12 h-12 object-cover rounded-md"
//               />
//             </div>
//             <div
//               className="ml-4 cursor-pointer"
//               onClick={() =>
//                 handleSingleClick(single.artistNumber, single.title)
//               }
//             >
//               <p className="text-lg font-semibold">{single.title}</p>
//               <p className="text-sm text-gray-400">{single.writer}</p>
//             </div>
//           </div>
//           <div className="flex items-center">
//             <div>
//               {isPlaying[index] ? (
//                 <TiMediaPause
//                   className="w-6 h-6 text-white cursor-pointer"
//                   onClick={() => handlePlayPause(index)}
//                 />
//               ) : (
//                 <TiMediaPlay
//                   className="w-6 h-6 text-white cursor-pointer"
//                   onClick={() => handlePlayPause(index)}
//                 />
//               )}
//             </div>
//             <TiDownload
//               className="w-6 h-6 text-white ml-4 cursor-pointer"
//               onClick={handleDownload}
//             />
//           </div>
//         </label>
//       ))}

//       {checkedItems.length > 0 && (
//         <div className="md:flex md:justify-between border-2 pt-4 pb-4 pl-8 pr-8 items-center rounded-3xl text-lg">
//           <div className="flex justify-center items-center md:flex-none">
//             <div>Selected: {checkedItems.length}</div>
//           </div>
//           <div className="md:flex md:justify-evenly md:space-x-16 items-center font-bold">
//             <div className="flex justify-around md:space-x-16 mt-3 md:mt-0">
//               <button onClick={handleSelectAll}>Select All</button>
//               <button onClick={handleUnselectAll}>Unselect All</button>
//             </div>
//             <div className="flex justify-center items-center md:pl-16 md:pr-16 pt-4 pb-4 mt-5 md:mt-0 w-[fit] bg-gradient-to-r from-blue-700 to-red-500 rounded-full font-semi">
//               Download
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllSinglesSection;








