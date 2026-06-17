import { useRef } from "react";

function SearchPlayer() {
  const inputRef = useRef();

  const handleSearch = () => {
    alert(inputRef.current.value);
  };

  return (
    <>
      <input ref={inputRef} placeholder="Search Player" />
      <button onClick={handleSearch}>
        Search
      </button>
    </>
  );
}

export default SearchPlayer;