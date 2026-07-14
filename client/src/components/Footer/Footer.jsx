import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            PriceWise
          </h2>

          <p className="text-gray-400 leading-7">
            Compare prices across Amazon, Flipkart,
            Croma, Reliance Digital and more.
            Shop smarter and save money.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            <li><Link to="/stores">Stores</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Categories
          </h3>

          <ul className="space-y-3">
            <li>Mobiles</li>
            <li>Laptops</li>
            <li>Fashion</li>
            <li>Groceries</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Connect
          </h3>

          <div className="flex gap-4 text-2xl">

            <FaFacebook className="hover:text-blue-500 cursor-pointer transition" />

            <FaTwitter className="hover:text-sky-400 cursor-pointer transition" />

            <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />

            <FaLinkedin className="hover:text-blue-600 cursor-pointer transition" />

            <FaGithub className="hover:text-white cursor-pointer transition" />

          </div>

          <p className="mt-6 text-gray-400">
            support@pricewise.com
          </p>

        </div>

      </div>

      <div className="border-t border-gray-700 py-5 text-center text-gray-500">
        © {new Date().getFullYear()} PriceWise. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;