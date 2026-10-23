import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'cat-1',
    slug: 'upvc-doors-windows',
    name: 'UPVC Doors & Windows',
    shortDescription: 'Energy-efficient, acoustic insulated UPVC systems designed for modern residential and commercial architectures.',
    fullDescription: 'Our UPVC doors and windows combine German engineering standards with tropicalized profile formulations. Offering superior thermal insulation, sound dampening, zero termite risk, and weather resistance, they deliver lasting performance with minimal upkeep.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    iconName: 'LayoutGrid',
    featured: true,
    subCategories: [
      { id: 'sub-1-1', name: 'UPVC Casement Windows', slug: 'upvc-casement-windows', description: 'Side or top-hung casement sash with multi-point locking' },
      { id: 'sub-1-2', name: 'UPVC Sliding Windows', slug: 'upvc-sliding-windows', description: 'Smooth gliding horizontal sliding tracks' },
      { id: 'sub-1-3', name: 'UPVC Fixed Windows', slug: 'upvc-fixed-windows', description: 'Picture windows offering panoramic outdoor views' },
      { id: 'sub-1-4', name: 'UPVC Combination Windows', slug: 'upvc-combination-windows', description: 'Integrated fixed, slider, and casement configurations' },
      { id: 'sub-1-5', name: 'UPVC Main Doors', slug: 'upvc-main-doors', description: 'High-security reinforced entrance doors' },
      { id: 'sub-1-6', name: 'UPVC Sliding Doors', slug: 'upvc-sliding-doors', description: 'Expansive patio sliding doors with mosquito mesh track' },
      { id: 'sub-1-7', name: 'UPVC French Doors', slug: 'upvc-french-doors', description: 'Double leaf hinged patio doors with full glass vision' },
    ]
  },
  {
    id: 'cat-2',
    slug: 'sliding-doors-windows',
    name: 'Sliding Doors & Windows',
    shortDescription: 'Sleek horizontal sliding systems offering effortless operation and wide unobstructed outdoor vistas.',
    fullDescription: 'Engineered for seamless indoor-outdoor transitions, our sliding door and window systems feature precision stainless steel rollers, heavy-duty interlocks, and multi-track profiles capable of supporting large architectural glass spans.',
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    iconName: 'SlidersHorizontal',
    featured: true,
    subCategories: [
      { id: 'sub-2-1', name: 'Sliding Windows', slug: 'sliding-windows', description: 'Two and three track window systems' },
      { id: 'sub-2-2', name: 'Sliding Glass Doors', slug: 'sliding-glass-doors', description: 'Floor to ceiling sliding glass patio doors' },
      { id: 'sub-2-3', name: 'Multi-Track Sliding Systems', slug: 'multi-track-sliding-systems', description: 'Triple and quad-track systems for maximum opening width' },
      { id: 'sub-2-4', name: 'Large-Format Sliding Doors', slug: 'large-format-sliding-doors', description: 'Heavy-duty architectural panels up to 3.5m height' },
      { id: 'sub-2-5', name: 'Slim Sliding Systems', slug: 'slim-sliding-systems', description: 'Minimal sightline interlocks of only 20mm width' },
    ]
  },
  {
    id: 'cat-3',
    slug: 'wooden-products',
    name: 'Wooden Doors & Windows',
    shortDescription: 'Handcrafted natural solid wood and engineered timber doors with rich grain finishes and artisanal details.',
    fullDescription: 'Celebrating the timeless beauty and warmth of genuine timber, our wooden doors and window series are seasoned and kiln-treated to resist moisture and warp. Perfect for luxurious residences, heritage restorations, and bespoke interior spaces.',
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Trees',
    featured: true,
    subCategories: [
      { id: 'sub-3-1', name: 'Wooden Doors', slug: 'wooden-doors', description: 'Solid teak, oak, and walnut external entrance doors' },
      { id: 'sub-3-2', name: 'Wooden Windows', slug: 'wooden-windows', description: 'Traditional and contemporary timber casements' },
      { id: 'sub-3-3', name: 'Wooden Sliding Doors', slug: 'wooden-sliding-doors', description: 'Concealed ceiling track timber barn and pocket sliders' },
      { id: 'sub-3-4', name: 'Interior Wooden Doors', slug: 'interior-wooden-doors', description: 'Flush and paneled interior bedroom and study doors' },
    ]
  },
  {
    id: 'cat-4',
    slug: 'aluminium-products',
    name: 'Aluminium Doors & Windows',
    shortDescription: 'Thermally broken, slim architectural aluminium profiles with anodized and powder-coated finishes.',
    fullDescription: 'Combining lightweight strength with ultra-slim profile sightlines, our aluminium door and window solutions accommodate heavy double-glazed units while delivering contemporary industrial elegance and corrosion-proof structural longevity.',
    heroImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Columns3',
    featured: true,
    subCategories: [
      { id: 'sub-4-1', name: 'Aluminium Windows', slug: 'aluminium-windows', description: 'Architectural top-hung, side-hung, and tilt-and-turn windows' },
      { id: 'sub-4-2', name: 'Aluminium Doors', slug: 'aluminium-doors', description: 'Heavy-duty pivot and hinged entrance doors' },
      { id: 'sub-4-3', name: 'Aluminium Sliding Windows', slug: 'aluminium-sliding-windows', description: 'Smooth gliding thermal break window tracks' },
      { id: 'sub-4-4', name: 'Aluminium Sliding Doors', slug: 'aluminium-sliding-doors', description: 'Expansive glass patio and balcony sliders' },
      { id: 'sub-4-5', name: 'Slim Aluminium Sliding Systems', slug: 'slim-aluminium-sliding-systems', description: 'Minimalist framing for uninterrupted views' },
      { id: 'sub-4-6', name: 'Aluminium Folding Systems', slug: 'aluminium-folding-systems', description: 'Concertina bi-fold doors that collapse to the edge' },
    ]
  },
  {
    id: 'cat-5',
    slug: 'casement-upvc-windows',
    name: 'Casement UPVC Windows',
    shortDescription: 'Classic side-hung and top-hung windows offering exceptional airtightness, ventilation, and sound insulation.',
    fullDescription: 'Casement windows provide maximum airflow when opened wide and superior weather seal when shut. Fitted with perimeter EPDM rubber gaskets and multi-point friction hinges, they ensure total drafts and dust exclusion.',
    heroImage: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Maximize2',
    featured: false,
    subCategories: [
      { id: 'sub-5-1', name: 'Single Casement Windows', slug: 'single-casement-windows', description: 'Single outward opening sash with crank or latch handle' },
      { id: 'sub-5-2', name: 'Double Casement Windows', slug: 'double-casement-windows', description: 'French-style dual opening sashes with flying mullion' },
      { id: 'sub-5-3', name: 'Combination Casement Windows', slug: 'combination-casement-windows', description: 'Casement sash paired with fixed transom or sidelights' },
    ]
  },
  {
    id: 'cat-6',
    slug: 'glass-partitions',
    name: 'Glass & Glass Partitions',
    shortDescription: 'Frameless and slim-profile architectural acoustic glass partitions for corporate offices and luxury residences.',
    fullDescription: 'Create open, luminous, yet acoustically private workspaces and living environments. We offer toughened, laminated, switchable smart glass, and fluted decorative glass tailored with precision aluminium profiles and pivot hardware.',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    iconName: 'SquareCode',
    featured: true,
    subCategories: [
      { id: 'sub-6-1', name: 'Clear Glass', slug: 'clear-glass', description: 'High-clarity low-iron extra clear toughened safety glass' },
      { id: 'sub-6-2', name: 'Frosted Glass', slug: 'frosted-glass', description: 'Acid-etched and sandblasted translucent privacy glass' },
      { id: 'sub-6-3', name: 'Decorative Glass', slug: 'decorative-glass', description: 'Ribbed, fluted, reeded, tinted, and textured glass panels' },
      { id: 'sub-6-4', name: 'Glass Panels', slug: 'glass-panels', description: 'Structural architectural glass panels for walls and railings' },
      { id: 'sub-6-5', name: 'Office Glass Partitions', slug: 'office-glass-partitions', description: 'Single and double glazed acoustic demountable walls' },
      { id: 'sub-6-6', name: 'Slim-Frame Glass Partitions', slug: 'slim-frame-glass-partitions', description: 'Black grid industrial style Crittall-inspired partitions' },
      { id: 'sub-6-7', name: 'Glass Doors', slug: 'glass-doors', description: 'Frameless glass pivot, patch fitting, and sliding doors' },
    ]
  },
  {
    id: 'cat-7',
    slug: 'shower-partitions-cubicles',
    name: 'Shower Partitions & Cubicles',
    shortDescription: 'Custom tempered glass shower enclosures, wet room screens, and sliding cubicles with anti-limescale coating.',
    fullDescription: 'Transform bathrooms into tranquil sanctuary spaces with our frameless and minimal-frame glass shower enclosures. Featuring 8mm to 10mm toughened safety glass, magnetic water seals, and premium brass/stainless hardware in bespoke finishes.',
    heroImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Droplets',
    featured: true,
    subCategories: [
      { id: 'sub-7-1', name: 'Frameless Shower Cubicles', slug: 'frameless-shower-cubicles', description: 'Minimalist edge-to-edge clear glass enclosures' },
      { id: 'sub-7-2', name: 'Framed Shower Cubicles', slug: 'framed-shower-cubicles', description: 'Matte black and brushed brass perimeter framed screens' },
      { id: 'sub-7-3', name: 'Sliding Shower Doors', slug: 'sliding-shower-doors', description: 'Top-hung barn style sliding rollers for compact spaces' },
      { id: 'sub-7-4', name: 'Fixed Shower Glass Panels', slug: 'fixed-shower-glass-panels', description: 'Walk-in wet room partition screens with stabilizer bars' },
      { id: 'sub-7-5', name: 'Bathroom Glass Partitions', slug: 'bathroom-glass-partitions', description: 'WC and vanity dividing glass walls in fluted or frosted finish' },
    ]
  },
  {
    id: 'cat-8',
    slug: 'blinds-shading-solutions',
    name: 'Blinds & Shading Solutions',
    shortDescription: 'Motorized and manual shading systems including roller, Venetian, wooden, and vertical blinds.',
    fullDescription: 'Control natural sunlight, reduce glare, and protect interior furnishings with our architectural shading solutions. Available in blackout, light-filtering solar screen fabrics, basswood, and aluminium slats with smart home motorization.',
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    iconName: 'SunDim',
    featured: true,
    subCategories: [
      { id: 'sub-8-1', name: 'Venetian Blinds', slug: 'venetian-blinds', description: 'Adjustable tilt horizontal slats in aluminium and natural wood' },
      { id: 'sub-8-2', name: 'Roller Blinds', slug: 'roller-blinds', description: 'Clean drop fabric blinds in sunscreen and 100% blackout weave' },
      { id: 'sub-8-3', name: 'Vertical Blinds', slug: 'vertical-blinds', description: 'Ideal for floor-to-ceiling glass facades and patio doors' },
      { id: 'sub-8-4', name: 'Pleated Blinds', slug: 'pleated-blinds', description: 'Compact accordion style blinds with minimal stack height' },
      { id: 'sub-8-5', name: 'Skylight Blinds', slug: 'skylight-blinds', description: 'Tensioned shading solutions for angled roof windows and atriums' },
      { id: 'sub-8-6', name: 'Internal Sliding and Shading Systems', slug: 'internal-sliding-shading-systems', description: 'Integrated panel glide and sliding fabric louvers' },
    ]
  },
  {
    id: 'cat-9',
    slug: 'internal-sliding-systems',
    name: 'Internal Sliding Systems',
    shortDescription: 'Space-saving architectural sliding mechanisms, pocket doors, and decorative room dividers.',
    fullDescription: 'Reclaim floor space and maintain flexible open-plan layouts with concealed ceiling track internal sliding doors. Engineered with soft-close dampers and silent bearing wheel trucks for effortless movement.',
    heroImage: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
    iconName: 'MoveHorizontal',
    featured: false,
    subCategories: [
      { id: 'sub-9-1', name: 'Internal Sliding Doors', slug: 'internal-sliding-doors', description: 'Surface mounted top-hung interior sliding door systems' },
      { id: 'sub-9-2', name: 'Space-Saving Sliding Systems', slug: 'space-saving-sliding-systems', description: 'Concealed cavity pocket door frames disappearing into drywall' },
      { id: 'sub-9-3', name: 'Partition Sliding Systems', slug: 'partition-sliding-systems', description: 'Multi-leaf sliding room dividers for living-dining flexibility' },
      { id: 'sub-9-4', name: 'Slim Aluminium Sliding Systems', slug: 'slim-aluminium-interior-sliding', description: 'Ultra-thin profile internal glass sliders with recessed handles' },
    ]
  },
  {
    id: 'cat-10',
    slug: 'folding-systems',
    name: 'Folding Systems',
    shortDescription: 'Multi-panel bi-fold doors that fold away completely, uniting indoor living areas with gardens and terraces.',
    fullDescription: 'Enjoy 90% wide clear openings with our precision-balanced folding door systems. Available in thermal aluminium and engineered wood, they stack neatly to either or both sides with top or bottom weight-bearing rollers.',
    heroImage: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80',
    iconName: 'FolderGit2',
    featured: true,
    subCategories: [
      { id: 'sub-10-1', name: 'Aluminium Folding Doors', slug: 'aluminium-folding-doors', description: 'Thermally insulated bi-fold doors with heavy duty hinges' },
      { id: 'sub-10-2', name: 'Glass Folding Doors', slug: 'glass-folding-doors', description: 'Frameless glass bi-folding partition walls for showrooms and cafes' },
      { id: 'sub-10-3', name: 'Multi-Panel Folding Systems', slug: 'multi-panel-folding-systems', description: 'Configurations up to 8 continuous folding panels' },
    ]
  },
  {
    id: 'cat-11',
    slug: 'interior-bathroom-panels',
    name: 'Interior & Bathroom Panels',
    shortDescription: 'Waterproof decorative wall panels, acoustic slatted wall cladding, and luxury bathroom surfaces.',
    fullDescription: 'Elevate your interiors without the mess and weight of masonry. Our composite, acrylic, and PVC wall panels offer 100% moisture barrier protection, rapid tongue-and-groove installation, and striking stone, marble, and timber textures.',
    heroImage: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
    iconName: 'PanelTop',
    featured: false,
    subCategories: [
      { id: 'sub-11-1', name: 'Interior Decorative Panels', slug: 'interior-decorative-panels', description: 'Acoustic fluted wood slat panels and feature wall cladding' },
      { id: 'sub-11-2', name: 'Bathroom Wall Panels', slug: 'bathroom-wall-panels', description: 'Seamless large-format waterproof marble-look wall boards' },
      { id: 'sub-11-3', name: 'Shower Panels', slug: 'shower-panels', description: 'Grout-free hygienic shower enclosure back-walls' },
      { id: 'sub-11-4', name: 'Decorative Partition Panels', slug: 'decorative-partition-panels', description: 'Laser-cut CNC decorative screens and architectural infills' },
    ]
  },
  {
    id: 'cat-12',
    slug: 'glass-door-accessories',
    name: 'Glass & Door Accessories',
    shortDescription: 'Architectural grade door handles, stainless hinges, patch fittings, floor springs, and precision locks.',
    fullDescription: 'Hardware is the tactile touchpoint of any architectural door or window. We curate marine-grade 304 and 316 stainless steel, solid brass, and zinc alloy hardware finished in matte black, satin nickel, PVD gold, and antique bronze.',
    heroImage: 'https://images.unsplash.com/photo-1558211553-d1445731f242?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Wrench',
    featured: false,
    subCategories: [
      { id: 'sub-12-1', name: 'Door Handles', slug: 'door-handles', description: 'Modern pull handles, lever handles, and flush recessed cups' },
      { id: 'sub-12-2', name: 'Hinges', slug: 'hinges', description: 'Concealed 3D adjustable hinges, butt hinges, and pivot hinges' },
      { id: 'sub-12-3', name: 'Sliding Door Hardware', slug: 'sliding-door-hardware', description: 'Heavy-duty nylon & steel roller carriages and soft-stop brakes' },
      { id: 'sub-12-4', name: 'Shower Hardware', slug: 'shower-hardware', description: 'Glass-to-glass and glass-to-wall shower hinges and support bars' },
      { id: 'sub-12-5', name: 'Glass Fittings', slug: 'glass-fittings', description: 'Spider fittings, floor springs, patch locks, and point fixings' },
      { id: 'sub-12-6', name: 'Locks and Accessories', slug: 'locks-and-accessories', description: 'Multi-point euro profile cylinder locks and smart digital locks' },
    ]
  }
];
