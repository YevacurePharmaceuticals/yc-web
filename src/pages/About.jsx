import MetaTags from '../components/seo/MetaTags';
import PageBanner from '../components/layout/PageBanner';
import SectionHeading from '../components/ui/SectionHeading';
import StatCounter from '../components/ui/StatCounter';
import {
  Target,
  Eye,
  Beaker,
  Award,
  Users,
  Globe,
  MapPin,
  Mail,
  Calendar,
  CheckCircle,
} from 'lucide-react';
import companyData from '../data/companyData';
import './About.css';

const valueIcons = [Beaker, Award, Globe, Users];

function About() {
  return (
    <div className="about-page">
      <MetaTags
        title="About Us"
        description={`Learn about ${companyData.name} - ${companyData.shortDescription}`}
      />

      {/* ── Page Banner ── */}
      <PageBanner
        title="About Us"
        subtitle={companyData.tagline}
        breadcrumbItems={[
          { label: 'Home', to: '/' },
          { label: 'About Us' },
        ]}
      />

      {/* ── Company Overview ── */}
      <section className="about-overview">
        <div className="about-overview-inner">
          <SectionHeading
            title="Who We Are"
            subtitle="A research-driven pharmaceutical company delivering quality healthcare solutions across India"
          />
          <div className="overview-content">
            <p className="overview-text">{companyData.shortDescription}</p>
            <p className="overview-text">{companyData.longDescription}</p>
          </div>

          <div className="overview-stats">
            <div className="overview-stat-card">
              <StatCounter value={companyData.stats.founded} label="Year Founded" />
            </div>
            <div className="overview-stat-card">
              <StatCounter value={companyData.stats.products} label="Products" suffix="+" />
            </div>
            <div className="overview-stat-card">
              <StatCounter value={companyData.stats.categories} label="Therapeutic Segments" />
            </div>
            <div className="overview-stat-card">
              <div className="text-center">
                <span className="block text-4xl md:text-5xl font-bold text-primary-700">
                  {companyData.stats.states}
                </span>
                <span className="mt-2 block text-sm font-medium text-gray-600 uppercase tracking-wide">
                  Pan-India Distribution
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="about-vision-mission">
        <div className="about-vm-inner">
          <SectionHeading title="Our Vision & Mission" />
          <div className="vision-mission-grid">
            <div className="vm-card">
              <div className="vm-card-icon">
                <Eye size={32} />
              </div>
              <h3>Our Vision</h3>
              <p>{companyData.vision}</p>
            </div>
            <div className="vm-card">
              <div className="vm-card-icon">
                <Target size={32} />
              </div>
              <h3>Our Mission</h3>
              <p>{companyData.mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Corporate Values ── */}
      <section className="about-values">
        <div className="about-values-inner">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide everything we do"
          />
          <div className="values-grid">
            {companyData.values.map((value, index) => {
              const IconComponent = valueIcons[index] || Award;
              return (
                <div key={value.title} className="value-card">
                  <div className="value-card-icon">
                    <IconComponent size={28} />
                  </div>
                  <h3 className="value-card-title">{value.title}</h3>
                  <p className="value-card-desc">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Company Information ── */}
      <section className="about-info">
        <div className="about-info-inner">
          <SectionHeading title="Company Information" />
          <div className="info-cards-grid">
            <div className="about-info-card">
              <MapPin size={24} className="about-info-icon" />
              <h4>Registered Office</h4>
              <p>{companyData.contact.address}</p>
            </div>
            <div className="about-info-card">
              <Calendar size={24} className="about-info-icon" />
              <h4>Established</h4>
              <p>Founded in {companyData.founded}</p>
            </div>
            <div className="about-info-card">
              <Mail size={24} className="about-info-icon" />
              <h4>Email</h4>
              <a href={`mailto:${companyData.contact.email}`} className="about-info-link">
                {companyData.contact.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="about-certifications">
        <div className="about-cert-inner">
          <SectionHeading
            title="Certifications & Compliance"
            subtitle="Maintaining the highest standards in pharmaceutical manufacturing"
          />
          <div className="about-cert-grid">
            {companyData.certifications.map((cert) => (
              <div key={cert.name} className="about-cert-card">
                <div className="about-cert-icon">
                  <CheckCircle size={28} />
                </div>
                <h4>{cert.name}</h4>
                <p>{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
