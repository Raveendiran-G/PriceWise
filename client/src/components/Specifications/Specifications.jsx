function Specifications({ specifications }) {
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold mb-6">
        Specifications
      </h2>

      <div className="bg-white rounded-xl shadow p-6">

        {Object.entries(specifications).map(([key, value]) => (
          <div
            key={key}
            className="flex justify-between border-b py-3"
          >
            <span className="font-semibold capitalize">
              {key}
            </span>

            <span>{value}</span>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Specifications;