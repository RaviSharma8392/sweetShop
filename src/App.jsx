import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Page components
// import Home from "./pages/Home";
// import Menu from "./pages/Menu";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import MithaiMenu from "./pages/Menu";
import CartPage from "./pages/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import PremiumFooter from "./components/Footer";
import MobileCartButton from "./components/CartButton";

const App = () => {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <MobileCartButton />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MithaiMenu />} />
        <Route path="/cart" element={<CartPage />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <PremiumFooter />
    </Router>
  );
};

export default App;
