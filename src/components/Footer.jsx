import React from "react";

const PremiumFooter = () => {
  return (
    <footer className="bg-gradient-to-b from-[#2A2118] to-[#1A120B] text-[#F0E6D2] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Decorative top border */}
        <div className="flex justify-center mb-12">
          <div className="w-32 h-1 bg-gradient-to-r from-[#D4AF37] via-[#F0E6D2] to-[#D4AF37] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <svg
                className="h-10 w-10 text-[#D4AF37]"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm1.65-2.65L11.5 12.2V9h1v2.79l1.85 1.85-.7.71z" />
              </svg>
              <span className="ml-3 text-3xl font-serif tracking-wider">
                ROYAL SWEETS
              </span>
            </div>
            <p className="text-[#8B7355] mb-6 italic font-light">
              "Preserving centuries of sweet-making traditions with royal
              craftsmanship"
            </p>
            <div className="flex space-x-6">
              {["facebook", "instagram", "twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-[#D4AF37] hover:text-white transition-transform hover:scale-110">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    {/* Social icons would go here */}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xl font-serif font-semibold mb-6 text-[#D4AF37] border-b border-[#D4AF37] pb-2">
              Explore
            </h4>
            <ul className="space-y-3">
              {["Our Story", "Collections", "Seasonal Specials", "Gifting"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-[#D4AF37] transition flex items-center">
                      <svg
                        className="h-3 w-3 mr-2 text-[#D4AF37]"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-xl font-serif font-semibold mb-6 text-[#D4AF37] border-b border-[#D4AF37] pb-2">
              Customer Care
            </h4>
            <ul className="space-y-3">
              {["Contact Us", "Shipping Policy", "Returns", "FAQ"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-[#D4AF37] transition flex items-center">
                      <svg
                        className="h-3 w-3 mr-2 text-[#D4AF37]"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-serif font-semibold mb-6 text-[#D4AF37] border-b border-[#D4AF37] pb-2">
              At Your Service
            </h4>
            <address className="not-italic space-y-3">
              <div className="flex items-start">
                <svg
                  className="h-5 w-5 mt-1 mr-3 text-[#D4AF37]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  123 Royal Lane, Mumbai
                  <br />
                  Maharashtra 400001
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 mr-3 text-[#D4AF37]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +91 98765 43210
              </div>
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 mr-3 text-[#D4AF37]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                contact@royalsweets.in
              </div>
            </address>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-[#5C4D3D] mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#8B7355] text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Royal Sweets. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-[#8B7355] hover:text-[#D4AF37] text-sm">
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[#8B7355] hover:text-[#D4AF37] text-sm">
                Terms of Service
              </a>
              <a
                href="#"
                className="text-[#8B7355] hover:text-[#D4AF37] text-sm">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PremiumFooter;
