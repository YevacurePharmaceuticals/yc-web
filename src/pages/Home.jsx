import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "../components/ThemeToggle";
import products from "../data/products";
import "./Home.css";

const featuredProducts = products.slice(0, 3);
const testimonials = [
  {
    name: "Aarav S.",
    text: "Yevacure products have transformed my skincare routine. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya M.",
    text: "My hair feels so much healthier after using their shampoo and serum.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rohan P.",
    text: "The petcare range is gentle and effective for my dog. Love it!",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];
const certifications = [
  {
    name: "ISO 9001",
    image:
      "https://www.legalraasta.com/blog/wp-content/uploads/2018/11/iso_org.jpg",
  },
  {
    name: "Cruelty Free",
    image:
      "https://static.vecteezy.com/system/resources/previews/007/748/473/non_2x/natural-ingredients-product-and-cosmetics-cruelty-free-silhouette-green-icon-not-experiment-on-rabbit-bunny-symbol-not-tested-on-animals-pictogram-vegan-stamp-isolated-illustration-vector.jpg",
  },
];
const categories = [
  {
    name: "Face",
    image:
      "https://www.shutterstock.com/image-vector/beauty-face-woman-logo-vector-600nw-2493789517.jpg",
    link: "/products?cat=face",
  },
  {
    name: "Hair",
    image:
      "https://t3.ftcdn.net/jpg/01/54/64/84/360_F_154648445_xmNaC4pD3gDDrtlIBxwsEk9H197PXUZL.jpg",
    link: "/products?cat=hair",
  },
  {
    name: "Body",
    image:
      "https://png.pngtree.com/png-vector/20191030/ourmid/pngtree-women-body-logo-template-design-vector-png-image_1870705.jpg",
    link: "/products?cat=body",
  },
  {
    name: "Petcare",
    image:
      "https://img.freepik.com/premium-vector/logo-pet-care-company_923841-6.jpg",
    link: "/products?cat=petcare",
  },
];

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

function Home() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`home-container ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Enhanced Animated Background */}
      <div className="animated-background">
        <div className="floating-shapes">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="floating-shape"
              animate={{
                y: [0, -40, 0],
                x: [0, 30, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
        
        {/* Gradient Orbs */}
        <div className="gradient-orbs">
          <motion.div
            className="gradient-orb orb-1"
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="gradient-orb orb-2"
            animate={{
              y: [0, 80, 0],
              x: [0, -60, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.div
            className="gradient-orb orb-3"
            animate={{
              y: [0, -60, 0],
              x: [0, 40, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
          />
        </div>
      </div>

      {/* Hero Section */}
      {/* <motion.section 
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-content">
          <div className="hero-text">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Natural Beauty, Naturally You
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover our premium range of natural skincare, haircare, and pet care products. 
              Made with love and nature's finest ingredients.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/products" className="cta-btn">
                Shop Now
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <LazyLoadImage
              effect="blur"
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
              alt="Natural Beauty Products"
            />
          </motion.div>
        </div>
      </motion.section> */}

      {/* Why Choose Us */}
      <motion.section 
        className="why-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2>Why Choose Yevacure?</motion.h2>
        <div className="why-grid">
          {[
            {
              icon: "https://img.icons8.com/ios-filled/100/2196f3/laboratory.png",
              title: "Science-Backed",
              description: "All our products are developed with the latest dermatological research and clinical testing."
            },
            {
              icon: "https://img.icons8.com/ios-filled/100/2196f3/natural-food.png",
              title: "Safe & Natural",
              description: "We use safe, natural ingredients and avoid harsh chemicals, parabens, and sulfates."
            },
            {
              icon: "https://img.icons8.com/ios-filled/100/2196f3/like.png",
              title: "Trusted by Thousands",
              description: "Our products are loved by customers and recommended by dermatologists nationwide."
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="why-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <img src={item.icon} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Featured Products - Fixed Layout */}
      <motion.section 
        className="featured-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2>Featured Products</motion.h2>
        <div className="featured-grid">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <Link
                to={`/product/${product.id}`}
                className="featured-card"
              >
                <div className="product-image-container">
                  <LazyLoadImage
                    effect="blur"
                    src={product.image.path}
                    alt={product.name}
                    className="product-image"
                  />
                </div>
                <div className="product-content">
                  <h3>{product.name}</h3>
                  <p>{product.shortDescription}</p>
                  <div className="product-price">{product.price}</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section 
        className="how-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2>How It Works</motion.h2>
        <div className="how-steps">
          {[
            { step: "1", title: "Choose Your Product", description: "Browse our range and select the best fit for your needs." },
            { step: "2", title: "Order Online", description: "Easy, secure checkout and fast delivery to your doorstep." },
            { step: "3", title: "See Results", description: "Enjoy healthier skin, hair, and pets with regular use." }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="how-step"
              variants={itemVariants}
            >
              <span className="how-step-num">{item.step}</span>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        className="testimonials-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2>What Our Customers Say</motion.h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.name}
              className="testimonial-card"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <LazyLoadImage
                effect="blur"
                src={testimonial.avatar}
                alt={testimonial.name}
                className="testimonial-avatar"
              />
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-name">{testimonial.name}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Certifications & Partners */}
      <motion.section 
        className="certifications-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2>Our Certifications</motion.h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.div 
              key={cert.name}
              className="cert-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <LazyLoadImage
                effect="blur"
                src={cert.image}
                alt={cert.name}
                style={{ height: '80px', width: '80px' }}
              />
              <div>{cert.name}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Quick Category Links */}
      <motion.section 
        className="categories-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2>Shop by Category</motion.h2>
        <div className="categories-grid">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Link to={cat.link} className="category-link">
                <LazyLoadImage
                  effect="blur"
                  src={cat.image}
                  alt={cat.name}
                  style={{ height: '180px', width: '100%' }}
                />
                <span>{cat.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="cta-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2>Ready to experience the Yevacure difference?</motion.h2>
        <Link to="/products" className="cta-btn">
          Browse All Products
        </Link>
      </motion.section>
    </div>
  );
}

export default Home;
