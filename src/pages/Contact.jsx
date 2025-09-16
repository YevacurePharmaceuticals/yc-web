import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import "./Contact.css";

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
  const { isDarkMode } = useTheme();
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
    <div className={`contact-container ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="contact-wrapper">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="contact-header"
        >
          <h1 className="contact-title">
            Contact Us
          </h1>
          <p className="contact-subtitle">
            Get in touch with our team. We're here to help with any questions about our products, 
            orders, or general inquiries.
          </p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="contact-form-card"
          >
            <motion.h2 
              variants={itemVariants}
              className="form-title"
            >
              Send us a Message
            </motion.h2>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <motion.div variants={itemVariants} className="form-row">
                <div className="form-field">
                  <label htmlFor="name" className="form-label">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Enter your email"
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="form-row">
                {/* <div className="form-field">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your phone number"
                  />
                </div> */}
                <div className="form-field">
                  <label htmlFor="subject" className="form-label">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="What is this about?"
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="form-field">
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="form-textarea"
                  placeholder="Tell us how we can help you..."
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  className="submit-btn"
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
            className="contact-info"
          >
            {/* Company Info */}
            <motion.div variants={itemVariants} className="info-card">
              <h3 className="info-card-title">Get in Touch</h3>
              <div className="info-content">
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div>
                    <h4 className="info-label">Address</h4>
                    <p className="info-text">
                      #UG15 HRC SHOPPING COMPLEX UPPER, GROUND FLOOR GH PLOT NO 1/2 VAIBHAV KHAND, INDIRAPURAM, GHAZIABAD, Uttar Pradesh 201014, India
                    </p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">📧</div>
                  <div>
                    <h4 className="info-label">Email</h4>
                    <a 
                      href="mailto:yevacurepharmaceuticals@gmail.com"
                      className="info-link"
                    >
                      yevacurepharmaceuticals@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">🕒</div>
                  <div>
                    <h4 className="info-label">Business Hours</h4>
                    <p className="info-text">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="social-card">
              <h3 className="social-card-title">Follow Us</h3>
              <div className="social-links">
                <a 
                  href="https://www.facebook.com/p/Yevacure-Pharmaceutical-pvtltd-100069694669312/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link facebook"
                >
                  <span className="social-icon">📘</span>
                </a>
                <a 
                  href="#"
                  className="social-link instagram"
                >
                  <span className="social-icon">📷</span>
                </a>
                <a 
                  href="#"
                  className="social-link twitter"
                >
                  <span className="social-icon">🐦</span>
                </a>
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div variants={itemVariants} className="trust-card">
              <h3 className="trust-card-title">Why Choose Yevacure?</h3>
              <div className="trust-badges">
                <div className="trust-badge">🔬 Clinically Tested</div>
                <div className="trust-badge">🌿 Natural Ingredients</div>
                <div className="trust-badge">🛡️ Quality Assured</div>
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
          className="map-section"
        >
          <div className="map-card">
            <h3 className="map-title">Find Us</h3>
            <div className="map-placeholder">
              <div className="map-content">
                <div className="map-icon">🗺️</div>
                <p className="map-text">
                  Google Maps integration would go here.<br />
                  Address: #UG15 HRC SHOPPING COMPLEX UPPER, GROUND FLOOR GH PLOT NO 1/2 VAIBHAV KHAND, INDIRAPURAM, GHAZIABAD, Uttar Pradesh 201014, India
                </p>
                <a 
                  href="https://maps.google.com/?q=SHOP+NO+UG+15+HRC+SHOPPING+COMPLEX+UPPER+GROUND+FLOOR+GH+PLOT+NO+1%2F2+VAIBHAV+KHAND+INDIRAPURAM+GHAZIABAD+Uttar+Pradesh+201014+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link"
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
