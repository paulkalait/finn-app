import React, { useState } from "react";
import { mockSearchResults } from "../constants/mock";
import { XIcon, SearchIcon } from "@heroicons/react/solid";
import SearchResults from "./SearchResults";

export const Search = () => {
  const [input, setInput] = useState("");
  const [bestMatches, setBestMatches] = useState(mockSearchResults.result);

  const clear = () => {
    setInput("");
    setBestMatches([]);
  };

  const updateBestMatches = () => {
    setBestMatches(mockSearchResults.result);
  };

  return (
    <div className="flex items-center my-4 border-2 rounded-md relative z-50 w-96 bg-white border-neutral-200 ">
      {/*Value equel to input state */}
      <input
        type="text"
        value={input}
        className="w-full px-4 py-2 focus:outline-none rounded-md"
        placeholder="Search Ticker..."
        onChange={(event) => setInput(event.target.value)}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            updateBestMatches();
          }
        }}
      />

      {/* only display if input is in textfield */}
      {input && (
        <button onClick={clear}>
          <XIcon className="h-6 w-6 fill-gray-500 pr-2" />
        </button>
      )}
         {/* else.. */}
      <button onClick={updateBestMatches} className="h-9 w-9 rounded flex justify-center items-center m-1 p-2">
      <SearchIcon className="h-5 w-5 fill-slate-500" />
      </button>


      {input && bestMatches > 0 ? <SearchResults results={bestMatches}/> : null}
    </div>
  );
};

export default Search;
