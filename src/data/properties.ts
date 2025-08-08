// src/data/properties.ts
export interface Property {
  name: string;
  location: string;
  city: string;
  state: string;
  landTitle: string;
  video: string;
  description: string;
  strategic: string[];
  whyChoose: string[];
  offer: string[];
  features: string[];
  tagline: string;
  images: string[];
  link: string;
}

export const featuredProperties: Property[] = [
  {
    name: "Setia Sky Residences",
    location: "Ibereko Scheme, Eleko, Ibeju-Lekki, Lagos",
    city: "Ibeju-Lekki",
    state: "Lagos",
    landTitle: "Certificate of Occupancy (C of O) — Government-Allocated Land",
    video: "https://youtu.be/eRKwvBLyP6I",
    description: `Setia Sky Residence – Iberekodo Scheme, Eleko, Ibeju-Lekki\nOwn a Prime Piece of Lagos’ Smart City Future\nSetia Sky Residence is a premium residential estate located within the highly sought-after Iberekodo Scheme, Eleko, in the heart of Ibeju-Lekki — Lagos’ fastest-growing smart city corridor.\nAs development surges across Ibeju-Lekki, land prices continue to rise quarterly. The opportunity to own a government-allocated plot in this prestigious neighborhood is becoming rare. Setia Sky Residence offers you a secure, high-value investment opportunity with full Government allocation and a Certificate of Occupancy (C of O).`,
    strategic: [
      "10 minutes from the Lekki-Epe Expressway",
      "Pan-Atlantic University",
      "Lekki International Airport (ongoing)",
      "Eleganza Industrial City",
      "Lekki Free Trade Zone",
      "Dangote Refinery",
      "And other key infrastructural developments"
    ],
    whyChoose: [
      "Government-Allocated Land (C of O) — peace of mind guaranteed",
      "Excellent road network with easy access to Lagos’ commercial hubs",
      "Secure investment with high appreciation potential",
      "Perfect for residential living, land banking, or building your mini estate"
    ],
    offer: [
      "500 SQM — ₦27M (All-Inclusive) (Actual Price: ₦30M)",
      "Initial Deposit — ₦2M Only",
      "Flexible Payment Plan — Up to 12 Months",
      "3000 SQM — ₦162M (All-Inclusive)"
    ],
    features: [
      "Perimeter fencing and gated security",
      "Good road network",
      "Drainage system",
      "Electricity supply",
      "Water supply",
      "Green areas"
    ],
    tagline: "Setia Sky Residence — Own Land at the Center of Lagos' Smart City Revolution.",
    images: [
      "/images/properties/setia-sky-residences/adsetia.jpg",
      "/images/properties/setia-sky-residences/3.jpeg",
      "/images/properties/setia-sky-residences/4.jpeg",
      "/images/properties/setia-sky-residences/5.jpeg",
      "/images/properties/setia-sky-residences/6.jpeg",
      "/images/properties/setia-sky-residences/7.jpeg",
      "/images/properties/setia-sky-residences/8.jpeg"
    ],
    link: "/properties/setiasky"
  },
  {
    name: "Vina Residence Phase 1",
    location: "Ketu, Epe, Lagos (Beside Lagos Food Hub)",
    city: "Ketu Epe",
    state: "Lagos",
    landTitle: "Registered Survey and Deed of Assignment",
    video: "https://youtu.be/g2aQbIKZ3xg",
    description: `Vina Residence Phase 1 is a well-planned residential and commercial estate located in the highly sought-after Ketu–Epe axis of Lagos. Perfectly positioned beside the Lagos Food Logistics Hub, this estate offers incredible proximity to major developments such as the Lekki-Epe International Airport and the upcoming Lagos Film City.\nWith its strategic location, excellent accessibility, and rapidly appreciating land value, Vina Residence Phase 1 is an investor’s dream and a homeowner’s perfect choice.`,
    strategic: [
      "Lagos Food Logistics Center (Beside the Estate)",
      "Lagos Film City",
      "Lekki-Epe International Airport (Proposed)",
      "Dangote Refinery",
      "Epe Resort and Spa",
      "Omu-Epe Expressway"
    ],
    whyChoose: [
      "Fastest-selling estate in Ketu–Epe axis",
      "Strategically located beside Lagos Food Logistics Center",
      "High potential for capital appreciation",
      "Perfect for both residential living and commercial development",
      "Affordable entry with flexible payment plans"
    ],
    offer: [
      "Residential Plot (500 SQM) – ₦6,000,000",
      "Commercial Plot (1000 SQM) – ₦14,000,000",
      "Initial Deposit: Just ₦1,000,000",
      "Flexible Payment Plan: Spread across 3 to 9 months"
    ],
    features: [
      "Secure Gated Entrance & Gatehouse",
      "Standard Drainage System",
      "Good Road Network within the Estate",
      "Electricity Supply",
      "Recreational and Green Spaces"
    ],
    tagline: "Vina Residence Phase 1 — Affordable Plots in Epe’s Fastest Growing Investment Corridor.",
    images: [
      "/images/properties/vinaphase1/vinaphase1.jpg",
      "/images/properties/vinaphase1/1.png",
      "/images/properties/vinaphase1/2.png",
      "/images/properties/vinaphase1/4.jpg",
      "/images/properties/vinaphase1/5.jpeg",
      "/images/properties/vinaphase1/6.jpeg"
    ],
    link: "/properties/vinaphase1"
  },
  {
    name: "Vina Residence Phase 2 (Commercial & Residential)",
    location: "Facing Lekki-Epe Expressway, Okegun, Ibeju-Lekki, Lagos",
    city: "Okegun, Ibeju-Lekki",
    state: "Lagos",
    landTitle: "Government Allocation (Certificate of Occupancy — C of O)",
    video: "https://youtube.com/shorts/tuMOfPN4tyI?feature=share",
    description: `Premium Commercial and Residential Land Facing the Lekki-Epe Expressway\nWelcome to Vina Residence Phase 2 (Commercial) — a prime commercial property strategically located right along the Lekki-Epe Expressway in Okegun, Ibeju-Lekki, one of Lagos’ fastest-developing investment hubs.\nThis is not just land — it’s a powerful commercial asset designed for businesses ready to thrive in the heart of the Ibeju-Lekki commercial corridor.`,
    strategic: [
      "Lekki-Epe International Airport (Under Development)",
      "Alaro City",
      "Lagos Food Hub",
      "Directly Facing the Lekki-Epe Expressway"
    ],
    whyChoose: [
      "Facing the Lekki-Epe Expressway — unmatched visibility and accessibility",
      "Secure Government Allocation with C of O",
      "High ROI — rising demand for commercial properties in Ibeju-Lekki"
    ],
    offer: [
      "500 SQM (Commercial) — ₦50 Million",
      "1000 SQM (Commercial) — ₦100 Million",
      "Initial Deposit: ₦3 Million",
      "Flexible Payment Plans: Spread over 3 to 12 months"
    ],
    features: [
      "Gated Entrance with 24/7 Security",
      "CCTV Surveillance System",
      "Well-Planned Commercial Layout",
      "Standard Road Network and Drainage",
      "Easy Access & Prime Visibility"
    ],
    tagline: "Vina Residence Phase 2 — Premium Commercial & Residential Land Facing Lekki-Epe Expressway.",
    images: [
      "/images/properties/vinaphase2/vinaphase2.jpg",
      "/images/properties/vinaphase2/1.jpeg",
      "/images/properties/vinaphase2/2.jpeg",
      "/images/properties/vinaphase2/3.jpg",
      "/images/properties/vinaphase2/4.jpg",
      "/images/properties/vinaphase2/5.jpeg",
      "/images/properties/vinaphase2/6.jpg"
    ],
    link: "/properties/vinaphase2"
  }
];
