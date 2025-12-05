import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./home";
import Produk from "./produk";
import Navbar from "./navbar";
import Footer from "./footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Home />
    <Produk />
    <Footer />
  </StrictMode>
);
