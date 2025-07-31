import { Link } from "react-router-dom";
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
    name: "FDA Approved",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/FDA_logo.svg",
  },
  {
    name: "ISO 9001",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/ISO_9001-2015.svg",
  },
  {
    name: "Cruelty Free",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2c/LeapingBunnyLogo.svg",
  },
];
const categories = [
  {
    name: "Face",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    link: "/products?cat=face",
  },
  {
    name: "Hair",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
    link: "/products?cat=hair",
  },
  {
    name: "Body",
    image:
      "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
    link: "/products?cat=body",
  },
  {
    name: "Petcare",
    image:
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80",
    link: "/products?cat=petcare",
  },
];

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Welcome to Yevacure</h1>
            <p>
              Your trusted pharma brand for skincare, haircare, body, and
              petcare. Science-backed, safe, and effective solutions for all.
            </p>
            <Link to="/products" className="cta-btn">
              Shop Now
            </Link>
          </div>
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
            alt="Pharma Hero Placeholder"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <h2>Why Choose Yevacure?</h2>
        <div className="why-grid">
          <div className="why-card">
            <img
              src="https://img.icons8.com/ios-filled/100/2196f3/laboratory.png"
              alt="Science"
            />
            <h3>Science-Backed</h3>
            <p>
              All our products are developed with the latest dermatological
              research and clinical testing.
            </p>
          </div>
          <div className="why-card">
            <img
              src="https://img.icons8.com/ios-filled/100/2196f3/natural-food.png"
              alt="Natural"
            />
            <h3>Safe & Natural</h3>
            <p>
              We use safe, natural ingredients and avoid harsh chemicals,
              parabens, and sulfates.
            </p>
          </div>
          <div className="why-card">
            <img
              src="https://img.icons8.com/ios-filled/100/2196f3/like.png"
              alt="Trusted"
            />
            <h3>Trusted by Thousands</h3>
            <p>
              Our products are loved by customers and recommended by
              dermatologists nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <h2>Featured Products</h2>
        <div className="featured-grid">
          {featuredProducts.map((product) => (
            <Link
              to={`/product/${product.id}`}
              className="featured-card"
              key={product.id}
            >
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.shortDescription}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="how-section">
        <h2>How It Works</h2>
        <div className="how-steps">
          <div className="how-step">
            <span className="how-step-num">1</span>
            <h4>Choose Your Product</h4>
            <p>Browse our range and select the best fit for your needs.</p>
          </div>
          <div className="how-step">
            <span className="how-step-num">2</span>
            <h4>Order Online</h4>
            <p>Easy, secure checkout and fast delivery to your doorstep.</p>
          </div>
          <div className="how-step">
            <span className="how-step-num">3</span>
            <h4>See Results</h4>
            <p>Enjoy healthier skin, hair, and pets with regular use.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
              <p className="testimonial-text">“{t.text}”</p>
              <div className="testimonial-name">{t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications & Partners */}
      <section className="certifications-section">
        <h2>Our Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div className="cert-card" key={cert.name}>
              <img src={cert.image} alt={cert.name} />
              <div>{cert.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Category Links */}
      <section className="categories-section">
        <h2>Shop by Category</h2>
        <div className="categories-grid">
          {categories.map((cat) => (
            <Link to={cat.link} className="category-link" key={cat.name}>
              <img src={cat.image} alt={cat.name} />
              <span>{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to experience the Yevacure difference?</h2>
        <Link to="/products" className="cta-btn">
          Browse All Products
        </Link>
      </section>
    </div>
  );
}

export default Home;
