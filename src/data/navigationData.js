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
    { label: "Dermatology", path: "/products/dermatology" },
    { label: "Trichology", path: "/products/trichology" },
    { label: "Nutraceuticals", path: "/products/nutraceuticals" },
    { label: "Anti-Infective", path: "/products/anti-infective" },
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
