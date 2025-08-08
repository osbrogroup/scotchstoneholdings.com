export interface ServiceApartment {
  id: string;
  name: string;
  location: string;
  images: string[];
  description: string;
}

export const serviceApartments: ServiceApartment[] = [
  {
    id: "apartment1",
    name: "Lekki Luxury Short-let",
    location: "Lekki Phase 1, Lagos",
    images: [
      "/images/properties/shotlet01/apartment-rentals.jpg",
      "/images/properties/shotlet01/2.jpg",
      "/images/properties/shotlet01/3.jpg"
    ],
    description: "Modern 2-bedroom apartment with pool, gym, and 24/7 security. Perfect for business or leisure stays in the heart of Lekki."
  },
  {
    id: "apartment2",
    name: "Ikoyi Executive Suite",
    location: "Ikoyi, Lagos",
    images: [
      "/images/properties/shotlet02/apartment-rentals.jpg",
      "/images/properties/shotlet02/2.jpg",
      "/images/properties/shotlet02/3.jpg"
    ],
    description: "Spacious 3-bedroom suite with city views, premium furnishings, and close to top restaurants and embassies."
  },
  {
    id: "apartment3",
    name: "Abuja Urban Retreat",
    location: "Wuse 2, Abuja",
    images: [
      "/images/properties/shotlet03/apartment-rentals.jpg",
      "/images/properties/shotlet03/2.jpg",
      "/images/properties/shotlet03/3.jpg"
    ],
    description: "Chic 1-bedroom serviced apartment in central Abuja, with fast WiFi and daily cleaning. Ideal for professionals."
  },
  {
    id: "apartment4",
    name: "Victoria Island Penthouse",
    location: "Victoria Island, Lagos",
    images: [
      "/images/properties/shotlet04/apartment-rentals.jpg",
      "/images/properties/shotlet04/2.jpg",
      "/images/properties/shotlet04/3.jpg"
    ],
    description: "Exclusive 4-bedroom penthouse with ocean views, private elevator, and luxury amenities for families or groups."
  }
];
