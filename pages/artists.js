import ArtistCard from "@/components/Artists/ArtistCard";
import SearchBar from "@/components/Artists/SearchBar";
import React, { useState } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import axios from "axios";
import logo2 from "../public/logo2.jpg";

const Artists = ({ data }) => {
  const [searchResults, setSearchResults] = useState(data);

  const handleSearch = (query) => {
    if (query.trim() === "") {
      setSearchResults(data);
      return;
    }

    const filteredResults = data.filter((item) => {
      const artistName = item.full_name.toLowerCase();
      return artistName.includes(query.toLowerCase());
    });

    setSearchResults(filteredResults);
  };

  return (
    <>
      <div className="md:ml-[270px] min-h-[100vh] text-white p-5">
        <div className="align-items-center justify-content-between flex text-white">
          <h2 className="text-white ml-[10px]  mt-[52px] font-sf-pro-text text-4xl font-semibold tracking-normal text-left ">
            All Artists
          </h2>
        </div>

        <SearchBar onSearch={handleSearch} />

        <div className="flex justify-center items-center">
          <div className="sm:mb-0 mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center lg:grid-cols-4 md:w-full md:space-x-2">
            {searchResults.map((item) => (
              <ArtistCard
                key={item.id}
                data={item}
                // profileImage="https://via.placeholder.com/112x112"
                // profileImage="https://www.emergencemusicdistribution.com/static/media/siteLogoName.0c4d6acc04e126ba1c1a80e7a0246ec8.svg"
                // profileImage="https://admin.emergencemusicdistribution.com/uploads/album/thumbnail/1687028749-file.jpg"
                profileImage={logo2}
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
    const response = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL + process.env.NEXT_PUBLIC_ARTISTS
    );
    const data = response.data.data;
    // console.log(data);
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
