import { Link } from 'react-router-dom';
import {
  Shield,
  Award,
  FlaskConical,
  Package,
  ArrowRight,
  Download,
  CheckCircle,
  Scissors,
  Pill,
  Heart,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import MetaTags from '../components/seo/MetaTags';
import SectionHeading from '../components/ui/SectionHeading';
import StatCounter from '../components/ui/StatCounter';
import Button from '../components/ui/Button';
import data from '../data/data.json';
import companyData from '../data/companyData';
import { useRef, useState, useEffect } from 'react';
import './Home.css';

const categoryIcons = {
  dermatology: FlaskConical,
  trichology: Scissors,
  nutraceuticals: Pill,
  hepatoprotective: Heart,
  'anti-infective': ShieldCheck,
  'general-wellness': Sparkles,
};

const trustBadges = [
  'WHO-GMP',
  'ISO 9001:2015',
  'FSSAI',
  'GMP Compliant',
  '13+ Products',
  'Pan-India Distribution',
];

function Home() {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setVideoLoaded(true);
      video.classList.add('loaded');
    };

    const handleError = () => {
      setVideoError(true);
    };

    const handleCanPlay = () => {
      video.play().catch(() => {});
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);
    video.addEventListener('canplay', handleCanPlay);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  return (
    <div className="home-page">
      <MetaTags
        title="Home"
        description={companyData.shortDescription}
      />

      {/* ── Hero Section ── */}
      <section className="hero">
        <div className="hero-video-container">
          <video
            ref={videoRef}
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/images/products/body-lotion.webp"
          >
            <source src="/herobanner.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" />

          {videoError && (
            <img
              src="/images/products/body-lotion.webp"
              alt="Yevacure Pharmaceutical"
              className="hero-fallback-image"
            />
          )}
        </div>

        <div className="hero-content">
          <h1>Trusted Pharmaceutical Manufacturer Since 2020</h1>
          <p className="hero-subtitle">{companyData.shortDescription}</p>
          <div className="hero-ctas">
            <Link to="/products" className="hero-btn hero-btn-primary">
              Explore Products <ArrowRight size={18} />
            </Link>
            <a
              href={companyData.catalogPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn hero-btn-outline"
            >
              <Download size={18} /> Download Catalog
            </a>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="trust-bar">
        <div className="trust-bar-inner">
          {trustBadges.map((badge) => (
            <span key={badge} className="trust-badge">
              <CheckCircle size={16} />
              {badge}
            </span>
          ))}
        </div>
      </section>

      {/* ── About Snapshot ── */}
      <section className="about-snapshot">
        <div className="about-snapshot-inner">
          <div className="about-snapshot-text">
            <SectionHeading
              title="About Yevacure Pharmaceutical"
              centered={false}
            />
            <p className="about-description">{companyData.longDescription}</p>
            <Button to="/about" variant="primary" size="md">
              Learn More About Us <ArrowRight size={16} />
            </Button>
          </div>

          <div className="about-snapshot-stats">
            <div className="stat-card">
              <StatCounter value={companyData.stats.founded} label="Founded" />
            </div>
            <div className="stat-card">
              <StatCounter value={companyData.stats.products} label="Products" suffix="+" />
            </div>
            <div className="stat-card">
              <StatCounter value={companyData.stats.categories} label="Categories" />
            </div>
            <div className="stat-card">
              <div className="text-center">
                <span className="block text-4xl md:text-5xl font-bold text-primary-700">
                  <Award size={40} className="mx-auto" />
                </span>
                <span className="mt-2 block text-sm font-medium text-gray-600 uppercase tracking-wide">
                  ISO Certified
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Therapeutic Segments ── */}
      <section className="therapeutic-section">
        <div className="therapeutic-inner">
          <SectionHeading
            title="Our Therapeutic Segments"
            subtitle="Comprehensive pharmaceutical solutions across multiple therapeutic areas"
          />
          <div className="therapeutic-grid">
            {data.categories.map((category) => {
              const IconComponent = categoryIcons[category.id] || Package;
              return (
                <Link
                  key={category.id}
                  to={`/products/${category.id}`}
                  className="category-card"
                >
                  <div className="category-card-icon">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="category-card-name">{category.name}</h3>
                  <p className="category-card-desc">{category.description}</p>
                  <span className="category-card-count">
                    {category.products.length} Product{category.products.length !== 1 ? 's' : ''}
                  </span>
                  <span className="category-card-link">
                    Explore <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Manufacturing Excellence ── */}
      <section className="manufacturing-section">
        <div className="manufacturing-inner">
          <div className="manufacturing-content">
            <Shield size={48} className="manufacturing-icon" />
            <h2>Manufacturing Excellence</h2>
            <p>
              Our products are manufactured in WHO-GMP certified facilities adhering
              to the highest national quality standards. Every batch undergoes
              rigorous quality control testing to ensure consistency, safety, and
              efficacy across our entire product range.
            </p>
            <Button to="/manufacturing" variant="outline" size="md" className="manufacturing-btn">
              Learn About Our Facilities <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* ── Certifications Strip ── */}
      <section className="certifications-strip">
        <div className="certifications-strip-inner">
          {companyData.certifications.map((cert) => (
            <div key={cert.name} className="cert-badge">
              <Award size={24} />
              <span>{cert.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="home-cta-section">
        <div className="home-cta-inner">
          <h2>Partner With Us for Quality Pharmaceutical Solutions</h2>
          <p>
            Looking for a reliable pharmaceutical manufacturing and supply partner?
            Connect with us to discuss your requirements.
          </p>
          <div className="home-cta-buttons">
            <Button to="/contact" variant="primary" size="lg" className="home-cta-btn">
              Contact Us <ArrowRight size={18} />
            </Button>
            <a
              href={companyData.catalogPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="home-cta-download"
            >
              <Download size={18} /> Download Catalog
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
