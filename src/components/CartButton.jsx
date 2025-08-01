import React, { useState, useEffect } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { useCart } from "../context/cartontext";

const MobileCartButton = () => {
  const { items } = useCart();
  const [isMobile, setIsMobile] = useState(false);
  const [pulse, setPulse] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Pulse animation when items change
  useEffect(() => {
    setPulse(true);
    const timer = setTimeout(() => setPulse(false), 500);
    return () => clearTimeout(timer);
  }, [items]);

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <a
      href="/cart"
      className={`
        fixed z-50 
        ${isMobile ? "bottom-6 right-6" : "bottom-6 -mt-6 right-6"}
        bg-gradient-to-br from-[#D4AF37] to-[#E6C35C]
        text-[#2A2118] p-4 rounded-full shadow-xl
        hover:shadow-2xl transition-all duration-300
        transform hover:scale-110 flex items-center justify-center
        ${pulse ? "animate-pulse" : ""}
        ring-2 ring-white/20 hover:ring-[#D4AF37]/50
      `}>
      <FiShoppingBag className="h-6 w-6" />

      {itemCount > 0 && (
        <span
          className="
          absolute -top-2 -right-2 
          bg-[#8B4513] text-white 
          text-xs font-bold h-6 w-6 
          flex items-center justify-center 
          rounded-full border-2 border-white
        ">
          {itemCount > 9 ? "9+" : itemCount}
        </span>
      )}
    </a>
  );
};

export default MobileCartButton;
