import MetaTags from '../components/seo/MetaTags';
import PageBanner from '../components/layout/PageBanner';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import companyData from '../data/companyData';
import {
  Globe,
  FileText,
  ShieldCheck,
  DollarSign,
  Package,
  Ship,
  MapPin,
  ArrowRight,
} from 'lucide-react';
import './Exports.css';

const markets = [
  {
    region: 'Africa',
    description:
      'Serving healthcare needs across Sub-Saharan and North African markets with affordable, quality pharmaceutical products.',
  },
  {
    region: 'South East Asia',
    description:
      'Exporting dermatological, nutraceutical, and anti-infective formulations to growing pharmaceutical markets in the ASEAN region.',
  },
  {
    region: 'CIS Countries',
    description:
      'Supplying pharmaceutical products to the Commonwealth of Independent States with regulatory documentation tailored to regional requirements.',
  },
  {
    region: 'Latin America',
    description:
      'Expanding our presence in Latin American markets with competitive product offerings and comprehensive dossier support.',
  },
  {
    region: 'Middle East',
    description:
      'Serving healthcare markets in the Middle East with WHO-GMP certified products and region-specific regulatory compliance.',
  },
];

const exportCapabilities = [
  {
    icon: FileText,
    title: 'Dossier Formats',
    description:
      'Comprehensive product dossiers prepared in CTD and ACTD formats to support regulatory submissions in target markets worldwide.',
  },
  {
    icon: ShieldCheck,
    title: 'Regulatory Filing Support',
    description:
      'End-to-end regulatory support including product registration, variation filings, renewal applications, and pharmacovigilance documentation.',
  },
  {
    icon: Package,
    title: 'Export Documentation',
    description:
      'Complete export documentation including certificates of pharmaceutical product (CoPP), certificates of analysis, free sale certificates, and GMP certificates.',
  },
];

const exportAdvantages = [
  {
    icon: ShieldCheck,
    title: 'WHO-GMP Certified',
    description:
      'Manufacturing in WHO-GMP certified facilities ensures our products meet internationally accepted quality standards required for export market access.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    description:
      'Cost-efficient manufacturing operations in India enable us to offer high-quality pharmaceutical products at competitive price points for international markets.',
  },
  {
    icon: Package,
    title: 'Customized Packaging',
    description:
      'Flexible packaging capabilities including country-specific labelling, language localization, and custom branding to meet diverse market requirements.',
  },
  {
    icon: Ship,
    title: 'Reliable Logistics',
    description:
      'Established supply chain partnerships ensuring temperature-controlled shipping, timely delivery, and complete product traceability from factory to destination.',
  },
];

function Exports() {
  return (
    <div className="exports-page">
      <MetaTags
        title="Global Exports"
        description={`${companyData.name} exports WHO-GMP certified pharmaceutical products to Africa, South East Asia, CIS Countries, Latin America, and the Middle East.`}
      />

      {/* Page Banner */}
      <PageBanner
        title="Global Exports"
        subtitle="Delivering quality pharmaceutical products to international markets"
        breadcrumbItems={[
          { label: 'Home', to: '/' },
          { label: 'Exports' },
        ]}
      />

      {/* Export Capabilities */}
      <section className="exports-capabilities">
        <div className="exports-capabilities-inner">
          <SectionHeading
            title="Export Capabilities"
            subtitle="Comprehensive regulatory and documentation support for international market access"
          />
          <div className="exports-cap-grid">
            {exportCapabilities.map((cap) => {
              const IconComponent = cap.icon;
              return (
                <div key={cap.title} className="exports-cap-card">
                  <div className="exports-cap-icon">
                    <IconComponent size={28} />
                  </div>
                  <h3 className="exports-cap-title">{cap.title}</h3>
                  <p className="exports-cap-desc">{cap.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Markets Served */}
      <section className="exports-markets">
        <div className="exports-markets-inner">
          <SectionHeading
            title="Markets Served"
            subtitle="Reaching patients and partners across multiple regions worldwide"
          />
          <div className="exports-markets-grid">
            {markets.map((market) => (
              <div key={market.region} className="exports-market-card">
                <div className="exports-market-icon">
                  <MapPin size={24} />
                </div>
                <h3 className="exports-market-region">{market.region}</h3>
                <p className="exports-market-desc">{market.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Range for Export */}
      <section className="exports-products">
        <div className="exports-products-inner">
          <SectionHeading
            title="Product Range for Export"
            subtitle="A diverse pharmaceutical portfolio available for international distribution"
          />
          <div className="exports-products-content">
            <div className="exports-products-card">
              <div className="exports-products-icon">
                <Globe size={32} />
              </div>
              <p className="exports-products-text">
                Our export product portfolio spans multiple therapeutic segments including
                dermatology, trichology, nutraceuticals, hepatoprotective, and
                anti-infective formulations. Products are available across dosage forms
                including tablets, capsules, liquids, ointments, gels, and creams --
                all manufactured in GMP-certified facilities with complete regulatory
                documentation.
              </p>
              <Button to="/products" variant="outline" size="md">
                View Our Products <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Export Advantages */}
      <section className="exports-advantages">
        <div className="exports-advantages-inner">
          <SectionHeading
            title="Why Export With Us"
            subtitle="Key advantages of partnering with Yevacure for international distribution"
          />
          <div className="exports-adv-grid">
            {exportAdvantages.map((adv) => {
              const IconComponent = adv.icon;
              return (
                <div key={adv.title} className="exports-adv-card">
                  <div className="exports-adv-icon">
                    <IconComponent size={28} />
                  </div>
                  <h3 className="exports-adv-title">{adv.title}</h3>
                  <p className="exports-adv-desc">{adv.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="exports-cta">
        <div className="exports-cta-inner">
          <h2 className="exports-cta-title">
            Partner With Us for International Distribution
          </h2>
          <p className="exports-cta-text">
            Whether you are a distributor, importer, or healthcare organization
            seeking a reliable pharmaceutical supply partner, we offer the quality,
            documentation, and pricing to support your market requirements.
          </p>
          <Button to="/contact" size="lg">
            Contact Our Export Team
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Exports;
