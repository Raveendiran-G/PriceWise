import StoreCard from "../StoreCard/StoreCard";

function CompareTable({ stores }) {
  const lowestPrice = Math.min(...stores.map((store) => store.price));

  return (
    <div className="mt-10">

      <h2 className="text-3xl font-bold mb-6">
        Compare Prices
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full border rounded-xl overflow-hidden">

          <thead className="bg-blue-600 text-white">

            <tr>
              <th className="p-4 text-left">Store</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Delivery</th>
              <th className="p-4 text-left">Offer</th>
              <th className="p-4 text-left">Buy</th>
            </tr>

          </thead>

          <tbody>

            {stores.map((store) => (
              <StoreCard
                key={store.name}
                store={store}
                lowestPrice={lowestPrice}
              />
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default CompareTable;