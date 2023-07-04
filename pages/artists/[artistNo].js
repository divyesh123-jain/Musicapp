// import DesktopSidebar from "@/components/DesktopSidebar";
import Image from "next/image";
import styles from "../../sass/_em-artistProfile.module.scss";
import React, { useEffect, useState } from "react";
import {
  BsArrowLeftCircle,
  BsChevronDown,
  BsClock,
  BsMusicNote,
} from "react-icons/bs";
import { BiSolidCrown } from "react-icons/bi";
import { IoTicket } from "react-icons/io5";
import { TiMediaPause, TiTick } from "react-icons/ti";
import { TiMediaPlay, TiDownload } from "react-icons/ti";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { useRouter } from "next/router";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { Fragment } from "react";
import DropDown from "@/components/DropDown";

const ArtistProfile = () => {
  const router = useRouter();
  const artistNumber = router.query.artistNo;

  let [isOpen, setIsOpen] = useState(false);

  const [checkedItems, setCheckedItems] = useState([]);
  const [selected, setSelected] = useState([]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleCheckboxChange = (value) => {
    if (checkedItems.includes(value)) {
      setCheckedItems(checkedItems.filter((item) => item !== value));
    } else {
      setCheckedItems([...checkedItems, value]);
    }
  };

  const [isPlaying, setIsPlaying] = useState([]);

  const handlePlayPause = (index) => {
    const updatedIsPlaying = [...isPlaying];
    updatedIsPlaying[index] = !updatedIsPlaying[index];
    setIsPlaying(updatedIsPlaying);
  };

  const options = [
    {
      id: 1,
      image: "/../public/imggg.png",
      title: "I Don't Think That I Like Her",
      writer: "Charlie Puth",
      time: "10:00",
    },
    {
      id: 2,
      image: "img.png",
      title: "I Don't Think That I Like Her",
      writer: "Charlie Puth",
      time: "10:00",
    },
    {
      id: 3,
      image: "img.png",
      title: "I Don't Think That I Like Her",
      writer: "Charlie Puth",
      time: "10:00",
    },
  ];

  const initializeIsPlaying = () => {
    setIsPlaying(new Array(options.length).fill(false));
  };

  useEffect(() => {
    initializeIsPlaying();
  }, []);

  return (
    <>
      <div
        className={`${styles["em-db-content"]} md:ml-[270px] min-h-[100vh] text-white p-5 md:w-[85vw]`}
      >
        <div
          className={`${styles["em-db-content-title"]} d-flex align-items-center justify-content-between`}
        >
          <BsArrowLeftCircle
            className={`${styles["em-db-content-title-icon"]} cursor-pointer`}
            onClick={() => {
              router.push(`/artists/`);
            }}
          />
          <h2 className="text-white">Artist Profile</h2>
        </div>

        <div
          className={`${styles["em-db-content-body"]} grid lg:grid-cols-3 grid-cols-1 p-3 mt-10 space-x-2`}
        >
          <div className="grid1">
            <div className="font-bold text-xl">Overview</div>
            <div className=" flex justify-center items-center">
              <Image
                src="/../public/imggg.png"
                alt="artist-profile"
                width={150}
                height={150}
                className={`rounded-full mt-3 flex justify-center items-center`}
              />
            </div>
            <div className=" font-semibold text-2xl flex justify-center items-center mt-5 md:mt-0">
              {artistNumber}
            </div>
            <div
              className=" flex justify-center space-x-4 mt-3 p-1 backdrop-opacity-25 bg-black/50 rounded-full text-gray-300 cursor-pointer"
              onClick={openModal}
            >
              <div>
                <IoTicket className="text-5xl flex justify-center items-center ml-4 mt-2" />

                {isOpen && (
                  <Transition.Root show={isOpen} as={Fragment}>
                    <Dialog
                      as="div"
                      className="fixed inset-0 z-10 overflow-y-auto"
                      onClose={closeModal}
                    >
                      <div className="flex items-center justify-center min-h-screen p-4">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <div>
                            <div className="w-[500px] bg-black rounded-3xl p-7">
                              <div className="font-semibold text-white/90">
                                Edit Membership:
                              </div>
                              <div className="mt-3 text-gray-400 relative">
                                Select Ambassador Program
                                {/* <div className="w-full pt-1">
                                  <div className="mx-auto w-full max-w-md rounded-lg border backdrop-opacity-25 bg-white/10 border-white/40 p-2">
                                    <Disclosure>
                                      {({ open }) => (
                                        <>
                                          <Disclosure.Button className=" flex items-center justify-between w-[90%] h-[40px] text-gray-200  rounded-lg overflow-hidden">
                                            <span>Wild Card Sound</span>
                                            <span>
                                              <BsChevronDown
                                                className={`${
                                                  open
                                                    ? "rotate-180 transform"
                                                    : ""
                                                } `}
                                              />
                                            </span>
                                          </Disclosure.Button>
                                          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-200">
                                            If you`re unhappy with your purchase
                                            for any reason, email us within 90
                                            days and we`ll refund you in full,
                                            no questions asked.
                                          </Disclosure.Panel>
                                        </>
                                      )}
                                    </Disclosure>
                                  </div>
                                </div> */}
                                <DropDown />
                              </div>
                              <div className="flex justify-end space-x-10 items-center mt-16">
                                <div
                                  className="text-white cursor-pointer"
                                  onClick={closeModal}
                                >
                                  Cancel
                                </div>
                                <div
                                  className="pl-10 pr-10 pt-2 pb-2 text-gray-200 bg-gradient-to-r from-blue-700 to-red-500 rounded-full cursor-pointer"
                                  onClick={closeModal}
                                >
                                  Save
                                </div>
                              </div>
                            </div>
                          </div>
                        </Transition.Child>
                      </div>
                    </Dialog>
                  </Transition.Root>
                )}
              </div>
              <div className="flex flex-col ">
                <div className="font-semibold bg-gradient-to-r from-blue-400 via-pink-500 text-transparent bg-clip-text">
                  Membership:
                </div>
                <div>AWB | Artist With Benefit</div>
                <div>1496 Followers</div>
              </div>
            </div>

            <div></div>
          </div>
          <div className="col-lg-5 mt-10 p-3 h-[100vh] md:h-auto">
            <ul
              className={`${styles["em-db-music"]} row gap-3 grid grid-cols-2`}
            >
              <li className="col m-0">
                {/* <img
                    width="24"
                    height="24"
                    src="/../public/sample.jpg"
                    className="img-fluid"
                    alt=""
                  /> */}
                <BsMusicNote className="img-fluid" />
                <span>Music</span>
                <em>567</em>
                {/* <em>{dashboardInfo?.totalMusic}</em> */}
              </li>
              <li className="col m-0">
                {/* <img
                    width="24"
                    height="24"
                    src="/../public/sample.jpg"
                    className="img-fluid"
                    alt=""
                  /> */}
                <BsMusicNote className="img-fluid" />
                <span>EP / Albums</span>
                <em>30</em>
                {/* <em>{dashboardInfo?.albums?.total}</em> */}
              </li>
              <li className="col m-0">
                {/* <img
                    width="24"
                    height="24"
                    src="/../public/sample.jpg"
                    className="img-fluid"
                    alt=""
                  /> */}
                <BsMusicNote className="img-fluid" />
                <span>Upcoming Music</span>
                <em>16</em>
                {/* <em>{dashboardInfo?.totalUpcomingMusic}</em> */}
              </li>
              <li className="col m-0">
                {/* <img
                    width="24"
                    height="24"
                    src="/../public/sample.jpg"
                    className="img-fluid"
                    alt=""
                  /> */}
                <BsMusicNote className="img-fluid" />
                <span>Published Music</span>
                <em>760</em>
                {/* <em>{dashboardInfo?.totalPublishedMusic}</em> */}
              </li>
            </ul>
          </div>

          {/* //!using temporary margin (-mt-[50vh]) to take the below section up... resolve this if possible */}

          <div className={`${styles["em-db-subcription"]} -mt-[50vh] md:mt-0`}>
            <div className="flex justify-between text-xl font-bold">
              <div>Subscription</div>
              <div>View All</div>
            </div>
            <div className="flex flex-col space-y-4 mt-9 ">
              <div>
                <div
                  className={`${styles["em-db-individual"]} flex justify-between rounded-[10px] py-1 px-2 backdrop-opacity-25 bg-white/10 border border-white/40`}
                >
                  <BiSolidCrown className="text-3xl text-yellow-600 mt-4" />
                  <div className="mr-10">
                    <div>AWB | Artists with Benefits</div>
                    <div className="text-sm">Date:24 June 2023</div>
                    <div className="text-sm">Total paid: $14.99</div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className={`${styles["em-db-individual"]} flex justify-between rounded-[10px] py-1 px-2 backdrop-opacity-25 bg-white/10 border border-white/40`}
                >
                  <BiSolidCrown className="text-3xl text-yellow-600 mt-4" />
                  <div className="mr-10">
                    <div>AWB | Artists with Benefits</div>
                    <div className="text-sm">Date:24 June 2023</div>
                    <div className="text-sm">Total paid: $14.99</div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className={`${styles["em-db-individual"]} flex justify-between rounded-[10px] py-1 px-2 backdrop-opacity-25 bg-white/10 border border-white/40`}
                >
                  <BiSolidCrown className="text-3xl text-yellow-600 mt-4" />
                  <div className="mr-10">
                    <div>AWB | Artists with Benefits</div>
                    <div className="text-sm">Date:24 June 2023</div>
                    <div className="text-sm">Total paid: $14.99</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:mt-10 ">
          <div className="flex justify-between font-semibold text-xl">
            <div>Active Add Ons</div>
            <div>View All</div>
          </div>
          <div className="mt-5 md:flex flex-row justify-start md:space-x-2 space-y-2 md:space-y-0">
            <div className="p-5 border rounded-lg backdrop-opacity-25 bg-white/10 border-white/40 md:w-[30vw]">
              <div className="flex justify-between">
                <div>Marketing Campaign</div>
                <div>149.99$ / annum</div>
              </div>
              <div className="grid grid-cols-2 mt-5">
                <div className="flex ">
                  {" "}
                  <div>
                    <TiTick className="text-green-400 text-xl" />
                  </div>{" "}
                  <div>Social Media Ads</div>{" "}
                </div>
                <div className="flex ">
                  {" "}
                  <div>
                    <TiTick className="text-green-400 text-xl" />
                  </div>{" "}
                  <div>Youtube Ads</div>{" "}
                </div>
                <div className="flex ">
                  {" "}
                  <div>
                    <TiTick className="text-green-400 text-xl" />
                  </div>{" "}
                  <div>Influencer</div>{" "}
                </div>
                <div className="flex ">
                  {" "}
                  <div>
                    <TiTick className="text-green-400 text-xl" />
                  </div>{" "}
                  <div>Email</div>{" "}
                </div>
              </div>
            </div>
            <div className="p-5 border rounded-lg backdrop-opacity-25 bg-white/10 border-white/40 md:w-[30vw]">
              <div className="flex justify-between">
                <div>Marketing Campaign</div>
                <div>149.99$ / annum</div>
              </div>
              <div className="grid grid-cols-2 mt-5">
                <div className="flex ">
                  {" "}
                  <div>
                    <TiTick className="text-green-400 text-xl" />
                  </div>{" "}
                  <div>Social Media Ads</div>{" "}
                </div>
                <div className="flex ">
                  {" "}
                  <div>
                    <TiTick className="text-green-400 text-xl" />
                  </div>{" "}
                  <div>Youtube Ads</div>{" "}
                </div>
                <div className="flex ">
                  {" "}
                  <div>
                    <TiTick className="text-green-400 text-xl" />
                  </div>{" "}
                  <div>Influencer</div>{" "}
                </div>
                <div className="flex ">
                  {" "}
                  <div>
                    <TiTick className="text-green-400 text-xl" />
                  </div>{" "}
                  <div>Email</div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-xl font-semibold mt-10">Albums</div>

        <div className="mt-4 flex">
          <div className="flex flex-col w-[fit] hover:bg-white/5 p-3 rounded-xl">
            <Image
              src="/../public/albumCover.jpg"
              width={200}
              height={200}
              className="rounded-xl"
            />
            <div className="font-semibold text-lg mt-3 ml-1">
              Somebody Like U
            </div>
            <div className="text-gray-400 text-base ml-1">Alan Walker</div>
          </div>
        </div>

        <div className="text-xl font-semibold mt-5">All Singles</div>

        <div>
          {options.map((option, index) => (
            <label
              key={option.id}
              className="flex justify-between items-center p-2 last:border-b-0 backdrop-opacity-20 bg-white/[0.13]  mb-4 rounded-lg"
            >
              <div className="flex items-center">
                <div
                  className="mr-4 cursor-pointer"
                  onClick={() => handleCheckboxChange(option.id)}
                >
                  {checkedItems.includes(option.id) ? (
                    <MdCheckBox className="w-6 h-6 text-red-500" />
                  ) : (
                    <MdCheckBoxOutlineBlank className="w-6 h-6" />
                  )}
                </div>
                <Image
                  src="/../public/albumCover.jpg"
                  alt="album cover"
                  width={50}
                  height={50}
                  className="w-12 h-12 object-cover rounded-md"
                />
                <div className="ml-4 cursor-pointer" onClick={() => {
                      router.push(`/artists/${artistNumber}/${option.title}`);
                    }}>
                  <p
                    className="text-lg font-semibold"
                    
                  >
                    {option.title}
                  </p>

                  <p className="text-sm text-gray-400">{option.writer}</p>
                </div>
              </div>
              <div className="flex justify-between">
                {/* <div className=""> */}
                  <span className="text-white flex justify-between items-center mx-3 md:mx-36 ">
                    <BsClock className="mx-2"/>
                    {option.time}
                  </span>
                {/* </div> */}
                <div className="flex items-center">
                  
                    

                  {/* <TiMediaPlay className="w-6 h-6 text-white" /> */}

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
                  
                  
                  
                  <TiDownload className="w-6 h-6 text-white ml-4 cursor-pointer" />
                </div>
              </div>
            </label>
          ))}
        </div>
        {checkedItems.length > 0 && (
          <div className="md:flex md:justify-between border-2 pt-4 pb-4 pl-8 pr-8 items-center rounded-3xl text-lg">
            <div className="flex justify-center items-center md:flex-none">
              <div>Selected: {checkedItems.length}</div>
            </div>
            <div className="md:flex md:justify-evenly md:space-x-16 items-center font-bold">
              <div className="flex justify-around md:space-x-16 mt-3 md:mt-0">
                <button
                  onClick={() =>
                    setCheckedItems(options.map((option) => option.id))
                  }
                >
                  Select All
                </button>
                <button onClick={() => setCheckedItems([])}>
                  Unselect All
                </button>
              </div>
              <div className="flex justify-center items-center md:pl-16 md:pr-16 pt-4 pb-4 mt-5 md:mt-0 w-[fit] bg-gradient-to-r from-blue-700 from-10% to-red-500 rounded-full font-semi">
                Download
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ArtistProfile;

// // import DesktopSidebar from "@/components/DesktopSidebar";
// import Image from "next/image";
// import styles from "../../sass/_em-artistProfile.module.scss";
// import React, { useState } from "react";
// import {
//   BsArrowLeftCircle,
//   BsChevronDown,
//   BsClock,
//   BsMusicNote,
// } from "react-icons/bs";
// import { BiSolidCrown } from "react-icons/bi";
// import { IoTicket } from "react-icons/io5";
// import { TiTick } from "react-icons/ti";
// import { TiMediaPlay, TiDownload } from "react-icons/ti";
// import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
// import { useRouter } from "next/router";
// import { Dialog, Disclosure, Transition } from "@headlessui/react";
// import { Fragment } from "react";

// const ArtistProfile = () => {
//   const router = useRouter();
//   const artistNumber = router.query.artistNo;

//   let [isOpen, setIsOpen] = useState(false);

//   const [checkedItems, setCheckedItems] = useState([]);
//   const [selected, setSelected] = useState([]);

//   function closeModal() {
//     setIsOpen(false);
//   }

//   function openModal() {
//     setIsOpen(true);
//   }

//   const handleCheckboxChange = (value) => {
//     if (checkedItems.includes(value)) {
//       setCheckedItems(checkedItems.filter((item) => item !== value));
//     } else {
//       setCheckedItems([...checkedItems, value]);
//     }
//   };

//   const options = [
//     {
//       id: 1,
//       image: "/../public/imggg.png",
//       title: "I Don't Think That I Like Her",
//       writer: "Charlie Puth",
//       time: "10:00",
//     },
//     {
//       id: 2,
//       image: "img.png",
//       title: "I Don't Think That I Like Her",
//       writer: "Charlie Puth",
//       time: "10:00",
//     },
//     {
//       id: 3,
//       image: "img.png",
//       title: "I Don't Think That I Like Her",
//       writer: "Charlie Puth",
//       time: "10:00",
//     },
//   ];

//   return (
//     <>
//       <div
//         className={`${styles["em-db-content"]} md:ml-[270px] min-h-[100vh] text-white p-5 `}
//       >
//         <div
//           className={`${styles["em-db-content-title"]} d-flex align-items-center justify-content-between`}
//         >
//           <BsArrowLeftCircle
//             className={`${styles["em-db-content-title-icon"]} cursor-pointer`}
//             onClick={() => {
//               router.push(`/artists/`);
//             }}
//           />
//           <h2 className="text-white">Artist Profile</h2>
//         </div>

//         <div
//           className={`${styles["em-db-content-body"]} grid lg:grid-cols-3 grid-cols-1 p-3 mt-10 space-x-2`}
//         >
//           <div className="grid1">
//             <div className="font-bold text-xl">Overview</div>
//             <div className=" flex justify-center items-center">
//               <Image
//                 src="/../public/imggg.png"
//                 alt="artist-profile"
//                 width={150}
//                 height={150}
//                 className={`rounded-full mt-3 flex justify-center items-center`}
//               />
//             </div>
//             <div className=" font-semibold text-2xl flex justify-center items-center mt-5 md:mt-0">
//               {artistNumber}
//             </div>
//             <div className="flex justify-between mt-3 p-1 backdrop-opacity-25 bg-black/50 rounded-full text-gray-300">
//               <div>
//                 <IoTicket
//                   className="text-5xl flex justify-center items-center ml-4 mt-2 cursor-pointer"
//                   onClick={openModal}
//                 />

//                 {isOpen && (
//                   <Transition.Root show={isOpen} as={Fragment}>
//                     <Dialog
//                       as="div"
//                       className="fixed inset-0 z-10 overflow-y-auto"
//                       onClose={closeModal}
//                     >
//                       <div className="flex items-center justify-center min-h-screen p-4">
//                         <Transition.Child
//                           as={Fragment}
//                           enter="ease-out duration-300"
//                           enterFrom="opacity-0 scale-95"
//                           enterTo="opacity-100 scale-100"
//                           leave="ease-in duration-200"
//                           leaveFrom="opacity-100 scale-100"
//                           leaveTo="opacity-0 scale-95"
//                         >
//                           <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
//                         </Transition.Child>

//                         <Transition.Child
//                           as={Fragment}
//                           enter="ease-out duration-300"
//                           enterFrom="opacity-0 scale-95"
//                           enterTo="opacity-100 scale-100"
//                           leave="ease-in duration-200"
//                           leaveFrom="opacity-100 scale-100"
//                           leaveTo="opacity-0 scale-95"
//                         >
//                           <div>
//                             <div className="w-[500px] bg-black rounded-3xl relative p-7">
//                               <div className="font-semibold text-white/90">
//                                 Edit Membership:
//                               </div>
//                               <div className="mt-3 text-gray-400">
//                                 Select Ambassador Program
//                                 <div className="w-full pt-1">
//                                   <div className="mx-auto w-full max-w-md rounded-lg border backdrop-opacity-25 bg-white/10 border-white/40 p-2">
//                                     <Disclosure>
//                                       {({ open }) => (
//                                         <>
//                                           <Disclosure.Button className=" flex items-center justify-between w-[90%] h-[40px] text-gray-200  rounded-lg overflow-hidden">
//                                             <span>Wild Card Sound</span>
//                                             <span>
//                                               <BsChevronDown
//                                                 className={`${
//                                                   open
//                                                     ? "rotate-180 transform"
//                                                     : ""
//                                                 } `}
//                                               />
//                                             </span>
//                                           </Disclosure.Button>
//                                           <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-200">
//                                             If you`re unhappy with your purchase
//                                             for any reason, email us within 90
//                                             days and we`ll refund you in full,
//                                             no questions asked.
//                                           </Disclosure.Panel>
//                                         </>
//                                       )}
//                                     </Disclosure>
//                                   </div>
//                                 </div>
//                               </div>
//                               <div className="flex justify-end space-x-10 items-center mt-10">
//                                 <div
//                                   className="text-white cursor-pointer"
//                                   onClick={closeModal}
//                                 >
//                                   Cancel
//                                 </div>
//                                 <div
//                                   className="pl-10 pr-10 pt-2 pb-2 text-gray-200 bg-gradient-to-r from-blue-700 to-red-500 rounded-full cursor-pointer"
//                                   onClick={closeModal}
//                                 >
//                                   Save
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </Transition.Child>
//                       </div>
//                     </Dialog>
//                   </Transition.Root>
//                 )}
//               </div>
//               <div className="flex flex-col mr-3">
//                 <div className="font-semibold bg-gradient-to-r from-blue-400 via-pink-500 text-transparent bg-clip-text">
//                   Membership:
//                 </div>
//                 <div>AWB | Artist With Benefit</div>
//                 <div>1496 Followers</div>
//               </div>
//             </div>

//             <div></div>
//           </div>
//           <div className="col-lg-5 mt-10 p-3 h-[100vh] md:h-auto">
//             <ul
//               className={`${styles["em-db-music"]} row gap-3 grid grid-cols-2`}
//             >
//               <li className="col m-0">
//                 {/* <img
//                     width="24"
//                     height="24"
//                     src="/../public/sample.jpg"
//                     className="img-fluid"
//                     alt=""
//                   /> */}
//                 <BsMusicNote className="img-fluid" />
//                 <span>Music</span>
//                 <em>567</em>
//                 {/* <em>{dashboardInfo?.totalMusic}</em> */}
//               </li>
//               <li className="col m-0">
//                 {/* <img
//                     width="24"
//                     height="24"
//                     src="/../public/sample.jpg"
//                     className="img-fluid"
//                     alt=""
//                   /> */}
//                 <BsMusicNote className="img-fluid" />
//                 <span>EP / Albums</span>
//                 <em>30</em>
//                 {/* <em>{dashboardInfo?.albums?.total}</em> */}
//               </li>
//               <li className="col m-0">
//                 {/* <img
//                     width="24"
//                     height="24"
//                     src="/../public/sample.jpg"
//                     className="img-fluid"
//                     alt=""
//                   /> */}
//                 <BsMusicNote className="img-fluid" />
//                 <span>Upcoming Music</span>
//                 <em>16</em>
//                 {/* <em>{dashboardInfo?.totalUpcomingMusic}</em> */}
//               </li>
//               <li className="col m-0">
//                 {/* <img
//                     width="24"
//                     height="24"
//                     src="/../public/sample.jpg"
//                     className="img-fluid"
//                     alt=""
//                   /> */}
//                 <BsMusicNote className="img-fluid" />
//                 <span>Published Music</span>
//                 <em>760</em>
//                 {/* <em>{dashboardInfo?.totalPublishedMusic}</em> */}
//               </li>
//             </ul>
//           </div>

//           {/* //!using temporary margin (-mt-[50vh]) to take the below section up... resolve this if possible */}

//           <div className={`${styles["em-db-subcription"]} -mt-[50vh] md:mt-0`}>
//             <div className="flex justify-between text-xl font-bold">
//               <div>Subscription</div>
//               <div>View All</div>
//             </div>
//             <div className="flex flex-col space-y-4 mt-9 ">
//               <div>
//                 <div
//                   className={`${styles["em-db-individual"]} flex justify-between rounded-[10px] py-1 px-2 backdrop-opacity-25 bg-white/10 border border-white/40`}
//                 >
//                   <BiSolidCrown className="text-3xl text-yellow-600 mt-4" />
//                   <div className="mr-10">
//                     <div>AWB | Artists with Benefits</div>
//                     <div className="text-sm">Date:24 June 2023</div>
//                     <div className="text-sm">Total paid: $14.99</div>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div
//                   className={`${styles["em-db-individual"]} flex justify-between rounded-[10px] py-1 px-2 backdrop-opacity-25 bg-white/10 border border-white/40`}
//                 >
//                   <BiSolidCrown className="text-3xl text-yellow-600 mt-4" />
//                   <div className="mr-10">
//                     <div>AWB | Artists with Benefits</div>
//                     <div className="text-sm">Date:24 June 2023</div>
//                     <div className="text-sm">Total paid: $14.99</div>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div
//                   className={`${styles["em-db-individual"]} flex justify-between rounded-[10px] py-1 px-2 backdrop-opacity-25 bg-white/10 border border-white/40`}
//                 >
//                   <BiSolidCrown className="text-3xl text-yellow-600 mt-4" />
//                   <div className="mr-10">
//                     <div>AWB | Artists with Benefits</div>
//                     <div className="text-sm">Date:24 June 2023</div>
//                     <div className="text-sm">Total paid: $14.99</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="md:mt-10 ">
//           <div className="flex justify-between font-semibold text-xl">
//             <div>Active Add Ons</div>
//             <div>View All</div>
//           </div>
//           <div className="mt-5 md:flex flex-row justify-start md:space-x-2 space-y-2 md:space-y-0">
//             <div className="p-5 border rounded-lg backdrop-opacity-25 bg-white/10 border-white/40 md:w-[30vw]">
//               <div className="flex justify-between">
//                 <div>Marketing Campaign</div>
//                 <div>149.99$ / annum</div>
//               </div>
//               <div className="grid grid-cols-2 mt-5">
//                 <div className="flex ">
//                   {" "}
//                   <div>
//                     <TiTick className="text-green-400 text-xl" />
//                   </div>{" "}
//                   <div>Social Media Ads</div>{" "}
//                 </div>
//                 <div className="flex ">
//                   {" "}
//                   <div>
//                     <TiTick className="text-green-400 text-xl" />
//                   </div>{" "}
//                   <div>Youtube Ads</div>{" "}
//                 </div>
//                 <div className="flex ">
//                   {" "}
//                   <div>
//                     <TiTick className="text-green-400 text-xl" />
//                   </div>{" "}
//                   <div>Influencer</div>{" "}
//                 </div>
//                 <div className="flex ">
//                   {" "}
//                   <div>
//                     <TiTick className="text-green-400 text-xl" />
//                   </div>{" "}
//                   <div>Email</div>{" "}
//                 </div>
//               </div>
//             </div>
//             <div className="p-5 border rounded-lg backdrop-opacity-25 bg-white/10 border-white/40 md:w-[30vw]">
//               <div className="flex justify-between">
//                 <div>Marketing Campaign</div>
//                 <div>149.99$ / annum</div>
//               </div>
//               <div className="grid grid-cols-2 mt-5">
//                 <div className="flex ">
//                   {" "}
//                   <div>
//                     <TiTick className="text-green-400 text-xl" />
//                   </div>{" "}
//                   <div>Social Media Ads</div>{" "}
//                 </div>
//                 <div className="flex ">
//                   {" "}
//                   <div>
//                     <TiTick className="text-green-400 text-xl" />
//                   </div>{" "}
//                   <div>Youtube Ads</div>{" "}
//                 </div>
//                 <div className="flex ">
//                   {" "}
//                   <div>
//                     <TiTick className="text-green-400 text-xl" />
//                   </div>{" "}
//                   <div>Influencer</div>{" "}
//                 </div>
//                 <div className="flex ">
//                   {" "}
//                   <div>
//                     <TiTick className="text-green-400 text-xl" />
//                   </div>{" "}
//                   <div>Email</div>{" "}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="text-xl font-semibold mt-10">Albums</div>

//         <div className="mt-4 flex">
//           <div className="flex flex-col w-[fit] hover:bg-white/5 p-3 rounded-xl">
//             <Image
//               src="/../public/albumCover.jpg"
//               width={200}
//               height={200}
//               className="rounded-xl"
//             />
//             <div className="font-semibold text-lg mt-3 ml-1">
//               Somebody Like U
//             </div>
//             <div className="text-gray-400 text-base ml-1">Alan Walker</div>
//           </div>
//         </div>

//         <div className="text-xl font-semibold mt-5">All Singles</div>

//         <div>
//           {options.map((option) => (
//             <label
//               key={option.id}
//               className="flex justify-between items-center p-2 last:border-b-0 backdrop-opacity-20 bg-white/[0.13] cursor-pointer mb-4 rounded-lg"
//             >
//               <div className="flex items-center">
//                 <div
//                   className="mr-4"
//                   onClick={() => handleCheckboxChange(option.id)}
//                 >
//                   {checkedItems.includes(option.id) ? (
//                     <MdCheckBox className="w-6 h-6 text-red-500" />
//                   ) : (
//                     <MdCheckBoxOutlineBlank className="w-6 h-6" />
//                   )}
//                 </div>
//                 <Image
//                   src="/../public/albumCover.jpg"
//                   alt="album cover"
//                   width={50}
//                   height={50}
//                   className="w-12 h-12 object-cover rounded-md"
//                 />
//                 <div className="ml-4">
//                   <p
//                     className="text-lg font-semibold"
//                     onClick={() => {
//                       router.push(`/artists/${artistNumber}/${option.title}`);
//                     }}
//                   >
//                     {option.title}
//                   </p>

//                   <p className="text-sm text-gray-400">{option.writer}</p>
//                 </div>
//               </div>
//               <div className="flex justify-between">
//                 <div className="flex items-center mx-3 md:mx-36">
//                   <span className="text-white flex justify-center items-center">
//                     <BsClock />
//                     {option.time}
//                   </span>
//                 </div>
//                 <div className="flex items-center">
//                   <TiMediaPlay className="w-6 h-6 text-white" />
//                   <TiDownload className="w-6 h-6 text-white ml-4" />
//                 </div>
//               </div>
//             </label>
//           ))}
//         </div>

//         <div className="md:flex md:justify-between border-2 pt-4 pb-4 pl-8 pr-8 items-center rounded-3xl text-lg">
//           <div className="flex justify-center items-center md:flex-none">
//             Selected: 1
//           </div>
//           <div className="md:flex md:justify-evenly md:space-x-16 items-center font-bold">
//             <div className="flex justify-around md:space-x-16 mt-3 md:mt-0">
//               <div className="md:flex-none flex justify-center items-center">
//                 Unselect all
//               </div>
//               <div className="md:flex-none flex justify-center items-center">
//                 Select All
//               </div>
//             </div>
//             <div className="flex justify-center items-center md:pl-16 md:pr-16 pt-4 pb-4 mt-5 md:mt-0 w-[fit] bg-gradient-to-r from-blue-700 from-10% to-red-500 rounded-full font-semi">
//               Download
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ArtistProfile;
