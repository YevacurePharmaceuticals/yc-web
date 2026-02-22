import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Clock, Phone, Linkedin, Facebook, Instagram, Send } from 'lucide-react';
import MetaTags from '../components/seo/MetaTags';
import PageBanner from '../components/layout/PageBanner';
import SectionHeading from '../components/ui/SectionHeading';
import companyData from '../data/companyData';
import './Contact.css';

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

const inquiryTypes = [
  'General Inquiry',
  'Distribution Partnership',
  'Export Inquiry',
  'Product Sample Request',
  'Contract Manufacturing',
];

const socialIconMap = {
  Facebook: Facebook,
  Instagram: Instagram,
  LinkedIn: Linkedin,
};

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    subject: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const googleFormURL =
      'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';

    const formBody = new URLSearchParams();
    formBody.append('entry.1111111111', formData.name);
    formBody.append('entry.2222222222', formData.email);
    formBody.append('entry.3333333333', formData.phone);
    formBody.append('entry.4444444444', formData.inquiryType);
    formBody.append('entry.5555555555', formData.subject);
    formBody.append('entry.6666666666', formData.message);

    try {
      await fetch(googleFormURL, {
        method: 'POST',
        body: formBody,
        mode: 'no-cors',
      });

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting to Google Form:', error);
      // Fallback to mailto
      const mailtoLink = `mailto:${companyData.contact.email}?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(formData.message)}`;
      window.location.href = mailtoLink;
    }
  };

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Contact' },
  ];

  return (
    <div className="contact-container">
      <MetaTags
        title="Contact Us"
        description="Get in touch with Yevacure Pharmaceutical Pvt Ltd. Reach out for distribution partnerships, export inquiries, product samples, or general questions."
      />

      <PageBanner
        title="Contact Us"
        subtitle="Get in touch with our team for distribution partnerships, export inquiries, or product information."
        breadcrumbItems={breadcrumbItems}
      />

      <div className="contact-wrapper">
        <div className="contact-content">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="contact-form-card"
          >
            <motion.h2 variants={itemVariants} className="form-title">
              Send us a Message
            </motion.h2>

            {submitStatus === 'success' && (
              <div className="form-success-message">
                Thank you! Your message has been sent. We will get back to you
                shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              {/* Inquiry Type */}
              <motion.div variants={itemVariants} className="form-field">
                <label htmlFor="inquiryType" className="form-label">
                  Inquiry Type *
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  required
                  className="form-select"
                >
                  <option value="">Select inquiry type</option>
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </motion.div>

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
                <div className="form-field">
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
                </div>
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

              <motion.div variants={itemVariants} className="form-actions">
                <button type="submit" className="submit-btn">
                  <Send size={18} />
                  Send Message
                </button>
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="mailto-fallback"
                >
                  Or email us directly
                </a>
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
                  <div className="info-icon-wrapper">
                    <MapPin size={20} className="info-icon" />
                  </div>
                  <div>
                    <h4 className="info-label">Address</h4>
                    <p className="info-text">{companyData.contact.address}</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-wrapper">
                    <Mail size={20} className="info-icon" />
                  </div>
                  <div>
                    <h4 className="info-label">Email</h4>
                    <a
                      href={`mailto:${companyData.contact.email}`}
                      className="info-link"
                    >
                      {companyData.contact.email}
                    </a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-wrapper">
                    <Clock size={20} className="info-icon" />
                  </div>
                  <div>
                    <h4 className="info-label">Business Hours</h4>
                    <p className="info-text">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 2:00 PM
                      <br />
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
                {companyData.socialLinks.map((social) => {
                  const IconComponent = socialIconMap[social.platform];
                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`social-link social-${social.platform.toLowerCase()}`}
                      aria-label={social.label}
                    >
                      {IconComponent && <IconComponent size={22} />}
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Contact CTA */}
            <motion.div variants={itemVariants} className="quick-contact-card">
              <h3 className="quick-contact-title">Need Immediate Assistance?</h3>
              <p className="quick-contact-text">
                Send us an email and our team will respond within 24 business hours.
              </p>
              <a
                href={`mailto:${companyData.contact.email}`}
                className="quick-contact-btn"
              >
                <Mail size={18} />
                Email Us Now
              </a>
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
            <div className="map-embed-container">
              <iframe
                title="Yevacure Pharmaceutical Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.123456!2d77.37!3d28.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sIndirapuram%2C+Ghaziabad!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="map-fallback">
              <MapPin size={18} className="map-fallback-icon" />
              <p className="map-fallback-text">
                {companyData.contact.address}
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
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
