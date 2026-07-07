import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import CompareTable from "../../components/CompareTable/CompareTable";
import { getProductById } from "../../services/productService";

function ProductPage() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        console.log(data);
        setProduct(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="text-center text-2xl mt-20">
          Loading...
        </div>
      </>
    );
  }

  const lowestPrice =
    product.prices.length > 0
      ? Math.min(...product.prices.map((item) => item.price))
      : 0;

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-8">

        <img
          src={product.image}
          alt={product.name}
          className="w-80 rounded-xl shadow-lg"
        />

        <h1 className="text-5xl font-bold mt-8">
          {product.name}
        </h1>

        <p className="text-gray-600 mt-2">
          {product.brand}
        </p>

        <p className="text-yellow-500 mt-2">
          ⭐ {product.rating}
        </p>

        <p className="text-green-600 text-3xl mt-4">
          ₹{lowestPrice.toLocaleString()}
        </p>

        <CompareTable stores={product.prices} />

      </div>
    </>
  );
}

export default ProductPage;