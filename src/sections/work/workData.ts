export interface Project {
  id: number;
  name: string;
  shortName: string;
  type: string;
  category: string;
  client: string;
  role: string;
  year: string;
  status: string;
  description: string;
  technologies: string[];
  image: string;
  gallery?: string[];
}

const projects: Project[] = [

  // =====================================================
  // 01 — WEB DEVELOPMENT
  // =====================================================

  {
    id: 1,
    name: "SHMB HONEY",
    shortName: "SHMB",
    type: "E-commerce Experience",
    category: "WEB DEVELOPMENT",
    client: "SHMB Honey",
    role: "Design & Development",
    year: "2026",
    status: "COMPLETED",

    description:
      "A complete e-commerce experience for a premium honey brand, combining clean visual design with seamless functionality.",

    technologies: [
      "MERN",
      "UI/UX",
      "E-COMMERCE",
      "RAZORPAY"
    ],

    image: "/images/web.png"
  },


  // =====================================================
  // 02 — UI/UX DESIGN
  // =====================================================

  {
    id: 2,
    name: "DIGITAL EXPERIENCE",
    shortName: "DIGITAL UX",
    type: "UI/UX Design",
    category: "UI/UX DESIGN",
    client: "Independent Project",
    role: "UI/UX Designer",
    year: "2026",
    status: "COMPLETED",

    description:
      "A clean and intuitive digital experience focused on user flow, visual hierarchy, responsive layouts and purposeful interface design.",

    technologies: [
      "UI DESIGN",
      "UX RESEARCH",
      "PROTOTYPING",
      "FIGMA"
    ],

    image: "/images/ux.png"
  },


  // =====================================================
  // 03 — 3D EXHIBITION
  // =====================================================

  {
    id: 3,
    name: "INDRA PHARMACY",
    shortName: "INDRA",
    type: "3D Exhibition Design",
    category: "3D EXHIBITION",
    client: "Indra Pharmacy",
    role: "3D Design & Visualization",
    year: "2026",
    status: "COMPLETED",

    description:
      "A complete exhibition stall concept created to transform brand presence into an immersive physical experience.",

    technologies: [
      "3D DESIGN",
      "BLENDER",
      "VISUALIZATION",
      "SPACE"
    ],

    image: "/stall/E1/E1.1.png",

    gallery: [
      "/stall/E1/E1.1.png",
      "/stall/E1/E1.2.png",
      "/stall/E1/E1.3.png"
    ]
  },


  // =====================================================
  // 04 — PACKAGING DESIGN
  // =====================================================

  {
    id: 4,
    name: "POPPED! SNACKS",
    shortName: "POPPED",
    type: "Food Packaging Design",
    category: "PACKAGING DESIGN",
    client: "Popped! Snacks",
    role: "Packaging & Visual Design",
    year: "2026",
    status: "COMPLETED",

    description:
      "A bold packaging system created to make a snack brand visually distinctive, memorable and shelf-ready.",

    technologies: [
      "PACKAGING",
      "BRANDING",
      "3D MOCKUP",
      "VISUAL DESIGN"
    ],

    image: "/images/packaging.jpg"
  },


  // =====================================================
  // 05 — LOGO DESIGN
  // =====================================================

  {
    id: 5,
    name: "FRINGE BALTIMORE",
    shortName: "FRINGE",
    type: "Logo Design",
    category: "LOGO DESIGN",
    client: "Fringe Baltimore",
    role: "Logo & Identity Design",
    year: "2026",
    status: "COMPLETED",

    description:
      "A bold and elegant identity exploring custom lettering, luxury finishes and a distinctive handcrafted mark.",

    technologies: [
      "LOGO DESIGN",
      "TYPOGRAPHY",
      "BRAND IDENTITY"
    ],

    image: "/logos/logo1.jpeg"
  },


  {
    id: 6,
    name: "PRECISION HYDRO INFRASTRUCTURE",
    shortName: "PRECISION",
    type: "Logo Design",
    category: "LOGO DESIGN",
    client: "Precision Hydro Infrastructure",
    role: "Logo Design",
    year: "2026",
    status: "COMPLETED",

    description:
      "A professional corporate identity combining precision, infrastructure and water-inspired visual elements.",

    technologies: [
      "LOGO DESIGN",
      "BRAND IDENTITY",
      "CORPORATE IDENTITY"
    ],

    image: "/logos/logo2.jpg"
  },


  {
    id: 7,
    name: "LION IDENTITY",
    shortName: "LION",
    type: "Logo Design",
    category: "LOGO DESIGN",
    client: "Brand Identity",
    role: "Logo Design",
    year: "2026",
    status: "COMPLETED",

    description:
      "A distinctive visual identity developed with a strong geometric character and handcrafted visual language.",

    technologies: [
      "LOGO DESIGN",
      "BRAND IDENTITY",
      "VISUAL IDENTITY"
    ],

    image: "/logos/logo3.jpg"
  },


  // =====================================================
  // 06 — BRAND IDENTITY
  // =====================================================

  {
    id: 8,
    name: "RAGHAVAN NATUROPATHY",
    shortName: "RAGHAVAN",
    type: "Brand Identity Design",
    category: "BRAND IDENTITY",
    client: "Raghavan Naturopathy",
    role: "Brand Identity & Visual Design",
    year: "2025",
    status: "COMPLETED",

    description:
      "A complete visual identity and brand guideline system for Raghavan Naturopathy, defining its visual language through logo usage, color, typography and brand applications.",

    technologies: [
      "BRAND IDENTITY",
      "LOGO DESIGN",
      "TYPOGRAPHY",
      "COLOR SYSTEM",
      "BRAND GUIDELINES"
    ],

    image: "/logos/logo4/logo4.1.jpg",

    gallery: [
      "/logos/logo4/logo4.1.jpg",
      "/logos/logo4/logo4.2.jpg",
      "/logos/logo4/logo4.3.jpg",
      "/logos/logo4/logo4.4.jpg",
      "/logos/logo4/logo4.5.jpg",
      "/logos/logo4/logo4.6.jpg",
      "/logos/logo4/logo4.7.jpg",
      "/logos/logo4/logo4.8.jpg",
      "/logos/logo4/logo4.9.jpg",
      "/logos/logo4/logo4.10.jpg",
      "/logos/logo4/logo4.11.jpg",
      "/logos/logo4/logo4.12.jpg",
      "/logos/logo4/logo4.13.jpg"
    ]
  },


  // =====================================================
  // 07 — BOOK COVER DESIGN
  // =====================================================

  {
    id: 9,
    name: "THE HOLLYWOOD ASSISTANT",
    shortName: "HOLLYWOOD",
    type: "Book Cover Design",
    category: "BOOK COVER DESIGN",
    client: "Michael HaDera",
    role: "Book Cover & Visual Design",
    year: "2026",
    status: "COMPLETED",

    description:
      "A cinematic book cover design created to capture the atmosphere of the entertainment industry while giving the book a strong and professional visual identity.",

    technologies: [
      "BOOK COVER",
      "TYPOGRAPHY",
      "VISUAL DESIGN",
      "3D MOCKUP"
    ],

    image: "/book-cover/bc1.jpeg"
  },


  {
    id: 10,
    name: "JEKYLL THE JESTER",
    shortName: "JEKYLL",
    type: "Book Cover Design",
    category: "BOOK COVER DESIGN",
    client: "Jamie T. Hines",
    role: "Book Cover & Visual Design",
    year: "2026",
    status: "COMPLETED",

    description:
      "A colorful children's book cover designed around a playful circus-inspired visual direction with strong character illustration and expressive typography.",

    technologies: [
      "BOOK COVER",
      "TYPOGRAPHY",
      "CHARACTER DESIGN",
      "3D MOCKUP"
    ],

    image: "/book-cover/bc2.jpeg"
  },


  {
    id: 11,
    name: "THE HOLLYWOOD ASSISTANT — FULL COVER",
    shortName: "HOLLYWOOD",
    type: "Book Cover Design",
    category: "BOOK COVER DESIGN",
    client: "Michael HaDera",
    role: "Book Cover & Visual Design",
    year: "2026",
    status: "COMPLETED",

    description:
      "A complete book cover presentation exploring the front cover, spine and back cover as a cohesive publishing design system.",

    technologies: [
      "BOOK COVER",
      "EDITORIAL",
      "TYPOGRAPHY",
      "PRINT DESIGN"
    ],

    image: "/book-cover/bc3.jpeg"
  },


  {
    id: 12,
    name: "EAT YOUR PUMPKIN FIRST",
    shortName: "PUMPKIN",
    type: "Book Cover Design",
    category: "BOOK COVER DESIGN",
    client: "Norman Sharpe",
    role: "Book Cover & Visual Design",
    year: "2026",
    status: "COMPLETED",

    description:
      "A dramatic and story-driven book cover design using cinematic imagery, atmospheric lighting and expressive typography to create emotional impact.",

    technologies: [
      "BOOK COVER",
      "TYPOGRAPHY",
      "PHOTO COMPOSITION",
      "3D MOCKUP"
    ],

    image: "/book-cover/bc4.jpeg"
  },


  {
    id: 13,
    name: "ADVENTURE ON MAGIA WORLD",
    shortName: "MAGIA",
    type: "Book Cover Design",
    category: "BOOK COVER DESIGN",
    client: "Miran Ansair",
    role: "Book Cover & Visual Design",
    year: "2026",
    status: "COMPLETED",

    description:
      "A fantasy-inspired book cover designed with dramatic character composition, magical visual effects and bold fantasy typography.",

    technologies: [
      "BOOK COVER",
      "FANTASY DESIGN",
      "TYPOGRAPHY",
      "3D MOCKUP"
    ],

    image: "/book-cover/bc5.jpeg"
  },


  {
    id: 14,
    name: "THE VISIBLE MISSION",
    shortName: "MISSION",
    type: "Book Cover Design",
    category: "BOOK COVER DESIGN",
    client: "Henk Joubert",
    role: "Book Cover & Visual Design",
    year: "2026",
    status: "COMPLETED",

    description:
      "A clean and modern book cover system combining strong typography, minimal composition and a distinctive visual concept across the front and back cover.",

    technologies: [
      "BOOK COVER",
      "EDITORIAL",
      "TYPOGRAPHY",
      "PRINT DESIGN"
    ],

    image: "/book-cover/bc6.jpeg"
  },


  // =====================================================
  // 08 — CATALOG DESIGN
  // =====================================================

  {
    id: 15,
    name: "REACTION CATALOG",
    shortName: "REACTION",
    type: "Industrial Catalog Design",
    category: "CATALOG DESIGN",
    client: "Reaction Utilities",
    role: "Graphic & Editorial Design",
    year: "2026",
    status: "COMPLETED",

    description:
      "A professional industrial catalog designed to present company capabilities, services, projects and certifications through a structured editorial layout.",

    technologies: [
      "CATALOG DESIGN",
      "EDITORIAL",
      "LAYOUT",
      "PRINT DESIGN"
    ],

    image: "/catalog/C1.jpeg"
  },


  {
    id: 16,
    name: "REACTION CATALOG — SECOND",
    shortName: "REACTION 02",
    type: "Industrial Catalog Design",
    category: "CATALOG DESIGN",
    client: "Reaction Utilities",
    role: "Graphic & Editorial Design",
    year: "2026",
    status: "COMPLETED",

    description:
      "A second industrial catalog design exploring a clean visual system, structured information hierarchy and professional corporate presentation.",

    technologies: [
      "CATALOG DESIGN",
      "EDITORIAL",
      "LAYOUT",
      "PRINT DESIGN"
    ],

    image: "/catalog/C2.jpeg"
  },


  // =====================================================
  // 09 — BROCHURE DESIGN
  // =====================================================

  {
    id: 17,
    name: "ALWAYS UNLEASHED",
    shortName: "UNLEASHED",
    type: "Brochure Design",
    category: "BROCHURE DESIGN",
    client: "Always Unleashed Pet Resort",
    role: "Graphic & Editorial Design",
    year: "2026",
    status: "COMPLETED",

    description:
      "A premium FAQ brochure designed for a pet resort, combining a bold black and gold visual identity with clear, easy-to-follow information.",

    technologies: [
      "BROCHURE DESIGN",
      "EDITORIAL",
      "LAYOUT",
      "BRANDING"
    ],

    image: "/brochure/b1.jpeg"
  },


  {
    id: 18,
    name: "LOTUS SEARCH & HR GROUP",
    shortName: "LOTUS",
    type: "Corporate Brochure Design",
    category: "BROCHURE DESIGN",
    client: "Lotus Search & HR Group",
    role: "Graphic & Editorial Design",
    year: "2026",
    status: "COMPLETED",

    description:
      "A clean corporate brochure designed to communicate recruitment and HR solutions through a professional visual system, structured layouts and clear information hierarchy.",

    technologies: [
      "BROCHURE DESIGN",
      "EDITORIAL",
      "LAYOUT",
      "CORPORATE DESIGN"
    ],

    image: "/brochure/b2.jpeg"
  },


  {
    id: 19,
    name: "NX LEVEL DISINFECTION",
    shortName: "NX LEVEL",
    type: "Corporate Brochure Design",
    category: "BROCHURE DESIGN",
    client: "NX Level Disinfection",
    role: "Graphic & Editorial Design",
    year: "2026",
    status: "COMPLETED",

    description:
      "A professional brochure designed to present disinfection services, technology and product information through a clear and engaging editorial layout.",

    technologies: [
      "BROCHURE DESIGN",
      "EDITORIAL",
      "LAYOUT",
      "PRINT DESIGN"
    ],

    image: "/brochure/b3.jpeg"
  },


  // =====================================================
  // 10 — ADDITIONAL BROCHURE WORK
  // =====================================================

  {
    id: 20,
    name: "iMEDICOR HEALTHCARE",
    shortName: "iMEDICOR",
    type: "Healthcare Brochure Design",
    category: "BROCHURE DESIGN",
    client: "iMedico",
    role: "Graphic & Editorial Design",
    year: "2025",
    status: "COMPLETED",

    description:
      "A professional healthcare brochure designed for iMedico, presenting healthcare information, software features and dental solutions through a clean blue-and-white visual system.",

    technologies: [
      "BROCHURE DESIGN",
      "HEALTHCARE DESIGN",
      "EDITORIAL",
      "LAYOUT"
    ],

    image: "/brochure/b4.jpeg"
  },


  {
    id: 21,
    name: "IZZY PAYROLL",
    shortName: "IZZY",
    type: "Business Brochure Design",
    category: "BROCHURE DESIGN",
    client: "Izzy Payroll",
    role: "Graphic & Editorial Design",
    year: "2025",
    status: "COMPLETED",

    description:
      "A vibrant business brochure created for Izzy Payroll to communicate payroll services and solutions for small businesses using a clear and approachable visual style.",

    technologies: [
      "BROCHURE DESIGN",
      "EDITORIAL",
      "LAYOUT",
      "BUSINESS DESIGN"
    ],

    image: "/brochure/b5.jpeg"
  },


  {
    id: 22,
    name: "KOZZET HOSPITALITY",
    shortName: "KOZZET",
    type: "Hospitality Brochure Design",
    category: "BROCHURE DESIGN",
    client: "Kozzet",
    role: "Graphic & Editorial Design",
    year: "2025",
    status: "COMPLETED",

    description:
      "A modern hospitality brochure designed to showcase Kozzet's guest experience platform, key benefits, services and ordering process.",

    technologies: [
      "BROCHURE DESIGN",
      "HOSPITALITY",
      "EDITORIAL",
      "LAYOUT"
    ],

    image: "/brochure/b6.jpeg"
  },


  {
    id: 23,
    name: "LIVE WITNESS",
    shortName: "LIVE WITNESS",
    type: "Technology Brochure Design",
    category: "BROCHURE DESIGN",
    client: "Digifort",
    role: "Graphic & Editorial Design",
    year: "2025",
    status: "COMPLETED",

    description:
      "A bold technology-focused brochure designed for Digifort's Live Witness solution, highlighting public safety, real-time reporting, applications and collaborative security features.",

    technologies: [
      "BROCHURE DESIGN",
      "TECHNOLOGY",
      "EDITORIAL",
      "VISUAL DESIGN"
    ],

    image: "/brochure/b7.jpeg"
  },


  // =====================================================
  // 11 — PRODUCT CATALOG
  // =====================================================

  {
    id: 24,
    name: "MRCOOL PRODUCT CATALOG",
    shortName: "MRCOOL",
    type: "Product Catalog Design",
    category: "CATALOG DESIGN",
    client: "MRCOOL",
    role: "Graphic & Editorial Design",
    year: "2025",
    status: "COMPLETED",

    description:
      "A product-focused catalog designed for MRCOOL, presenting residential air-conditioning products, specifications, features and product information in a clean technical layout.",

    technologies: [
      "CATALOG DESIGN",
      "PRODUCT DESIGN",
      "EDITORIAL",
      "TECHNICAL LAYOUT"
    ],

    image: "/brochure/b8.jpeg"
  },


  // =====================================================
  // 12 — MORE BROCHURE DESIGN
  // =====================================================

  {
    id: 25,
    name: "IVORY ANESTHESIA",
    shortName: "IVORY",
    type: "Healthcare Brochure Design",
    category: "BROCHURE DESIGN",
    client: "Ivory Anesthesia",
    role: "Graphic & Editorial Design",
    year: "2025",
    status: "COMPLETED",

    description:
      "A healthcare brochure designed to communicate anesthesia services, patient information, safety practices and hospital-quality care through a professional medical visual system.",

    technologies: [
      "BROCHURE DESIGN",
      "HEALTHCARE",
      "EDITORIAL",
      "PRINT DESIGN"
    ],

    image: "/brochure/b9.jpeg"
  },


  {
    id: 26,
    name: "MBF MEDICAL BENEVOLENCE FOUNDATION",
    shortName: "MBF",
    type: "Healthcare Brochure Design",
    category: "BROCHURE DESIGN",
    client: "Medical Benevolence Foundation",
    role: "Graphic & Editorial Design",
    year: "2025",
    status: "COMPLETED",

    description:
      "A humanitarian healthcare brochure communicating MBF's mission of integrating spiritual care with medical care through a strong editorial and visual storytelling approach.",

    technologies: [
      "BROCHURE DESIGN",
      "EDITORIAL",
      "VISUAL STORYTELLING",
      "PRINT DESIGN"
    ],

    image: "/brochure/b10.jpg"
  },


  {
    id: 27,
    name: "LUXHAUS POUR OVER",
    shortName: "LUXHAUS",
    type: "Brochure Design",
    category: "BROCHURE DESIGN",
    client: "LuxHaus",
    role: "Graphic & Editorial Design",
    year: "2026",
    status: "COMPLETED",

    description:
      "A premium coffee product brochure designed for LuxHaus, combining a bold red visual identity, product presentation and an easy-to-follow pour-over brewing guide.",

    technologies: [
      "BROCHURE DESIGN",
      "EDITORIAL",
      "LAYOUT",
      "PRODUCT DESIGN"
    ],

    image: "/brochure/b11.jpeg"
  },


  {
    id: 28,
    name: "MCF MORTGAGES",
    shortName: "MCF",
    type: "Corporate Brochure Design",
    category: "BROCHURE DESIGN",
    client: "MCF Mortgages",
    role: "Graphic & Editorial Design",
    year: "2026",
    status: "COMPLETED",

    description:
      "A professional mortgage brochure designed for MCF Mortgages, presenting lending solutions, mortgage services and company information through a clean blue corporate visual system.",

    technologies: [
      "BROCHURE DESIGN",
      "EDITORIAL",
      "LAYOUT",
      "CORPORATE DESIGN"
    ],

    image: "/brochure/b12.jpeg"
  },


  {
    id: 29,
    name: "NATURAL FIT",
    shortName: "NATURAL FIT",
    type: "Brochure Design",
    category: "BROCHURE DESIGN",
    client: "Natural Fit",
    role: "Graphic & Editorial Design",
    year: "2026",
    status: "COMPLETED",

    description:
      "A vibrant product brochure designed for Natural Fit, using a fresh green and orange visual system to showcase healthy food products, brand messaging and product information.",

    technologies: [
      "BROCHURE DESIGN",
      "EDITORIAL",
      "LAYOUT",
      "BRANDING"
    ],

    image: "/brochure/b13.jpg"
  },


  // =====================================================
  // 13 — FOOD PACKAGING
  // =====================================================

  {
    id: 30,
    name: "WHEALTHY OJAS LADDU",
    shortName: "WHEALTHY",
    type: "Food Packaging Design",
    category: "FOOD PACKAGING",
    client: "Whealthy",
    role: "Packaging & Visual Design",
    year: "2026",
    status: "COMPLETED",

    description:
      "A premium Ayurvedic food packaging design for Whealthy Ojas Laddu, combining a rich green and gold visual identity with traditional ingredients and a modern, health-focused presentation.",

    technologies: [
      "PACKAGING DESIGN",
      "BRANDING",
      "PRODUCT VISUAL",
      "3D MOCKUP"
    ],

    image: "/food-packing/fp1/fp1.1.png",

    gallery: [
      "/food-packing/fp1/fp1.1.png",
      "/food-packing/fp1/fp1.2.png",
      "/food-packing/fp1/fp1.3.png",
      "/food-packing/fp1/fp1.4.png",
      "/food-packing/fp1/fp1.5.png",
      "/food-packing/fp1/fp1.6.png"
    ]
  },


  {
    id: 31,
    name: "DROPS OF NATURE",
    shortName: "DROPS",
    type: "Food Packaging Design",
    category: "FOOD PACKAGING",
    client: "Drops of Nature",
    role: "Packaging & Visual Design",
    year: "2026",
    status: "COMPLETED",

    description:
      "A premium supplement packaging design created for Drops of Nature, combining a clean botanical visual language with strong product hierarchy and a modern wellness-focused identity.",

    technologies: [
      "PACKAGING DESIGN",
      "BRANDING",
      "LABEL DESIGN",
      "3D MOCKUP"
    ],

    image: "/food-packing/fp2/fp-2.1.jpeg",

    gallery: [
      "/food-packing/fp2/fp-2.1.jpeg",
      "/food-packing/fp2/fp-2.2.png",
      "/food-packing/fp2/fp -2.3.png"
    ]
  },


  {
    id: 32,
    name: "BLOSSOM INFANT FORMULA",
    shortName: "BLOSSOM",
    type: "Food Packaging Design",
    category: "FOOD PACKAGING",
    client: "BioBaby Naturals",
    role: "Packaging & Visual Design",
    year: "2026",
    status: "COMPLETED",

    description:
      "A warm and nature-inspired packaging design for Blossom Infant Formula, combining soft earthy tones, botanical illustrations and a clean information-focused layout to create a premium and trustworthy product identity.",

    technologies: [
      "PACKAGING DESIGN",
      "BRANDING",
      "LABEL DESIGN",
      "PRODUCT MOCKUP"
    ],

    image: "/food-packing/fp3/fp3.1.jpg",

    gallery: [
      "/food-packing/fp3/fp3.1.jpg",
      "/food-packing/fp3/fp3.2.png"
    ]
  },


  {
    id: 33,
    name: "PELLA SEA MOSS GEL",
    shortName: "PELLA",
    type: "Food Packaging Design",
    category: "FOOD PACKAGING",
    client: "Pella Nutrition",
    role: "Packaging & Visual Design",
    year: "2026",
    status: "COMPLETED",

    description:
      "A vibrant and modern food packaging design created for Pella Nutrition's Sea Moss Gel. The design combines bold red and green colors, strong typography, strawberry imagery, and natural wellness-focused visual elements to create an eye-catching product identity.",

    technologies: [
      "PACKAGING DESIGN",
      "BRANDING",
      "LABEL DESIGN",
      "PRODUCT MOCKUP"
    ],

    image: "/food-packing/fp4/fp-4.1.jpeg",

    gallery: [
      "/food-packing/fp4/fp-4.1.jpeg",
      "/food-packing/fp4/fp-4.2.png",
      "/food-packing/fp4/fp-4.3.png",
      "/food-packing/fp4/fp-4.4.png"
    ]
  },


  {
    id: 34,
    name: "NOVA DRY GIN",
    shortName: "NOVA",
    type: "Food Packaging Design",
    category: "FOOD PACKAGING",
    client: "Nova Gin",
    role: "Packaging & Visual Design",
    year: "2026",
    status: "COMPLETED",

    description:
      "A vibrant and artistic gin packaging design created for Nova Dry Gin. The design combines rich tropical illustrations, colorful botanical elements, mango imagery, elegant typography, and gold detailing to create a premium and distinctive bottle identity. The packaging system was designed to work across the front and back labels while maintaining a strong visual connection between the product and its tropical-inspired character.",

    technologies: [
      "PACKAGING DESIGN",
      "BRANDING",
      "LABEL DESIGN",
      "PRODUCT MOCKUP"
    ],

    image: "/food-packing/fp5/fp-5.jpeg"
  },


  {
    id: 35,
    name: "MIRA FREEZE DRIED FRUITS",
    shortName: "MIRA",
    type: "Food Packaging Design",
    category: "FOOD PACKAGING",
    client: "Mira International Foods",
    role: "Packaging & Visual Design",
    year: "2026",
    status: "COMPLETED",

    description:
      "A colorful and clean food packaging design created for Mira's freeze-dried fruit range. The packaging uses a consistent visual system across multiple fruit variants, combining bold fruit-specific colors, playful typography, product photography, and clear nutritional information. The strawberry, mango, and apple variants maintain a cohesive brand identity while using distinct color palettes to differentiate each flavor.",

    technologies: [
      "PACKAGING DESIGN",
      "BRANDING",
      "LABEL DESIGN",
      "PRODUCT MOCKUP"
    ],

    image: "/food-packing/fp6/fp-6.1.jpeg",

    gallery: [
      "/food-packing/fp6/fp-6.1.jpeg",
      "/food-packing/fp6/fp-6.2.jpeg",
      "/food-packing/fp6/fp-6.3.jpeg"
    ]
  },


  {
    id: 36,
    name: "NATURE'S TURMERIC CURCUMIN",
    shortName: "TURMERIC CURCUMIN",
    type: "Food Packaging Design",
    category: "FOOD PACKAGING",
    client: "Nature's Nutrition",
    role: "Packaging & Visual Design",
    year: "2026",
    status: "COMPLETED",

    description:
      "A premium supplement packaging design created for Nature's Nutrition's Turmeric Curcumin capsules. The design combines a warm turmeric-inspired golden palette with rich green accents, elegant typography, botanical elements, and ingredient-focused imagery. Clear benefit highlights, strength information, and structured label details create a professional and trustworthy product identity while maintaining a natural wellness aesthetic.",

    technologies: [
      "PACKAGING DESIGN",
      "BRANDING",
      "LABEL DESIGN",
      "PRODUCT MOCKUP"
    ],

    image: "/food-packing/fp7/fp-7.jpg",

    gallery: [
      "/food-packing/fp7/fp-7.jpg"
    ]
  },


  {
    id: 37,
    name: "LIVEGOOD OSTEO COMPLETE",
    shortName: "OSTEO COMPLETE",
    type: "Food Packaging Design",
    category: "FOOD PACKAGING",
    client: "LiveGood",
    role: "Packaging & Visual Design",
    year: "2026",
    status: "COMPLETED",

    description:
      "A clean and modern supplement packaging design created for LiveGood's Osteo Complete range. The design uses a consistent white-based packaging system with multiple color variants including blue, green, purple, orange, and yellow. Bold typography, a distinctive osteo-inspired graphic, structured benefit highlights, and clear product information create a professional and recognizable visual identity across the product range.",

    technologies: [
      "PACKAGING DESIGN",
      "BRANDING",
      "LABEL DESIGN",
      "PRODUCT MOCKUP"
    ],

    image: "/food-packing/fp8/fp-8.1.jpg",

    gallery: [
      "/food-packing/fp8/fp-8.1.jpg",
      "/food-packing/fp8/fp-8.2.jpg",
      "/food-packing/fp8/fp-8.3.jpg",
      "/food-packing/fp8/fp-8.4.jpg",
      "/food-packing/fp8/fp-8.5.jpg",
      "/food-packing/fp8/fp-8.6.jpg",
      "/food-packing/fp8/fp-8.7.jpg",
      "/food-packing/fp8/fp-8.8.jpg",
      "/food-packing/fp8/fp-8.9.jpg"
    ]
  },


  {
    id: 38,
    name: "SMART EATS IRON POWDER",
    shortName: "IRON POWDER",
    type: "Food Packaging Design",
    category: "FOOD PACKAGING",
    client: "Smart Eats",
    role: "Packaging & Visual Design",
    year: "2026",
    status: "COMPLETED",

    description:
      "A bold and modern supplement packaging design created for Smart Eats' Iron Powder. The packaging uses a clean visual system with green, white, and cream color variants, strong typography, clear nutritional highlights, and structured product information. The design focuses on creating a trustworthy, energetic, and premium appearance while maintaining consistency across the product variants.",

    technologies: [
      "PACKAGING DESIGN",
      "BRANDING",
      "LABEL DESIGN",
      "PRODUCT MOCKUP"
    ],

    image: "/food-packing/fp9/fp-9.1.jpg",

    gallery: [
      "/food-packing/fp9/fp-9.1.jpg",
      "/food-packing/fp9/fp-9.2.jpg",
      "/food-packing/fp9/fp-9.3.jpg"
    ]
  },


  // =====================================================
  // 14 — PACKAGING DESIGN
  // =====================================================

  {
    id: 39,
    name: "SERANGO BAMBOO MAGNETIC KNIFE HOLDER",
    shortName: "SERANGO",
    type: "Packaging Design",
    category: "PACKAGING DESIGN",
    client: "Serango",
    role: "Packaging & Visual Design",
    year: "2026",
    status: "COMPLETED",

    description:
      "A natural and sophisticated packaging design created for Serango's bamboo magnetic knife holder. The packaging combines a kraft-paper inspired visual language with bold black accents, clean product illustrations, and structured information to create a premium yet environmentally conscious presentation.",

    technologies: [
      "PACKAGING DESIGN",
      "BRANDING",
      "BOX DESIGN",
      "PRODUCT MOCKUP"
    ],

    image: "/packaging/p1/p1.png"
  },


  {
    id: 40,
    name: "EGYPTIAN SECRET INDIAN HEALING CLAY",
    shortName: "EGYPTIAN SECRET",
    type: "Packaging Design",
    category: "PACKAGING DESIGN",
    client: "Egyptian Secret Cosmetics",
    role: "Packaging & Visual Design",
    year: "2026",
    status: "COMPLETED",

    description:
      "A premium cosmetic packaging design created for Egyptian Secret Indian Healing Clay. The design combines a bold black and gold visual identity with Egyptian-inspired illustrations, hieroglyphic patterns, and elegant typography to create a distinctive and luxurious skincare product presentation. The packaging system was designed across the jar label and complete label artwork while maintaining a strong premium identity.",

    technologies: [
      "PACKAGING DESIGN",
      "BRANDING",
      "LABEL DESIGN",
      "PRODUCT MOCKUP"
    ],

    image: "/packaging/p2/p2.jpg"
  },


  {
    id: 41,
    name: "QUEEN LUXURY REVITALIZING FACE CREAM",
    shortName: "QUEEN",
    type: "Packaging Design",
    category: "PACKAGING DESIGN",
    client: "Queen Beauty",
    role: "Packaging & Visual Design",
    year: "2026",
    status: "COMPLETED",

    description:
      "A premium luxury skincare packaging design created for Queen Beauty's Luxury Revitalizing Face Cream. The design combines a deep green and metallic gold visual identity with elegant typography, botanical illustrations, refined detailing, and a sophisticated glass jar presentation. The packaging system was designed to communicate luxury, natural ingredients, and a high-end skincare experience across multiple product views.",

    technologies: [
      "PACKAGING DESIGN",
      "BRANDING",
      "LABEL DESIGN",
      "PRODUCT MOCKUP"
    ],

    image: "/packaging/p3/p3.1.png",

    gallery: [
      "/packaging/p3/p3.1.png",
      "/packaging/p3/p3.2.png",
      "/packaging/p3/p3.3.png",
      "/packaging/p3/p3.4.png"
    ]
  },
  {
  id: 42,
  name: "XTAN SUNLESS TANNING MOUSSE",
  shortName: "XTAN",
  type: "Product Packaging Design",
  category: "PACKAGING DESIGN",
  client: "XTAN",
  role: "Packaging & Visual Design",
  year: "2026",
  status: "COMPLETED",

  description:
    "A premium product packaging design created for XTAN's Sunless Tanning Mousse. The design combines a refined gold and white visual system with bold black paint-splash elements, a distinctive XTAN identity, clear product information, ingredient highlights, and a clean retail-focused presentation. Multiple label concepts and product mockups were developed to explore a modern and premium skincare aesthetic.",

  technologies: [
    "PRODUCT PACKAGING",
    "PACKAGING DESIGN",
    "LABEL DESIGN",
    "PRODUCT VISUAL",
    "3D MOCKUP"
  ],

  image: "/packaging/p7/p7.1.jpeg",

  gallery: [
    "/packaging/p7/p7.1.jpeg",
    "/packaging/p7/p7.2.png",
    "/packaging/p7/p7.3.png"
  ]
},
{
  id: 43,
  name: "GOOD DROP WATER COCONUT WATER",
  shortName: "GOOD DROP WATER",
  type: "Can Packaging Design",
  category: "PACKAGING DESIGN",
  client: "Good Drop Water",
  role: "Packaging & Visual Design",
  year: "2026",
  status: "COMPLETED",

  description:
    "A fresh and playful can packaging design created for Good Drop Water's Coconut Water. The design combines a clean silver base with vibrant blue, green, and soft yellow tones, featuring a distinctive coconut-inspired visual, bold typography, environmental messaging, and detailed product information. A complete can label layout and product mockup were developed for a modern and approachable retail presentation.",

  technologies: [
    "CAN PACKAGING",
    "PACKAGING DESIGN",
    "LABEL DESIGN",
    "PRODUCT VISUAL",
    "3D MOCKUP"
  ],

  image: "/packaging/p8/p8.png",

  gallery: [
    "/packaging/p8/p8.png"
  ]
},
{
  id: 44,
  name: "PELTOUGH SILICONE SEALANT",
  shortName: "PELTOUGH",
  type: "Product Packaging Design",
  category: "PACKAGING DESIGN",
  client: "Peltough",
  role: "Packaging & Visual Design",
  year: "2026",
  status: "COMPLETED",

  description:
    "A bold and functional product packaging design created for Peltough's 100% Silicone All Purpose Sealant. The packaging combines a strong blue and lime green visual system with clear product messaging, feature highlights, application information, icons, and technical specifications. The label was designed for strong shelf visibility while maintaining a clear and practical communication hierarchy.",

  technologies: [
    "PRODUCT PACKAGING",
    "PACKAGING DESIGN",
    "LABEL DESIGN",
    "PRODUCT VISUAL",
    "3D MOCKUP"
  ],

  image: "/packaging/p9/p9.jpeg",

  gallery: [
    "/packaging/p9/p9.jpeg"
  ]
},
{
  id: 45,
  name: "DANIEL LUCAS ART CANDLE",
  shortName: "DANIEL LUCAS",
  type: "Product Packaging Design",
  category: "PACKAGING DESIGN",
  client: "Daniel Lucas",
  role: "Packaging & Visual Design",
  year: "2026",
  status: "COMPLETED",

  description:
    "A sophisticated candle packaging and label design created for Daniel Lucas. The concept combines a refined monochrome and metallic gold visual system with iconic artwork, creating an artistic and premium identity. Multiple label variations were developed around classic artworks including The Mona Lisa and The Starry Night, with clear product information and a cohesive tin packaging presentation.",

  technologies: [
    "PRODUCT PACKAGING",
    "LABEL DESIGN",
    "PACKAGING DESIGN",
    "PRODUCT VISUAL",
    "3D MOCKUP"
  ],

  image: "/packaging/p11/p11.1.jpg",

  gallery: [
    "/packaging/p11/p11.1.jpg",
    "/packaging/p11/p11.2.jpg",
    "/packaging/p11/p11.3.jpg"
  ]
},
{
  id: 46,
  name: "Flaisir — Midnight Magnolia",
  shortName: "Flaisir",
  type: "PACKAGING DESIGN",
  category: "PACKAGING DESIGN",
  client: "Flaisir",
  role: "Packaging & Visual Design",
  year: "2026",
  status: "COMPLETED",

  description:
    "A premium candle packaging design for Flaisir's Midnight Magnolia fragrance, combining a sophisticated black-and-gold identity with elegant typography and minimal detailing to create a refined luxury product experience.",

  technologies: [
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Packaging Design",
    "Product Mockup"
  ],

  image: "/packaging/p15/p15.jpg",

},
{
  id: 47,
  name: "Striv Labs — Peak Potential",
  shortName: "Striv Labs",
  type: "PACKAGING DESIGN",
  category: "PACKAGING DESIGN",
  client: "Striv Labs",
  role: "Packaging & Label Design",
  year: "2026",
  status: "COMPLETED",

  description:
    "A bold premium supplement packaging design for Striv Labs' Peak Potential, combining a dark marble-inspired finish with sharp typography and gold accents to create a powerful, high-performance visual identity.",

  technologies: [
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Packaging Design",
    "Label Design",
    "Product Mockup"
  ],

  image: "/packaging/p17/p17.1.jpg",

  gallery: [
    "/packaging/p12/p17.1.jpg",
    "/packaging/p17/p17.2.jpg",
    "/packaging/p17/p17.3.jpg"
  ]
},
{
  id: 48,
  name: "SLIM VITAX – Slimming Gummies Packaging",
  shortName: "SLIM VITAX",
  type: "Product Packaging Design",
  category: "PACKAGING DESIGN",
  client: "DOHOBLUE",
  role: "Packaging & Visual Design",
  year: "2026",
  status: "COMPLETED",
  description:
    "A premium supplement packaging design for SLIM VITAX slimming gummies, combining elegant gold detailing, botanical elements, and a clean pharmaceutical-inspired layout to create a sophisticated and distinctive product identity.",
  technologies: [
    "PRODUCT PACKAGING",
    "PACKAGING DESIGN",
    "LABEL DESIGN",
    "PRODUCT VISUAL",
    "3D MOCKUP"
  ],
  image: "/packaging/p18/18.1.jpg",
  gallery: [
    "/packaging/p18/18.1.jpg",
    "/packaging/p18/18.2.jpg"
  ]
},
{
  id: 49,
  name: "Frate Mate – Original Yerba Mate Packaging",
  shortName: "FRATE MATE",
  type: "Product Packaging Design",
  category: "PACKAGING DESIGN",
  client: "Frate Mate",
  role: "Packaging & Label Design",
  year: "2026",
  status: "COMPLETED",
  description:
    "A clean and premium packaging design for Frate Mate Original Yerba Mate Bio, combining a natural green-and-white color palette with a minimal layout, nutritional information, preparation instructions, and organic product positioning.",
  technologies: [
    "PRODUCT PACKAGING",
    "PACKAGING DESIGN",
    "LABEL DESIGN",
    "BRAND IDENTITY",
    "3D MOCKUP"
  ],
  image: "/packaging/p20/p20.png",
  gallery: [
    "/packaging/p20/p20.png"
  ]
},
{
  id: 56,
  name: "Solid Solutions – Jewellery Resin Packaging",
  shortName: "SOLID SOLUTIONS",
  type: "Product Packaging Design",
  category: "PACKAGING DESIGN",
  client: "Solid Solutions",
  role: "Packaging & Label Design",
  year: "2026",
  status: "COMPLETED",
  description:
    "A bold and functional packaging label design for Solid Solutions Epoxy Solid Cast 606 Jewellery Resin, featuring a high-contrast black and lime-green visual system with product information, applications, safety instructions, directions, and technical specifications.",
  technologies: [
    "PRODUCT PACKAGING",
    "PACKAGING DESIGN",
    "LABEL DESIGN",
    "PRODUCT LABEL",
    "3D MOCKUP"
  ],
  image: "/packaging/p19/p19.jpeg",
  gallery: [
    "/packaging/p19/p19.jpeg"
  ]
},

// =====================================================
  // 15 — BOX PACKAGING
  // =====================================================

  {
    id: 48,
    name: "CUTISELIT SKIN SMOOTHING & CELLULITE CREAM",
    shortName: "CUTISELIT",
    type: "Box Packaging Design",
    category: "BOX PACKAGING",
    client: "cutisELIT",
    role: "Packaging & Visual Design",
    year: "2026",
    status: "COMPLETED",

    description:
      "A modern skincare packaging design created for cutisELIT Skin Smoothing and Cellulite Cream. The design combines a refined black and mint-green color palette with elegant typography, botanical accents, product-focused imagery, and a structured information layout. The packaging system was developed across multiple box views and the complete flat packaging artwork to create a clean, premium, and contemporary skincare identity.",

    technologies: [
      "PACKAGING DESIGN",
      "BRANDING",
      "LABEL DESIGN",
      "PRODUCT MOCKUP"
    ],

    image: "/packaging/p4/p4.1.jpeg",

    gallery: [
      "/packaging/p4/p4.1.jpeg"
    ]
  },


  

  {
    id: 49,
    name: "LENGENSTEIN IRONING BOARD COVER",
    shortName: "LENGENSTEIN",
    type: "Box Packaging Design",
    category: "BOX PACKAGING",
    client: "Lengenstein",
    role: "Packaging & Visual Design",
    year: "2026",
    status: "COMPLETED",

    description:
      "A clean and functional box packaging design created for Lengenstein's ironing board cover. The packaging combines a minimal white and soft pink visual system with clear product illustrations, feature highlights, technical information, and a complete packaging dieline. The design focuses on clarity, usability, and a premium retail presentation.",

    technologies: [
      "BOX PACKAGING",
      "PACKAGING DESIGN",
      "PRODUCT VISUAL",
      "3D MOCKUP"
    ],

    image: "/packaging/p5/p5.jpeg",

    gallery: [
      "/packaging/p5/p5.jpeg"
    ]
  },
  {
  id: 50,
  name: "CRESIMO COCKTAIL SHAKER",
  shortName: "CRESIMO",
  type: "Box Packaging Design",
  category: "BOX PACKAGING",
  client: "Cresimo",
  role: "Packaging & Visual Design",
  year: "2026",
  status: "COMPLETED",

  description:
    "A bold and premium box packaging design created for Cresimo's cocktail shaker set. The packaging uses a striking black visual system with vibrant cocktail imagery, product-focused visuals, feature information, barcode details, and a complete packaging dieline. The design is created to deliver a strong shelf presence while clearly communicating the product and its features.",

  technologies: [
    "BOX PACKAGING",
    "PACKAGING DESIGN",
    "PRODUCT VISUAL",
    "3D MOCKUP"
  ],

  image: "/packaging/p6/p6.jpeg",

  gallery: [
    "/packaging/p6/p6.jpeg"
  ]
},
{
  id: 54,
  name: "CAT ZEN FOUNTAIN",
  shortName: "CAT ZEN",
  type: "Box Packaging Design",
  category: "BOX PACKAGING",
  client: "Purrvana",
  role: "Packaging & Visual Design",
  year: "2026",
  status: "COMPLETED",

  description:
    "A vibrant and distinctive box packaging design created for Purrvana's Cat Zen Fountain. The packaging combines a premium black base with colorful abstract artwork and a central cat-and-zen illustration. The design includes detailed product information, included-parts graphics, feature icons, barcode placement, and a complete packaging dieline for a cohesive retail presentation.",

  technologies: [
    "BOX PACKAGING",
    "PACKAGING DESIGN",
    "PRODUCT VISUAL",
    "DIELINE DESIGN",
    "3D MOCKUP"
  ],

  image: "/packaging/p10/p10.jpg",

  gallery: [
    "/packaging/p10/p10.jpg"
  ]
},
{
  id: 56,
  name: "SNOW TECH REUSABLE ICE PACK",
  shortName: "SNOW TECH",
  type: "Box Packaging Design",
  category: "BOX PACKAGING",
  client: "Snow Tech",
  role: "Packaging & Visual Design",
  year: "2026",
  status: "COMPLETED",

  description:
    "A clean and professional box packaging design created for Snow Tech's Reusable Gel Ice Pack. The packaging combines a bold black and white visual system with bright blue accents, clear usage instructions, product benefits, safety information, icons, and strong brand visibility. A complete packaging dieline was developed to ensure consistent artwork across all panels and a practical retail presentation.",

  technologies: [
    "BOX PACKAGING",
    "PACKAGING DESIGN",
    "DIELINE DESIGN",
    "PRODUCT VISUAL",
    "3D MOCKUP"
  ],

  image: "/packaging/p12/p12.jpeg",

  gallery: [
    "/packaging/p12/p12.jpeg"
  ]
},{
  id: 57,
  name: "LUXURY LENS STORE",
  shortName: "LUXURY LENS",
  type: "Box Packaging Design",
  category: "BOX PACKAGING",
  client: "Luxury Lens Store",
  role: "Packaging & Visual Design",
  year: "2026",
  status: "COMPLETED",

  description:
    "A premium box packaging design created for Luxury Lens Store's soft colour contact lenses. The design combines a sophisticated black and gold visual system with decorative botanical patterns, refined typography, detailed product information, regulatory symbols, and a compact contact lens blister label. The packaging focuses on creating a luxurious and elegant retail identity while maintaining clear product communication.",

  technologies: [
    "BOX PACKAGING",
    "PACKAGING DESIGN",
    "LABEL DESIGN",
    "PRODUCT VISUAL",
    "3D MOCKUP"
  ],

  image: "/packaging/p13/p13.png",

  gallery: [
    "/packaging/p13/p13.png"
  ]
},
{
  id: 58,
  name: "L.A. BABY DIAPER PAIL",
  shortName: "L.A. BABY",
  type: "Box Packaging Design",
  category: "BOX PACKAGING",
  client: "L.A. Baby",
  role: "Packaging & Visual Design",
  year: "2026",
  status: "COMPLETED",

  description:
    "A clean and functional box packaging design created for L.A. Baby's Odor-Free Diaper Pail. The packaging uses a soft blue and white visual system with clear product photography, step-by-step usage instructions, feature highlights, benefit messaging, and a complete packaging dieline. The design focuses on simplicity, clarity, and a friendly premium presentation for parents and family-focused retail environments.",

  technologies: [
    "BOX PACKAGING",
    "PACKAGING DESIGN",
    "DIELINE DESIGN",
    "PRODUCT VISUAL",
    "3D MOCKUP"
  ],

  image: "/packaging/p14/p14.png",

  gallery: [
    "/packaging/p14/p14.png"
  ]
},{
  id: 47,
  name: "Pearway — Thermomix Gleittbrett",
  shortName: "Pearway",
  type: "PACKAGING DESIGN",
  category: "BOX PACKAGING",
  client: "Pearway",
  role: "Packaging & Visual Design",
  year: "2026",
  status: "COMPLETED",

  description:
    "A functional and premium packaging design for Pearway's Thermomix Gleittbrett, combining a natural kraft-paper aesthetic with bold black graphics, product illustrations, clear instructions, and a practical retail-ready structure.",

  technologies: [
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Packaging Design",
    "Product Mockup"
  ],

  image: "/packaging/p16/p16.jpeg",

  gallery: [
    "/packaging/p16/p16.jpeg"
  ]
},


];

export {
  projects
};