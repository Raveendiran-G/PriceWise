import { Link } from "react-router-dom";
import { FaSearch, FaHeart } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-blue-600 hover:text-blue-700"
        >
          PriceWise
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link
            to="/"
            className="hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            to="/categories"
            className="hover:text-blue-600 transition"
          >
            Categories
          </Link>

          <Link
            to="/deals"
            className="hover:text-blue-600 transition"
          >
            Deals
          </Link>

          <Link
            to="/stores"
            className="hover:text-blue-600 transition"
          >
            Stores
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-5">

          <button className="hover:text-blue-600 transition">
            <FaSearch className="text-xl" />
          </button>

          <Link to="/wishlist">
            <FaHeart className="text-xl hover:text-red-500 transition" />
          </Link>

          {user ? (
            <div className="flex items-center gap-4">

              <span className="font-medium text-gray-700">
                Hi, {user.name}
              </span>

              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
              >
                Logout
              </button>

            </div>
          ) : (
            <Link to="/login">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition">
                Login
              </button>
            </Link>
          )}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;