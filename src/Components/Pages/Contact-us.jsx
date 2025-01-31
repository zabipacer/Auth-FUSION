import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [messageStatus, setMessageStatus] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component loads
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageStatus("Thank you for your message! We will get back to you shortly.");
    setFormData({ name: "", email: "", message: "" }); // Reset form after submission
    setTimeout(() => setMessageStatus(null), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-gray-100">
      <div className="container mx-auto py-12 px-6">
        <h2 className="text-4xl font-extrabold text-emerald-900 text-center mb-12 tracking-wide">
          Contact Us
        </h2>

        {/* Contact Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { icon: FaPhoneAlt, title: "Phone", text: "+1 (123) 456-7890" },
            { icon: FaEnvelope, title: "Email", text: "contact@fusionjournal.com" },
            { icon: FaMapMarkerAlt, title: "Address", text: "123 Fusion Street, Tech City, USA" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center">
                <item.icon className="text-emerald-600  mx-auto text-4xl mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-emerald-800 mb-6 text-center">
            Send Us a Message
          </h3>
          {messageStatus && (
            <div className="bg-emerald-100 p-4 mb-6 text-emerald-800 text-center rounded-lg shadow-md animate-fade-in">
              {messageStatus}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              { label: "Name", type: "text", name: "name", value: formData.name },
              { label: "Email Address", type: "email", name: "email", value: formData.email },
            ].map((input, index) => (
              <div key={index}>
                <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor={input.name}>
                  {input.label}
                </label>
                <input
                  type={input.type}
                  id={input.name}
                  name={input.name}
                  value={input.value}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                  required
                />
              </div>
            ))}

            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full p-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full py-3 px-6 bg-emerald-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-emerald-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
