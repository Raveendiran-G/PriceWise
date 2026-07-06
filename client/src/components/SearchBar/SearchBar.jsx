import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="max-w-3xl mx-auto flex bg-white rounded-xl overflow-hidden shadow-lg">

      <input
        type="text"
        placeholder="Search for products..."
        className="flex-1 px-6 py-4 text-gray-800 outline-none"
      />

      <button className="bg-yellow-400 hover:bg-yellow-500 px-8 flex items-center justify-center">
        <FaSearch className="text-xl text-black" />
      </button>

    </div>
  );
}

export default SearchBar;