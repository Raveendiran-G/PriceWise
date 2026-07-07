import { useSearchParams } from "react-router-dom";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-8">
        Search Results
      </h1>

      <p className="text-xl">
        You searched for:
        <span className="font-bold text-blue-600"> {query}</span>
      </p>
    </div>
  );
}

export default SearchPage;