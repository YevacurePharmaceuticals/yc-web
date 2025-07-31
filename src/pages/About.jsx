import "./About.css";

function About() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <img
          className="about-image"
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
          alt="About Yevacure"
        />
        <div className="about-text">
          <h2>About Yevacure</h2>
          <p>
            Yevacure is dedicated to providing high-quality, science-backed
            skincare and haircare products. Our mission is to promote wellness
            and confidence through safe, effective, and innovative solutions. We
            believe in transparency, sustainability, and customer satisfaction.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
