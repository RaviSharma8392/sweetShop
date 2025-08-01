import React, { useState } from "react";
import MithaiCard from "../components/MithaiCard";
import { ToastContainer } from "react-toastify";

const rawMithaiItems = [
  {
    id: 1,
    name: "Kaju Katli",
    description: "Premium cashew fudge with edible silver leaf",
    price: { "1kg": 1599, "500g": 850 },
    image:
      "https://www.bikanervala.com/pub/media/catalog/product/cache/8f5f445efc5a2e5b0a6a4a9e8e8b5a5f/k/a/kaju-katli.jpg",
    category: "Dry Sweets",
    bestSeller: true,
    premium: true,
  },
  {
    id: 2,
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
  {
    id: 6,
    name: "Peda",
    description: "Milk fudge with saffron and pistachio",
    price: { "1kg": 649, "500g": 340 },
    image:
      "https://www.kuchpakrahahai.in/wp-content/uploads/2017/10/Instant-peda.jpg",
    category: "Milk Based",
    bestSeller: true,
    premium: true,
  },
  {
    id: 7,
    name: "Rasgulla",
    description: "Spongy cottage cheese balls in light syrup",
    price: 379,
    image:
      "https://www.bikanervala.com/pub/media/catalog/product/cache/8f5f445efc5a2e5b0a6a4a9e8e8b5a5f/r/a/rasgulla.jpg",
    category: "Syrup Based",
    bestSeller: true,
    premium: false,
  },
  {
    id: 8,
    name: "Soan Papdi",
    description: "Flaky gram flour sweet with cardamom",
    price: { "1kg": 349 },
    image:
      "https://www.bikanervala.com/pub/media/catalog/product/cache/8f5f445efc5a2e5b0a6a4a9e8e8b5a5f/s/o/soan-papdi.jpg",
    category: "Dry Sweets",
    bestSeller: false,
    premium: false,
  },
  // ... (keep your existing items array)
];

const MithaiMenu = () => {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [sortOption, setSortOption] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", ...new Set(rawMithaiItems.map((i) => i.category))];

  const filtered = rawMithaiItems
    .filter((item) => {
      const matchesCategory =
        categoryFilter === "All" || item.category === categoryFilter;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortOption === "price-low") {
        const aPrice =
          typeof a.price === "number"
            ? a.price
            : Math.min(...Object.values(a.price));
        const bPrice =
          typeof b.price === "number"
            ? b.price
            : Math.min(...Object.values(b.price));
        return aPrice - bPrice;
      }
      if (sortOption === "price-high") {
        const aPrice =
          typeof a.price === "number"
            ? a.price
            : Math.max(...Object.values(a.price));
        const bPrice =
          typeof b.price === "number"
            ? b.price
            : Math.max(...Object.values(b.price));
        return bPrice - aPrice;
      }
      if (sortOption === "name") return a.name.localeCompare(b.name);
      if (sortOption === "premium")
        return b.premium - a.premium || b.bestSeller - a.bestSeller;
      return 0;
    });

  return (
    <div className="min-h-screen mt-15 bg-[#FFFCF5] py-16 px-4 sm:px-6 lg:px-8">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="max-w-7xl mx-auto">
        {/* Premium Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-[#D4AF37] opacity-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11V11.99z" />
            </svg>
          </div>
          <h1 className="text-5xl font-serif text-[#5C3A21] mb-4 tracking-wider">
            <span className="text-[#D4AF37]">Royal</span> Mithai Collection
          </h1>
          <div className="w-48 h-1.5 bg-gradient-to-r from-[#D4AF37] via-[#F0E6D2] to-[#D4AF37] mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-[#5C4D3D] max-w-3xl mx-auto font-light italic">
            "Handcrafted with generations of expertise, our sweets embody the
            essence of Indian tradition"
          </p>
        </div>

        {/* Premium Search and Filters */}
        <div className="flex flex-col md:flex-row justify-between items-stretch mb-16 gap-6 bg-white p-6 rounded-xl shadow-sm border border-[#F0E6D2]">
          <div className="relative flex-1 max-w-2xl">
            <input
              type="text"
              placeholder="Search sweets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-[#E6D5B8] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-[#5C3A21] placeholder-[#8B7355]"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#8B7355]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-3 bg-[#FFF9F0] px-4 py-2 rounded-full">
              <span className="text-[#5C4D3D] font-medium whitespace-nowrap">
                Category:
              </span>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="bg-transparent border-none focus:ring-2 focus:ring-[#D4AF37] rounded-full text-[#5C3A21]">
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-3 bg-[#FFF9F0] px-4 py-2 rounded-full">
              <span className="text-[#5C4D3D] font-medium whitespace-nowrap">
                Sort by:
              </span>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="bg-transparent border-none focus:ring-2 focus:ring-[#D4AF37] rounded-full text-[#5C3A21]">
                <option value="default">Featured</option>
                <option value="premium">Premium First</option>
                <option value="name">Name (A-Z)</option>
                <option value="price-low">Price (Low to High)</option>
                <option value="price-high">Price (High to Low)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Premium Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filtered.map((item) => (
              <MithaiCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-[#F0E6D2]">
            <div className="mx-auto w-24 h-24 bg-[#FFF5E6] rounded-full flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-[#D4AF37]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-serif text-[#5C3A21] mb-3">
              No Sweets Found
            </h3>
            <p className="text-[#8B7355] mb-6 max-w-md mx-auto">
              We couldn't find any sweets matching your search. Try different
              filters or search terms.
            </p>
            <button
              onClick={() => {
                setCategoryFilter("All");
                setSearchQuery("");
              }}
              className="px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#E6C35C] text-[#2A2118] rounded-full font-bold uppercase tracking-wider hover:shadow-lg transition-all duration-300">
              Reset Filters
            </button>
          </div>
        )}

        {/* Premium Footer Note */}
        <div className="mt-20 text-center border-t border-[#F0E6D2] pt-12">
          <h4 className="text-xl font-serif text-[#5C3A21] mb-4">
            Experience the Royal Difference
          </h4>
          <p className="text-[#8B7355] max-w-3xl mx-auto">
            Each sweet in our collection is crafted using traditional methods
            with the finest ingredients, ensuring an authentic taste of India's
            rich culinary heritage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MithaiMenu;
