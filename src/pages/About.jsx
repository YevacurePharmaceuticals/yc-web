import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20 px-4 md:px-8 lg:px-12 text-white"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            About Yevacure
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
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
        className="py-20 px-4 md:px-8 lg:px-12 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
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
            <motion.div variants={itemVariants}>
              <LazyLoadImage
                effect="blur"
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
                alt="About Yevacure"
                className="rounded-2xl shadow-2xl"
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
        className="py-20 px-4 md:px-8 lg:px-12 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16"
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-5xl mb-6">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
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
        className="py-20 px-4 md:px-8 lg:px-12 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16"
          >
            Company Information
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Contact Details</h3>
                <div className="space-y-3 text-blue-800">
                  <p><strong>Email:</strong> yevacurepharmaceutical123@gmail.com</p>
                  <p><strong>Phone:</strong> +91-8047785182</p>
                  <p><strong>Address:</strong> SRC-24-B, Shipra Rivera, Indirapuram, Ghaziabad, UP 201014</p>
                </div>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-green-900 mb-4">Business Hours</h3>
                <div className="space-y-2 text-green-800">
                  <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                  <p><strong>Saturday:</strong> 9:00 AM - 2:00 PM</p>
                  <p><strong>Sunday:</strong> Closed</p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">Certifications</h3>
                <div className="space-y-2 text-purple-800">
                  <p>✓ FDA Approved Products</p>
                  <p>✓ ISO 9001:2015 Certified</p>
                  <p>✓ GMP Compliant</p>
                  <p>✓ Cruelty Free</p>
                  <p>✓ Dermatologically Tested</p>
                </div>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-orange-900 mb-4">Quality Assurance</h3>
                <div className="space-y-2 text-orange-800">
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
        className="py-20 px-4 md:px-8 lg:px-12 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-16"
          >
            Our Commitment
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
          >
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              At Yevacure, we are committed to delivering pharmaceutical excellence through 
              innovation, quality, and customer care. Our team of experts works tirelessly 
              to ensure that every product meets the highest standards of safety and efficacy.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
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
