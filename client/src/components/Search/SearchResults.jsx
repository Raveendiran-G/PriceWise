import searchProducts from "../../data/searchProducts";

function SearchResults() {
  return (
    <div className="grid md:grid-cols-2 gap-6 mt-8">

      {searchProducts.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-lg rounded-xl p-5"
        >
          <h2 className="font-bold text-xl">
            {product.name}
          </h2>

          <p>{product.brand}</p>

          <p className="text-green-600 font-semibold mt-2">
            ₹{product.lowestPrice.toLocaleString()}
          </p>

          <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded">
            Compare Prices
          </button>

        </div>
      ))}

    </div>
  );
}

export default SearchResults;