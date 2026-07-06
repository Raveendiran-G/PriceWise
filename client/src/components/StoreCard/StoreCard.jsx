function StoreCard({ store, lowestPrice }) {
  const isLowest = store.price === lowestPrice;

  return (
    <tr
      className={`border-b ${
        isLowest ? "bg-green-100 font-semibold" : "hover:bg-gray-50"
      }`}
    >
      <td className="p-4">{store.name}</td>

      <td className="p-4 text-green-600">
        ₹{store.price.toLocaleString()}
      </td>

      <td className="p-4">{store.delivery}</td>

      <td className="p-4">{store.offer}</td>

      <td className="p-4">
        <a
          href={store.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Buy Now
        </a>
      </td>
    </tr>
  );
}

export default StoreCard;