import React, { useEffect, useState } from "react";
import styles from "../../sass/_em-artistProfile.module.scss";
import axios from "axios";
import { useRouter } from "next/router";
import ArtistProfileDetails from "@/components/Artists/ArtistsProfile/ArtistProfileDetails";
import SubscriptionDetails from "@/components/Artists/ArtistsProfile/SubscriptionDetails";
import AddOnSection from "@/components/Artists/ArtistsProfile/AddOnSection";
import AlbumDetails from "@/components/Artists/ArtistsProfile/AlbumDetails";
import AllSinglesSection from "@/components/Artists/ArtistsProfile/AllSinglesSection";
import MusicStats from "@/components/Artists/ArtistsProfile/MusicStats";
import { BsArrowLeftCircle } from "react-icons/bs";

const ArtistProfile = ({ artistData: initialArtistData }) => {
  const router = useRouter();
  const { artistNo } = router.query;

  const [artistData, setArtistData] = useState(initialArtistData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.child-hunger.org/api/artists");
        const artists = response.data.data;

        // Find the artist based on the username
        const artist = artists.find((artist) => artist.username === artistNo);

        setArtistData(artist);
      } catch (error) {
        console.error("Error fetching artist data:", error);
      }
    };

    fetchData();
  }, [artistNo]);

  if (!artistData) {
    return <div>Loading...</div>;
  }
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

  const musicData = [
    { id: 1, title: "Music", count: 567 },
    { id: 2, title: "EP / Albums", count: 30 },
    { id: 3, title: "Upcoming Music", count: 16 },
    { id: 4, title: "Published Music", count: 760 },
  ];

  const subscriptionData = [
    {
      id: 1,
      subscriptionType: "AWB | Artists with Benefits",
      date: "24 June 2023",
      totalPaid: "$14.99",
    },
    {
      id: 2,
      subscriptionType: "AWB | Artists with Benefits",
      date: "24 June 2023",
      totalPaid: "$14.99",
    },
    {
      id: 3,
      subscriptionType: "AWB | Artists with Benefits",
      date: "24 June 2023",
      totalPaid: "$14.99",
    },
  ];

  const addOnData = [
    {
      id: 1,
      addOnTitle: "Marketing Campaign",
      price: "149.99$ / annum",
      features: ["Social Media Ads", "Youtube Ads", "Influencer", "Email"],
    },
    {
      id: 2,
      addOnTitle: "Marketing Campaign",
      price: "149.99$ / annum",
      features: ["Social Media Ads", "Youtube Ads", "Influencer", "Email"],
    },
  ];

  const albumData = [
    {
      id: 1,
      image: "/../public/albumCover.jpg",
      title: "Somebody Like U",
      artist: "Alan Walker",
    },
  ];

  const singlesData = [
    {
      id: 1,
      image: "/../public/albumCover.jpg",
      title: "I Don't Think That I Like Her",
      writer: "Charlie Puth",
      artistNumber: artistData.username,
    },
  ];

  return (
    <>
      <div className="mt-8 md:mt-0 md:ml-[270px] min-h-[100vh] text-white p-5 md:w-[85vw]">
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
            <ArtistProfileDetails artistData={artistData} />
            

            <div></div>
          </div>
          <div className="col-lg-5 mt-10 p-3 h-[100vh] md:h-auto">
            <MusicStats />
          </div>


          <div className={`${styles["em-db-subcription"]} -mt-[50vh] md:mt-0 `}>
            <div className="flex justify-between text-xl font-bold">
              <div>Subscription</div>
              <div className="">View All</div>
            </div>
            <SubscriptionDetails subscriptionData={subscriptionData} />
          </div>
        </div>

        <div className="md:mt-10 p-3  ">
          <div className="flex justify-between font-semibold text-xl">
            <div>Active Add Ons</div>
            <div>View All</div>
          </div>
          <AddOnSection addOnData={addOnData} />
        </div>

        <div className="text-xl font-semibold mt-10">Albums</div>

        <AlbumDetails albumData={albumData} />

        <div className="text-xl font-semibold mt-5">All Singles</div>

        <AllSinglesSection singlesData={singlesData} />
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  try {
    const { artistNo } = context.query;
    const response = await axios.get("https://api.child-hunger.org/api/artists");
    const artistsData = response.data.data;
    const artistData = artistsData.find((artist) => artist.username === artistNo);
    return {
      props: {
        artistData,
      },
    };
  } catch (error) {
    console.error("Error fetching artist data:", error);
    return {
      props: {
        artistData: null,
      },
    };
  }
}

export default ArtistProfile;






// import React, { useEffect, useState } from "react";
// import styles from "../../sass/_em-artistProfile.module.scss";
// import axios from "axios";
// import { useRouter } from "next/router";
// import ArtistProfileDetails from "@/components/Artists/ArtistsProfile/ArtistProfileDetails";
// import SubscriptionDetails from "@/components/Artists/ArtistsProfile/SubscriptionDetails";
// import AddOnSection from "@/components/Artists/ArtistsProfile/AddOnSection";
// import AlbumDetails from "@/components/Artists/ArtistsProfile/AlbumDetails";
// import AllSinglesSection from "@/components/Artists/ArtistsProfile/AllSinglesSection";
// import MusicStats from "@/components/Artists/ArtistsProfile/MusicStats";

// const ArtistProfile = () => {
//   const router = useRouter();
//   const { artistNo } = router.query;

//   const [artistData, setArtistData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(process.env.API_URL);
//         const artists = response.data.data;

//         // Find the artist based on the username
//         const artist = artists.find((artist) => artist.username === artistNo);

//         setArtistData(artist);
//       } catch (error) {
//         console.error("Error fetching artist data:", error);
//       }
//     };

//     fetchData();
//   }, [artistNo]);

//   if (!artistData) {
//     return <div>Loading...</div>;
//   }

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

//   const musicData = [
//     { id: 1, title: "Music", count: 567 },
//     { id: 2, title: "EP / Albums", count: 30 },
//     { id: 3, title: "Upcoming Music", count: 16 },
//     { id: 4, title: "Published Music", count: 760 },
//   ];

//   const subscriptionData = [
//     {
//       id: 1,
//       subscriptionType: "AWB | Artists with Benefits",
//       date: "24 June 2023",
//       totalPaid: "$14.99",
//     },
//     {
//       id: 2,
//       subscriptionType: "AWB | Artists with Benefits",
//       date: "24 June 2023",
//       totalPaid: "$14.99",
//     },
//     {
//       id: 3,
//       subscriptionType: "AWB | Artists with Benefits",
//       date: "24 June 2023",
//       totalPaid: "$14.99",
//     },
//   ];

//   const addOnData = [
//     {
//       id: 1,
//       addOnTitle: "Marketing Campaign",
//       price: "149.99$ / annum",
//       features: ["Social Media Ads", "Youtube Ads", "Influencer", "Email"],
//     },
//     {
//       id: 2,
//       addOnTitle: "Marketing Campaign",
//       price: "149.99$ / annum",
//       features: ["Social Media Ads", "Youtube Ads", "Influencer", "Email"],
//     },
//   ];

//   const albumData = [
//     {
//       id: 1,
//       image: "/../public/albumCover.jpg",
//       title: "Somebody Like U",
//       artist: "Alan Walker",
//     },
//   ];

//   const singlesData = [
//     {
//       id: 1,
//       image: "/../public/albumCover.jpg",
//       title: "I Don't Think That I Like Her",
//       writer: "Charlie Puth",
//       artistNumber: artistData.username,
//     },
//   ];

//   return (
//     <>
//       <div className="mt-8 md:mt-0 md:ml-[270px] min-h-[100vh] text-white p-5 md:w-[85vw]">
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
//             <ArtistProfileDetails artistData={artistData} />
            

//             <div></div>
//           </div>
//           <div className="col-lg-5 mt-10 p-3 h-[100vh] md:h-auto">
//             <MusicStats />
//           </div>


//           <div className={`${styles["em-db-subcription"]} -mt-[50vh] md:mt-0 `}>
//             <div className="flex justify-between text-xl font-bold">
//               <div>Subscription</div>
//               <div className="">View All</div>
//             </div>
//             <SubscriptionDetails subscriptionData={subscriptionData} />
//           </div>
//         </div>

//         <div className="md:mt-10 p-3  ">
//           <div className="flex justify-between font-semibold text-xl">
//             <div>Active Add Ons</div>
//             <div>View All</div>
//           </div>
//           <AddOnSection addOnData={addOnData} />
//         </div>

//         <div className="text-xl font-semibold mt-10">Albums</div>

//         <AlbumDetails albumData={albumData} />

//         <div className="text-xl font-semibold mt-5">All Singles</div>

//         <AllSinglesSection singlesData={singlesData} />
//       </div>
//     </>
//   );
// };

// export default ArtistProfile;

//!   LATEST above code is when i half-implemented the routing system (mai isko abhi yhi bolunga latest hai Yellowtail, )






// // import DesktopSidebar from "@/components/DesktopSidebar";
// import Image from "next/image";
// import styles from "../../sass/_em-artistProfile.module.scss";
// import React, { useEffect, useState } from "react";
// import {
//   BsArrowLeftCircle,
//   BsChevronDown,
//   BsClock,
//   BsMusicNote,
// } from "react-icons/bs";
// import { BiSolidCrown } from "react-icons/bi";
// import { IoTicket } from "react-icons/io5";
// import { TiMediaPause, TiTick } from "react-icons/ti";
// import { TiMediaPlay, TiDownload } from "react-icons/ti";
// import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
// import { useRouter } from "next/router";
// import { Dialog, Disclosure, Transition } from "@headlessui/react";
// import { Fragment } from "react";
// import DropDown from "@/components/DropDown";
// import ArtistProfileDetails from "@/components/Artists/ArtistsProfile/ArtistProfileDetails";
// import SubscriptionDetails from "@/components/Artists/ArtistsProfile/SubscriptionDetails";
// import AddOnSection from "@/components/Artists/ArtistsProfile/AddOnSection";
// import AlbumDetails from "@/components/Artists/ArtistsProfile/AlbumDetails";
// import AllSinglesSection from "@/components/Artists/ArtistsProfile/AllSinglesSection";
// import MusicStats from "@/components/Artists/ArtistsProfile/MusicStats";

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

//   const [isPlaying, setIsPlaying] = useState([]);

//   const handlePlayPause = (index) => {
//     const updatedIsPlaying = [...isPlaying];
//     updatedIsPlaying[index] = !updatedIsPlaying[index];
//     setIsPlaying(updatedIsPlaying);
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

//   const musicData = [
//     { id: 1, title: "Music", count: 567 },
//     { id: 2, title: "EP / Albums", count: 30 },
//     { id: 3, title: "Upcoming Music", count: 16 },
//     { id: 4, title: "Published Music", count: 760 },
//   ];

//   const subscriptionData = [
//     {
//       id: 1,
//       subscriptionType: "AWB | Artists with Benefits",
//       date: "24 June 2023",
//       totalPaid: "$14.99",
//     },
//     {
//       id: 2,
//       subscriptionType: "AWB | Artists with Benefits",
//       date: "24 June 2023",
//       totalPaid: "$14.99",
//     },
//     {
//       id: 3,
//       subscriptionType: "AWB | Artists with Benefits",
//       date: "24 June 2023",
//       totalPaid: "$14.99",
//     },
//   ];

//   const addOnData = [
//     {
//       id: 1,
//       addOnTitle: "Marketing Campaign",
//       price: "149.99$ / annum",
//       features: ["Social Media Ads", "Youtube Ads", "Influencer", "Email"],
//     },
//     {
//       id: 2,
//       addOnTitle: "Marketing Campaign",
//       price: "149.99$ / annum",
//       features: ["Social Media Ads", "Youtube Ads", "Influencer", "Email"],
//     },
//   ];

//   const albumData = [
//     {
//       id: 1,
//       image: "/../public/albumCover.jpg",
//       title: "Somebody Like U",
//       artist: "Alan Walker",
//     },
//   ];

//   const singlesData = [
//     {
//       id: 1,
//       image: "/../public/albumCover.jpg",
//       title: "I Don't Think That I Like Her",
//       writer: "Charlie Puth",
//       artistNumber: artistNumber,
//     },
//   ];

//   const initializeIsPlaying = () => {
//     setIsPlaying(new Array(options.length).fill(false));
//   };

//   useEffect(() => {
//     initializeIsPlaying();
//   }, []);

//   return (
//     <>
//       <div className="mt-8 md:mt-0 md:ml-[270px] min-h-[100vh] text-white p-5 md:w-[85vw]">
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
//             <ArtistProfileDetails artistNumber={artistNumber} />
            

//             <div></div>
//           </div>
//           <div className="col-lg-5 mt-10 p-3 h-[100vh] md:h-auto">
//             <MusicStats />
//           </div>


//           <div className={`${styles["em-db-subcription"]} -mt-[50vh] md:mt-0 `}>
//             <div className="flex justify-between text-xl font-bold">
//               <div>Subscription</div>
//               <div className="">View All</div>
//             </div>
//             <SubscriptionDetails subscriptionData={subscriptionData} />
//           </div>
//         </div>

//         <div className="md:mt-10 p-3  ">
//           <div className="flex justify-between font-semibold text-xl">
//             <div>Active Add Ons</div>
//             <div>View All</div>
//           </div>
//           <AddOnSection addOnData={addOnData} />
//         </div>

//         <div className="text-xl font-semibold mt-10">Albums</div>

//         <AlbumDetails albumData={albumData} />

//         <div className="text-xl font-semibold mt-5">All Singles</div>

//         <AllSinglesSection singlesData={singlesData} />
//       </div>
//     </>
//   );
// };

// export default ArtistProfile;








