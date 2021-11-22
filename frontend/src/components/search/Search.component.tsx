import React from "react";
import search from "../../assets/img/search.png";
import { LANGUAGE } from "../../constants/language";

export const Search = (props: any) => {
  return (
    <div className="flex items-center">
      <div className="flex border-2 mb-4 md:mb-10 border-gray-200 rounded w-full">
        <input
          type="text"
          className="px-4 py-2 w-10/12 lg:w-11/12"
          placeholder={LANGUAGE.list.search}
          value={props.searchQuery}
          onInput={(e: any) => props.setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 text-white bg-black flex items-center justify-center border-l w-2/12 lg:w-1/12 "
        >
          <img src={search} alt="search" className="w-6 h-auto" />
        </button>
      </div>
    </div>
  );
};
