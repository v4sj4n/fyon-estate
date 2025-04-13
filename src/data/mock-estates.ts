export type RealEstateListing = {
  id: string;
  title: string;
  description: string;
  price: number;
  salePercentage: number;
  image: string;
  bedrooms: number;
  bathrooms: number;
  squareMeters: number;
  yearBuilt: number;
  propertyType:
    | "apartment"
    | "house"
    | "condo"
    | "villa"
    | "cabin"
    | "townhouse"
    | "other";
  features: string[];
  address: string;
};

export const realEstateListings: RealEstateListing[] = [
  {
    id: "MDL001",
    title: "Modern Downtown Loft",
    description:
      "A stylish loft in the heart of downtown with skyline views. This open-concept space features floor-to-ceiling windows, exposed brick walls, and sleek modern fixtures. Walking distance to restaurants, theaters, and public transportation.",
    price: 350000,
    salePercentage: 10,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&auto=format&fit=crop",
    bedrooms: 1,
    bathrooms: 2,
    squareMeters: 85,
    yearBuilt: 2015,
    propertyType: "apartment",
    features: [
      "Skyline Views",
      "Floor-to-Ceiling Windows",
      "Exposed Brick",
      "Stainless Steel Appliances",
      "Hardwood Floors",
      "Building Security",
      "Rooftop Access",
    ],
    address: "123 Downtown Avenue, Unit 502, Metropolis, NY 10001",
  },
  {
    id: "CSB002",
    title: "Cozy Suburban Bungalow",
    description:
      "Charming bungalow in a quiet suburb with a large backyard. Features vintage architectural details, updated kitchen and bathrooms, and a detached garage. Close to schools, parks, and a short drive to shopping centers.",
    price: 275000,
    salePercentage: 0,
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=400&auto=format&fit=crop",
    bedrooms: 3,
    bathrooms: 2,
    squareMeters: 130,
    yearBuilt: 1945,
    propertyType: "house",
    features: [
      "Large Backyard",
      "Updated Kitchen",
      "Hardwood Floors",
      "Front Porch",
      "Detached Garage",
      "Basement",
      "Fireplace",
    ],
    address: "456 Maple Street, Pleasantville, IL 60078",
  },
  {
    id: "LBV003",
    title: "Luxury Beachfront Villa",
    description:
      "Stunning villa with ocean views and private beach access. This Mediterranean-inspired estate offers luxury indoor and outdoor living spaces with panoramic ocean views from nearly every room. Includes a gourmet kitchen, infinity pool, and landscaped gardens.",
    price: 1250000,
    salePercentage: 5,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&auto=format&fit=crop",
    bedrooms: 5,
    bathrooms: 6,
    squareMeters: 380,
    yearBuilt: 2010,
    propertyType: "villa",
    features: [
      "Ocean Views",
      "Private Beach Access",
      "Infinity Pool",
      "Gourmet Kitchen",
      "Wine Cellar",
      "Smart Home System",
      "Landscaped Gardens",
      "Outdoor Kitchen",
    ],
    address: "789 Shoreline Drive, Coral Bay, FL 33139",
  },
  {
    id: "MCR004",
    title: "Mountain Cabin Retreat",
    description:
      "Secluded cabin perfect for getaways and nature lovers. This rustic yet comfortable home features vaulted ceilings, a stone fireplace, and a wraparound deck with mountain views. Surrounded by hiking trails and wildlife.",
    price: 210000,
    salePercentage: 0,
    image:
      "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?w=600&h=400&auto=format&fit=crop",
    bedrooms: 2,
    bathrooms: 1,
    squareMeters: 92,
    yearBuilt: 1987,
    propertyType: "cabin",
    features: [
      "Mountain Views",
      "Stone Fireplace",
      "Wraparound Deck",
      "Wood Beam Ceilings",
      "Wood Stove",
      "Hiking Trails",
      "Wildlife Viewing",
    ],
    address: "123 Pine Ridge Trail, Mountain Springs, CO 80424",
  },
  {
    id: "USA005",
    title: "Urban Studio Apartment",
    description:
      "Compact studio close to shopping, nightlife, and transit. This efficient space features a modern kitchenette, updated bathroom, and clever storage solutions. Building amenities include a laundry room, bike storage, and roof access.",
    price: 185000,
    salePercentage: 0,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&auto=format&fit=crop",
    bedrooms: 0,
    bathrooms: 1,
    squareMeters: 40,
    yearBuilt: 2005,
    propertyType: "apartment",
    features: [
      "City Views",
      "Kitchenette",
      "Built-in Storage",
      "Hardwood Floors",
      "Building Security",
      "Bike Storage",
      "Rooftop Access",
    ],
    address: "567 Urban Street, Apt 301, Metropolis, NY 10002",
  },
  {
    id: "FHP006",
    title: "Family Home with Pool",
    description:
      "Spacious home with a pool, garage, and play area. This family-friendly property features an open floor plan, updated kitchen with island, and a large primary suite. The backyard oasis includes a pool, covered patio, and fenced yard.",
    price: 450000,
    salePercentage: 15,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&auto=format&fit=crop",
    bedrooms: 4,
    bathrooms: 3,
    squareMeters: 220,
    yearBuilt: 2000,
    propertyType: "house",
    features: [
      "Swimming Pool",
      "Open Floor Plan",
      "Kitchen Island",
      "Primary Suite",
      "Covered Patio",
      "Two-Car Garage",
      "Fenced Yard",
    ],
    address: "789 Family Circle, Suburbia, CA 90210",
  },
  {
    id: "HBS007",
    title: "Historic Brownstone",
    description:
      "Elegant brownstone with original woodwork and fireplaces. This historic gem features high ceilings, crown molding, ornate fireplaces, and a blend of vintage charm with modern updates. Includes a private garden and finished basement.",
    price: 720000,
    salePercentage: 0,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&auto=format&fit=crop",
    bedrooms: 3,
    bathrooms: 3,
    squareMeters: 175,
    yearBuilt: 1895,
    propertyType: "townhouse",
    features: [
      "Original Woodwork",
      "Ornate Fireplaces",
      "High Ceilings",
      "Crown Molding",
      "Private Garden",
      "Finished Basement",
      "Updated Kitchen",
    ],
    address: "123 Historic Avenue, Old Town, MA 02108",
  },
  {
    id: "MFH008",
    title: "Modern Farmhouse",
    description:
      "A rustic modern blend with open floor plan and acreage. This newly built home combines farmhouse aesthetics with modern convenience, featuring shiplap accents, exposed beams, and high-end fixtures. Sits on 2.5 acres with a barn and garden area.",
    price: 530000,
    salePercentage: 10,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&auto=format&fit=crop",
    bedrooms: 4,
    bathrooms: 3,
    squareMeters: 240,
    yearBuilt: 2020,
    propertyType: "house",
    features: [
      "Acreage",
      "Open Floor Plan",
      "Shiplap Accents",
      "Exposed Beams",
      "Farm Sink",
      "Barn",
      "Garden Area",
      "Wrap-Around Porch",
    ],
    address: "456 Country Lane, Rural County, TX 75001",
  },
  {
    id: "LPH009",
    title: "Luxury Penthouse",
    description:
      "Top-floor penthouse with panoramic city views. This exclusive property features floor-to-ceiling windows, designer finishes, a chef's kitchen, and a primary suite with spa-like bathroom. Includes a large private terrace and building amenities.",
    price: 1500000,
    salePercentage: 20,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&auto=format&fit=crop",
    bedrooms: 3,
    bathrooms: 4,
    squareMeters: 260,
    yearBuilt: 2018,
    propertyType: "condo",
    features: [
      "Panoramic Views",
      "Private Terrace",
      "Chef's Kitchen",
      "Spa Bathroom",
      "Smart Home Technology",
      "Concierge Service",
      "Private Elevator",
    ],
    address: "999 Skyscraper Boulevard, PH2, Metropolis, NY 10003",
  },
  {
    id: "EFH010",
    title: "Eco-Friendly Home",
    description:
      "Solar-powered smart home with energy-efficient design. This forward-thinking property features solar panels, energy-efficient appliances, rainwater harvesting, and sustainable materials throughout. Designed for minimal environmental impact with maximum comfort.",
    price: 390000,
    salePercentage: 0,
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&h=400&auto=format&fit=crop",
    bedrooms: 3,
    bathrooms: 2,
    squareMeters: 165,
    yearBuilt: 2022,
    propertyType: "house",
    features: [
      "Solar Panels",
      "Energy-Efficient Appliances",
      "Rainwater Harvesting",
      "Sustainable Materials",
      "Smart Home System",
      "Electric Vehicle Charger",
      "Green Roof",
    ],
    address: "123 Sustainable Way, Green Valley, OR 97401",
  },
  {
    id: "CSE011",
    title: "Countryside Estate",
    description:
      "Expansive estate with stables and gardens. This grand property sits on 10 acres of meticulously landscaped grounds, featuring a main house, guest cottage, stables, and various garden areas. Perfect for equestrian enthusiasts or those seeking privacy.",
    price: 880000,
    salePercentage: 0,
    image:
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=600&h=400&auto=format&fit=crop",
    bedrooms: 6,
    bathrooms: 5,
    squareMeters: 420,
    yearBuilt: 1990,
    propertyType: "other",
    features: [
      "10 Acre Property",
      "Stables",
      "Guest Cottage",
      "Landscaped Gardens",
      "Pond",
      "Tennis Court",
      "Wine Cellar",
      "Library",
    ],
    address: "1 Estate Drive, Countryside, VA 22124",
  },
  {
    id: "CCD012",
    title: "City Condo",
    description:
      "High-rise condo near business district and metro station. This contemporary urban home offers convenience and style with modern finishes, an efficient floor plan, and building amenities including a fitness center and communal rooftop.",
    price: 310000,
    salePercentage: 8,
    image:
      "https://images.unsplash.com/photo-1551361415-69c87624334f?w=600&h=400&auto=format&fit=crop",
    bedrooms: 1,
    bathrooms: 1,
    squareMeters: 70,
    yearBuilt: 2010,
    propertyType: "condo",
    features: [
      "City Views",
      "Balcony",
      "Fitness Center",
      "Communal Rooftop",
      "Concierge",
      "Pet-Friendly",
      "Storage Unit",
    ],
    address: "789 Metropolitan Avenue, Unit 1205, Metropolis, NY 10004",
  },
  {
    id: "RCT013",
    title: "Riverside Cottage",
    description:
      "Charming cottage by the river, ideal for relaxing weekends. This quaint home offers waterfront views, a private dock, stone fireplace, and a screened porch. The perfect getaway property with fishing and boating right outside your door.",
    price: 260000,
    salePercentage: 0,
    image:
      "https://images.unsplash.com/photo-1598228723793-52759bba239c?w=600&h=400&auto=format&fit=crop",
    bedrooms: 2,
    bathrooms: 1,
    squareMeters: 95,
    yearBuilt: 1960,
    propertyType: "house",
    features: [
      "Waterfront",
      "Private Dock",
      "Stone Fireplace",
      "Screened Porch",
      "Boat House",
      "Gardens",
      "Wood Floors",
    ],
    address: "432 River Road, Riverside, ME 04276",
  },
  {
    id: "MDX014",
    title: "Modern Duplex",
    description:
      "Newly built duplex with sleek interiors and parking. This contemporary property offers two separate units, each with its own entrance, modern finishes, and dedicated parking. Great for investment or multigenerational living.",
    price: 495000,
    salePercentage: 5,
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=400&auto=format&fit=crop",
    bedrooms: 4,
    bathrooms: 3,
    squareMeters: 200,
    yearBuilt: 2023,
    propertyType: "other",
    features: [
      "Dual Units",
      "Separate Entrances",
      "Modern Finishes",
      "Dedicated Parking",
      "Energy Efficient",
      "Smart Home Ready",
      "Low Maintenance",
    ],
    address: "567 Division Street, Metropolis, NY 10005",
  },
  {
    id: "LVP015",
    title: "Lakeview Property",
    description:
      "Home with unobstructed lake views and dock access. This waterfront retreat offers panoramic views of the lake, a private beach area, boat dock, and spacious outdoor living areas for entertaining. Interior features vaulted ceilings and walls of windows.",
    price: 775000,
    salePercentage: 0,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&auto=format&fit=crop",
    bedrooms: 4,
    bathrooms: 3,
    squareMeters: 250,
    yearBuilt: 2005,
    propertyType: "house",
    features: [
      "Lake Views",
      "Private Beach",
      "Boat Dock",
      "Vaulted Ceilings",
      "Walls of Windows",
      "Outdoor Kitchen",
      "Fire Pit",
      "Hot Tub",
    ],
    address: "123 Lakeshore Drive, Lake City, MI 49651",
  },
  {
    id: "RCH016",
    title: "Renovated Colonial Home",
    description:
      "Classic colonial architecture with modern updates. This stately home combines traditional design with contemporary amenities, featuring a grand entrance, formal dining room, updated kitchen, and spacious bedrooms. Sits on a mature landscaped lot.",
    price: 620000,
    salePercentage: 12,
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&auto=format&fit=crop",
    bedrooms: 4,
    bathrooms: 4,
    squareMeters: 290,
    yearBuilt: 1920,
    propertyType: "house",
    features: [
      "Colonial Architecture",
      "Grand Entrance",
      "Formal Dining",
      "Updated Kitchen",
      "Crown Molding",
      "Hardwood Floors",
      "Mature Landscaping",
    ],
    address: "789 Heritage Lane, Historic Heights, CT 06830",
  },
  {
    id: "ILF017",
    title: "Industrial Loft",
    description:
      "Spacious loft with exposed brick and beams. This converted factory space offers industrial character with modern conveniences, featuring soaring ceilings, large windows, and an open concept layout. Located in a trendy, revitalized neighborhood.",
    price: 430000,
    salePercentage: 0,
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&auto=format&fit=crop",
    bedrooms: 1,
    bathrooms: 2,
    squareMeters: 140,
    yearBuilt: 1910,
    propertyType: "apartment",
    features: [
      "Exposed Brick",
      "Concrete Floors",
      "Exposed Beams",
      "High Ceilings",
      "Large Windows",
      "Open Concept",
      "Industrial Character",
    ],
    address: "123 Factory Street, Unit 3B, Arts District, CA 90013",
  },
  {
    id: "THW018",
    title: "Tiny Home on Wheels",
    description:
      "Minimalist living in a well-designed mobile tiny house. This innovative home maximizes every square foot with clever storage solutions, multi-purpose spaces, and high-quality finishes. Can be placed on land or moved to new locations.",
    price: 98000,
    salePercentage: 0,
    image:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&h=400&auto=format&fit=crop",
    bedrooms: 1,
    bathrooms: 1,
    squareMeters: 24,
    yearBuilt: 2022,
    propertyType: "other",
    features: [
      "Mobile",
      "Space-Saving Design",
      "Solar Ready",
      "Composting Toilet",
      "Rainwater Collection",
      "Custom Cabinetry",
      "Propane Appliances",
    ],
    address: "Mobile - Currently at 456 Small Living Lane, Tiny Town, OR 97302",
  },
  {
    id: "GCH019",
    title: "Gated Community Home",
    description:
      "Secure home in an upscale gated community. This elegant property offers privacy and luxury amenities including a community pool, tennis courts, and walking trails. The home features an open concept main level and a well-appointed owner's suite.",
    price: 600000,
    salePercentage: 7,
    image:
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=600&h=400&auto=format&fit=crop",
    bedrooms: 4,
    bathrooms: 3.5,
    squareMeters: 280,
    yearBuilt: 2015,
    propertyType: "house",
    features: [
      "Gated Community",
      "Community Pool",
      "Tennis Courts",
      "Walking Trails",
      "Owner's Suite",
      "Open Concept",
      "Home Office",
    ],
    address: "789 Secure Circle, Gated Estates, FL 33458",
  },
  {
    id: "FUO020",
    title: "Fixer-Upper Opportunity",
    description:
      "Great investment property with renovation potential. This property offers good bones and is located in an up-and-coming neighborhood. Perfect for investors or DIY enthusiasts looking to create their dream home or generate rental income.",
    price: 150000,
    salePercentage: 0,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&h=400&auto=format&fit=crop",
    bedrooms: 3,
    bathrooms: 1,
    squareMeters: 110,
    yearBuilt: 1945,
    propertyType: "house",
    features: [
      "Investment Potential",
      "Original Hardwood",
      "Large Lot",
      "Detached Garage",
      "Full Basement",
      "Original Woodwork",
      "Up-and-Coming Area",
    ],
    address: "123 Potential Avenue, Opportunity Heights, MI 48127",
  },
];

export const findPropertyByIdOrNull = (
  id: string
): RealEstateListing | null => {
  const property = realEstateListings.find((listing) => listing.id === id);
  return property || null;
};

export const getRandomListings = (count: number): RealEstateListing[] => {
  const shuffledListings = [...realEstateListings].sort(
    () => 0.5 - Math.random()
  );
  return shuffledListings.slice(0, count);
};

export const getOtherSimiliarTypes = (
  type:
    | "apartment"
    | "house"
    | "condo"
    | "villa"
    | "cabin"
    | "townhouse"
    | "other",
  id: string,
  amount: number = 3
): RealEstateListing[] => {
  return realEstateListings
    .filter((listing) => listing.propertyType === type && listing.id !== id)
    .slice(0, amount);
};
