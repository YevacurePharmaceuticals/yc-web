import MetaTags from '../components/seo/MetaTags';
import PageBanner from '../components/layout/PageBanner';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import companyData from '../data/companyData';
import {
  ShieldCheck,
  TestTubes,
  ClipboardCheck,
  FlaskConical,
  Timer,
  BookOpen,
  Microscope,
  ScanLine,
} from 'lucide-react';
import './Quality.css';

const qaProcessCards = [
  {
    icon: TestTubes,
    title: 'Raw Material Testing',
    description:
      'Every incoming raw material undergoes rigorous identity, purity, and potency testing against pharmacopoeia specifications before being approved for production use.',
  },
  {
    icon: ClipboardCheck,
    title: 'In-Process Quality Checks',
    description:
      'Continuous monitoring at critical control points during manufacturing ensures each batch meets predefined parameters for weight variation, hardness, friability, and uniformity.',
  },
  {
    icon: FlaskConical,
    title: 'Finished Product Testing',
    description:
      'Comprehensive analytical testing of finished products including assay, dissolution, disintegration, microbial limits, and content uniformity before batch release.',
  },
  {
    icon: Timer,
    title: 'Stability Studies',
    description:
      'Accelerated and long-term stability studies conducted under ICH guidelines to establish shelf life, storage conditions, and product integrity over time.',
  },
];

const infrastructureItems = [
  {
    icon: Microscope,
    title: 'Analytical Laboratory',
    description:
      'Equipped with HPLC, UV-Vis spectrophotometer, dissolution apparatus, Karl Fischer titrator, and other precision instruments for comprehensive analytical testing.',
  },
  {
    icon: TestTubes,
    title: 'Microbiology Laboratory',
    description:
      'Dedicated microbiological testing facilities with laminar airflow units, autoclaves, and incubators for sterility testing and microbial limit assessments.',
  },
  {
    icon: ScanLine,
    title: 'Stability Chambers',
    description:
      'Walk-in and reach-in stability chambers calibrated to ICH conditions for real-time, accelerated, and intermediate stability evaluations.',
  },
];

function Quality() {
  return (
    <div className="quality-page">
      <MetaTags
        title="Quality Assurance"
        description={`${companyData.name} maintains the highest quality standards with rigorous QA processes, regulatory compliance, and state-of-the-art testing infrastructure.`}
      />

      {/* Page Banner */}
      <PageBanner
        title="Quality Assurance"
        subtitle="Uncompromising commitment to pharmaceutical quality at every stage"
        breadcrumbItems={[
          { label: 'Home', to: '/' },
          { label: 'Quality Assurance' },
        ]}
      />

      {/* Quality Policy Statement */}
      <section className="qa-policy">
        <div className="qa-policy-inner">
          <SectionHeading
            title="Our Quality Policy"
            subtitle="The foundation of everything we do"
          />
          <div className="qa-policy-card">
            <div className="qa-policy-icon">
              <ShieldCheck size={36} />
            </div>
            <blockquote className="qa-policy-quote">
              At {companyData.name}, quality is not merely a department -- it is a
              culture embedded across every function. We are committed to manufacturing
              pharmaceutical and nutraceutical products that consistently meet or exceed
              regulatory requirements, pharmacopoeia standards, and customer expectations.
              Our quality management system is designed for continuous improvement,
              ensuring that every product leaving our facility is safe, effective, and
              of the highest standard.
            </blockquote>
          </div>
        </div>
      </section>

      {/* QA Process */}
      <section className="qa-process">
        <div className="qa-process-inner">
          <SectionHeading
            title="Quality Assurance Process"
            subtitle="Multi-layered quality controls from raw materials to finished products"
          />
          <div className="qa-process-grid">
            {qaProcessCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <div key={card.title} className="qa-process-card">
                  <div className="qa-process-card-icon">
                    <IconComponent size={28} />
                  </div>
                  <h3 className="qa-process-card-title">{card.title}</h3>
                  <p className="qa-process-card-desc">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="qa-compliance">
        <div className="qa-compliance-inner">
          <SectionHeading
            title="Regulatory Compliance"
            subtitle="Adhering to Indian pharmacopoeia and regulatory standards"
          />
          <div className="qa-compliance-content">
            <div className="qa-compliance-card">
              <div className="qa-compliance-icon">
                <BookOpen size={28} />
              </div>
              <h3 className="qa-compliance-title">Pharmacopoeia Standards</h3>
              <p className="qa-compliance-desc">
                All our products are manufactured and tested in compliance with the
                Indian Pharmacopoeia (IP), British Pharmacopoeia (BP), and United
                States Pharmacopoeia (USP) standards. Our analytical methods are
                validated against these official compendia to ensure accuracy,
                precision, and reproducibility of results.
              </p>
            </div>
            <div className="qa-compliance-card">
              <div className="qa-compliance-icon">
                <ShieldCheck size={28} />
              </div>
              <h3 className="qa-compliance-title">Regulatory Framework</h3>
              <p className="qa-compliance-desc">
                We operate in full compliance with the Drugs and Cosmetics Act, CDSCO
                guidelines, and applicable Schedule M requirements. Our quality management
                system is aligned with WHO-GMP and ISO 9001:2015 standards, ensuring
                that our manufacturing operations meet Indian regulatory expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Infrastructure */}
      <section className="qa-infrastructure">
        <div className="qa-infrastructure-inner">
          <SectionHeading
            title="Quality Infrastructure"
            subtitle="Advanced testing facilities supporting rigorous quality control"
          />
          <div className="qa-infra-grid">
            {infrastructureItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.title} className="qa-infra-card">
                  <div className="qa-infra-icon">
                    <IconComponent size={28} />
                  </div>
                  <h3 className="qa-infra-title">{item.title}</h3>
                  <p className="qa-infra-desc">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="qa-cta">
        <div className="qa-cta-inner">
          <h2 className="qa-cta-title">Request Quality Documentation</h2>
          <p className="qa-cta-text">
            For certificates of analysis, stability data, regulatory dossiers,
            or any quality-related documentation, our quality assurance team is
            ready to assist you.
          </p>
          <Button to="/contact" size="lg">
            Contact Quality Team
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Quality;
