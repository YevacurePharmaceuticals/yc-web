import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-row">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
        </div>
        <textarea placeholder="Your Message" rows={4} required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-details">
        <p>
          Email: <a href="mailto:info@yevacure.com">info@yevacure.com</a>
        </p>
        <p>
          Phone: <a href="tel:+1234567890">+1 234 567 890</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
