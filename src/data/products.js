const products = [
  {
    id: "facewash",
    name: "Gentle Facewash",
    category: "face",
    shortDescription: "Cleanses and refreshes your skin.",
    description:
      "Our Gentle Facewash is formulated for all skin types. It deeply cleanses, removes impurities, and leaves your skin feeling fresh and hydrated.",
    features: [
      "Suitable for all skin types",
      "Dermatologically tested",
      "No parabens or sulfates",
    ],
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
    ingredients: [
      "Aqua (Water)",
      "Glycerin",
      "Cocamidopropyl Betaine",
      "Aloe Vera Extract",
      "Vitamin E",
    ],
    usage:
      "Apply a small amount to wet face, massage gently, and rinse thoroughly. Use twice daily.",
    benefits: ["Removes dirt and oil", "Hydrates skin", "Maintains pH balance"],
    warnings:
      "For external use only. Avoid contact with eyes. If irritation occurs, discontinue use.",
    manufacturer: "Yevacure Labs Pvt. Ltd.",
  },
  {
    id: "shampoo",
    name: "Herbal Shampoo",
    category: "hair",
    shortDescription: "Nourishes and strengthens your hair.",
    description:
      "Our Herbal Shampoo is enriched with natural extracts to promote healthy hair growth and reduce hair fall.",
    features: [
      "Enriched with natural herbs",
      "Reduces hair fall",
      "No harsh chemicals",
    ],
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    ingredients: [
      "Aqua (Water)",
      "Aloe Vera Extract",
      "Shikakai",
      "Reetha",
      "Bhringraj",
    ],
    usage: "Apply to wet hair, lather, and rinse. Repeat if necessary.",
    benefits: ["Strengthens hair roots", "Adds shine", "Reduces dandruff"],
    warnings: "For external use only. Avoid contact with eyes.",
    manufacturer: "Yevacure Labs Pvt. Ltd.",
  },
  {
    id: "moisturizer",
    name: "Daily Moisturizer",
    category: "face",
    shortDescription: "Hydrates and softens your skin.",
    description:
      "Our Daily Moisturizer provides long-lasting hydration and keeps your skin soft and supple throughout the day.",
    features: ["Long-lasting hydration", "Lightweight formula", "Non-greasy"],
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    ingredients: [
      "Aqua (Water)",
      "Shea Butter",
      "Glycerin",
      "Jojoba Oil",
      "Vitamin E",
    ],
    usage:
      "Apply evenly to face and neck after cleansing. Use morning and night.",
    benefits: ["Deep hydration", "Softens skin", "Non-greasy feel"],
    warnings: "For external use only. Discontinue if irritation occurs.",
    manufacturer: "Yevacure Labs Pvt. Ltd.",
  },
  {
    id: "body-lotion",
    name: "Soothing Body Lotion",
    category: "body",
    shortDescription: "Deeply nourishes and soothes dry skin.",
    description:
      "Our Soothing Body Lotion is designed to provide intense hydration and comfort for dry, sensitive skin.",
    features: ["Intense hydration", "Non-greasy", "Hypoallergenic"],
    image:
      "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
    ingredients: [
      "Aqua (Water)",
      "Shea Butter",
      "Cocoa Butter",
      "Glycerin",
      "Vitamin E",
    ],
    usage:
      "Apply generously to body after bath or shower. Massage until absorbed.",
    benefits: ["Soothes dry skin", "Restores moisture", "Hypoallergenic"],
    warnings: "For external use only. Keep out of reach of children.",
    manufacturer: "Yevacure Labs Pvt. Ltd.",
  },
  {
    id: "pet-shampoo",
    name: "Petcare Gentle Shampoo",
    category: "petcare",
    shortDescription: "Cleans and cares for your pet's coat.",
    description:
      "A gentle shampoo for pets, formulated to clean and condition fur while being safe for sensitive skin.",
    features: [
      "Safe for all pets",
      "No harsh chemicals",
      "pH balanced for animals",
    ],
    image:
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80",
    ingredients: [
      "Aqua (Water)",
      "Coconut Oil",
      "Aloe Vera Extract",
      "Oatmeal",
      "Vitamin E",
    ],
    usage: "Wet pet's coat, apply shampoo, lather, and rinse thoroughly.",
    benefits: ["Cleans fur", "Conditions skin", "Reduces itching"],
    warnings: "For animal use only. Avoid contact with eyes and ears.",
    manufacturer: "Yevacure Labs Pvt. Ltd.",
  },
  {
    id: "sunscreen",
    name: "SPF 50+ Sunscreen",
    category: "face",
    shortDescription: "Protects your skin from harmful UV rays.",
    description:
      "A lightweight, non-greasy sunscreen with broad spectrum SPF 50+ protection for daily use.",
    features: [
      "Broad spectrum protection",
      "Water resistant",
      "Non-comedogenic",
    ],
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    ingredients: [
      "Aqua (Water)",
      "Zinc Oxide",
      "Titanium Dioxide",
      "Aloe Vera Extract",
      "Vitamin E",
    ],
    usage:
      "Apply liberally 15 minutes before sun exposure. Reapply every 2 hours.",
    benefits: ["Protects from UVA/UVB", "Non-greasy", "Water resistant"],
    warnings: "For external use only. Avoid contact with eyes.",
    manufacturer: "Yevacure Labs Pvt. Ltd.",
  },
  {
    id: "hair-serum",
    name: "Repair Hair Serum",
    category: "hair",
    shortDescription: "Repairs and adds shine to damaged hair.",
    description:
      "A nourishing serum that repairs split ends and restores shine to dull, damaged hair.",
    features: ["Repairs split ends", "Adds shine", "Lightweight formula"],
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    ingredients: [
      "Cyclopentasiloxane",
      "Dimethiconol",
      "Argan Oil",
      "Vitamin E",
    ],
    usage: "Apply a few drops to damp or dry hair, focusing on ends.",
    benefits: ["Repairs damage", "Adds shine", "Reduces frizz"],
    warnings: "For external use only. Avoid contact with eyes.",
    manufacturer: "Yevacure Labs Pvt. Ltd.",
  },
  {
    id: "pet-balm",
    name: "Petcare Paw Balm",
    category: "petcare",
    shortDescription: "Soothes and protects your pet's paws.",
    description:
      "A natural balm to soothe, moisturize, and protect your pet's paws from dryness and cracking.",
    features: ["Natural ingredients", "Safe if licked", "Heals and protects"],
    image:
      "https://images.unsplash.com/photo-1518715308788-3005759c61d4?auto=format&fit=crop&w=400&q=80",
    ingredients: ["Shea Butter", "Coconut Oil", "Beeswax", "Vitamin E"],
    usage: "Apply a small amount to clean paws and massage gently.",
    benefits: ["Heals cracks", "Moisturizes", "Safe for pets"],
    warnings: "For animal use only. Safe if licked, but supervise use.",
    manufacturer: "Yevacure Labs Pvt. Ltd.",
  },
  {
    id: "body-wash",
    name: "Refreshing Body Wash",
    category: "body",
    shortDescription: "Cleanses and revitalizes your skin.",
    description:
      "A gentle body wash that cleanses and revitalizes your skin, leaving it soft and refreshed.",
    features: [
      "Gentle cleansing",
      "Refreshing scent",
      "Suitable for all skin types",
    ],
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    ingredients: [
      "Aqua (Water)",
      "Cocamidopropyl Betaine",
      "Aloe Vera Extract",
      "Glycerin",
    ],
    usage: "Apply to wet skin, lather, and rinse thoroughly.",
    benefits: ["Cleanses gently", "Revitalizes skin", "Leaves skin soft"],
    warnings: "For external use only. Avoid contact with eyes.",
    manufacturer: "Yevacure Labs Pvt. Ltd.",
  },
];

export default products;
