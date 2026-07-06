import searchProducts from "../../data/searchProducts";

function SearchSuggestions() {
  return (
    <div className="bg-white shadow rounded-lg mt-3">

      {searchProducts.map((product) => (
        <div
          key={product.id}
          className="p-3 hover:bg-gray-100 cursor-pointer"
        >
          {product.name}
        </div>
      ))}

    </div>
  );
}

export default SearchSuggestions;