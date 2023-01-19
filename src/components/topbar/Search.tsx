import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className="col-span-5">
      <div className="w-full h-7 bg-white rounded-3xl flex items-center">
        <AiOutlineSearch className="text-xl ml-2 mr-1" />
        <input
          type="text"
          className="border-none w-4/5 focus:outline-none"
          placeholder="探し物は何ですか？"
        />
      </div>
    </div>
  );
};

export default Search;
