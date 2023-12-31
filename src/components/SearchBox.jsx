"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    console.log("Before push: ", search);
    router.push(`/search/${search}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl mx-auto justify-between items-center px-5"
    >
      <input
        value={search}
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="text-amber-600 disabled:text-gray-400"
        disabled={!search || search.length === 0}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
