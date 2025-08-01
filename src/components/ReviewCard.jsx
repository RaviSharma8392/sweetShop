import React from "react";

const reviews = [
  {
    name: "Rahul Sharma",
    quote:
      "The most exquisite mithai I've ever tasted. The Kaju Katli melts in your mouth like gold leaf!",
    rating: 5,
    role: "Food Critic",
    date: "2 days ago",
    avatar:
      "https://lh3.googleusercontent.com/a-/AOh14GjfJojinrkTtsAEPWXamB5dPBn8AOnRHseEMizp=w36-h36-p-rp-mo-br100",
    product: "Kaju Katli Box",
  },
  {
    name: "Rina Mehta",
    quote:
      "Perfectly balanced sweetness. The packaging and freshness were top-notch. Will definitely order again!",
    rating: 4,
    role: "Sweet Enthusiast",
    date: "5 days ago",
    avatar:
      "https://lh3.googleusercontent.com/a-/AOh14GjhmF6Fslk2II3E5_XtFHRJD_vbwxoqZrmOlCgJ-Q=w36-h36-p-c0x00000000-rp-mo-ba4-br100",
    product: "Assorted Sweets",
  },
  {
    name: "Amit Joshi",
    quote:
      "Authentic flavors that remind me of childhood. The Rasgulla was soft, juicy, and fresh.",
    rating: 5,
    role: "Home Chef",
    date: "1 week ago",
    avatar: "",
    product: "Rasgulla Tin",
  },
  {
    name: "Pooja Verma",
    quote:
      "Beautifully presented and absolutely delicious. My guests were impressed!",
    rating: 4,
    role: "Event Planner",
    date: "3 days ago",
    avatar: "",
    product: "Gift Hamper",
  },
  {
    name: "Karan Malhotra",
    quote:
      "A delightful experience. These sweets are the gold standard. I’ll be a repeat customer for sure.",
    rating: 5,
    role: "Sweet Lover",
    date: "6 days ago",
    avatar: "",
    product: "Luxury Mithai Box",
  },
];

const ReviewCardPremium = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviews.map((review, index) => {
        const { name, quote, rating, role, date, avatar, product } = review;
        return (
          <div
            key={index}
            className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-[#F0E6D2] transform hover:scale-[1.02] transition-all duration-300 group">
            <div className="bg-gradient-to-r from-[#D4AF37] to-[#F0E6D2] h-3 w-full" />
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-6 mb-8">
                {/* Avatar */}
                <div className="relative">
                  {avatar ? (
                    <img
                      src={avatar}
                      alt={name}
                      className=" h-10 w-20  md:h-20 md:w-20 rounded-full object-cover border-4 border-[#F0E6D2] shadow-md"
                    />
                  ) : (
                    <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-gradient-to-br from-[#FFF9ED] to-[#F0E6D2] flex items-center justify-center border-4 border-[#F0E6D2] shadow-md">
                      <span className="text-2xl md:text-3xl font-serif text-[#5C3A21] font-bold">
                        {name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="absolute -bottom-2 -right-2 bg-[#D4AF37] text-white p-1 rounded-full border-2 border-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 md:h-5 md:w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                {/* Name, Role, Rating */}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg md:text-2xl font-serif font-bold text-[#5C3A21]">
                        {name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm">
                        {role && (
                          <span className="text-[#8B7355] italic">{role}</span>
                        )}
                        <span className="text-[#D4AF37]">•</span>
                        <span className="text-[#8B7355]">{date}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-[#FFF5E6] px-3 py-1 rounded-full text-sm">
                      <span className="text-[#5C3A21] font-bold mr-1">
                        {rating}
                      </span>
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-4 w-4 md:h-5 md:w-5 ${
                            i < rating ? "text-[#D4AF37]" : "text-[#E6D5B8]"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l.716 2.424a1 1 0 00.95.69h2.548c.969 0 1.372 1.24.588 1.81l-2.064 1.5a1 1 0 00-.364 1.118l.716 2.424c.276.757-.193 1.554-.95 1.554h-2.548a1 1 0 00-.95.69l-.716 2.424c-.276.757-1.626.757-1.902 0l-.716-2.424a1 1 0 00-.95-.69H3.26c-.757 0-1.226-.797-.95-1.554l.716-2.424a1 1 0 00-.364-1.118L.598 7.85c-.784-.57-.381-1.81.588-1.81h2.548a1 1 0 00.95-.69l.716-2.424z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  {product && (
                    <div className="mt-2 inline-flex items-center bg-[#F8F1E1] px-3 py-1 rounded-full text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-[#D4AF37] mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                      <span className="text-[#5C3A21]">{product}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Quote */}
              <div className="relative pl-10 pr-6 mb-6">
                <svg
                  className="absolute top-0 left-0 h-10 w-10 text-[#D4AF37]/20"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-[#5C4D3D] text-base md:text-lg leading-relaxed italic">
                  {quote}
                </p>
                <svg
                  className="absolute bottom-0 right-0 h-10 w-10 text-[#D4AF37]/20 rotate-180"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <div className="pt-4 border-t border-[#F0E6D2] flex justify-end">
                <div className="flex items-center text-[#8B7355] text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                  Verified Purchase
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewCardPremium;
