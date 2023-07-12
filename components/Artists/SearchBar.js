import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className=" pt-5">
      <div className="relative flex justify-center items-center mt-[20px] w-[87vw] md:w-[70vw] h-[56px] border backdrop-opacity-25 bg-white/10 border-white/40  rounded-lg focus-within:shadow-lg overflow-hidden">
        <input
          className="peer h-full w-full outline-none text-xl p-2 backdrop-opacity-25 bg-white/10 border-white/40 pr-2"
          type="text"
          id="search"
          placeholder="Artists"
          onChange={handleInputChange}
        />

        <div className="grid place-items-center h-full w-12 text-gray-300 backdrop-opacity-25 bg-white/10 border-white/40">
          <BiSearch className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
