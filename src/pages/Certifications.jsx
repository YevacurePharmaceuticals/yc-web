import MetaTags from '../components/seo/MetaTags';
import PageBanner from '../components/layout/PageBanner';
import SectionHeading from '../components/ui/SectionHeading';
import companyData from '../data/companyData';
import { ShieldCheck, Scale, FileCheck } from 'lucide-react';
import './Certifications.css';

const certRelevance = {
  'ISO 9001:2015':
    'Applicable across all business processes, ensuring systematic quality management and continuous improvement in every operational area.',
  'WHO-GMP':
    'Essential for ensuring manufacturing practices meet accepted quality benchmarks and Indian regulatory compliance standards.',
  'FSSAI':
    'Mandatory for nutraceutical and dietary supplement products sold in India, ensuring compliance with national food safety standards.',
  'GMP Compliant':
    'Fundamental to all production operations, guaranteeing consistent hygiene, process control, and documentation across every facility.',
  'Cruelty Free':
    'Reflects our ethical commitment to humane practices, ensuring no animal testing is conducted at any stage of product development.',
  'Dermatologically Tested':
    'Critical for topical and dermatological products, providing clinical evidence of safety and suitability for various skin types.',
};

function Certifications() {
  return (
    <div className="certifications-page">
      <MetaTags
        title="Certifications & Compliance"
        description={`${companyData.name} holds ISO 9001:2015, WHO-GMP, FSSAI, and other certifications ensuring the highest pharmaceutical quality and regulatory compliance.`}
      />

      {/* Page Banner */}
      <PageBanner
        title="Certifications & Compliance"
        subtitle="Maintaining the highest regulatory and quality standards in pharmaceutical manufacturing"
        breadcrumbItems={[
          { label: 'Home', to: '/' },
          { label: 'Certifications' },
        ]}
      />

      {/* Certifications Grid */}
      <section className="cert-cards-section">
        <div className="cert-cards-inner">
          <SectionHeading
            title="Our Certifications"
            subtitle="Recognized accreditations that validate our commitment to quality, safety, and ethical practices"
          />
          <div className="cert-cards-grid">
            {companyData.certifications.map((cert) => (
              <div key={cert.name} className="cert-card">
                <div className="cert-card-icon">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="cert-card-name">{cert.name}</h3>
                <p className="cert-card-desc">{cert.description}</p>
                {certRelevance[cert.name] && (
                  <div className="cert-card-relevance">
                    <span className="cert-relevance-label">Relevance:</span>
                    <p className="cert-relevance-text">
                      {certRelevance[cert.name]}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="cert-compliance">
        <div className="cert-compliance-inner">
          <SectionHeading
            title="Compliance Standards"
            subtitle="Operating within a robust regulatory framework"
          />
          <div className="cert-compliance-grid">
            <div className="cert-compliance-card">
              <div className="cert-compliance-icon">
                <Scale size={28} />
              </div>
              <h3 className="cert-compliance-title">Indian Regulatory Framework</h3>
              <p className="cert-compliance-desc">
                All manufacturing operations comply with the Drugs and Cosmetics Act,
                1940 and the rules thereunder. Our facilities meet Schedule M
                requirements as prescribed by the Central Drugs Standard Control
                Organisation (CDSCO). We maintain active drug manufacturing licenses
                and adhere to all state and central regulatory requirements.
              </p>
            </div>
            <div className="cert-compliance-card">
              <div className="cert-compliance-icon">
                <FileCheck size={28} />
              </div>
              <h3 className="cert-compliance-title">Pharmacopoeia Standards</h3>
              <p className="cert-compliance-desc">
                Our products are formulated, tested, and released in accordance with
                the Indian Pharmacopoeia (IP), British Pharmacopoeia (BP), and
                United States Pharmacopoeia (USP). All analytical methods are validated
                to ensure they meet the specificity, accuracy, precision, and
                robustness criteria defined by these official compendia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Certifications;
