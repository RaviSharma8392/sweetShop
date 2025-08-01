import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: "https://www.sweedesi.com/cdn/shop/files/Desktop_1500_x_600_px_45be1086-7b1f-42a5-991c-9b7154ff86fb.png?v=1745041549&width=2000",
      title: "Rakhi Sweet Hampers",
      subtitle: "Handcrafted mithai for your beloved siblings",
    },
    {
      img: "https://assets.limetray.com/assets/image_manager/uploads/8180/omsweets-ss-slide-1.jpg",
      title: "Festive Gift Boxes",
      subtitle: "Traditional sweets with modern presentation",
    },
    {
      img: "https://m.media-amazon.com/images/I/81Z7UguZs-L._UF1000,1000_QL80_.jpg",
      title: "Premium Mithai Collection",
      subtitle: "Celebrate with authentic Indian flavors",
    },
    // {
    //   img: "https://www.sweedesi.com/cdn/shop/files/2_bc6c7aee-255c-4d61-b825-747b606db1fd.png?v=1720963102&width=1500",
    //   title: "Custom Rakhi Combos",
    //   subtitle: "Mix & match your favorite sweets",
    // },
  ];

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative bg-[#0a0a0a] overflow-hidden">
      {/* Carousel */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        {/* Slides */}
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-[80vh] object-cover object-center"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end pb-16 md:items-center md:justify-center md:pb-0">
                <div className="text-center text-white px-4 w-full max-w-4xl">
                  <h1 className="text-4xl md:text-6xl font-serif mb-4 tracking-wider text-[#d4af37]">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                    {slide.subtitle}
                  </p>
                  <Link
                    to={"/menu"}
                    className="px-8 py-3 bg-[#d4af37] text-black font-bold uppercase tracking-wider hover:bg-[#c9a227] transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-[#d4af37] w-6" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Manual Navigation Arrows */}
        <button
          onClick={() =>
            setCurrentSlide(
              (prev) => (prev - 1 + slides.length) % slides.length
            )
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-[#d4af37] p-3 rounded-full hover:bg-[#d4af37] hover:text-black transition-all duration-300 shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-[#d4af37] p-3 rounded-full hover:bg-[#d4af37] hover:text-black transition-all duration-300 shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Promo Banner Below Carousel */}
      <div className="bg-gradient-to-r from-[#8B0000] to-[#5C0000] py-4 px-4 text-center">
        <p className="text-[#FFD700] uppercase tracking-widest text-sm font-medium">
          🎁 Rakhi Special: Free Delivery on Orders Above ₹999 •
        </p>
      </div>
    </div>
  );
};

export default Header;
