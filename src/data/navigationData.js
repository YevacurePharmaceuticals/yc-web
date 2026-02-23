/**
 * Navigation data for Yevacure Pharmaceutical website
 * Defines the main navigation menu items and footer link structure.
 */

export const mainNavItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Products", path: "/products", hasMegaMenu: true },
  { label: "Manufacturing", path: "/manufacturing" },
  { label: "Quality", path: "/quality-assurance" },
  { label: "R&D", path: "/research-development" },
  { label: "Feedback", path: "/feedback" },
  { label: "Contact", path: "/contact" },
];

export const footerLinks = {
  company: [
    { label: "About Us", path: "/about" },
    { label: "Manufacturing", path: "/manufacturing" },
    { label: "Quality Assurance", path: "/quality-assurance" },
    { label: "Certifications", path: "/certifications" },
    { label: "Feedback", path: "/feedback" },
  ],
  products: [
    { label: "All Products", path: "/products" },
    { label: "Skin Care", path: "/products/skin-care" },
    { label: "Hair Care", path: "/products/hair-care" },
    { label: "Fungal / Bacterial", path: "/products/fungal-bacterial" },
    { label: "Antibiotics", path: "/products/antibiotics" },
    { label: "Anti Histamine", path: "/products/anti-histamine" },
    { label: "General", path: "/products/general" },
    { label: "Multivitamins", path: "/products/multivitamins" },
    {
      label: "Download Catalog",
      path: "/YevacureProductCatalog.pdf",
      external: true,
    },
  ],
  capabilities: [
    { label: "R&D", path: "/research-development" },
    { label: "Contract Manufacturing", path: "/contact" },
  ],
};
