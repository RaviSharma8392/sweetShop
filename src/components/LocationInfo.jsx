import React from "react";

const LocationInfo = ({
  name = "Royal Sweets",
  address = "Bhowali, Nainital District, Uttarakhand, India",
  phone = "+91 74174 08974",
  whatsapp = "+91 74174 08974",
  extra = "Open: 9am - 8pm daily",
  mapLink = "https://www.google.com/maps?q=Bhowali+Nainital",
}) => {
  return (
    <div className="bg-gradient-to-br mt-20 mb-20 from-[#FFF9ED] to-[#FFEFD5] rounded-xl shadow-xl border-2 border-[#D4AF37] p-8 mx-2 md:mx-10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#D4AF37] opacity-10 rounded-full"></div>
      <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-[#8B4513] opacity-5 rounded-full"></div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-8">
        {/* Information Section */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#D4AF37]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <h2 className="text-3xl font-serif font-bold text-[#5C3A21]">
              {name}
            </h2>
          </div>

          <div className="pl-11">
            {/* Address */}
            <div className="flex items-start gap-3 mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mt-0.5 text-[#D4AF37] flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <p className="text-[#5C4D3D] font-medium">{address}</p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#D4AF37] flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <span className="text-sm text-[#8B7355]">Phone</span>
                  <p className="text-[#5C3A21] font-medium">{phone}</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#D4AF37] flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <div>
                  <span className="text-sm text-[#8B7355]">WhatsApp</span>
                  <a
                    href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5C3A21] font-medium hover:underline">
                    {whatsapp}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#D4AF37] flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <span className="text-sm text-[#8B7355]">Hours</span>
                  <p className="text-[#5C3A21] font-medium">{extra}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#E6C35C] text-[#2A2118] rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                View on Map
              </a>

              <a
                href={`tel:${phone.replace(/\D/g, "")}`}
                className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-[#D4AF37] text-[#5C3A21] rounded-lg font-semibold shadow hover:bg-[#FFF5E6] transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="flex-1">
          <div className="w-full h-full min-h-[300px] rounded-xl overflow-hidden border-2 border-[#D4AF37] shadow-lg">
            <iframe
              title="Royal Sweets Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27811.396008010433!2d79.52426895!3d29.3871355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09d0d8d9d9d9d%3A0x39a09d0d8d9d9d9d!2sBhowali%2C%20Nainital%20District%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1754028845089!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;
