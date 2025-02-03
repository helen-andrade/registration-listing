import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterProduct from "../pages/RegisterProduct";
import ProductListing from "../pages/ProductListing";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/RegisterProduct" element={<RegisterProduct />} />
        <Route path="/" element={<ProductListing />} />
      </Routes>
    </BrowserRouter>
  );
}
