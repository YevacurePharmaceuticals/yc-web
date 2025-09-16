import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useTheme } from "../context/ThemeContext";
import "./About.css";

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

function About() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`about-container ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="hero-section"
      >
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-title"
          >
            About Yevacure
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-subtitle"
          >
            Quality pharmaceuticals since 2020. Your trusted partner in health and wellness.
          </motion.p>
        </div>
      </motion.section>

      {/* Company Overview */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="content-section"
      >
        <div className="content-wrapper">
          <div className="content-grid">
            <motion.div variants={itemVariants} className="content-text">
              <h2 className="section-title">
                Our Story
              </h2>
              <div className="text-content">
                <p>
                  Founded in 2020, Yevacure Pharmaceutical Pvt Ltd has been at the forefront 
                  of pharmaceutical innovation, delivering high-quality, science-backed solutions 
                  for skincare, haircare, body care, and pet care.
                </p>
                <p>
                  Our mission is to promote wellness and confidence through safe, effective, 
                  and innovative products that meet the highest standards of quality and safety.
                </p>
                <p>
                  We believe in transparency, sustainability, and customer satisfaction, 
                  ensuring that every product we create enhances the lives of our customers.
                </p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="content-image">
              <LazyLoadImage
                effect="blur"
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
                alt="About Yevacure"
                className="rounded-image"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Company Values */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="content-section alt-bg"
      >
        <div className="content-wrapper">
          <motion.h2 
            variants={itemVariants}
            className="section-title text-center"
          >
            Our Values
          </motion.h2>
          <div className="values-grid">
            {[
              {
                icon: "🔬",
                title: "Scientific Excellence",
                description: "All our products are developed through rigorous research and clinical testing, ensuring the highest standards of efficacy and safety."
              },
              {
                icon: "🌱",
                title: "Sustainability",
                description: "We are committed to environmental responsibility, using eco-friendly packaging and sustainable practices throughout our operations."
              },
              {
                icon: "🤝",
                title: "Customer First",
                description: "Your satisfaction and well-being are our top priorities. We listen, learn, and continuously improve based on your feedback."
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="value-card"
              >
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Company Information */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="content-section"
      >
        <div className="content-wrapper">
          <motion.h2 
            variants={itemVariants}
            className="section-title text-center"
          >
            Company Information
          </motion.h2>
          <div className="info-grid">
            <motion.div variants={itemVariants} className="info-column">
              <div className="info-card contact-card">
                <h3 className="info-card-title">Contact Details</h3>
                <div className="info-card-content">
                  <p><strong>Email:</strong> yevacurepharmaceuticals@gmail.com</p>
                  {/* <p><strong>Phone:</strong> +91-9871285873</p> */}
                  <p><strong>Address:</strong> #UG15 HRC SHOPPING COMPLEX UPPER, GROUND FLOOR GH PLOT NO 1/2 VAIBHAV KHAND, INDIRAPURAM, GHAZIABAD, Uttar Pradesh 201014, India</p>
                </div>
              </div>
              <div className="info-card hours-card">
                <h3 className="info-card-title">Business Hours</h3>
                <div className="info-card-content">
                  <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                  <p><strong>Saturday:</strong> 9:00 AM - 2:00 PM</p>
                  <p><strong>Sunday:</strong> Closed</p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="info-column">
              <div className="info-card cert-card">
                <h3 className="info-card-title">Certifications</h3>
                <div className="info-card-content">
                  <p>✓ ISO 9001:2015 Certified</p>
                  <p>✓ Cruelty Free</p>
                </div>
              </div>
              <div className="info-card quality-card">
                <h3 className="info-card-title">Quality Assurance</h3>
                <div className="info-card-content">
                  <p>✓ Stringent Quality Control</p>
                  <p>✓ Clinical Testing</p>
                  <p>✓ Safety Standards</p>
                  <p>✓ Regulatory Compliance</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="content-section alt-bg"
      >
        <div className="content-wrapper">
          <motion.h2 
            variants={itemVariants}
            className="section-title text-center"
          >
            Our Commitment
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="commitment-card"
          >
            <p className="commitment-text">
              At Yevacure, we are committed to delivering pharmaceutical excellence through 
              innovation, quality, and customer care. Our team of experts works tirelessly 
              to ensure that every product meets the highest standards of safety and efficacy.
            </p>
            <p className="commitment-text">
              We believe in building lasting relationships with our customers, healthcare 
              professionals, and partners, based on trust, transparency, and mutual respect. 
              Together, we are advancing the future of pharmaceutical care.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default About;
