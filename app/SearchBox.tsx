"use client";

import {useRouter} from "next/navigation";
import {useState} from "react";

function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search?keyword=${search}`);
    setSearch("");
  };
  return (
    <form
      onSubmit={handleSearch}
      className='max-w-6xl mx-auto flex justify-between items-center px-5'
    >
      <input
        type='text'
        value={search}
        placeholder='Search Keywords...'
        onChange={(e) => setSearch(e.target.value)}
        className='flex-1 w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none bg-transparent dark:text-orange-400'
      />
      <button
        disabled={!search}
        type='submit'
        className='text-orange-400 disabled:text-gray-400'
      >
        Search
      </button>
    </form>
  );
}
export default SearchBox;
