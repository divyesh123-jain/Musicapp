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
}) => {
  const router = useRouter();
  const { artistNo } = router.query;

  const [artist, setArtist] = useState(initialArtistData);
  const [dashboardData, setDashboardData] = useState(initialDashboardData);
  const [singlesData, setSinglesData] = useState(initialSinglesData);
  const [albumData, setAlbumData] = useState(initialAlbumData);
  const [subscriptionData, setSubscriptionData] = useState(initialSubscriptionData);


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

  // const subscriptionData = [
  //   {
  //     id: 1,
  //     subscriptionType: "AWB | Artists with Benefits",
  //     date: "24 June 2023",
  //     totalPaid: "$14.99",
  //   },
  //   {
  //     id: 2,
  //     subscriptionType: "AWB | Artists with Benefits",
  //     date: "24 June 2023",
  //     totalPaid: "$14.99",
  //   },
  //   {
  //     id: 3,
  //     subscriptionType: "AWB | Artists with Benefits",
  //     date: "24 June 2023",
  //     totalPaid: "$14.99",
  //   },
  // ];

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

  // const albumData = [
  //   {
  //     id: 1,
  //     image: "/../public/albumCover.jpg",
  //     title: "Somebody Like U",
  //     artist: "Alan Walker",
  //   },
  // ];

  // const singlesData = [
  //   {
  //     id: 1,
  //     image: "/../public/albumCover.jpg",
  //     title: "I Don't Think That I Like Her",
  //     writer: "Charlie Puth",
  //     artistNumber: artist.username, // Update here
  //   },
  // ];

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

        <div className="text-xl font-semibold mt-5">All Singles</div>

        <AllSinglesSection singlesData={singlesData} artistNo = { artistNo }  />
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
      },
    };
  }
}

export default ArtistProfile;






//!before working

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
// }) => {
//   const router = useRouter();
//   const { artistNo } = router.query;

//   const [artist, setArtist] = useState(initialArtistData);
//   const [dashboardData, setDashboardData] = useState(initialDashboardData);
//   const [singlesData, setSinglesData] = useState([]);


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

//         // if (foundArtist) {
//         //   const dashboardResponse = await axios.get(
//         //     `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/${foundArtist.id}`
//         //   );
//         //   const fetchedDashboardData = dashboardResponse.data;

//         //   setDashboardData(fetchedDashboardData);
//         // }
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
//           console.log("fetchedSinglesData: ", fetchedSinglesData );

//           setSinglesData(fetchedSinglesData);
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

//         <AlbumDetails albumData={albumData} />

//         <div className="text-xl font-semibold mt-5">All Singles</div>

//         <AllSinglesSection singlesData={singlesData} />
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

//     return {
//       props: {
//         artistData: artist,
//         dashboardData: dashboardData,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching artist data:", error);
//     return {
//       props: {
//         artistData: null,
//         dashboardData: null,
//       },
//     };
//   }
// }

// export default ArtistProfile;








