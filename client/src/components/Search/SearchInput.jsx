import { FaSearch } from "react-icons/fa";

function SearchInput() {
  return (
    <div className="flex items-center bg-white rounded-xl shadow-lg overflow-hidden">

      <input
        type="text"
        placeholder="Search products..."
        className="flex-1 p-4 outline-none"
      />

      <button className="bg-blue-600 text-white px-6 py-4">
        <FaSearch />
      </button>

    </div>
  );
}

export default SearchInput;