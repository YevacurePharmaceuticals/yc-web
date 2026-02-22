import MetaTags from '../components/seo/MetaTags';
import PageBanner from '../components/layout/PageBanner';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import companyData from '../data/companyData';
import {
  FlaskConical,
  Leaf,
  Factory,
  ClipboardCheck,
  Package,
  Truck,
  Cpu,
  Settings,
  Microscope,
  Warehouse,
} from 'lucide-react';
import './Manufacturing.css';

const processSteps = [
  {
    number: 1,
    title: 'R&D & Formulation',
    description:
      'Science-driven formulation development backed by rigorous research, stability studies, and method validation.',
    icon: FlaskConical,
  },
  {
    number: 2,
    title: 'Raw Material Sourcing',
    description:
      'Procurement of high-grade raw materials from approved and audited suppliers with full traceability.',
    icon: Leaf,
  },
  {
    number: 3,
    title: 'Production',
    description:
      'Manufacturing in GMP-certified facilities with automated processes, controlled environments, and batch documentation.',
    icon: Factory,
  },
  {
    number: 4,
    title: 'Quality Control',
    description:
      'Multi-stage quality checks including in-process controls, analytical testing, and release protocols aligned with IP/BP/USP standards.',
    icon: ClipboardCheck,
  },
  {
    number: 5,
    title: 'Packaging',
    description:
      'Primary and secondary packaging under clean-room conditions with tamper-evident seals and regulatory labelling compliance.',
    icon: Package,
  },
  {
    number: 6,
    title: 'Distribution',
    description:
      'Temperature-controlled storage and reliable logistics ensuring product integrity from warehouse to end customer.',
    icon: Truck,
  },
];

const infrastructureCards = [
  {
    icon: Cpu,
    title: 'Modern Equipment',
    description:
      'State-of-the-art machinery for tablet compression, liquid filling, ointment manufacturing, and capsule filling with automated controls and real-time monitoring.',
  },
  {
    icon: Settings,
    title: 'Dedicated Production Lines',
    description:
      'Segregated production lines for different dosage forms to prevent cross-contamination, each operating under strict environmental controls.',
  },
  {
    icon: Microscope,
    title: 'Quality Testing Labs',
    description:
      'Fully equipped analytical and microbiological laboratories with HPLC, dissolution testers, stability chambers, and trained QC personnel.',
  },
  {
    icon: Warehouse,
    title: 'Warehousing & Storage',
    description:
      'Climate-controlled warehousing for raw materials, intermediates, and finished goods with FIFO inventory management and complete traceability.',
  },
];

function Manufacturing() {
  return (
    <div className="manufacturing-page">
      <MetaTags
        title="Manufacturing Excellence"
        description={`${companyData.name} operates WHO-GMP compliant, GMP-certified manufacturing facilities with state-of-the-art infrastructure for pharmaceutical production.`}
      />

      {/* Page Banner */}
      <PageBanner
        title="Manufacturing Excellence"
        subtitle="WHO-GMP compliant facilities delivering world-class pharmaceutical products"
        breadcrumbItems={[
          { label: 'Home', to: '/' },
          { label: 'Manufacturing' },
        ]}
      />

      {/* Facility Overview */}
      <section className="mfg-overview">
        <div className="mfg-overview-inner">
          <SectionHeading
            title="Facility Overview"
            subtitle="WHO-GMP compliant and GMP-certified manufacturing built on a foundation of quality and precision"
          />
          <div className="mfg-overview-content">
            <p className="mfg-overview-text">
              At {companyData.name}, our manufacturing operations are conducted in
              state-of-the-art facilities that comply with World Health Organization
              Good Manufacturing Practice (WHO-GMP) guidelines. Every aspect of our
              production environment -- from facility design and equipment qualification
              to environmental monitoring and process validation -- is engineered to
              meet Indian pharmaceutical standards and Schedule M guidelines.
            </p>
            <p className="mfg-overview-text">
              Our facilities are equipped with dedicated production zones for tablets,
              capsules, liquids, ointments, and nutraceuticals. Controlled environments,
              HVAC systems with HEPA filtration, purified water systems, and automated
              batch processing ensure consistent product quality across every production
              cycle.
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="mfg-process">
        <div className="mfg-process-inner">
          <SectionHeading
            title="Our Manufacturing Process"
            subtitle="A systematic six-step approach that ensures quality at every stage"
          />
          <div className="mfg-process-grid">
            {processSteps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div key={step.number} className="mfg-step-card">
                  <div className="mfg-step-number">{step.number}</div>
                  <div className="mfg-step-icon">
                    <IconComponent size={28} />
                  </div>
                  <h3 className="mfg-step-title">{step.title}</h3>
                  <p className="mfg-step-desc">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Infrastructure Highlights */}
      <section className="mfg-infrastructure">
        <div className="mfg-infrastructure-inner">
          <SectionHeading
            title="Infrastructure Highlights"
            subtitle="Purpose-built facilities and equipment supporting pharmaceutical excellence"
          />
          <div className="mfg-infra-grid">
            {infrastructureCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <div key={card.title} className="mfg-infra-card">
                  <div className="mfg-infra-icon">
                    <IconComponent size={28} />
                  </div>
                  <h3 className="mfg-infra-title">{card.title}</h3>
                  <p className="mfg-infra-desc">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mfg-cta">
        <div className="mfg-cta-inner">
          <h2 className="mfg-cta-title">Partner With Us for Contract Manufacturing</h2>
          <p className="mfg-cta-text">
            Leverage our WHO-GMP certified facilities, experienced workforce, and
            proven manufacturing capabilities for your contract manufacturing
            requirements. We offer end-to-end support from formulation to finished
            product.
          </p>
          <Button to="/contact" size="lg">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Manufacturing;
