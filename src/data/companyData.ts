export interface ProductItem {
  id: string;
  name: string;
  category: 'Attar' | 'Perfume' | 'Precious Bottles' | 'Others';
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
    id: "attar-aseel",
    name: "Aseel Roll-On Perfume",
    category: "Attar",
    originOrType: "Roll-On Concentrated Attar (6ml)",
    description: "An opulent golden oriental attar featuring warm amber, refined agarwood nuances, delicate florals, and lingering spicy musk. Formulated with 100% non-alcoholic pure oil for lasting elegance.",
    details: [
      "100% Non-Alcoholic concentrated roll-on perfume oil",
      "Pocket-sized luxury flacon with gold cap and custom presentation box",
      "Unsurpassed 24h-48h longevity and projection on skin and fabrics",
      "Zohrain Perfumes authentic signature oriental formulation"
    ],
    image: "/images/attars/aseel.jpg",
    badge: "Best Seller",
    availableOptions: ["6ml Roll-on Bottle", "Individual Box Pack", "Pack of 6 / 12", "Wholesale Master Cartons"],
    priceNote: "Request Price / Wholesale Quote"
  },
  {
    id: "attar-black-rose",
    name: "Black Rose Roll-On Perfume",
    category: "Attar",
    originOrType: "Roll-On Concentrated Attar (6ml)",
    description: "An intoxicating union of midnight dark rose, smoky agarwood, crushed black petals, and sensual velvety amber. A deep, mysterious evening fragrance with commanding sillage.",
    details: [
      "6ml pure concentrated roll-on perfume oil",
      "Velvet midnight rose, dark amber, and woody musk accords",
      "Alcohol-free, skin-nourishing pure essential oil blend",
      "Premium dark purple & gold foiled presentation box"
    ],
    image: "/images/attars/black_rose.jpg",
    badge: "Dark Floral",
    availableOptions: ["6ml Roll-on Bottle", "Individual Box Pack", "Wholesale Pack (12 Units)", "Bulk Commercial Supply"],
    priceNote: "Request Price / Wholesale Quote"
  },
  {
    id: "attar-sultan",
    name: "Sultan Roll-On Perfume",
    category: "Attar",
    originOrType: "Roll-On Concentrated Attar (6ml)",
    description: "A regal attar crafted for majesty. Unveils bold oriental spices, noble agarwood, golden saffron, and a rich balsamic woody heart that commands admiration.",
    details: [
      "6ml high-concentration pure attar oil roll-on",
      "Opulent royal blend with deep oriental woody warmth",
      "Embossed burgundy & gold filigree luxury packaging",
      "Exceptional sillage and persistent projection"
    ],
    image: "/images/attars/sultan.jpg",
    badge: "Royal Signature",
    availableOptions: ["6ml Roll-on Bottle", "Luxury Gift Box", "Wholesale Dozen Pack", "Bulk Export Orders"],
    priceNote: "Request Price / Wholesale Quote"
  },
  {
    id: "attar-kiswa",
    name: "Kiswa Roll-On Perfume",
    category: "Attar",
    originOrType: "Roll-On Concentrated Attar (6ml)",
    description: "Capturing the sacred and spiritual aura of the Holy Kaaba's Kiswa cloth. A tranquil blend of aged black oudh, white musk, amber, and Taif rose that soothes the spirit.",
    details: [
      "100% Non-Alcoholic sacred spiritual formulation",
      "Sacred black & gold motif heritage packaging",
      "Pure black oudh, heavenly musk, and Taif rose notes",
      "Cherished for daily wear, spiritual gatherings, and prayer"
    ],
    image: "/images/attars/kiswa.jpg",
    badge: "Sacred Edition",
    availableOptions: ["6ml Roll-on Bottle", "Heritage Box Pack", "Pack of 6 / 12", "Export & Wholesale Consignments"],
    priceNote: "Request Price / Wholesale Quote"
  },
  {
    id: "attar-jannat-al-firdous",
    name: "Jannat Al Firdous Roll-On Perfume",
    category: "Attar",
    originOrType: "Roll-On Concentrated Attar (6ml)",
    description: "The quintessential garden of paradise. A revitalizing burst of blooming white jasmine, wild lotus, green garden herbs, neroli, and celestial crystalline musk.",
    details: [
      "6ml pure concentrated roll-on perfume oil",
      "Radiant floral bouquet: White jasmine, neroli, and fresh herbs",
      "Cooling, invigorating, and naturally uplifting aroma",
      "Vibrant emerald green botanical box with polished gold cap"
    ],
    image: "/images/attars/jannat_al_firdous.jpg",
    badge: "Timeless Classic",
    availableOptions: ["6ml Roll-on Bottle", "Signature Box Pack", "Wholesale Cartons", "Custom Multi-packs"],
    priceNote: "Request Price / Wholesale Quote"
  },
  {
    id: "attar-musk-rijali",
    name: "Musk Rijali Roll-On Perfume",
    category: "Attar",
    originOrType: "Roll-On Concentrated Attar (6ml)",
    description: "A sophisticated masculine and regal white musk composed with warm sandalwood, soft spicy nuances, and refined agarwood undertones. A clean, commanding classic for all occasions.",
    details: [
      "6ml pure concentrated roll-on perfume oil",
      "Regal masculine musk, creamy sandalwood & warm oud facets",
      "100% Non-Alcoholic, long-lasting personal projection",
      "Elegantly packaged in an ivory & gold Arabic calligraphic box"
    ],
    image: "/images/attars/musk_rijali.jpg",
    badge: "Signature Musk",
    availableOptions: ["6ml Roll-on Bottle", "Individual Box Pack", "Pack of 6 / 12", "Wholesale Master Cartons"],
    priceNote: "Request Price / Wholesale Quote"
  },
  {
    id: "attar-musk-al-tahara",
    name: "Musk Al Tahara Roll-On Perfume",
    category: "Attar",
    originOrType: "Roll-On Concentrated Attar (6ml)",
    description: "The sacred essence of purity. A velvety, thick white cream musk known for its gentle powdery softness, delicate white floral hints, and soothing sacred warmth.",
    details: [
      "6ml high-purity non-alcoholic concentrated roll-on",
      "Iconic purity scent: Powdery white musk & lotus blossom",
      "Deeply calming, fresh, and soothing skin-feel",
      "Embossed luxury white presentation box with golden deer arch motif"
    ],
    image: "/images/attars/musk_al_tahara.jpg",
    badge: "Purity & Sacred",
    availableOptions: ["6ml Roll-on Bottle", "Individual Box Pack", "Pack of 6 / 12", "Wholesale Master Cartons"],
    priceNote: "Request Price / Wholesale Quote"
  },
  {
    id: "attar-persian-gulab",
    name: "Persian Gulab Roll-On Perfume",
    category: "Attar",
    originOrType: "Roll-On Concentrated Attar (6ml)",
    description: "Inspired by the celestial royal gardens of Persia. A lavish distillation of velvety Damask red roses, sweet saffron nectar, and warm golden amber that blossoms with intoxicating romance.",
    details: [
      "6ml concentrated floral roll-on perfume oil",
      "Pure Persian Damascena rose, sparkling saffron & warm amber",
      "Rich, authentic floral sillage that blooms exquisitely on skin",
      "Enchanting royal garden star-lit presentation packaging"
    ],
    image: "/images/attars/persian_gulab.jpg",
    badge: "Royal Rose",
    availableOptions: ["6ml Roll-on Bottle", "Signature Box Pack", "Wholesale Dozen Pack", "Export Consignments"],
    priceNote: "Request Price / Wholesale Quote"
  },
  {
    id: "attar-majmoua",
    name: "Majmoua Roll-On Perfume",
    category: "Attar",
    originOrType: "Roll-On Concentrated Attar (6ml)",
    description: "The timeless heritage masterpiece of Indian attar perfumery. A masterfully aged bouquet uniting pure vetiver (Khus), kewra, warm earthen mitti, sandalwood, and noble agarwood for a deep, grounding, and spiritually centering essence.",
    details: [
      "6ml pure concentrated roll-on perfume oil",
      "Traditional Indian heritage blend: Vetiver, Kewra, Mitti & Sandalwood",
      "100% Non-Alcoholic, cooling and deeply calming sillage",
      "Signature metallic purple & bronze presentation packaging"
    ],
    image: "/images/attars/majmoua.jpg",
    badge: "Heritage Classic",
    availableOptions: ["6ml Roll-on Bottle", "Individual Box Pack", "Pack of 6 / 12", "Wholesale Master Cartons"],
    priceNote: "Request Price / Wholesale Quote"
  },
  {
    id: "attar-bloom-in-heaven",
    name: "Bloom in Heaven Roll-On Perfume",
    category: "Attar",
    originOrType: "Roll-On Concentrated Attar (6ml)",
    description: "An ethereal moonlight garden fragrance. Celestial night-blooming jasmine, royal white tuberose, luminous citrus blossoms, and starry musks evoke a majestic nocturnal palace bathed in full moonlight.",
    details: [
      "6ml pure concentrated roll-on perfume oil",
      "Night-blooming jasmine, white tuberose & ethereal crystalline musk",
      "Mesmerizing long-lasting sillage with romantic aura",
      "Designer midnight blue box featuring moonlit palace artwork"
    ],
    image: "/images/attars/bloom_in_heaven.jpg",
    badge: "Nocturnal Floral",
    availableOptions: ["6ml Roll-on Bottle", "Individual Box Pack", "Pack of 6 / 12", "Wholesale Master Cartons"],
    priceNote: "Request Price / Wholesale Quote"
  },
  {
    id: "attar-hawas",
    name: "Hawas Roll-On Perfume",
    category: "Attar",
    originOrType: "Roll-On Concentrated Attar (6ml)",
    description: "An intoxicating, magnetic fusion of fresh aquatic breeze, crisp Italian bergamot, violet leaves, spicy cinnamon, and deep ambergris woods. Contemporary, energetic, and irresistibly charismatic.",
    details: [
      "6ml pure concentrated roll-on perfume oil",
      "Fresh aquatic, violet, crisp citrus & warm ambergris accords",
      "High-projection modern scent engineered for all-day allure",
      "Vibrant royal purple presentation box with gold calligraphic script"
    ],
    image: "/images/attars/hawas.jpg",
    badge: "Magnetic Allure",
    availableOptions: ["6ml Roll-on Bottle", "Individual Box Pack", "Pack of 6 / 12", "Wholesale Master Cartons"],
    priceNote: "Request Price / Wholesale Quote"
  },
  {
    id: "attar-shanaya",
    name: "Shanaya Roll-On Perfume",
    category: "Attar",
    originOrType: "Roll-On Concentrated Attar (6ml)",
    description: "A luxurious, feminine oriental enchantment. Ripe dark berries, blooming Arabian orchid, cashmere wood, sweet bourbon vanilla, and golden caramel musk wrapped in royal velvet.",
    details: [
      "6ml pure concentrated roll-on perfume oil",
      "Sensual orchid, dark berries, creamy vanilla & cashmere musk",
      "Warm, sweet, and lavishly feminine oriental trail",
      "Luxury deep violet & gold embossed packaging"
    ],
    image: "/images/attars/shanaya.jpg",
    badge: "Luxury Velvet",
    availableOptions: ["6ml Roll-on Bottle", "Individual Box Pack", "Pack of 6 / 12", "Wholesale Master Cartons"],
    priceNote: "Request Price / Wholesale Quote"
  },
  {
    id: "attar-hurram",
    name: "Hurram Roll-On Perfume",
    category: "Attar",
    originOrType: "Roll-On Concentrated Attar (6ml)",
    description: "A powerful, commanding oriental fragrance inspired by the golden desert sunset. Rich smoky leather, golden amber, warm Arabian saffron, and persistent woody spices create an unforgettable aura of strength and nobility.",
    details: [
      "6ml concentrated roll-on perfume oil",
      "Rich & powerful aroma profile: Smoky leather, saffron & amber",
      "Engineered for intense sillage and prolonged longevity",
      "Distinctive golden desert sunset packaging with gold cap"
    ],
    image: "/images/attars/hurram.jpg",
    badge: "Powerful Aroma",
    availableOptions: ["6ml Roll-on Bottle", "Individual Box Pack", "Pack of 6 / 12", "Wholesale Master Cartons"],
    priceNote: "Request Price / Wholesale Quote"
  },
  {
    id: "attar-dien-oud",
    name: "Dien Oud Roll-On Perfume",
    category: "Attar",
    originOrType: "Roll-On Concentrated Attar (6ml)",
    description: "Pure Dehn Al Oudh essence captured in a roll-on flacon. Deep, aged agarwood heart with intense resinous smoke, warm leather, earthy balsamic tones, and rich sweet woody nuances.",
    details: [
      "6ml pure concentrated Dehn Al Oudh roll-on oil",
      "Aged agarwood resin, earthy balsamic & dark leather notes",
      "100% Non-Alcoholic, exceptional 48h+ longevity",
      "Imperial purple and gold foil framed presentation packaging"
    ],
    image: "/images/attars/dien_oud.jpg",
    badge: "Pure Dehn Oudh",
    availableOptions: ["6ml Roll-on Bottle", "Individual Box Pack", "Pack of 6 / 12", "Wholesale Master Cartons"],
    priceNote: "Request Price / Wholesale Quote"
  },
  {
    id: "attar-jasmine",
    name: "Jasmine Roll-On Perfume",
    category: "Attar",
    originOrType: "Roll-On Concentrated Attar (6ml)",
    description: "Pure, intoxicating Sambac and royal white Jasmine. Freshly picked dew-kissed petals, subtle sweet green leaves, and soft powdery white musk that radiate pure romance and natural radiance.",
    details: [
      "6ml concentrated pure floral perfume oil",
      "Fresh blooming Arabian jasmine & Sambac flower essence",
      "Sweet, cooling, and enchanting natural floral trail",
      "Emerald green botanical box with polished gold roll-on cap"
    ],
    image: "/images/attars/jasmine.jpg",
    badge: "Pure Floral",
    availableOptions: ["6ml Roll-on Bottle", "Individual Box Pack", "Pack of 6 / 12", "Wholesale Master Cartons"],
    priceNote: "Request Price / Wholesale Quote"
  },
  {
    id: "attar-kashmiri-oud",
    name: "Kashmiri Oud Roll-On Perfume",
    category: "Attar",
    originOrType: "Roll-On Concentrated Attar (6ml)",
    description: "A crisp, majestic high-altitude mountain oud inspired by the snow-capped Himalayan valleys of Kashmir. Pristine coniferous pine needles, cool mountain air, sweet saffron threads, and aged agarwood resin create an invigorating and noble warmth.",
    details: [
      "6ml concentrated pure roll-on perfume oil",
      "Crisp mountain pine, Kashmiri saffron & resinous agarwood",
      "Refreshing cooling opening transitioning into comforting warmth",
      "Scenic snow-clad Himalayan mountain landscape packaging with gold cap"
    ],
    image: "/images/attars/kashmiri_oud.jpg",
    badge: "Himalayan Noble",
    availableOptions: ["6ml Roll-on Bottle", "Individual Box Pack", "Pack of 6 / 12", "Wholesale Master Cartons"],
    priceNote: "Request Price / Wholesale Quote"
  },
  {
    id: "attar-white-oud",
    name: "White Oud Roll-On Perfume",
    category: "Attar",
    originOrType: "Roll-On Concentrated Attar (6ml)",
    description: "An ethereal, contemporary interpretation of oriental agarwood. Luminous white amber, soft powdery musk, delicate floral nuances, and smooth creamy agarwood without sharp animalic notes. Elegant, clean, and universally flattering.",
    details: [
      "6ml pure concentrated roll-on perfume oil",
      "Smooth white agarwood, sheer amber & crystalline musk",
      "Subtle, sophisticated, and perfect for modern daily wear",
      "Pastel lavender-lilac packaging with gold hot-stamped typography"
    ],
    image: "/images/attars/white_oud.jpg",
    badge: "Contemporary Pure",
    availableOptions: ["6ml Roll-on Bottle", "Individual Box Pack", "Pack of 6 / 12", "Wholesale Master Cartons"],
    priceNote: "Request Price / Wholesale Quote"
  },
  {
    id: "attar-gucci-flora",
    name: "Gucci Flora Roll-On Perfume",
    category: "Attar",
    originOrType: "Roll-On Concentrated Attar (6ml)",
    description: "A luxurious, French-inspired designer floral attar. Blooming pink peonies, velvety garden rose petals, osmanthus blossom, and warm pink pepper grounded by sweet sandalwood and patchouli musk. Radiantly youthful and opulent.",
    details: [
      "6ml concentrated roll-on designer perfume oil",
      "Blooming pink peonies, garden rose, osmanthus & pink pepper",
      "100% Non-Alcoholic, long-lasting romantic floral projection",
      "Rich plum-purple packaging with vibrant blooming pink peony artwork"
    ],
    image: "/images/attars/gucci_flora.jpg",
    badge: "Designer Floral",
    availableOptions: ["6ml Roll-on Bottle", "Individual Box Pack", "Pack of 6 / 12", "Wholesale Master Cartons"],
    priceNote: "Request Price / Wholesale Quote"
  },
  {
    id: "attar-black-oud",
    name: "Black Oud Roll-On Perfume",
    category: "Attar",
    originOrType: "Roll-On Concentrated Attar (6ml)",
    description: "A deep, dark hypnotic masterpiece. Concentrated black Cambodian agarwood, charred birch tar smoke, dark leather, labdanum resin, and midnight patchouli. Seductive, brooding, and intensely long-lasting.",
    details: [
      "6ml concentrated roll-on pure perfume oil",
      "Dark Cambodian agarwood, leather, smoky birch & amber resin",
      "100% Non-Alcoholic, immense sillage and projection",
      "Matte black & gold hot-stamped box featuring traditional mabkhara incense burner"
    ],
    image: "/images/attars/black_oud.jpg",
    badge: "Dark Intense",
    availableOptions: ["6ml Roll-on Bottle", "Individual Box Pack", "Pack of 6 / 12", "Wholesale Master Cartons"],
    priceNote: "Request Price / Wholesale Quote"
  },
  {
    id: "attar-shamama",
    name: "Shamama Roll-On Perfume",
    category: "Attar",
    originOrType: "Roll-On Concentrated Attar (6ml)",
    description: "The legendary Shamamatul Amber heritage formulation. A secret recipe of over 40 rare herbs, medicinal roots, spices, saffron, amber, and aged sandalwood distilled over weeks in traditional degs. Earthy, warm, spicy, and deeply meditative.",
    details: [
      "6ml pure concentrated artisanal attar roll-on",
      "Traditional Shamamatul Amber blend: 40+ exotic herbs, saffron & sandalwood",
      "Intensely grounding, warm balsamic, and soothing spiritual aroma",
      "Regal black & gold presentation box with crystal tola flacon crest"
    ],
    image: "/images/attars/shamama.jpg",
    badge: "Heritage Herbal",
    availableOptions: ["6ml Roll-on Bottle", "Individual Box Pack", "Pack of 6 / 12", "Wholesale Master Cartons"],
    priceNote: "Request Price / Wholesale Quote"
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

export const BOTTLE_PRODUCTS: ProductItem[] = [
  {
    id: "bottle-gemstone-crystal-flacons",
    name: "Royal Gemstone Crystal Attar Flacons (Emerald, Sapphire & Gold)",
    category: "Precious Bottles",
    originOrType: "Faceted K9 Optical Crystal & Jeweled Finials",
    description: "Heavy cut-crystal flacons crowned with diamond-faceted jewel stoppers and golden filigree collars. Includes Emerald Green, Sapphire Blue, and Royal 24K Gold lattice designs with precision dipstick glass applicators.",
    details: [
      "Precision cut optical crystal flacons with refractive facets",
      "Faceted emerald green, sapphire blue, and crystal clear jewel stoppers",
      "Solid brass gold electroplated airtight screw collars",
      "Airtight glass dipstick wands for attar and pure dehn al oudh",
      "Available in 6ml (1/2 Tola) & 12ml (1 Tola) capacities"
    ],
    image: "/images/bottles/royal_gemstone_crystal_flacons.jpg",
    badge: "Showcase Collection",
    availableOptions: ["Emerald Green Jewel (6ml / 12ml)", "Sapphire Blue Jewel (6ml / 12ml)", "Gold Filigree Crown (6ml / 12ml)", "Set of 3 Collector's Display"],
    priceNote: "Request Price / Get Wholesale Quote"
  },
  {
    id: "bottle-wholesale-aluminum-canisters",
    name: "Pure Attar & Essential Oil Wholesale Aluminum Canisters",
    category: "Precious Bottles",
    originOrType: "Export-Grade Seamless Aluminum",
    description: "Heavy-gauge brushed seamless aluminum storage and shipping canisters with leak-proof tamper-evident threaded closures. Specially engineered to protect pure perfume oils, oud extracts, and essential oils from UV degradation and oxidation.",
    details: [
      "Cosmetic & export grade pure anodized seamless aluminum",
      "Hermetic dual-seal leak-proof threaded white plugs and safety caps",
      "100% light-blocking UV defense for delicate botanical oils & oudh",
      "Meets international air cargo & courier transport standards",
      "Capacities: 100ml, 250ml, 500ml, and 1000ml (1 Litre)"
    ],
    image: "/images/bottles/wholesale_aluminum_canisters.jpg",
    badge: "Bulk Export Grade",
    availableOptions: ["100ml Canister", "250ml Canister", "500ml Canister", "1000ml (1 Litre) Canister", "Master Carton Pack"],
    priceNote: "Request Price / Get Wholesale Quote"
  },
  {
    id: "bottle-vintage-butterfly-floral",
    name: "Imperial Enamelled Butterfly & Vintage Floral Crystal Flacons",
    category: "Precious Bottles",
    originOrType: "Artisanal Jeweled Glass & Hand-Painted Enamel",
    description: "Exquisite collector's edition artisanal perfume bottles featuring 24K gold filigree butterfly wings with rhinestone inlays, hand-painted pastel floral detailing, frosted lilac spherical decanters with bronze floral motifs, and traditional Arabic gold tolas.",
    details: [
      "Hand-welded 24K gold-plated filigree butterfly cage with enamel blossoms",
      "Rhinestone crystal accents on wings and faceted gem stopper",
      "Antique bronze floral relief overlay on frosted lilac glass sphere",
      "Traditional Arabic gold lattice tola bottle with dome stopper",
      "Equipped with integrated glass applicator rods"
    ],
    image: "/images/bottles/vintage_butterfly_floral_flacons.jpg",
    badge: "Artisanal Enamel",
    availableOptions: ["Golden Butterfly Enamel Flacon", "Lilac Frosted Antique Bronze Flacon", "Arabic Gold Dome Tola", "Deluxe 4-Piece Showcase Set"],
    priceNote: "Request Price / Get Wholesale Quote"
  },
  {
    id: "bottle-designer-miniature-pearl",
    name: "Prestige Designer Miniature & Pearl-Studded Flacons",
    category: "Precious Bottles",
    originOrType: "Haute Parfumerie Miniature Crystal Vials",
    description: "A stunning assortment of luxury miniature perfume vials: Royal lacquer crimson bottle with golden crown, translucent frosted azure silhouette, exquisite golden pearl-beaded cube tola, modern crimson block flacon with gold lock bar, and traditional Arabic gold filigree tear bottle.",
    details: [
      "Five distinct architectural designs for pocket luxury & bridal gifting",
      "Hand-set ivory pearl-beaded grid casing with gold dome finial",
      "High-gloss royal red lacquer with sculpted golden crown cap",
      "Curved azure frosted silhouette with mirror-finish gold stopper",
      "Traditional Arabian palace filigree with delicate glass dipping wand"
    ],
    image: "/images/bottles/designer_miniature_pearl_flacons.jpg",
    badge: "Designer Miniatures",
    availableOptions: ["Pearl-Studded Cube Tola (6ml)", "Crimson Red Crown Flacon (6ml)", "Azure Silhouette Flacon (6ml)", "Crimson Gold Bar Flacon (6ml)", "Arabic Filigree Tear Bottle (6ml)", "Complete 5-Piece Gift Suite"],
    priceNote: "Request Price / Get Wholesale Quote"
  },
  {
    id: "bottle-luxury-bakhoor-pomade-jars",
    name: "Royal Bakhoor Jars & Luxury Solid Perfume Containers",
    category: "Precious Bottles",
    originOrType: "Luxury Lacquer, Metallic & Fluted Jars",
    description: "Multi-purpose luxury containers designed for royal bakhoor incense, solid perfume balms, scented pomades, and body creams. Featuring fluted jade-turquoise dome jars, brushed metallic copper compacts, and vibrant coral pink jars with polished gold rings.",
    details: [
      "High-grade cosmetic and incense preservation materials",
      "Airtight screw lids preserving resinous aromas and moisture",
      "Jade turquoise fluted dome with ruby ribbon accent",
      "Metallic copper-bronze circular compact with stepped lid",
      "Coral pink gloss jar with electroplated 24K gold accent ring",
      "Ideal for bakhoor agarwood, solid musk, body butters, and hair pomades"
    ],
    image: "/images/bottles/luxury_bakhoor_pomade_jars.jpg",
    badge: "Bakhoor & Pomade Jars",
    availableOptions: ["Jade Turquoise Fluted Jar (50g / 100g)", "Metallic Bronze Compact (30g / 50g)", "Coral Gold-Ring Jar (50g / 100g)", "Wholesale Carton Assortment"],
    priceNote: "Request Price / Get Wholesale Quote"
  },
  {
    id: "bottle-onyx-amber-bakhoor-jars",
    name: "Royal Amber & Onyx Bakhoor Jars with 24K Gold Ring",
    category: "Precious Bottles",
    originOrType: "High-Gloss Lacquer Acrylic with 24K Gold Accent",
    description: "High-gloss luxury screw-top containers featuring deep Onyx Black and rich Amber Brown finishes adorned with 24K electroplated gold accent rings. Engineered for preserving royal bakhoor, incense chips, solid musk balms, and luxury pomades.",
    details: [
      "Heavyweight dual-wall high-gloss lacquer containers",
      "Electroplated 24K polished gold ring accent collar",
      "Airtight threaded inner seal locking in volatile aromas & moisture",
      "Available in deep Onyx Black and rich Amber Brown finishes",
      "Capacities: 50g, 100g, and 150g options"
    ],
    image: "/images/bottles/onyx_amber_bakhoor_jars.jpg",
    badge: "Onyx & Amber Jars",
    availableOptions: ["Onyx Black with Gold Ring (50g / 100g)", "Amber Brown with Gold Ring (50g / 100g)", "Twin Pair Gift Set", "Wholesale Pack of 12 / 24"],
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
  ...BOTTLE_PRODUCTS,
  ...OTHERS_PRODUCTS
];

export function getWhatsAppUrl(productName?: string, category?: string): string {
  const phone = COMPANY_DETAILS.primaryWhatsAppRaw;
  const message = productName 
    ? `Hello BARSHIP Fragrances,\nI am interested in ${productName}${category ? ` (${category})` : ''}.\nPlease provide pricing and product details.`
    : `Hello BARSHIP Fragrances,\nI would like to enquire about your Attars, Perfumes, and ambient collections.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
