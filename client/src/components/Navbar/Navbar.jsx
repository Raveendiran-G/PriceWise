import { Link } from "react-router-dom";
import { FaSearch, FaHeart, FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-blue-600"
        >
          PriceWise
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/deals">Deals</Link>
          <Link to="/stores">Stores</Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-5">

          <FaSearch className="text-xl cursor-pointer" />

          <Link to="/wishlist">
            <FaHeart className="text-xl hover:text-red-500" />
          </Link>

          <Link to="/login">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
              Login
            </button>
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;