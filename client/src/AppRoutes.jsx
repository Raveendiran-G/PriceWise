import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductPage from "./pages/Product/ProductPage";
import SearchPage from "./pages/Search/SearchPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/products/:id" element={<ProductPage />} />
    </Routes>
  );
}

export default AppRoutes;