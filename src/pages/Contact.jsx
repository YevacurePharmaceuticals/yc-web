import { useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team. We're here to help with any questions about our products, 
            orders, or general inquiries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-2xl font-bold text-gray-900 mb-6"
            >
              Send us a Message
            </motion.h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="What is this about?"
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Company Info */}
            <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="text-blue-600 text-xl">📍</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">
                      SRC-24-B, Shipra Rivera, Indirapuram,<br />
                      Ghaziabad, UP 201014, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-blue-600 text-xl">📧</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a 
                      href="mailto:yevacurepharmaceutical123@gmail.com"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      yevacurepharmaceutical123@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-blue-600 text-xl">📞</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <a 
                      href="tel:+918047785182"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      +91-8047785182
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-blue-600 text-xl">🕒</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Business Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/p/Yevacure-Pharmaceutical-pvtltd-100069694669312/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  <span className="text-xl">📘</span>
                </a>
                <a 
                  href="#"
                  className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  <span className="text-xl">📷</span>
                </a>
                <a 
                  href="#"
                  className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  <span className="text-xl">🐦</span>
                </a>
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div variants={itemVariants} className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-lg p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Why Choose Yevacure?</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>🔬 Clinically Tested</div>
                <div>🌿 Natural Ingredients</div>
                <div>🛡️ Quality Assured</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Find Us</h3>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">🗺️</div>
                <p className="text-gray-600">
                  Google Maps integration would go here.<br />
                  Address: SRC-24-B, Shipra Rivera, Indirapuram, Ghaziabad, UP 201014
                </p>
                <a 
                  href="https://maps.google.com/?q=SRC-24-B,Shipra+Rivera,Indirapuram,Ghaziabad,UP+201014"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
