import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-16 px-6">
      <h1 className="text-5xl font-extrabold text-orange-500 mb-6 animate-pulse">
        Contact Us
      </h1>
      <p className="text-lg text-gray-300 text-center max-w-3xl mb-8 leading-relaxed">
        Have questions or need support? Reach out to us, and we'll be happy to assist!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl w-full">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-orange-400 mb-4">Get in Touch</h2>
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-orange-500 mr-3" />
            <span className="text-gray-300">contact@fitai.com</span>
          </div>
          <div className="flex items-center mb-4">
            <FaPhone className="text-orange-500 mr-3" />
            <span className="text-gray-300">+91 98765 43210</span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-orange-500 mr-3" />
            <span className="text-gray-300">Nashik, India</span>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-orange-400 mb-4">Send a Message</h2>
          {submitted ? (
            <p className="text-green-400 text-center font-semibold">Message sent successfully!</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 mb-4 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 mb-4 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 mb-4 bg-gray-700 text-white rounded h-32 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
