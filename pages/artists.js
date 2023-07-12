
//! below is taking data from api folder

// import ArtistCard from "@/components/Artists/ArtistCard";
// import SearchBar from "@/components/Artists/SearchBar";
// import React, { useEffect, useState } from "react";
// import { BsArrowLeftCircle } from "react-icons/bs";
// import axios from "axios";

// const Artists = ({ data }) => {
//   return (
//     <>
//       <div className="md:ml-[270px] min-h-[100vh] text-white p-5">
//         <div className="align-items-center justify-content-between flex text-white">
//           <h2 className="text-white ml-[10px] mt-[52px] font-sf-pro-text text-4xl font-semibold tracking-normal text-left ">
//             All Artists
//           </h2>
//         </div>

//         <SearchBar />
//         <div className="flex justify-center items-center">
//           <div className="sm:mb-0 mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center lg:grid-cols-4 md:w-full md:space-x-2">
//             {data &&
//               data.length > 0 &&
//               data.map((item) => (
//                 <ArtistCard
//                   key={item.id}
//                   name={item.full_name}
//                   profileImage="https://via.placeholder.com/112x112"
//                 />
//               ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Artists;

// !below with serverside props

import ArtistCard from "@/components/Artists/ArtistCard";
import SearchBar from "@/components/Artists/SearchBar";
import React from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import axios from "axios";

const Artists = ({ data }) => {
  return (
    <>
      <div className="md:ml-[270px] min-h-[100vh] text-white p-5">
        <div className="align-items-center justify-content-between flex text-white">
          <h2 className="text-white ml-[10px]  mt-[52px] font-sf-pro-text text-4xl font-semibold tracking-normal text-left ">
            All Artists
          </h2>
        </div>

        <SearchBar />
        <div className="flex justify-center items-center">
          <div className="sm:mb-0 mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center lg:grid-cols-4 md:w-full md:space-x-2">
            {data.map((item) => (
              <ArtistCard
                key={item.id}
                name={item.full_name}
                profileImage="https://via.placeholder.com/112x112"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  try {
    const response = await axios.get("https://api.child-hunger.org/api/artists");
    const data = response.data.data;
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        data: [],
      },
    };
  }
}

export default Artists;

// !below without serverside props

// import ArtistCard from "@/components/Artists/ArtistCard";
// import SearchBar from "@/components/Artists/SearchBar";
// import { useRouter } from "next/router";
// import React, { useEffect, useState } from "react";
// import { BsArrowLeftCircle } from "react-icons/bs";
// import axios from "axios";

// const Artists = () => {
//   const [data, setData] = useState([]);
//   const router = useRouter();

//   const fetchAPI = () => {
//     axios
//       .get("https://api.child-hunger.org/api/artists")
//       .then((res) => {
//         // console.log(res.data);
//         setData(res.data.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };

//   useEffect(() => {
//     fetchAPI();
//   }, []);

//   return (
//     <>
//       <div className="md:ml-[270px] min-h-[100vh] text-white p-5">
//         <div className="align-items-center justify-content-between flex text-white">
//           <h2 className="text-white ml-[10px]  mt-[52px] font-sf-pro-text text-4xl font-semibold tracking-normal text-left ">
//             All Artists
//           </h2>
//         </div>

//         <SearchBar />
//         <div className="flex justify-center items-center">
//           <div className="sm:mb-0 mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center lg:grid-cols-4 md:w-full md:space-x-2">
//             {/* <ArtistCard
//               name="Ari Elkins"
//               profileImage="https://via.placeholder.com/112x112"
//             /> */}
//             {data.map((item) => (
//         <ArtistCard key={item.id} name={item.full_name} profileImage="https://via.placeholder.com/112x112" />
//       ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Artists;
