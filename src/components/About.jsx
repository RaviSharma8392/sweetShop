import React from "react";
import { FaAward, FaLeaf, FaHeart, FaHistory } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div id="about" className="bg-[#FFFCF5]">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gradient-to-r from-[#2A2118] to-[#5C3A21] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.shreemithai.com/cdn/shop/collections/ghee-sweets-949033.jpg?v=1707819632&width=800')] bg-cover bg-center "></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#F0E6D2] mb-6">
              Our Sweet Legacy
            </h1>
            <div className="w-32 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
            <p className="text-xl text-[#F0E6D2] max-w-3xl mx-auto">
              Crafting authentic Indian sweets with royal traditions since 1985
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-20 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="bg-white p-2 rounded-xl shadow-lg border border-[#E6D5B8]">
              <img
                src="https://images.unsplash.com/photo-1589365278144-c9e705f843ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Founders"
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="flex items-center mb-6">
              <FaHistory className="text-3xl text-[#D4AF37] mr-3" />
              <h2 className="text-3xl font-serif font-bold text-[#5C3A21]">
                Our Humble Beginnings
              </h2>
            </div>
            <p className="text-[#5C4D3D] mb-6 leading-relaxed">
              What started as a small sweet shop in Bhowali has blossomed into a
              beloved institution. Founded by the Agarwal family in 1985, Royal
              Sweets began with a simple mission: to preserve the authentic
              flavors of traditional Indian mithai while innovating for modern
              palates.
            </p>
            <p className="text-[#5C4D3D] mb-6 leading-relaxed">
              Using recipes passed down through generations and the finest
              ingredients, we've earned the trust of sweet lovers across
              Uttarakhand. Today, while we've grown, we still make each sweet
              with the same care and attention as we did on that first day.
            </p>
            <div className="bg-[#F0E6D2] p-4 rounded-lg border-l-4 border-[#D4AF37]">
              <p className="italic text-[#5C3A21] font-medium">
                "We don't just make sweets - we craft edible memories that
                connect people to their heritage."
              </p>
              <p className="text-right text-[#8B7355] mt-2">
                - The Agarwal Family
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-gradient-to-br from-[#FFF9ED] to-[#FFEFD5]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center text-[#5C3A21] mb-12">
            What Makes Us Royal
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Tradition */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-[#E6D5B8] text-center hover:shadow-lg transition-all">
              <div className="bg-[#F0E6D2] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaAward className="text-3xl text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#5C3A21] mb-3">
                Time-Honored Recipes
              </h3>
              <p className="text-[#5C4D3D]">
                We preserve authentic techniques passed down through
                generations, ensuring every bite carries history.
              </p>
            </div>

            {/* Quality */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-[#E6D5B8] text-center hover:shadow-lg transition-all">
              <div className="bg-[#F0E6D2] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaLeaf className="text-3xl text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#5C3A21] mb-3">
                Premium Ingredients
              </h3>
              <p className="text-[#5C4D3D]">
                Only the finest dairy, nuts, and spices make it into our
                kitchen. We source locally when possible.
              </p>
            </div>

            {/* Passion */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-[#E6D5B8] text-center hover:shadow-lg transition-all">
              <div className="bg-[#F0E6D2] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHeart className="text-3xl text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#5C3A21] mb-3">
                Crafted With Love
              </h3>
              <p className="text-[#5C4D3D]">
                Each sweet is made by skilled artisans who pour their heart into
                every creation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-center text-[#5C3A21] mb-12">
          Meet Our Master Chefs
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Chef 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md border border-[#E6D5B8] hover:shadow-lg transition-all">
            <img
              src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="Chef Ramesh"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-serif font-bold text-[#5C3A21]">
                Ramesh Agarwal
              </h3>
              <p className="text-[#8B7355] mb-4">Head Mithai Artisan</p>
              <p className="text-[#5C4D3D] text-sm">
                With over 30 years experience, Ramesh ensures every batch meets
                our exacting standards.
              </p>
            </div>
          </div>

          {/* Chef 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md border border-[#E6D5B8] hover:shadow-lg transition-all">
            <img
              src="https://images.unsplash.com/photo-1595475207225-428b62bda831?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="Chef Priya"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-serif font-bold text-[#5C3A21]">
                Priya Sharma
              </h3>
              <p className="text-[#8B7355] mb-4">Innovation Chef</p>
              <p className="text-[#5C4D3D] text-sm">
                Blends traditional techniques with modern flavors to create our
                seasonal specials.
              </p>
            </div>
          </div>

          {/* Chef 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md border border-[#E6D5B8] hover:shadow-lg transition-all">
            <img
              src="https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="Chef Arun"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-serif font-bold text-[#5C3A21]">
                Arun Patel
              </h3>
              <p className="text-[#8B7355] mb-4">Quality Control</p>
              <p className="text-[#5C4D3D] text-sm">
                Our taste guardian who ensures every sweet meets our premium
                standards before it reaches you.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-[#5C3A21] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-[#F0E6D2] mb-6">
            Taste the Royal Difference
          </h2>
          <p className="text-xl text-[#F0E6D2] mb-8 max-w-2xl mx-auto">
            Visit our shop in Bhowali or order our sweets for delivery across
            India
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-3 bg-[#D4AF37] text-[#2A2118] rounded-full font-bold uppercase tracking-wider hover:bg-[#E6C35C] transition-colors">
              Contact Us
            </a>
            <a
              href="/menu"
              className="px-8 py-3 border-2 border-[#D4AF37] text-[#F0E6D2] rounded-full font-bold uppercase tracking-wider hover:bg-[#D4AF37]/10 transition-colors">
              View Our Menu
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
