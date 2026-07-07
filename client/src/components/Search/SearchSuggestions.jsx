import { Link } from "react-router-dom";

function SearchSuggestions({ products, onSelect }) {
  if (!products.length) return null;

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border overflow-hidden z-50">

      {products.map((product) => (
        <Link
          key={product.id}
          to={`/product/${product.id}`}
          onClick={onSelect}
          className="flex items-center gap-4 p-4 hover:bg-gray-100 transition"
        >
          <img
            src={product.image || "https://via.placeholder.com/60"}
            alt={product.name}
            className="w-14 h-14 object-cover rounded-lg"
          />

          <div className="flex-1">
            <h3 className="font-semibold text-black">
              {product.name}
            </h3>

            <p className="text-sm text-gray-500">
              {product.brand}
            </p>

            <p className="text-green-600 font-semibold">
              ₹{product.price?.toLocaleString() || "N/A"}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default SearchSuggestions;