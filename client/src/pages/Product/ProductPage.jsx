import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { getProductById } from "../../services/productService";
import CompareTable from "../../components/CompareTable/CompareTable";
import Specifications from "../../components/Specifications/Specifications";

function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getProductById(id);
                setProduct(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return (
            <>
                <Navbar />
                <div className="text-center mt-20 text-2xl">
                    Loading...
                </div>
            </>
        );
    }

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

                <p className="text-green-600 text-3xl mt-4">
                    ₹{product.price.toLocaleString()}
                </p>

                <h2 className="text-2xl font-bold mt-10">
                    Available Stores
                </h2>

                <div className="mt-4 space-y-3">
                    {product.stores.map((store) => (
                        <div
                            key={store.name}
                            className="flex justify-between bg-gray-100 p-4 rounded-lg"
                        >
                            <span>{store.name}</span>
                            <span>₹{store.price.toLocaleString()}</span>
                        </div>
                    ))}
                </div>

            </div>
            <CompareTable stores={product.stores} />
            <Specifications
                specifications={product.specifications}
            />
        </>

    );
}

export default ProductPage;