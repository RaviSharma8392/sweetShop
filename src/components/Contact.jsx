import React, { useState } from "react";
import { Mail, User, MessageSquare } from "react-feather";

export default function ContactSectionPremium() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormData({ name: "", email: "", message: "" });
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="bg-[#fff8f1] py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          Get in Touch
        </h2>
        <p className="text-gray-600 mb-10">
          Have questions, feedback, or want to partner with us? Fill out the
          form and we’ll get back to you shortly.
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-md p-6 sm:p-8 space-y-6">
          <div className="flex items-center border border-gray-300 rounded-xl px-4 py-2">
            <User className="text-gray-500 mr-3" size={20} />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full outline-none bg-transparent"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-xl px-4 py-2">
            <Mail className="text-gray-500 mr-3" size={20} />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full outline-none bg-transparent"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-start border border-gray-300 rounded-xl px-4 py-2">
            <MessageSquare className="text-gray-500 mt-1 mr-3" size={20} />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full outline-none bg-transparent resize-none"
              value={formData.message}
              onChange={handleChange}
              required></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition-all duration-200">
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="text-green-600 text-sm text-center">
              ✅ Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-sm text-center">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
