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
// import { BsArrowLeftCircle } from "react-icons/bs";

// const ArtistProfile = ({
//   artistData: initialArtistData,
//   dashboardData: initialDashboardData,
//   singlesData: initialSinglesData,
//   albumData: initialAlbumData,
//   subscriptionData: initialSubscriptionData,
//   selectedSongData,
// }) => {
//   const router = useRouter();
//   const { artistNo } = router.query;

//   const [artist, setArtist] = useState(initialArtistData);
//   const [dashboardData, setDashboardData] = useState(initialDashboardData);
//   const [singlesData, setSinglesData] = useState(initialSinglesData);
//   const [albumData, setAlbumData] = useState(initialAlbumData);
//   const [subscriptionData, setSubscriptionData] = useState(
//     initialSubscriptionData
//   );
//   const [audioPlayerVisible, setAudioPlayerVisible] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentPlayingSong, setCurrentPlayingSong] = useState(null); // State to keep track of the currently playing song

//   const handlePlayPause = () => {
//     setAudioPlayerVisible(!audioPlayerVisible); 
//   };

//   const handleAudioPause = () => {
//     setAudioPlayerVisible(false); // Hide the audio player when paused
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const artistsResponse = await axios.get(
//           `${process.env.NEXT_PUBLIC_BASE_URL}/artists`
//         );
//         const artists = artistsResponse.data.data;

//         // Find the artist based on the username
//         const foundArtist = artists.find(
//           (artist) => artist.username === artistNo
//         );

//         setArtist(foundArtist);

//         if (foundArtist) {
//           const dashboardResponse = await axios.get(
//             `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/${foundArtist.id}`
//           );
//           const fetchedDashboardData = dashboardResponse.data;

//           setDashboardData(fetchedDashboardData);

//           const singlesResponse = await axios.get(
//             `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_MUSICS}${process.env.NEXT_PUBLIC_LISTS}/${foundArtist.id}`
//           );
//           const fetchedSinglesData = singlesResponse.data.data;
//           // console.log("fetchedSinglesData: ", fetchedSinglesData );

//           setSinglesData(fetchedSinglesData);

//           const albumResponse = await axios.get(
//             `${process.env.NEXT_PUBLIC_BASE_URL}/albums/list/${foundArtist.id}`
//           );
//           const fetchedAlbumData = albumResponse.data.data;
//           // console.log("fetchedAlbumData: ", fetchedAlbumData );

//           setAlbumData(fetchedAlbumData);

//           const subscriptionResponse = await axios.get(
//             `${process.env.NEXT_PUBLIC_BASE_URL}/artists/subscriptions/${foundArtist.id}`
//           );
//           const fetchedSubscriptionData = subscriptionResponse.data.data;
//           console.log("fetchedSubscriptionData:", fetchedSubscriptionData);

//           setSubscriptionData(fetchedSubscriptionData);
//         }
//       } catch (error) {
//         console.error("Error fetching artist data:", error);
//       }
//     };

//     fetchData();
//   }, [artistNo]);

//   if (!artist) {
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
//             <ArtistProfileDetails artistData={artist} />

//             <div></div>
//           </div>
//           <div className="col-lg-5 mt-10 p-3 h-[100vh] md:h-auto">
//             <MusicStats dashboardInfo={dashboardData} artist={artist} />
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

//         <AlbumDetails albumData={albumData} artistNo={artistNo} />

//         <AllSinglesSection
//         singlesData={singlesData}
//         artistNo={artistNo}
//         onPlayPause={handlePlayPause}
//         audioPlayerVisible={audioPlayerVisible}
//         isPlaying={isPlaying}
//         setIsPlaying={setIsPlaying} // Pass the setIsPlaying function to the child component
//       />
//       </div>
//       {/* Audio Player */}
//       {/* Audio Player */}
//       {audioPlayerVisible && selectedSongData && (
//         <div className="position-fixed bg-red-500 bottom-0 start-50 translate-middle-x w-25 px-2">
//           <audio
//             autoPlay={audioPlayerVisible}
//             className="react-audio-player w-100"
//             controls
//             id={`audio-${selectedSongData?.id}`}
//             src={selectedSongData?.track.file}
//             title={selectedSongData?.track.title}
//             onPause={handleAudioPause}
//           >
//             <p>
//               Your browser does not support the <code>audio</code> element.
//             </p>
//           </audio>
//         </div>
//       )}
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

//     const dashboardResponse = await axios.get(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/${artist.id}`
//     );
//     const dashboardData = dashboardResponse.dashboardInfo.data;

//     const singlesResponse = await axios.get(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/musics/list/${artist.id}`
//     );
//     const singlesData = singlesResponse.data.data;

//     const selectedSongData = singlesData.find(
//       (single) => single.artist === Artist && single.track.title === title
//     );

//     const albumResponse = await axios.get(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/albums/list/${artist.id}`
//     );
//     const albumData = albumResponse.data.data;

//     const subscriptionResponse = await axios.get(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/artists/subscriptions/${artist.id}`
//     );
//     const subscriptionData = subscriptionResponse.data.data;

//     return {
//       props: {
//         artistData: artist,
//         dashboardData: dashboardData,
//         singlesData: singlesData,
//         albumData: albumData,
//         subscriptionData: subscriptionData,
//         selectedSongData: selectedSongData,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching artist data:", error);
//     return {
//       props: {
//         artistData: null,
//         dashboardData: null,
//         singlesData: null,
//         albumData: null,
//         subscriptionData: null,
//         selectedSongData: null,
//       },
//     };
//   }
// }

// export default ArtistProfile;




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
// import { BsArrowLeftCircle } from "react-icons/bs";

// const ArtistProfile = ({
//   artistData: initialArtistData,
//   dashboardData: initialDashboardData,
//   singlesData: initialSinglesData,
//   albumData: initialAlbumData,
//   subscriptionData: initialSubscriptionData,
// }) => {
//   const router = useRouter();
//   const { artistNo } = router.query;

//   const [artist, setArtist] = useState(initialArtistData);
//   const [dashboardData, setDashboardData] = useState(initialDashboardData);
//   const [singlesData, setSinglesData] = useState(initialSinglesData);
//   const [albumData, setAlbumData] = useState(initialAlbumData);
//   const [subscriptionData, setSubscriptionData] = useState(initialSubscriptionData);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const artistsResponse = await axios.get(
//           `${process.env.NEXT_PUBLIC_BASE_URL}/artists`
//         );
//         const artists = artistsResponse.data.data;

//         // Find the artist based on the username
//         const foundArtist = artists.find(
//           (artist) => artist.username === artistNo
//         );

//         setArtist(foundArtist);

//         if (foundArtist) {
//           const dashboardResponse = await axios.get(
//             `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/${foundArtist.id}`
//           );
//           const fetchedDashboardData = dashboardResponse.data;

//           setDashboardData(fetchedDashboardData);

//           const singlesResponse = await axios.get(
//             `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_MUSICS}${process.env.NEXT_PUBLIC_LISTS}/${foundArtist.id}`
//           );
//           const fetchedSinglesData = singlesResponse.data.data;
//           // console.log("fetchedSinglesData: ", fetchedSinglesData );

//           setSinglesData(fetchedSinglesData);

//           const albumResponse = await axios.get(
//             `${process.env.NEXT_PUBLIC_BASE_URL}/albums/list/${foundArtist.id}`
//           );
//           const fetchedAlbumData = albumResponse.data.data;
//           // console.log("fetchedAlbumData: ", fetchedAlbumData );

//           setAlbumData(fetchedAlbumData);

//           const subscriptionResponse = await axios.get(
//             `${process.env.NEXT_PUBLIC_BASE_URL}/artists/subscriptions/${foundArtist.id}`
//           );
//           const fetchedSubscriptionData = subscriptionResponse.data.data;
//           console.log("fetchedSubscriptionData:" , fetchedSubscriptionData);

//           setSubscriptionData(fetchedSubscriptionData);

//         }
//       } catch (error) {
//         console.error("Error fetching artist data:", error);
//       }
//     };

//     fetchData();
//   }, [artistNo]);

//   if (!artist) {
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

//   // const subscriptionData = [
//   //   {
//   //     id: 1,
//   //     subscriptionType: "AWB | Artists with Benefits",
//   //     date: "24 June 2023",
//   //     totalPaid: "$14.99",
//   //   },
//   //   {
//   //     id: 2,
//   //     subscriptionType: "AWB | Artists with Benefits",
//   //     date: "24 June 2023",
//   //     totalPaid: "$14.99",
//   //   },
//   //   {
//   //     id: 3,
//   //     subscriptionType: "AWB | Artists with Benefits",
//   //     date: "24 June 2023",
//   //     totalPaid: "$14.99",
//   //   },
//   // ];

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

//   // const albumData = [
//   //   {
//   //     id: 1,
//   //     image: "/../public/albumCover.jpg",
//   //     title: "Somebody Like U",
//   //     artist: "Alan Walker",
//   //   },
//   // ];

//   // const singlesData = [
//   //   {
//   //     id: 1,
//   //     image: "/../public/albumCover.jpg",
//   //     title: "I Don't Think That I Like Her",
//   //     writer: "Charlie Puth",
//   //     artistNumber: artist.username, // Update here
//   //   },
//   // ];

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
//             <ArtistProfileDetails artistData={artist} />

//             <div></div>
//           </div>
//           <div className="col-lg-5 mt-10 p-3 h-[100vh] md:h-auto">
//             <MusicStats dashboardInfo={dashboardData} artist={artist} />
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

//         <AlbumDetails albumData={albumData} artistNo = {artistNo}/>

//         <AllSinglesSection singlesData={singlesData} artistNo = { artistNo }  />
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

//     const dashboardResponse = await axios.get(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/${artist.id}`
//     );
//     const dashboardData = dashboardResponse.dashboardInfo.data;

//     const singlesResponse = await axios.get(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/musics/list/${artist.id}`
//     );
//     const singlesData = singlesResponse.data.data;

//     const albumResponse = await axios.get(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/albums/list/${artist.id}`
//     );
//     const albumData = albumResponse.data.data;

//     const subscriptionResponse = await axios.get(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/artists/subscriptions/${artist.id}`
//     );
//     const subscriptionData = subscriptionResponse.data.data;

//     return {
//       props: {
//         artistData: artist,
//         dashboardData: dashboardData,
//         singlesData: singlesData,
//         albumData: albumData,
//         subscriptionData: subscriptionData,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching artist data:", error);
//     return {
//       props: {
//         artistData: null,
//         dashboardData: null,
//         singlesData: null,
//         albumData: null,
//         subscriptionData: null,
//       },
//     };
//   }
// }

// export default ArtistProfile;






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

const ArtistProfile = ({
  artistData: initialArtistData,
  dashboardData: initialDashboardData,
  singlesData: initialSinglesData,
  albumData: initialAlbumData,
  subscriptionData: initialSubscriptionData,
  selectedSongData,
}) => {
  const router = useRouter();
  const { artistNo } = router.query;

  const [artist, setArtist] = useState(initialArtistData);
  const [dashboardData, setDashboardData] = useState(initialDashboardData);
  const [singlesData, setSinglesData] = useState(initialSinglesData);
  const [albumData, setAlbumData] = useState(initialAlbumData);
  const [subscriptionData, setSubscriptionData] = useState(initialSubscriptionData);
  const [isAudioVisible, setIsAudioVisible] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(-1);
const [currentTrackUrl, setCurrentTrackUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const artistsResponse = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/artists`
        );
        const artists = artistsResponse.data.data;

        // Find the artist based on the username
        const foundArtist = artists.find(
          (artist) => artist.username === artistNo
        );

        setArtist(foundArtist);

        if (foundArtist) {
          const dashboardResponse = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/${foundArtist.id}`
          );
          const fetchedDashboardData = dashboardResponse.data;

          setDashboardData(fetchedDashboardData);

          const singlesResponse = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_MUSICS}${process.env.NEXT_PUBLIC_LISTS}/${foundArtist.id}`
          );
          const fetchedSinglesData = singlesResponse.data.data;
          // console.log("fetchedSinglesData: ", fetchedSinglesData );

          setSinglesData(fetchedSinglesData);

          const albumResponse = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}/albums/list/${foundArtist.id}`
          );
          const fetchedAlbumData = albumResponse.data.data;
          // console.log("fetchedAlbumData: ", fetchedAlbumData );

          setAlbumData(fetchedAlbumData);

          const subscriptionResponse = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}/artists/subscriptions/${foundArtist.id}`
          );
          const fetchedSubscriptionData = subscriptionResponse.data.data;
          console.log("fetchedSubscriptionData:" , fetchedSubscriptionData);

          setSubscriptionData(fetchedSubscriptionData);

        }
      } catch (error) {
        console.error("Error fetching artist data:", error);
      }
    };

    fetchData();
  }, [artistNo]);

  if (!artist) {
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

  return (
    <>
      <div className=" mt-8 md:mt-0 md:ml-[270px] min-h-[100vh] text-white p-5 md:w-[85vw]">
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
          className={`${styles["em-db-content-body"]}  grid lg:grid-cols-3 grid-cols-1 p-3 mt-10 space-x-2`}
        >
          <div className="grid1">
            <div className="font-bold text-xl">Overview</div>
            <ArtistProfileDetails artistData={artist} />

            <div></div>
          </div>
          <div className="col-lg-5 mt-10 p-3 h-[100vh] md:h-auto">
            <MusicStats dashboardInfo={dashboardData} artist={artist} />
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

        <AlbumDetails albumData={albumData} artistNo = {artistNo}/>

        {/* <AllSinglesSection
      singlesData={singlesData}
      selectedSongData={selectedSongData}
      artistNo={artistNo}
      // Pass the callback function to update the state in [artistNo].js
      onTrackPlay={(trackUrl) => {
        setIsAudioVisible(true);
        setCurrentTrackUrl(trackUrl);
        // You can also add code to autoplay here
      }}
      onTrackPause={() => {
        setIsAudioVisible(false);
        setCurrentTrackUrl("");
      }}
    /> */}
    <AllSinglesSection
      singlesData={singlesData}
      selectedSongData={selectedSongData}
      artistNo={artistNo}
      // Pass the callback function to update the state in [artistNo].js
      onTrackPlay={(trackUrl, index) => {
        setIsAudioVisible(true);
        setCurrentTrackUrl(trackUrl);
        setCurrentTrackIndex(index);
        // You can also add code to autoplay here
      }}
      onTrackPause={() => {
        setIsAudioVisible(false);
        setCurrentTrackUrl("");
        setCurrentTrackIndex(-1);
      }}
    />

{/* {isAudioVisible && (
      <div className="position-fixed flex justify-center items-center bottom-0 start-50 translate-middle-x w-25 px-2">
        <audio
          autoPlay // Start playing when isAudioVisible is true
          className="react-audio-player w-100"
          controls
          id={`audio-${selectedSongData?.id}`}
          src="https://admin.emergencemusicdistribution.com/uploads/audio/track/1687028749-file.wav"
          // src={selectedSongData?.track.file}
          title={selectedSongData?.track.title}
        >
          <p>Your browser does not support the <code>audio</code> element.</p>
        </audio>
      </div>
    )} */}
    {isAudioVisible && currentTrackIndex !== -1 && (
      <div className="position-fixed flex justify-center items-center bottom-0 start-50 translate-middle-x px-2">
        <audio
          autoPlay // Start playing when isAudioVisible is true
          className="react-audio-player w-100 w-[90%] md:w-[300px]"
          controls
          id={`audio-${selectedSongData?.id}`}
          src={currentTrackUrl}
          title={selectedSongData?.track.title}
        >
          <p>Your browser does not support the <code>audio</code> element.</p>
        </audio>
      </div>
    )}


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

    const dashboardResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/${artist.id}`
    );
    const dashboardData = dashboardResponse.dashboardInfo.data;

    const singlesResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/musics/list/${artist.id}`
    );
    const singlesData = singlesResponse.data.data;

    const selectedSongData = singlesData.find(
      (single) => single.artist === artist && single.track.title === title
    );

    const albumResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/albums/list/${artist.id}`
    );
    const albumData = albumResponse.data.data;

    const subscriptionResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/artists/subscriptions/${artist.id}`
    );
    const subscriptionData = subscriptionResponse.data.data;

    return {
      props: {
        artistData: artist,
        dashboardData: dashboardData,
        singlesData: singlesData,
        albumData: albumData,
        subscriptionData: subscriptionData,
        selectedSongData: selectedSongData,
      },
    };
  } catch (error) {
    console.error("Error fetching artist data:", error);
    return {
      props: {
        artistData: null,
        dashboardData: null,
        singlesData: null,
        albumData: null,
        subscriptionData: null,
        selectedSongData: null,
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
// import { BsArrowLeftCircle } from "react-icons/bs";

// const ArtistProfile = ({
//   artistData: initialArtistData,
//   dashboardData: initialDashboardData,
//   singlesData: initialSinglesData,
//   albumData: initialAlbumData,
//   subscriptionData: initialSubscriptionData,
//   selectedSongData,
// }) => {
//   const router = useRouter();
//   const { artistNo } = router.query;

//   const [artist, setArtist] = useState(initialArtistData);
//   const [dashboardData, setDashboardData] = useState(initialDashboardData);
//   const [singlesData, setSinglesData] = useState(initialSinglesData);
//   const [albumData, setAlbumData] = useState(initialAlbumData);
//   const [subscriptionData, setSubscriptionData] = useState(initialSubscriptionData);
//   const [isAudioVisible, setIsAudioVisible] = useState(false);
//   const [currentTrackUrl, setCurrentTrackUrl] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const artistsResponse = await axios.get(
//           `${process.env.NEXT_PUBLIC_BASE_URL}/artists`
//         );
//         const artists = artistsResponse.data.data;

//         // Find the artist based on the username
//         const foundArtist = artists.find(
//           (artist) => artist.username === artistNo
//         );

//         setArtist(foundArtist);

//         if (foundArtist) {
//           const dashboardResponse = await axios.get(
//             `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/${foundArtist.id}`
//           );
//           const fetchedDashboardData = dashboardResponse.data;

//           setDashboardData(fetchedDashboardData);

//           const singlesResponse = await axios.get(
//             `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_MUSICS}${process.env.NEXT_PUBLIC_LISTS}/${foundArtist.id}`
//           );
//           const fetchedSinglesData = singlesResponse.data.data;
//           // console.log("fetchedSinglesData: ", fetchedSinglesData );

//           setSinglesData(fetchedSinglesData);

//           const albumResponse = await axios.get(
//             `${process.env.NEXT_PUBLIC_BASE_URL}/albums/list/${foundArtist.id}`
//           );
//           const fetchedAlbumData = albumResponse.data.data;
//           // console.log("fetchedAlbumData: ", fetchedAlbumData );

//           setAlbumData(fetchedAlbumData);

//           const subscriptionResponse = await axios.get(
//             `${process.env.NEXT_PUBLIC_BASE_URL}/artists/subscriptions/${foundArtist.id}`
//           );
//           const fetchedSubscriptionData = subscriptionResponse.data.data;
//           console.log("fetchedSubscriptionData:" , fetchedSubscriptionData);

//           setSubscriptionData(fetchedSubscriptionData);

//         }
//       } catch (error) {
//         console.error("Error fetching artist data:", error);
//       }
//     };

//     fetchData();
//   }, [artistNo]);

//   if (!artist) {
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

//   // const subscriptionData = [
//   //   {
//   //     id: 1,
//   //     subscriptionType: "AWB | Artists with Benefits",
//   //     date: "24 June 2023",
//   //     totalPaid: "$14.99",
//   //   },
//   //   {
//   //     id: 2,
//   //     subscriptionType: "AWB | Artists with Benefits",
//   //     date: "24 June 2023",
//   //     totalPaid: "$14.99",
//   //   },
//   //   {
//   //     id: 3,
//   //     subscriptionType: "AWB | Artists with Benefits",
//   //     date: "24 June 2023",
//   //     totalPaid: "$14.99",
//   //   },
//   // ];

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

//   // const albumData = [
//   //   {
//   //     id: 1,
//   //     image: "/../public/albumCover.jpg",
//   //     title: "Somebody Like U",
//   //     artist: "Alan Walker",
//   //   },
//   // ];

//   // const singlesData = [
//   //   {
//   //     id: 1,
//   //     image: "/../public/albumCover.jpg",
//   //     title: "I Don't Think That I Like Her",
//   //     writer: "Charlie Puth",
//   //     artistNumber: artist.username, // Update here
//   //   },
//   // ];

  

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
//             <ArtistProfileDetails artistData={artist} />

//             <div></div>
//           </div>
//           <div className="col-lg-5 mt-10 p-3 h-[100vh] md:h-auto">
//             <MusicStats dashboardInfo={dashboardData} artist={artist} />
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

//         <AlbumDetails albumData={albumData} artistNo = {artistNo}/>

//         {/* <AllSinglesSection singlesData={singlesData} artistNo = { artistNo }  /> */}
//         <AllSinglesSection
//           singlesData={singlesData}
//           selectedSongData = {selectedSongData}
//           artistNo={artistNo}
//           // Pass the callback function to update the state in [artistNo].js
//           onTrackPlay={(trackUrl) => {
//             setIsAudioVisible(true);
//             setCurrentTrackUrl(trackUrl);
//           }}
//           onTrackPause={() => {
//             setIsAudioVisible(false);
//             setCurrentTrackUrl("");
//           }}
//         />
//         {/* {isAudioVisible && (
//         <audio
//           controls
//           autoPlay={isAudioPlaying} // Use this if you want to auto-play the audio
//           onPlay={() => setIsAudioPlaying(true)}
//           onPause={() => setIsAudioPlaying(false)}
//           onEnded={() => setIsAudioPlaying(false)}
//           // Add other audio event handlers as needed
//         >
//           <source src= Your audio URL  type="audio/mpeg" />
//         </audio>
//       )} */}

//       {isAudioVisible && (
         
//           <div className="position-fixed flex justify-center items-center bottom-0 start-50 translate-middle-x w-25 px-2">
//             <audio
//               // autoPlay={isPlaying} // Start playing when isPlaying is true
//               className="react-audio-player w-100"
//               controls
//               id={`audio-${selectedSongData?.id}`}
//               src="https://admin.emergencemusicdistribution.com/uploads/audio/track/1687028628-file.wav"
//               // src={selectedSongData?.track.file}
//               title={selectedSongData?.track.title}
//               // onPause={() => setAudioPlayerVisible(false)} // Call the function to hide the audio player when paused
//             >
//               <p>
//                 Your browser does not support the <code>audio</code> element.
//               </p>
//             </audio>
//           </div>
//         )}


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

//     const dashboardResponse = await axios.get(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/${artist.id}`
//     );
//     const dashboardData = dashboardResponse.dashboardInfo.data;

//     const singlesResponse = await axios.get(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/musics/list/${artist.id}`
//     );
//     const singlesData = singlesResponse.data.data;

//     const selectedSongData = singlesData.find(
//       (single) => single.artist === artist && single.track.title === title
//     );

//     const albumResponse = await axios.get(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/albums/list/${artist.id}`
//     );
//     const albumData = albumResponse.data.data;

//     const subscriptionResponse = await axios.get(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/artists/subscriptions/${artist.id}`
//     );
//     const subscriptionData = subscriptionResponse.data.data;

//     return {
//       props: {
//         artistData: artist,
//         dashboardData: dashboardData,
//         singlesData: singlesData,
//         albumData: albumData,
//         subscriptionData: subscriptionData,
//         selectedSongData: selectedSongData,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching artist data:", error);
//     return {
//       props: {
//         artistData: null,
//         dashboardData: null,
//         singlesData: null,
//         albumData: null,
//         subscriptionData: null,
//         selectedSongData: null,
//       },
//     };
//   }
// }

// export default ArtistProfile;
