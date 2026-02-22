/**
 * Centralized company data for Yevacure Pharmaceutical Pvt Ltd
 * This file serves as the single source of truth for all company-related information
 * used across the website.
 */

export const companyInfo = {
  name: "Yevacure Pharmaceutical Pvt Ltd",
  shortName: "Yevacure",
  tagline: "Trusted Pharmaceutical Manufacturer Since 2020",
  shortDescription:
    "Yevacure Pharmaceutical Pvt Ltd is a research-driven pharmaceutical company specializing in dermatology, trichology, nutraceuticals, and anti-infective formulations. We deliver quality healthcare products for the Indian market from our GMP-certified manufacturing facilities.",
  longDescription:
    "Founded in 2020, Yevacure Pharmaceutical Pvt Ltd has rapidly established itself as a trusted name in the pharmaceutical industry. Headquartered in Ghaziabad, Uttar Pradesh, we are committed to advancing healthcare through science-backed formulations manufactured under stringent quality standards. Our diverse portfolio spans dermatology, trichology, nutraceuticals, hepatoprotective, and anti-infective therapeutic segments, serving the Indian pharmaceutical market.",
  founded: "2020",
};

export const contactInfo = {
  address:
    "#UG15 HRC SHOPPING COMPLEX UPPER, GROUND FLOOR GH PLOT NO 1/2 VAIBHAV KHAND, INDIRAPURAM, GHAZIABAD, Uttar Pradesh 201014, India",
  email: "yevacurepharmaceuticals@gmail.com",
};

export const socialLinks = [
  {
    platform: "Facebook",
    url: "https://www.facebook.com/p/Yevacure-Pharmaceutical-pvtltd-100069694669312/",
    label: "Follow us on Facebook",
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/yevacure_pharmaceuticals?igsh=MXI1eGljNGptMHVvZg==",
    label: "Follow us on Instagram",
  },
  {
    platform: "LinkedIn",
    url: "#",
    label: "Connect with us on LinkedIn",
  },
];

export const certifications = [
  {
    name: "ISO 9001:2015",
    description:
      "International standard for quality management systems, ensuring consistent quality in all manufacturing and business processes.",
  },
  {
    name: "WHO-GMP",
    description:
      "World Health Organization Good Manufacturing Practice certification, guaranteeing products are consistently produced and controlled to quality standards appropriate for their intended use.",
  },
  {
    name: "FSSAI",
    description:
      "Food Safety and Standards Authority of India certification for nutraceutical and dietary supplement products, ensuring compliance with national food safety regulations.",
  },
  {
    name: "GMP Compliant",
    description:
      "Good Manufacturing Practice compliance across all production facilities, maintaining strict hygiene, documentation, and process control standards.",
  },
  {
    name: "Cruelty Free",
    description:
      "Committed to ethical practices with no animal testing conducted at any stage of product development or manufacturing.",
  },
  {
    name: "Dermatologically Tested",
    description:
      "All topical products undergo rigorous dermatological testing to ensure safety, efficacy, and suitability for various skin types.",
  },
];

export const stats = {
  products: 13,
  categories: 6,
  founded: 2020,
  states: "Pan-India",
};

export const catalogPdfUrl = "/YevacureProductCatalog.pdf";

export const vision =
  "To be a leading pharmaceutical company in India, recognized for innovation, quality, and trusted healthcare solutions. We aspire to improve lives by making scientifically advanced, affordable, and safe therapeutic solutions available to patients and partners across the country.";

export const mission =
  "To research, develop, and manufacture high-quality pharmaceutical and nutraceutical products that meet regulatory standards set by Indian authorities including CDSCO and state drug regulators. We are dedicated to fostering strategic partnerships, investing in continuous research, and upholding the highest ethical practices in every aspect of our operations to deliver measurable health outcomes.";

export const values = [
  {
    title: "Scientific Excellence",
    description:
      "Every product we develop is grounded in rigorous scientific research and evidence-based formulation. We invest in R&D to ensure our solutions are effective, safe, and at the forefront of pharmaceutical innovation.",
  },
  {
    title: "Quality First",
    description:
      "Quality is non-negotiable at Yevacure. From raw material sourcing to finished product dispatch, every step undergoes stringent quality checks aligned with ISO, GMP, and WHO standards to ensure consistency and reliability.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "We manufacture and operate in compliance with Indian pharmaceutical regulations including Schedule M, CDSCO guidelines, and the Drugs & Cosmetics Act. Our facilities and processes are designed to meet the highest standards mandated by Indian regulatory authorities.",
  },
  {
    title: "Customer Partnership",
    description:
      "We believe in building long-term, trust-based relationships with our clients, distributors, and healthcare professionals. Our approach is collaborative, ensuring we understand and address the unique needs of every partner we work with.",
  },
];

export const medicalDisclaimer =
  "The information provided on this website is for general informational purposes only and is not intended as medical advice. Products are manufactured as per applicable Indian regulatory standards. Prescription medicines should only be taken under medical supervision.";

/**
 * Convenience export of all company data as a single object
 */
const companyData = {
  ...companyInfo,
  contact: contactInfo,
  socialLinks,
  certifications,
  stats,
  catalogPdfUrl,
  vision,
  mission,
  values,
  medicalDisclaimer,
};

export default companyData;
