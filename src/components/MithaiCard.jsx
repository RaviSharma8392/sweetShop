import React, { useState } from "react";
import { useCart } from "../context/cartontext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const normalizeVariants = (item) => {
  if (typeof item.price === "number") {
    return [
      {
        label: item.weight || "Default",
        unitPrice: item.price,
        weightLabel: item.weight || "",
      },
    ];
  }
  return Object.entries(item.price).map(([label, unitPrice]) => ({
    label,
    unitPrice,
    weightLabel: label,
  }));
};

const MithaiCard = ({ item }) => {
  const { addToCart } = useCart();
  const variants = normalizeVariants(item);
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);

  const handleAddToCart = () => {
    const cartItem = {
      id: item.id,
      name: item.name,
      variantLabel: selectedVariant.label,
      unitPrice: selectedVariant.unitPrice,
      weightLabel: selectedVariant.weightLabel,
      image: item.image,
    };

    addToCart(cartItem);

    toast.success(`${item.name} (${selectedVariant.label}) added to cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      style: {
        background: "#D4AF37",
        color: "#2A2118",
        border: "2px solid #F0E6D2",
        fontFamily: "'Playfair Display', serif",
      },
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#2A2118">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    });
  };

  return (
    <div
      key={item.id}
      className={`relative bg-gradient-to-b from-[#FFF9ED] to-white rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
        item.premium ? "border-2 border-[#D4AF37]" : "border border-[#F0E6D2]"
      } group`}>
      {/* Premium and Popular badges with elegant styling */}
      {item.premium && (
        <div className="absolute top-4 left-4 bg-gradient-to-r from-[#D4AF37] to-[#F0E6D2] text-[#2A2118] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider z-10 shadow-lg flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>
          Premium
        </div>
      )}
      {item.bestSeller && (
        <div className="absolute top-4 right-4 bg-[#8B4513] text-[#F0E6D2] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider z-10 shadow-lg flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
              clipRule="evenodd"
            />
          </svg>
          Best Seller
        </div>
      )}

      {/* Image with elegant overlay */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A2118]/50 via-transparent to-transparent"></div>
      </div>

      {/* Content with premium styling */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-serif font-bold text-[#2A2118]">
            {item.name}
          </h3>
          <span className="text-xl font-bold text-[#D4AF37]">
            ₹{selectedVariant.unitPrice.toLocaleString("en-IN")}
          </span>
        </div>

        <p className="text-[#5C4D3D] text-sm mb-5 line-clamp-2 font-medium">
          {item.description}
        </p>

        {/* Variant selector with premium styling */}
        <div className="mb-5">
          {variants.length > 1 ? (
            <div className="relative">
              <select
                value={selectedVariant.label}
                onChange={(e) => {
                  const v = variants.find((v) => v.label === e.target.value);
                  setSelectedVariant(v);
                }}
                className="w-full px-4 py-3 rounded-lg border border-[#E6D5B8] bg-white text-[#2A2118] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all appearance-none font-medium">
                {variants.map((v) => (
                  <option key={v.label} value={v.label}>
                    {v.label} - ₹{v.unitPrice.toLocaleString("en-IN")}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#5C4D3D]">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          ) : (
            <div className="text-sm text-[#5C4D3D] font-medium uppercase tracking-wider">
              {selectedVariant.weightLabel}
            </div>
          )}
        </div>

        {/* Add to cart button with luxurious styling */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-[#D4AF37] via-[#E6C35C] to-[#D4AF37] hover:from-[#C9A227] hover:via-[#D4AF37] hover:to-[#C9A227] text-[#2A2118] px-6 py-3 rounded-lg font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 group-hover:bg-opacity-90">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 group-hover:scale-110 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Add to Royal Box
        </button>
      </div>
    </div>
  );
};

export default MithaiCard;
