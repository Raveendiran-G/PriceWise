import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaShoppingBag,
} from "react-icons/fa";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-700 to-blue-600 p-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid lg:grid-cols-2 bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl max-w-6xl w-full"
      >

        {/* LEFT SIDE */}

        <div className="hidden lg:flex flex-col justify-center items-center text-white p-16">

          <div className="bg-white/20 p-6 rounded-full mb-8">
            <FaShoppingBag size={70} />
          </div>

          <h1 className="text-5xl font-bold mb-4">
            PriceWise
          </h1>

          <p className="text-xl text-center leading-8 opacity-90">
            Compare prices from Amazon, Flipkart,
            Croma, Reliance Digital,
            Zepto and many more.
          </p>

          <div className="mt-12 space-y-4">

            <div>✔ Compare prices instantly</div>

            <div>✔ Get price drop alerts</div>

            <div>✔ Save products to wishlist</div>

            <div>✔ AI shopping recommendations</div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="bg-white p-10">

          <h2 className="text-4xl font-bold text-center mb-2">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>

          <p className="text-center text-gray-500 mb-10">
            {isLogin
              ? "Login to continue"
              : "Create your PriceWise account"}
          </p>

          <form className="space-y-5">

            {!isLogin && (

              <div className="relative">

                <FaUser
                  className="absolute left-4 top-4 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

            )}

            <div className="relative">

              <FaEnvelope
                className="absolute left-4 top-4 text-gray-400"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            <div className="relative">

              <FaLock
                className="absolute left-4 top-4 text-gray-400"
              />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full border rounded-xl py-3 pl-12 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>

            </div>

            <button
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              {isLogin ? "Login" : "Create Account"}
            </button>

          </form>

          <div className="mt-8 text-center">

            <span className="text-gray-500">

              {isLogin
                ? "Don't have an account?"
                : "Already have an account?"}

            </span>

            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-blue-600 font-bold"
            >
              {isLogin ? "Register" : "Login"}
            </button>

          </div>

          <div className="my-8 flex items-center">

            <div className="flex-1 border"></div>

            <span className="px-4 text-gray-400">
              OR
            </span>

            <div className="flex-1 border"></div>

          </div>

          <button
            className="w-full border rounded-xl py-3 hover:bg-gray-100 transition"
          >
            Continue with Google
          </button>

        </div>

      </motion.div>

    </div>
  );
}

export default AuthPage;