import SearchBar from "../Search/SearchBar";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Compare Prices Across India's Top Stores
        </h1>

        <p className="mt-6 text-lg text-blue-100">
          Find the best deals from Amazon, Flipkart, Croma,
          Reliance Digital and more.
        </p>

        <div className="mt-10">
          <SearchBar />
        </div>

        <div className="mt-8 text-sm">
          <span className="font-semibold">🔥 Trending:</span>

          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {[
              "iPhone 16",
              "Samsung S25",
              "MacBook Air",
              "PS5",
              "OnePlus 13"
            ].map((item) => (
              <button
                key={item}
                className="bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;