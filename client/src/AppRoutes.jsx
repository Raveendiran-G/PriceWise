import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductPage from "./pages/Product/ProductPage";
import SearchPage from "./pages/Search/SearchPage";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import AuthPage from "./pages/Auth/AuthPage";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/products/:id" element={<ProductPage />} />

      <Route path="/login" element={<AuthPage />} />
      <Route path="/register" element={<AuthPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}

export default AppRoutes;