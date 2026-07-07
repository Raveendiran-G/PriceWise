import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/Search/SearchBar";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <CategoryCard />
      <FeaturedProducts />

      <Footer />
    </>
  );
}

export default Home;