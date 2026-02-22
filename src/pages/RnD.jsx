import MetaTags from '../components/seo/MetaTags';
import PageBanner from '../components/layout/PageBanner';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import companyData from '../data/companyData';
import {
  FlaskConical,
  ScanLine,
  Timer,
  Lightbulb,
  Users,
  Microscope,
  BadgeCheck,
} from 'lucide-react';
import './RnD.css';

const focusAreas = [
  {
    icon: FlaskConical,
    title: 'Formulation Development',
    description:
      'Development of novel and optimized formulations across multiple dosage forms including tablets, capsules, liquids, ointments, gels, and creams. Our formulation scientists work to enhance bioavailability, stability, and patient compliance.',
  },
  {
    icon: ScanLine,
    title: 'Analytical Method Development',
    description:
      'Design and validation of robust analytical methods for assay, dissolution, related substances, and residual solvents in compliance with ICH Q2(R1) guidelines and pharmacopoeia requirements.',
  },
  {
    icon: Timer,
    title: 'Stability Studies',
    description:
      'Comprehensive stability programs under ICH guidelines including accelerated, intermediate, and long-term studies to establish product shelf life, storage conditions, and packaging compatibility.',
  },
  {
    icon: Lightbulb,
    title: 'New Product Development',
    description:
      'Identification and development of new therapeutic molecules and formulations based on market analysis, therapeutic need assessment, and regulatory feasibility to expand our product portfolio.',
  },
];

const capabilities = [
  {
    icon: Users,
    title: 'Skilled Scientists',
    description:
      'Our R&D team comprises experienced pharmaceutical scientists, formulation chemists, and analytical researchers with expertise across diverse therapeutic segments.',
  },
  {
    icon: Microscope,
    title: 'Modern Laboratories',
    description:
      'Purpose-built R&D laboratories equipped with advanced instrumentation including HPLC, dissolution testers, stability chambers, and formulation development equipment.',
  },
  {
    icon: BadgeCheck,
    title: 'Proven Track Record',
    description:
      'A growing portfolio of successfully developed and commercialized products across dermatology, trichology, nutraceuticals, and anti-infective therapeutic segments.',
  },
];

function RnD() {
  return (
    <div className="rnd-page">
      <MetaTags
        title="Research & Development"
        description={`${companyData.name} invests in cutting-edge R&D for formulation development, analytical methods, stability studies, and new product innovation.`}
      />

      {/* Page Banner */}
      <PageBanner
        title="Research & Development"
        subtitle="Driving innovation through science-backed pharmaceutical research"
        breadcrumbItems={[
          { label: 'Home', to: '/' },
          { label: 'Research & Development' },
        ]}
      />

      {/* R&D Overview */}
      <section className="rnd-overview">
        <div className="rnd-overview-inner">
          <SectionHeading
            title="Innovation at Our Core"
            subtitle="A commitment to advancing healthcare through rigorous scientific research"
          />
          <div className="rnd-overview-content">
            <p className="rnd-overview-text">
              At {companyData.name}, research and development is the foundation of our
              product pipeline and competitive advantage. We invest in continuous
              scientific exploration to develop formulations that are effective, safe,
              and aligned with evolving therapeutic needs and regulatory requirements.
            </p>
            <p className="rnd-overview-text">
              Our R&D philosophy is centered on translating scientific knowledge into
              commercially viable products that address real healthcare challenges.
              From initial concept through formulation optimization, analytical method
              validation, and stability evaluation, every step of our development process
              is conducted with precision and purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="rnd-focus">
        <div className="rnd-focus-inner">
          <SectionHeading
            title="Our Focus Areas"
            subtitle="Key areas of research driving our pharmaceutical innovation"
          />
          <div className="rnd-focus-grid">
            {focusAreas.map((area) => {
              const IconComponent = area.icon;
              return (
                <div key={area.title} className="rnd-focus-card">
                  <div className="rnd-focus-icon">
                    <IconComponent size={28} />
                  </div>
                  <h3 className="rnd-focus-title">{area.title}</h3>
                  <p className="rnd-focus-desc">{area.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Innovation Capabilities */}
      <section className="rnd-capabilities">
        <div className="rnd-capabilities-inner">
          <SectionHeading
            title="Innovation Capabilities"
            subtitle="The people, infrastructure, and expertise behind our R&D success"
          />
          <div className="rnd-capabilities-grid">
            {capabilities.map((cap) => {
              const IconComponent = cap.icon;
              return (
                <div key={cap.title} className="rnd-cap-card">
                  <div className="rnd-cap-icon">
                    <IconComponent size={28} />
                  </div>
                  <h3 className="rnd-cap-title">{cap.title}</h3>
                  <p className="rnd-cap-desc">{cap.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rnd-cta">
        <div className="rnd-cta-inner">
          <h2 className="rnd-cta-title">Collaborate With Our R&D Team</h2>
          <p className="rnd-cta-text">
            Whether you are looking for custom formulation development, analytical
            services, or collaborative research partnerships, our R&D team is ready
            to support your pharmaceutical innovation goals.
          </p>
          <Button to="/contact" size="lg">
            Contact R&D Team
          </Button>
        </div>
      </section>
    </div>
  );
}

export default RnD;
