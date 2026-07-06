import { FaMobileAlt, FaLaptop, FaTv, FaHeadphones, FaGamepad, FaCamera } from "react-icons/fa";

const categories = [
  { name: "Mobiles", icon: <FaMobileAlt size={35} /> },
  { name: "Laptops", icon: <FaLaptop size={35} /> },
  { name: "Televisions", icon: <FaTv size={35} /> },
  { name: "Headphones", icon: <FaHeadphones size={35} /> },
  { name: "Gaming", icon: <FaGamepad size={35} /> },
  { name: "Cameras", icon: <FaCamera size={35} /> },
];

function CategoryCard() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">
        Popular Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-xl hover:-translate-y-1 transition"
          >
            <div className="text-blue-600">{category.icon}</div>
            <p className="mt-4 font-semibold">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryCard;