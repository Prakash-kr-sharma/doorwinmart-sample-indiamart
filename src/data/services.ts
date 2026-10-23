import { ServiceItem } from '../types';

export const services: ServiceItem[] = [
  {
    id: 'serv-1',
    title: 'Product Selection Assistance',
    shortDescription: 'Guidance from our architectural specialists to match profile systems, glass specs, and finishes to your space.',
    fullDescription: 'Every building has distinct solar angles, wind pressures, acoustic challenges, and aesthetic aspirations. Our team reviews your floor plans and design elevations to recommend the ideal balance of UPVC, aluminium, timber, and glass configurations tailored to your budget.',
    iconName: 'Compass',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      'Architectural blueprint & floorplan review',
      'Wind load & thermal U-value recommendations',
      'Acoustic insulation glazing guidance',
      'Material sample swatches & profile finish comparisons'
    ]
  },
  {
    id: 'serv-2',
    title: 'Door & Window Solutions',
    shortDescription: 'Comprehensive architectural fenestration packages for high-end villas, apartments, and commercial projects.',
    fullDescription: 'From high-security main entrance doors to expansive multi-track patio sliders and casements, we coordinate cohesive door and window packages that enhance curb appeal while keeping weather elements strictly outdoors.',
    iconName: 'Maximize2',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      'Casement, sliding, tilt & turn, and French door packages',
      'Reinforced profiles for high-rise wind performance',
      'Integrated insect mesh & security hardware configurations',
      'Coordinated color schemes across interior and exterior elevations'
    ]
  },
  {
    id: 'serv-3',
    title: 'Glass Partition Solutions',
    shortDescription: 'Frameless acoustic office partitions, Crittall black-grid dividers, and luxury residential glass walls.',
    fullDescription: 'Delineate functional zones while preserving daylight, spaciousness, and visual connection. We help specify single or double-glazed demountable acoustic partition systems, switchable smart glass, and fluted decorative glass partitions.',
    iconName: 'SquareCode',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      'Acoustic rating up to 48dB specification',
      'Dry-joint frameless or slim aluminium profile perimeter',
      'Industrial black-grid and fluted glass aesthetic options',
      'Seamless integration with pivot and sliding glass doors'
    ]
  },
  {
    id: 'serv-4',
    title: 'Shower Cubicle Solutions',
    shortDescription: 'Custom 8mm to 10mm tempered glass shower enclosures, wet-room walk-in screens, and sliding doors.',
    fullDescription: 'Turn your bathroom into a luxury sanctuary. We help calculate clearance radiuses, water containment thresholds, and hardware finishes (brushed brass, matte black, PVD rose gold) tailored to your bathroom geometry.',
    iconName: 'Droplets',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      'Corner, alcove, and walk-in enclosure configuration',
      'Hydrophobic anti-limescale glass coating specifications',
      'Heavy-duty solid brass and stainless hardware matching',
      'Magnetic water seal & threshold containment detailing'
    ]
  },
  {
    id: 'serv-5',
    title: 'Blinds & Shading Solutions',
    shortDescription: 'Motorized sunscreen roller blinds, wooden Venetian slats, and architectural light control systems.',
    fullDescription: 'Control glare and protect expensive wooden floors and artwork from harsh UV rays. We guide you through fabric openness factors, motorized Somfy systems with smart home integration, and natural basswood slats.',
    iconName: 'SunDim',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      'Solar screen fabric openness selection (1%, 3%, 5%, blackout)',
      'Smart home voice & smartphone motorization setup',
      'Natural kiln-seasoned basswood Venetian slat sizing',
      'Pocket and ceiling pelmet recess dimension coordination'
    ]
  },
  {
    id: 'serv-6',
    title: 'Custom Configuration Enquiries',
    shortDescription: 'Bespoke architectural inquiries for oversized spans, specialized hardware, and hybrid material requests.',
    fullDescription: 'If your architectural plans feature unique curved glass, oversized pivot doors exceeding 3 meters, or custom finish combinations, our team works directly with architects and interior designers to assess structural feasibility.',
    iconName: 'Wrench',
    image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      'Custom dimension feasibility assessment',
      'Specialized PVD hardware & lock integration',
      'Curved glass & non-standard geometry review',
      'Dedicated quotation & technical documentation'
    ]
  }
];
