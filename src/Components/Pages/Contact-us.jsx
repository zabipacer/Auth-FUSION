import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [messageStatus, setMessageStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic
    setMessageStatus("Thank you for your message! We will get back to you shortly.");
    setFormData({ name: "", email: "", message: "" }); // Reset form after submission
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-12 px-6">
        <h2 className="text-4xl font-extrabold text-emerald-800 text-center mb-8">
          Contact Us
        </h2>

        {/* Contact Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex items-center justify-center p-6 bg-white shadow-lg rounded-lg">
            <div className="text-center">
              <FaPhoneAlt className="text-emerald-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600">+1 (123) 456-7890</p>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 bg-white shadow-lg rounded-lg">
            <div className="text-center">
              <FaEnvelope className="text-emerald-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600">contact@fusionjournal.com</p>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 bg-white shadow-lg rounded-lg">
            <div className="text-center">
              <FaMapMarkerAlt className="text-emerald-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Address</h3>
              <p className="text-gray-600">123 Fusion Street, Tech City, USA</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-emerald-800 mb-4 text-center">
            Send Us a Message
          </h3>
          {messageStatus && (
            <div className="bg-emerald-100 p-4 mb-6 text-emerald-800 text-center rounded-lg">
              {messageStatus}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full p-3 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full py-3 px-6 bg-emerald-600 text-white text-lg font-semibold rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
