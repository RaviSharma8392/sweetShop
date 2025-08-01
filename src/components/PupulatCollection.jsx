// src/components/PopularMithaiCollection.jsx
import React, { useState, useEffect } from "react";
import MithaiCard from "./MithaiCard.jsx";
import { useNavigate } from "react-router-dom";

const PopularMithaiCollection = () => {
  const navigate = useNavigate();

  const mithaiItems = [
    {
      id: 72,
      name: "Gulab Jamun",
      description: "Golden fried khoya balls in rose syrup",
      price: { "1kg": 449, "500g": 240 },
      image:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/11/gulab-jamun.webp",
      category: "Syrup Based",
      bestSeller: true,
      premium: false,
    },
    {
      id: 3,
      name: "Rasmalai",
      description: "Bengali cottage cheese patties in saffron milk",
      price: 549,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKRN8_L8bzbrsJNA3ksQpgMMD8ynTG6aUnQ&s",
      category: "Milk Based",
      bestSeller: false,
      premium: true,
    },
    {
      id: 28,
      name: "Gulab Jamun",
      description: "Golden fried khoya balls in rose syrup",
      price: { "1kg": 449, "500g": 240 },
      image:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/11/gulab-jamun.webp",
      category: "Syrup Based",
      bestSeller: true,
      premium: false,
    },
    {
      id: 4,
      name: "Besan Ladoo",
      description: "Gram flour sweets with cardamom & nuts",
      price: { "1kg": 399 },
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR--vcqy-rzVzUMGPVGadxEENUsXzrumi7aig&s",
      category: "Dry Sweets",
      bestSeller: true,
      premium: false,
    },
    {
      id: 8,
      name: "Gulab Jamun",
      description: "Golden fried khoya balls in rose syrup",
      price: { "1kg": 449, "500g": 240 },
      image:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/11/gulab-jamun.webp",
      category: "Syrup Based",
      bestSeller: true,
      premium: false,
    },
    {
      id: 82,
      name: "Gulab Jamun",
      description: "Golden fried khoya balls in rose syrup",
      price: { "1kg": 449, "500g": 240 },
      image:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/11/gulab-jamun.webp",
      category: "Syrup Based",
      bestSeller: true,
      premium: false,
    },
    {
      id: 5,
      name: "Mysore Pak",
      description: "Traditional ghee sweet from South India",
      price: { "1kg": 499, "250g": 130 },
      image:
        "https://www.bikanervala.com/pub/media/catalog/product/cache/8f5f445efc5a2e5b0a6a4a9e8e8b5a5f/m/y/mysore-pak.jpg",
      category: "Dry Sweets",
      bestSeller: false,
      premium: true,
    },
  ];

  return (
    <div className="bg-[#f8f3e8] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-[#d4af37] mb-4">
            Discover Our Sweets Menu
          </h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
          <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
            Our handcrafted traditional sweets made with pure ingredients and
            generations of expertise
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 transition-all duration-500">
            {mithaiItems.map((item) => (
              <MithaiCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/menu")}
            className="border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider transition-colors duration-300">
            View Full Mithai Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularMithaiCollection;
