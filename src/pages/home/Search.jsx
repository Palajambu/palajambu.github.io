import React, { useRef } from "react";
import { IoSearch } from "react-icons/io5";

function Search(props) {
  const { onSearchBox } = props;
  const inputRef = useRef(null); // Create a ref for the input element

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch(); // Trigger search when Enter key is pressed
    }
  };

  const handleButtonClick = () => {
    handleSearch(); // Trigger search with button click
  };

  const handleSearch = () => {
    if (inputRef.current) {
      onSearchBox(inputRef.current.value); // Trigger search with the input value
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="relative w-80">
        <input
          type="text"
          className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-900"
          placeholder="Type to search..."
          onKeyDown={handleKeyDown} // Trigger search on Enter key press
          ref={inputRef} // Attach the ref to the input element
        />
        <button
          onClick={handleButtonClick} // Trigger search with button click
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-yellow-600 text-white rounded"
        >
          <IoSearch />
        </button>
      </div>
    </div>
  );
}

export default Search;
