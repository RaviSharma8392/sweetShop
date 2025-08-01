import React, { useState } from "react";
import { useCart } from "../context/cartontext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion, AnimatePresence } from "framer-motion";

const CartPage = () => {
  const { items, total, updateQuantity, removeFromCart, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  console.log(items);

  const DELIVERY_FEE = 50;
  const grandTotal = total + DELIVERY_FEE;

  const buildWhatsAppMessage = () => {
    if (!items || items.length === 0) return "";

    const itemsText = items
      .map(
        (item) =>
          `*${item.name}* (${item.variantLabel})\n` +
          `   ├ Qty: ${item.quantity} × ₹${item.unitPrice}\n` +
          `   └ *Total: ₹${item.unitPrice * item.quantity}*`
      )
      .join("\n\n");

    const message = [
      "✨ ROYAL SWEETS ORDER ✨",
      "",
      "📝 ORDER SUMMARY",
      "▬▬▬▬▬▬▬▬▬▬▬▬",
      "",
      itemsText,
      "",
      "▬▬▬▬▬▬▬▬▬▬▬▬",
      "",
      "💰 ORDER VALUE",
      `├ Subtotal: ₹${total}`,
      `├ Delivery: ₹${DELIVERY_FEE}`,
      `└ *GRAND TOTAL: ₹${grandTotal}*`,
      "",
      "📌 PLEASE PROVIDE:",
      "├ Delivery Address",
      "├ Contact Number",
      "└ Preferred Time",
      "",
      "Thank you! ❤️",
      "We'll confirm your order shortly",
    ].join("\n");

    return encodeURIComponent(message);
  };

  const businessNumber = "917417408974";
  const whatsappLink = `https://wa.me/${businessNumber}?text=${buildWhatsAppMessage()}`;

  const handleWhatsAppClick = () => {
    setIsProcessing(true);
    toast.success(
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span>Opening WhatsApp to confirm your order!</span>
      </div>,
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: {
          border: "1px solid #D4AF37",
          color: "#5C3A21",
        },
      }
    );

    setTimeout(() => setIsProcessing(false), 2000);
  };

  if (items.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-[60vh] mt-28 flex items-center justify-center px-4">
        <div className="bg-white rounded-xl p-8 shadow-lg max-w-md w-full text-center border border-[#F0E6D2] relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FFEFD5] rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-[#FFF5E6] rounded-full"></div>

          <div className="relative z-10">
            <div className="mx-auto w-20 h-20 bg-[#FFF5E6] rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-[#D4AF37]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-serif mb-3 text-[#5C3A21]">
              Your Royal Box is Empty
            </h2>
            <p className="text-[#8B7355] mb-6">
              Begin your sweet journey by selecting from our premium collection
            </p>
            <motion.a
              href="/menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-2 bg-gradient-to-r from-[#D4AF37] to-[#E6C35C] text-[#2A2118] rounded-full font-medium hover:shadow-md transition-all">
              Explore Sweets
            </motion.a>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-[60vh] mt-15 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg border border-[#F0E6D2]">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#FFF9ED] to-[#FFEFD5] p-6 border-b border-[#F0E6D2] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFEFD5] rounded-full opacity-20"></div>
          <h2 className="text-3xl font-serif text-[#5C3A21] flex items-center gap-2 relative z-10">
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
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            Your Royal Sweet Box
          </h2>
          <p className="text-[#8B7355] text-sm mt-1 relative z-10">
            {items.reduce((sum, item) => sum + item.quantity, 0)} delicious
            items
          </p>
        </div>

        {/* Cart Items */}
        <div className="divide-y divide-[#F0E6D2]">
          <AnimatePresence>
            {items.map((item) => (
              <motion.div
                key={`${item.id}-${item.variantLabel}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="p-6 flex flex-col sm:flex-row justify-between items-start">
                <div className="flex items-start gap-4 mb-4 sm:mb-0 w-full sm:w-auto">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-[#FFF5E6] flex items-center justify-center">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-[#D4AF37]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="font-serif font-semibold text-[#5C3A21]">
                      {item.name}
                    </div>
                    <div className="text-sm text-[#8B7355]">
                      {item.variantLabel} • ₹{item.unitPrice}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-normal">
                  <div className="flex items-center border border-[#E6D5B8] rounded-full overflow-hidden">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.variantLabel,
                          item.quantity - 1
                        )
                      }
                      disabled={item.quantity <= 1}
                      className="px-3 py-1 disabled:opacity-30 hover:bg-[#FFF5E6] transition-colors">
                      −
                    </motion.button>
                    <div className="px-4 min-w-[2rem] text-center">
                      {item.quantity}
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.variantLabel,
                          item.quantity + 1
                        )
                      }
                      className="px-3 py-1 hover:bg-[#FFF5E6] transition-colors">
                      +
                    </motion.button>
                  </div>

                  <div className="font-bold text-[#5C3A21] min-w-[5rem] text-right">
                    ₹{item.unitPrice * item.quantity}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      removeFromCart(item.id, item.variantLabel);
                      toast.success(
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-[#D4AF37]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{item.name} removed from cart</span>
                        </div>,
                        {
                          position: "top-right",
                          autoClose: 2000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "light",
                          style: {
                            border: "1px solid #D4AF37",
                            color: "#5C3A21",
                          },
                        }
                      );
                    }}
                    className="text-[#8B7355] hover:text-[#D4AF37] transition-colors">
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
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Summary */}
        <div className="p-6 border-t border-[#F0E6D2] bg-[#FFFCF5]">
          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span className="text-[#5C4D3D]">Subtotal</span>
              <span className="font-medium">₹{total}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#5C4D3D]">Delivery Fee</span>
              <span className="font-medium">₹{DELIVERY_FEE}</span>
            </div>
            <div className="border-t border-[#F0E6D2] pt-3 flex justify-between text-lg font-bold text-[#5C3A21]">
              <span>Grand Total</span>
              <span>₹{grandTotal}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              disabled={isProcessing}
              className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-bold hover:shadow-md transition-all relative overflow-hidden ${
                isProcessing ? "opacity-90" : ""
              }`}>
              {isProcessing && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3 }}
                  className="absolute bottom-0 left-0 h-1 bg-green-800"
                />
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {isProcessing
                ? "Preparing Order..."
                : "Confirm Order via WhatsApp"}
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                clearCart();
                toast.success(
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#D4AF37]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Your sweet box has been cleared</span>
                  </div>,
                  {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    style: {
                      border: "1px solid #D4AF37",
                      color: "#5C3A21",
                    },
                  }
                );
              }}
              className="flex-1 px-6 py-3 border border-[#E6D5B8] text-[#5C3A21] rounded-lg font-medium hover:bg-[#FFF5E6] transition-colors">
              Clear Sweet Box
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CartPage;
