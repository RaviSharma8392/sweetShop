import React from "react";

const Star = ({ filled }) => (
  <svg
    className={`h-6 w-6 ${filled ? "text-[#D4AF37]" : "text-[#E6D5B8]"}`}
    fill="currentColor"
    viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l.716 2.424a1 1 0 00.95.69h2.548c.969 0 1.372 1.24.588 1.81l-2.064 1.5a1 1 0 00-.364 1.118l.716 2.424c.276.757-.193 1.554-.95 1.554h-2.548a1 1 0 00-.95.69l-.716 2.424c-.276.757-1.626.757-1.902 0l-.716-2.424a1 1 0 00-.95-.69H3.26c-.757 0-1.226-.797-.95-1.554l.716-2.424a1 1 0 00-.364-1.118L.598 7.85c-.784-.57-.381-1.81.588-1.81h2.548a1 1 0 00.95-.69l.716-2.424z" />
  </svg>
);

export const ReviewCard = ({
  name = "Anonymous",
  quote = "Excellent taste and service!",
  rating = 5,
  role = "",
  date = "",
  avatar = "",
}) => {
  return (
    <div className="bg-gradient-to-br from-[#FFF9ED] to-white rounded-xl p-8 shadow-lg border border-[#D4AF37]/30 hover:shadow-xl transition-all duration-300">
      {/* Header with avatar and rating */}
      <div className="flex items-start gap-4 mb-6">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="h-14 w-14 rounded-full object-cover border-2 border-[#D4AF37]"
          />
        ) : (
          <div className="h-14 w-14 rounded-full bg-[#F0E6D2] flex items-center justify-center border-2 border-[#D4AF37]">
            <span className="text-2xl font-serif text-[#5C3A21]">
              {name.charAt(0)}
            </span>
          </div>
        )}

        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-serif text-xl font-bold text-[#5C3A21]">
                {name}
              </h4>
              {role && <p className="text-sm text-[#8B7355] italic">{role}</p>}
            </div>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} filled={i < rating} />
              ))}
            </div>
          </div>
          {date && <p className="text-xs text-[#8B7355] mt-1">{date}</p>}
        </div>
      </div>

      {/* Review content */}
      <div className="relative">
        <svg
          className="absolute -top-6 -left-2 h-8 w-8 text-[#D4AF37]/20"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>

        <p className="text-[#5C4D3D] pl-8 text-lg italic relative z-10">
          "{quote}"
        </p>

        <svg
          className="absolute -bottom-6 -right-2 h-8 w-8 text-[#D4AF37]/20"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
    </div>
  );
};
