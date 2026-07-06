import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg"
      />

      <h3 className="text-lg font-bold mt-4">
        {product.name}
      </h3>

      <p className="text-green-600 font-semibold">
        ₹{product.price.toLocaleString()}
      </p>

      <Link to={`/products/${product.id}`}>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Compare Prices
        </button>
      </Link>
    </div>
  );
}

export default ProductCard;