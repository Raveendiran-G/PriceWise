import { useEffect, useRef, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { searchProducts } from "../../services/searchService";
import SearchSuggestions from "./SearchSuggestions";

function SearchBar() {

  console.log("✅ Correct SearchBar Loaded");
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const navigate = useNavigate();
  const searchRef = useRef(null);

  // Close suggestions when clicking outside
  useEffect(() => {
    console.log("Query:", query);

    if (!query.trim()) {
      setProducts([]);
      return;
    }

    const timer = setTimeout(async () => {
      console.log("Calling API...");

      try {
        setLoading(true);

        const data = await searchProducts(query);

        console.log("API Response:", data);

        setProducts(data);
        setShowSuggestions(true);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);


  const handleSearch = () => {
    if (!query.trim()) return;

    navigate(`/search?q=${encodeURIComponent(query)}`);
    setShowSuggestions(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div
      className="relative w-full max-w-3xl mx-auto"
      ref={searchRef}
    >
      <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden border">

        <div className="px-5 text-gray-500">
          <FaSearch />
        </div>

        <input
          type="text"
          placeholder="Search mobiles, laptops, grocery..."
          value={query}
          onChange={(e) => {
            console.log(e.target.value);
            setQuery(e.target.value);
          }}
          onKeyDown={handleKeyDown}
          className="flex-1 py-4 px-2 text-black placeholder-gray-400 bg-white outline-none text-lg"
        />

        {query && (
          <button
            onClick={() => {
              setQuery("");
              setProducts([]);
            }}
            className="px-4 text-gray-500 hover:text-red-500"
          >
            <FaTimes />
          </button>
        )}

        <button
          onClick={handleSearch}
          className="bg-yellow-400 hover:bg-yellow-500 px-8 py-4 transition"
        >
          <FaSearch />
        </button>

      </div>

      {loading && (
        <div className="bg-white p-4 shadow rounded-xl mt-2">
          Searching...
        </div>
      )}

      {!loading &&
        showSuggestions &&
        products.length > 0 && (
          <SearchSuggestions
            products={products}
            onSelect={() => setShowSuggestions(false)}
          />
        )}

      {!loading &&
        showSuggestions &&
        query &&
        products.length === 0 && (
          <div className="bg-white p-4 rounded-xl shadow mt-2">
            No products found.
          </div>
        )}
    </div>
  );
}

export default SearchBar;