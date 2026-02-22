import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  ShieldCheck,
  Download,
} from 'lucide-react';
import { footerLinks } from '../../data/navigationData';
import companyData from '../../data/companyData';
import './Footer.css';

const socialIconMap = {
  Facebook,
  Instagram,
  LinkedIn: Linkedin,
};

/**
 * Certification badges displayed in the footer top section.
 * Shows only the key 5: WHO-GMP, ISO, FSSAI, GMP, Cruelty Free.
 */
const displayCerts = ['WHO-GMP', 'ISO 9001:2015', 'FSSAI', 'GMP Compliant', 'Cruelty Free'];

/**
 * Footer -- Corporate 4-column footer with dark navy background.
 */
export default function Footer() {
  const { contact, socialLinks, certifications, medicalDisclaimer, tagline } =
    companyData;

  const currentYear = new Date().getFullYear();

  const filteredCerts = certifications.filter((cert) =>
    displayCerts.includes(cert.name)
  );

  return (
    <footer className="site-footer">
      {/* ===== Top Section: Logo + Tagline + Certification Badges ===== */}
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img
              src="/yc-logo.webp"
              alt="Yevacure Pharmaceutical"
              className="footer-logo-image"
            />
            <span className="footer-logo-text">Yevacure</span>
          </Link>
          <p className="footer-tagline">{tagline}</p>
        </div>

        <div className="footer-certs">
          {filteredCerts.map((cert) => (
            <span key={cert.name} className="footer-cert-badge">
              <ShieldCheck className="footer-cert-icon" />
              {cert.name}
            </span>
          ))}
        </div>
      </div>

      {/* ===== 4-Column Link Grid ===== */}
      <div className="footer-columns">
        {/* Column 1: Company */}
        <div className="footer-column">
          <h4 className="footer-col-title">Company</h4>
          <ul className="footer-col-list">
            {footerLinks.company.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="footer-col-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Products */}
        <div className="footer-column">
          <h4 className="footer-col-title">Products</h4>
          <ul className="footer-col-list">
            {footerLinks.products.map((link) =>
              link.external ? (
                <li key={link.path}>
                  <a
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-col-link external"
                  >
                    <Download size={14} />
                    {link.label}
                  </a>
                </li>
              ) : (
                <li key={link.path}>
                  <Link to={link.path} className="footer-col-link">
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Column 3: Capabilities */}
        <div className="footer-column">
          <h4 className="footer-col-title">Capabilities</h4>
          <ul className="footer-col-list">
            {footerLinks.capabilities.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="footer-col-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="footer-column">
          <h4 className="footer-col-title">Contact</h4>
          <div className="footer-contact-item">
            <MapPin className="footer-contact-icon" />
            <span>{contact.address}</span>
          </div>
          <div className="footer-contact-item">
            <Mail className="footer-contact-icon" />
            <a
              href={`mailto:${contact.email}`}
              className="footer-contact-link"
            >
              {contact.email}
            </a>
          </div>
        </div>
      </div>

      {/* ===== Bottom Bar ===== */}
      <div className="footer-bottom">
        <p className="footer-disclaimer">{medicalDisclaimer}</p>

        <div className="footer-bottom-row">
          <p className="footer-copyright">
            {currentYear} Yevacure Pharmaceutical Pvt Ltd. All rights reserved.
          </p>

          <div className="footer-social-links">
            {socialLinks.map((social) => {
              const Icon = socialIconMap[social.platform] || Facebook;
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={social.label}
                >
                  <Icon className="footer-social-icon" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
