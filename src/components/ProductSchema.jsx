import { useEffect } from 'react';

const ProductSchema = ({ product }) => {
  useEffect(() => {
    if (!product) return;

    const schema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": product.name,
      "description": product.longDescription,
      "brand": {
        "@type": "Brand",
        "name": "Yevacure Pharmaceutical Pvt Ltd"
      },
      "category": product.category,
      "image": `https://yevacurepharmaceuticals.github.io/yc-web${product.image.path}`,
      "manufacturer": {
        "@type": "Organization",
        "name": product.manufacturer,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "SRC-24-B, Shipra Rivera, Indirapuram",
          "addressLocality": "Ghaziabad",
          "addressRegion": "UP",
          "postalCode": "201014",
          "addressCountry": "IN"
        }
      },
      "offers": {
        "@type": "Offer",
        "price": product.price.replace('₹', ''),
        "priceCurrency": "INR",
        "availability": product.availability === "In Stock" ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
        "seller": {
          "@type": "Organization",
          "name": "Yevacure Pharmaceutical Pvt Ltd"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "reviewCount": "150"
      }
    };

    // Remove existing schema if any
    const existingSchema = document.querySelector('script[data-product-schema]');
    if (existingSchema) {
      existingSchema.remove();
    }

    // Add new schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-product-schema', 'true');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [product]);

  return null;
};

export default ProductSchema;
