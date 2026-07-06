import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoryCard />
      <FeaturedProducts />
    </>
  );
}

export default Home;