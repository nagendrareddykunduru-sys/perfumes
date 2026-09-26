export interface ProductItem {
  id: string;
  name: string;
  category: 'Attar' | 'Perfume' | 'Others';
  originOrType: string;
  description: string;
  details: string[];
  image: string;
  badge?: string;
  availableOptions: string[];
  priceNote: string;
}

export interface BusinessPillar {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: string;
  route: string;
  highlights: string[];
}

export const COMPANY_DETAILS = {
  name: "BARSHIP FRAGRANCES",
  subBrand: "Baron Perfumes – Hyderabad",
  alternateBrand: "Baroon Perfumes / Zohran Perfumes",
  tagline: "Retail | Imports | Exports | Distribution | Artisanal Fragrances",
  heroSubtitle: "Premium Attars, Fine Perfumes, and luxury ambient collections for retail and international trade.",
  website: "www.barship.com",
  gstin: "36ABNPH8863N2ZR",
  phones: [
    { name: "MM Hussain Al Najmi", number: "+91 91332 33528", raw: "919133233528", role: "Managing Director / Sales" },
    { name: "Abdul Ilah M. Al Najmi", number: "+91 99599 30203", raw: "919959930203", role: "Operations" },
    { name: "Abdul Rasheed M. Al Najmi", number: "+91 80196 17805", raw: "918019617805", role: "Wholesale & Logistics" },
    { name: "UAE / International", number: "+971 52 722 6677", raw: "971527226677", role: "Global Export Desk" }
  ],
  primaryPhone: "+91 91332 33528",
  primaryWhatsAppRaw: "919133233528",
  emails: [
    "mmhussain@barship.com",
    "barshipfragrances@gmail.com",
    "zohranperfumes@barship.com",
    "zohranperfumes@gmail.com"
  ],
  primaryEmail: "mmhussain@barship.com",
  locations: {
    corporate: {
      title: "Corporate Office",
      address: "T303 - Floor 3rd, Rafsa Arcade, 'X' Road Old MLA Quarters, Himayath Nagar, Hyderabad - 500 029, Telangana, India",
      city: "Hyderabad",
      pincode: "500029"
    },
    showroom: {
      title: "Retail & Wholesale Showroom",
      subtitle: "Zohran Perfumes by BARSHIP Fragrances",
      address: "Shop No. 1 - Lower Ground Floor, Prestige Complex - 23-3-202/204, Etebar Chowk, Masjid 'X' Road, Hyderabad - 500 002, Telangana, India",
      city: "Hyderabad",
      pincode: "500002"
    },
    international: {
      title: "International Desk (UAE)",
      address: "Dubai, United Arab Emirates",
      phone: "+971 52 722 6677"
    }
  }
};

export const BUSINESS_PILLARS: BusinessPillar[] = [
  {
    id: "retail",
    title: "RETAIL",
    shortDesc: "Experience authentic artisanal attars, pure Dehn Al Oudh, and luxury spray perfumes at our flagship Hyderabad boutique.",
    longDesc: "BARSHIP offers connoisseurs and everyday fragrance lovers access to genuine, high-concentration attar oils, rare pure oud distillations, and bespoke personal scent blending.",
    icon: "ShoppingBag",
    route: "/retail",
    highlights: ["Individual Customer Consultations", "Exclusive Showroom Experience", "Signature Gift Packaging", "Authentic Artisanal Blends"]
  },
  {
    id: "imports",
    title: "IMPORTS",
    shortDesc: "Direct origin sourcing of the finest raw agarwood, rare resin chips, and pure essential oils from over 10 sovereign origin countries.",
    longDesc: "Our veteran procurement network directly imports from verified distillers and wild-harvest agarwood forests in Cambodia, Indonesia, Malaysia, Vietnam, and Morocco.",
    icon: "Ship",
    route: "/importers-exporters",
    highlights: ["10+ Direct Sourcing Origins", "Ethically Harvested Agarwood", "Customs & CITES Compliance", "Strict Purity Testing"]
  },
  {
    id: "exports",
    title: "EXPORTS",
    shortDesc: "Delivering Hyderabad's perfumery heritage and international standard fragrance creations to the Middle East, Europe, and global markets.",
    longDesc: "Backed by our international office in the UAE (+971 52 722 6677), BARSHIP manages seamless international export logistics, air-cargo freight, and compliant safety documentation.",
    icon: "Globe2",
    route: "/importers-exporters",
    highlights: ["UAE Regional Export Hub", "Worldwide Air Cargo Delivery", "MSDS & Lab Certifications", "Private Label Export Batches"]
  },
  {
    id: "distribution",
    title: "DISTRIBUTION",
    shortDesc: "Expansive multi-tier distribution network supplying retail outlets, luxury salons, hospitality chains, and departmental counters.",
    longDesc: "We partner with local and nationwide distributors with high profit margins, marketing collateral, point-of-sale display units, and reliable replenishments.",
    icon: "Truck",
    route: "/distributors",
    highlights: ["High Distributor Margins", "Display & POS Support", "Priority Stock Allocation", "Dedicated Account Manager"]
  }
];

export const ATTAR_PRODUCTS: ProductItem[] = [
  {
    id: "attar-fragrance-oil",
    name: "Pure Concentrated Attar Oil",
    category: "Attar",
    originOrType: "100% Non-Alcoholic Concentrates",
    description: "Exquisite pure perfume oils and artisanal attars. Blended using high-purity natural and fine aroma molecules for maximum longevity and velvet skin sensation.",
    details: ["100% Non-alcoholic concentrated formulation", "Over 200+ oriental, French, and bespoke profiles", "Pure oil application with crystal glass rod wand"],
    image: "/images/attar_oil.jpg",
    badge: "Signature Collection",
    availableOptions: ["3ml", "6ml", "1 Tola (12ml)", "100ml - 5L Wholesale Drums"],
    priceNote: "Request Price / Get Wholesale Quote"
  },
  {
    id: "attar-indian-oud",
    name: "Indian OUD (Assam Dehn Al Oudh)",
    category: "Attar",
    originOrType: "Hydro-Distilled Assam Agarwood",
    description: "The timeless gold standard of traditional oriental perfumery. Intense animalic top notes evolving into an addictive, sweet honeyed leather and sacred woody drydown.",
    details: ["Authentic hydro-distilled Assam agarwood", "Unrivalled 48-hour+ longevity", "Traditional Indian perfumery cornerstone"],
    image: "/images/luxury_oud.jpg",
    badge: "Heritage Pure",
    availableOptions: ["3ml", "6ml", "1 Tola (12ml)", "Wholesale Kilograms"],
    priceNote: "Request Price / Get Wholesale Quote"
  },
  {
    id: "attar-cambodia-oud",
    name: "Cambodian OUD Attar",
    category: "Attar",
    originOrType: "Koh Kong / Pursat, Cambodia",
    description: "World-renowned for its intoxicating dried-plum, apricot sweetness and creamy caramel-woody finish. Smooth, luxurious, and universally praised.",
    details: ["Sweet, rich dried-apricot and fig notes", "Gentle, non-aggressive smooth character", "Prime choice for luxury royal perfumes"],
    image: "/images/luxury_oud.jpg",
    badge: "Signature Classic",
    availableOptions: ["1 Tola (12ml)", "50g Chips", "Bulk Commercial Lots"],
    priceNote: "Request Price / Get Wholesale Quote"
  },
  {
    id: "attar-moroccan-oud",
    name: "Moroccan OUD Attar",
    category: "Attar",
    originOrType: "Morocco (North Africa)",
    description: "Distinctive North African amber-resinous nuance with rich balsamic undertones, delicate dry-spiced warmth, and enduring earthy sillage.",
    details: ["Warm balsamic and spicy cedarwood nuance", "Distilled from matured aromatic wood", "Long-lasting traditional base note"],
    image: "/images/luxury_oud.jpg",
    badge: "Rare Origin",
    availableOptions: ["1 Tola (12ml)", "50g Pure Wood Chips", "Bulk Wholesale (100g - 1kg)"],
    priceNote: "Request Price / Get Wholesale Quote"
  },
  {
    id: "attar-indonesian-oud",
    name: "Indonesian OUD Attar",
    category: "Attar",
    originOrType: "Kalimantan / Papua, Indonesia",
    description: "Deep, wild jungle-woody complexity characterized by dense smoky undertones, dark leather notes, and extraordinary projection.",
    details: ["Wild jungle forest aroma profile", "Rich dark amber oil color", "Favored for ceremonial and high-end formulations"],
    image: "/images/luxury_oud.jpg",
    badge: "Top Seller",
    availableOptions: ["1 Tola (12ml)", "Custom Bottles", "Wholesale Liters"],
    priceNote: "Request Price / Get Wholesale Quote"
  },
  {
    id: "attar-vietnamese-oud",
    name: "Vietnamese OUD Attar",
    category: "Attar",
    originOrType: "Nha Trang, Vietnam",
    description: "The pinnacle of ethereal sweetness. Famed for natural vanillic sweetness, delicate white floral touches, and sweet sacred temple smoke.",
    details: ["Soft, radiant, and hypnotic sweetness", "Premium Kinam/Kyara family legacy", "High aesthetic prestige in global perfumery"],
    image: "/images/luxury_oud.jpg",
    badge: "Royal Grade",
    availableOptions: ["Half Tola", "1 Tola", "Wholesale Lots"],
    priceNote: "Request Price / Get Wholesale Quote"
  },
  {
    id: "attar-malaysian-oud",
    name: "Malaysian OUD Attar",
    category: "Attar",
    originOrType: "Pahang, Malaysia",
    description: "Bold and dynamic, initiating with fresh aquatic-herbaceous woody brilliance before settling into a dark, smoky, intoxicating incense heart.",
    details: ["Dynamic multi-stage scent evolution", "Deep green-to-black resinous oil", "Outstanding durability on fabrics & skin"],
    image: "/images/luxury_oud.jpg",
    badge: "Distinctive",
    availableOptions: ["1 Tola (12ml)", "High Volume Supply"],
    priceNote: "Request Price / Get Wholesale Quote"
  },
  {
    id: "attar-philippines-oud",
    name: "Philippines OUD Attar",
    category: "Attar",
    originOrType: "Mindanao, Philippines",
    description: "Celebrated among collectors for radiant golden sweetness, delicate fruity-balsamic honey notes, and deeply layered woody warmth.",
    details: ["Rare high-grade resin content", "Fruity sweet top layer transitioning to deep wood", "Sought-after by connoisseurs"],
    image: "/images/luxury_oud.jpg",
    badge: "Collector's Grade",
    availableOptions: ["Half Tola (6ml)", "1 Tola (12ml)", "Wholesale Batch"],
    priceNote: "Request Price / Get Wholesale Quote"
  },
  {
    id: "attar-srilankan-oud",
    name: "Srilankan (Ceylon) OUD Attar",
    category: "Attar",
    originOrType: "Ceylon, Sri Lanka",
    description: "Vibrant and zesty with crushed green leaves, sweet cinnamon spice, and deeply resonant woody resin that leaves an unforgettable signature.",
    details: ["Unique spicy-green balsamic personality", "Grown in Sri Lanka's tropical rainforest belts", "Rapidly ascending in global luxury demand"],
    image: "/images/luxury_oud.jpg",
    badge: "Spicy & Fresh",
    availableOptions: ["6ml", "12ml", "Bulk Tolas"],
    priceNote: "Request Price / Get Wholesale Quote"
  },
  {
    id: "attar-thailand-oud",
    name: "Thailand (Trat) OUD Attar",
    category: "Attar",
    originOrType: "Trat / Prachinburi, Thailand",
    description: "Luminous, sunny, and floral-sweet. Overflowing with golden fruit, peach blossom, and bright woody undertones, making it a crowd-pleasing luxury favourite.",
    details: ["Bright, golden, sunny olfactory aura", "Warm floral and stone-fruit facets", "Excellent versatility for modern perfume blending"],
    image: "/images/luxury_oud.jpg",
    badge: "Popular Classic",
    availableOptions: ["1 Tola (12ml)", "Commercial Liters", "Custom Private Label"],
    priceNote: "Request Price / Get Wholesale Quote"
  },
  {
    id: "attar-bhutan-oud",
    name: "Bhutan Mountain OUD Attar",
    category: "Attar",
    originOrType: "Himalayan Foothills, Bhutan",
    description: "A pristine high-altitude fragrance profile offering crisp coniferous nuances, clean crystal-clear woody facets, and an uplifting sacred mountain ambiance.",
    details: ["Himalayan wild agarwood variety", "Crisp, airy balsamic resin notes", "Ultra-rare limited annual availability"],
    image: "/images/luxury_oud.jpg",
    badge: "High Altitude",
    availableOptions: ["6ml", "12ml", "Custom Order"],
    priceNote: "Request Price / Get Wholesale Quote"
  }
];

export const PERFUME_PRODUCTS: ProductItem[] = [
  {
    id: "perfume-lor-eternel",
    name: "L'Or Éternel Extrait De Parfum",
    category: "Perfume",
    originOrType: "Luxury Spray Extrait (35% Conc.)",
    description: "Our signature flagship perfume. Handcrafted with sparkling saffron and golden amber top notes, blooming Taif rose heart, and an intoxicating pure Cambodian oud base.",
    details: ["35% Extrait de Parfum concentration", "Fine gold atomizer sprayer", "Heavy polished crystal flacon with magnetic gold cap"],
    image: "/images/hero_fragrance.jpg",
    badge: "Crown Flagship",
    availableOptions: ["50ml", "100ml", "15ml Travel Atomizer"],
    priceNote: "Request Price / Get Wholesale Quote"
  },
  {
    id: "perfume-oudh-majestic",
    name: "Oudh Majestic Prestige Spray",
    category: "Perfume",
    originOrType: "Royal Oriental Spray Perfume",
    description: "A majestic oriental eau de parfum uniting aged Assam agarwood, regal frankincense, warm cashmere wood, and powdery musk.",
    details: ["28% Eau De Parfum concentration", "Exceptional 24-hour silage on fabrics", "Luxury presentation packaging with gold hot-foil borders"],
    image: "/images/luxury_cosmetics.jpg",
    badge: "Royal Collection",
    availableOptions: ["50ml", "100ml", "Wholesale Display Packs"],
    priceNote: "Request Price / Get Wholesale Quote"
  },
  {
    id: "perfume-french-aura",
    name: "French Citrus & White Jasmine EDP",
    category: "Perfume",
    originOrType: "French Floral Fusion",
    description: "Crisp Italian bergamot, Grasse jasmine petals, and white cedarwood. A modern, airy composition suitable for daytime elegance and professional boardroom presence.",
    details: ["Fresh French fragrance profile", "Dermatologically tested and skin-friendly", "Custom bottle colorways available"],
    image: "/images/luxury_cosmetics.jpg",
    badge: "Contemporary",
    availableOptions: ["50ml", "100ml", "Bulk Private Label"],
    priceNote: "Request Price / Get Wholesale Quote"
  },
  {
    id: "perfume-spicy-amber",
    name: "Amber Noir & Smoked Leather Extrait",
    category: "Perfume",
    originOrType: "Bold Evening Extrait",
    description: "Warm cardamom, roasted coffee beans, black amber, and dark Tuscan leather accords. Designed for unforgettable evening presence.",
    details: ["Intense projection and warmth", "Hand-blended in small maturation batches", "High consumer re-order rate"],
    image: "/images/hero_fragrance.jpg",
    badge: "Evening Prestige",
    availableOptions: ["50ml", "100ml", "Custom Gift Sets"],
    priceNote: "Request Price / Get Wholesale Quote"
  },
  {
    id: "perfume-custom-blend",
    name: "Bespoke Custom Perfumes",
    category: "Perfume",
    originOrType: "Private Label Formulation",
    description: "Create your personal or commercial brand signature perfume with our Hyderabad formulation team. Full control over top, middle, and base note architecture.",
    details: ["Original olfactory formulation & evaluation", "Stability and compatibility testing", "French, Arabic, and hybrid scent architectures"],
    image: "/images/custom_manufacturing.jpg",
    badge: "Bespoke Creation",
    availableOptions: ["500 to 50,000+ Units", "Turnkey Formulation", "Sample Prototypes"],
    priceNote: "Request Price / Get Wholesale Quote"
  }
];

export const OTHERS_PRODUCTS: ProductItem[] = [
  {
    id: "others-bakhoor",
    name: "Royal Bakhoor & Incense",
    category: "Others",
    originOrType: "Arabesque Incense Chips",
    description: "Slow-burning natural agarwood and sandalwood chips steeped in precious oils, musk, amber, and exotic florals. Ideal for creating an atmosphere of majestic hospitality.",
    details: ["Slow-burning natural wood base", "Infused with authentic oud and rose oils", "Perfect for homes, majlis, boutiques, and weddings"],
    image: "/images/bakhoor_luxury.jpg",
    badge: "Atmospheric Luxury",
    availableOptions: ["40g Tin", "75g Luxury Jar", "Bulk 1kg Packaging"],
    priceNote: "Request Price / Get Wholesale Quote"
  },
  {
    id: "others-air-freshener",
    name: "Luxury Air Freshener & Ambient Mists",
    category: "Others",
    originOrType: "Home, Hotel & Linen Fragrance",
    description: "High-performance air and linen fragrances engineered to eliminate odors and replace them with lingering notes of royal oudh, lavender, white musk, and amber.",
    details: ["Water-based and fine alcohol mist formulas", "Safe on luxury fabrics, carpets, and drapes", "Instant high-potency fragrance dispersion"],
    image: "/images/luxury_cosmetics.jpg",
    badge: "Home & Hospitality",
    availableOptions: ["300ml Spray Bottles", "500ml Refills", "Commercial Bulk Packs"],
    priceNote: "Request Price / Get Wholesale Quote"
  },
  {
    id: "others-lotion-cream",
    name: "Scented Lotion & Nourishing Cream",
    category: "Others",
    originOrType: "Fragrance-Enriched Skincare",
    description: "Velvety moisturizers, body creams, and body butters formulated with shea butter, vitamin E, and infused with signature BARSHIP perfume essences.",
    details: ["Ultra-hydrating non-greasy absorption", "Signature long-lasting perfume lock technology", "Dermatologically tested and paraben-free"],
    image: "/images/luxury_cosmetics.jpg",
    badge: "Nourishing Radiance",
    availableOptions: ["100ml Tube", "200ml Luxury Pump Bottle", "Private Label Bulks"],
    priceNote: "Request Price / Get Wholesale Quote"
  },
  {
    id: "others-raw-agarwood",
    name: "Raw Agarwood Chips & Wood (Oud Wood)",
    category: "Others",
    originOrType: "Scented Resinous Heartwood",
    description: "Authentic wild-harvest and cultivated resin-saturated agarwood pieces for incense burning, distillation, and connoisseur collections.",
    details: ["Natural resin saturation grades", "Sourced from Cambodia, Indonesia, and Assam", "Pure unburned aroma upon heated charcoal"],
    image: "/images/luxury_oud.jpg",
    badge: "Connoisseur Grade",
    availableOptions: ["50g", "100g", "500g", "Kilogram Consignments"],
    priceNote: "Request Price / Get Wholesale Quote"
  },
  {
    id: "others-gift-packages",
    name: "Custom Gift Packages & Wedding Hampers",
    category: "Others",
    originOrType: "Curated VIP Presentation Sets",
    description: "Tailored corporate gifting, royal wedding hampers, and VIP presentation boxes containing assorted attars, luxury spray perfumes, and golden bakhoor burners.",
    details: ["Personalized corporate brass plaques & ribbons", "Modular multi-product combinations", "Unmatched unboxing experience"],
    image: "/images/custom_packaging_box.jpg",
    badge: "VIP & Corporate",
    availableOptions: ["Curated 2-piece to 5-piece Sets", "Festival Hampers", "Custom Branding"],
    priceNote: "Request Price / Get Wholesale Quote"
  }
];

export const ALL_PRODUCTS: ProductItem[] = [
  ...ATTAR_PRODUCTS,
  ...PERFUME_PRODUCTS,
  ...OTHERS_PRODUCTS
];

export function getWhatsAppUrl(productName?: string, category?: string): string {
  const phone = COMPANY_DETAILS.primaryWhatsAppRaw;
  const message = productName 
    ? `Hello BARSHIP Fragrances,\nI am interested in ${productName}${category ? ` (${category})` : ''}.\nPlease provide pricing and product details.`
    : `Hello BARSHIP Fragrances,\nI would like to enquire about your Attars, Perfumes, and ambient collections.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
