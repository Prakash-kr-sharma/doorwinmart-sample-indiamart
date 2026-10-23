import { Product } from '../types';

export const products: Product[] = [
  // Category 1: UPVC Doors & Windows
  {
    id: 'prod-upvc-casement-1',
    slug: 'upvc-casement-window-elite',
    name: 'UPVC Casement Window Series 70',
    categorySlug: 'upvc-doors-windows',
    categoryName: 'UPVC Doors & Windows',
    subCategory: 'UPVC Casement Windows',
    shortDescription: 'High-performance multi-chambered UPVC casement window with dual EPDM weather sealing and acoustic glazing.',
    fullDescription: 'The Series 70 UPVC Casement Window delivers unmatched thermal and acoustic comfort. Built with lead-free tropicalized profiles and multi-point perimeter locking, this system withstands extreme monsoon rains, solar exposure, and urban noise pollution. Sashes can be side-hung or top-hung according to architectural ventilation needs.',
    features: [
      'Multi-chamber profile structure ensuring thermal insulation U-value down to 1.3 W/m²K',
      'Continuous double EPDM co-extruded gaskets for superior acoustic insulation up to 40 dB',
      'Multi-point locking mechanism providing enhanced burglary protection',
      'Internal galvanized steel reinforcements (1.5mm gauge) resisting high wind loads',
      'Fusion-welded corner joints ensuring 100% water tightness'
    ],
    materials: ['Lead-free Tropicalized UPVC', 'Toughened Double Glazing (5mm+12A+5mm)', 'Galvanized Steel Core', 'Stainless Steel Friction Stays'],
    openingStyle: 'Side Hung / Top Hung Casement',
    applications: ['Residential Living Rooms', 'Bedrooms', 'Luxury Apartments', 'Commercial Offices'],
    dimensionsSample: 'Customizable from 600mm x 600mm to 1800mm x 2400mm',
    finishOptions: [
      { name: 'Pure Architectural White', colorCode: '#F8F9FA' },
      { name: 'Anthracite Grey Grain', colorCode: '#383E42' },
      { name: 'Golden Oak Woodgrain', colorCode: '#8B5A2B' },
      { name: 'Walnut Dark Woodgrain', colorCode: '#4A3525' }
    ],
    specifications: [
      { label: 'Profile Depth', value: '70 mm' },
      { label: 'Glass Thickness Capability', value: 'Up to 36 mm (Single, Double, or Triple)' },
      { label: 'Sound Reduction (Rw)', value: '32 dB – 42 dB (Glazing Dependent)' },
      { label: 'Wind Resistance Class', value: 'Class C5 / B5 (EN 12210)' },
      { label: 'Air Permeability', value: 'Class 4 (EN 12207)' }
    ],
    images: [
      'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80'
    ],
    isFeatured: true,
    tags: ['Acoustic', 'Energy Efficient', 'Monsoon Proof'],
    samplePriceRange: 'Request Price'
  },
  {
    id: 'prod-upvc-sliding-1',
    slug: 'upvc-sliding-window-3-track',
    name: 'UPVC 3-Track Sliding Window with Mesh',
    categorySlug: 'upvc-doors-windows',
    categoryName: 'UPVC Doors & Windows',
    subCategory: 'UPVC Sliding Windows',
    shortDescription: 'Effortless 3-track sliding window system integrated with a dedicated high-durability stainless steel mosquito mesh track.',
    fullDescription: 'Designed for optimal ventilation without bugs or dust intrusion, this 3-track system accommodates two smooth-gliding glass sashes alongside an independent insect screen sash. Precision engineered nylon rollers on stainless steel tracks ensure whisper-quiet, feather-light gliding even with large glass panels.',
    features: [
      'Independent 3rd track fitted with SS304 fine mosquito mesh sash',
      'Heavy-duty adjustable tandem rollers for effortless glide',
      'Interlock weather-strips with integrated fin seals prevent dust entry',
      'Reinforced meeting stiles for wind deflection resistance',
      'Concealed water drainage slots prevent rainwater backup'
    ],
    materials: ['High-impact UPVC', 'SS304 Mosquito Mesh', 'Clear Float / Toughened Glass', 'Aluminum Rail Infill'],
    openingStyle: 'Horizontal Sliding (2 Glass + 1 Mesh)',
    applications: ['Master Bedrooms', 'Balcony Openings', 'High-Rise Apartments', 'Villas'],
    dimensionsSample: 'Customizable up to 3000mm width x 2100mm height',
    finishOptions: [
      { name: 'Pure Architectural White', colorCode: '#F8F9FA' },
      { name: 'Anthracite Grey', colorCode: '#383E42' },
      { name: 'Dark Oak Texture', colorCode: '#3C2817' }
    ],
    specifications: [
      { label: 'Frame Depth', value: '112 mm (3-Track)' },
      { label: 'Roller Capacity', value: 'Up to 90 kg per sash' },
      { label: 'Glass Thickness', value: '5mm, 6mm Toughened or 18mm DGU' },
      { label: 'Lock Type', value: 'Touch Lock / Crescent Latch' }
    ],
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80'
    ],
    isFeatured: true,
    tags: ['Sliding', 'Mosquito Mesh', 'Balcony Window'],
    samplePriceRange: 'Request Price'
  },
  {
    id: 'prod-upvc-door-main',
    slug: 'upvc-architectural-main-entrance-door',
    name: 'UPVC Architectural Main Door with HPL Panel',
    categorySlug: 'upvc-doors-windows',
    categoryName: 'UPVC Doors & Windows',
    subCategory: 'UPVC Main Doors',
    shortDescription: 'Heavy-duty insulated main entrance door combining steel-reinforced UPVC frame with decorative high-pressure laminate panels.',
    fullDescription: 'Make a bold grand entrance statement while maintaining optimum thermal insulation and weather security. Our UPVC entrance doors incorporate heavy-gauge steel chamber reinforcement, 3D adjustable security hinges, and decorative geometric HPL panel inserts with brushed metallic accent lines.',
    features: [
      '3-point automatic latching and deadbolt euro-cylinder lock',
      'Triple heavy-duty 3D adjustable door hinges supporting up to 130kg',
      'Thermal insulating core inside high-pressure laminate infill panel',
      'Perimeter double compression seals to block outdoor noise and dust',
      'Low threshold aluminium sill for barrier-free access'
    ],
    materials: ['Heavy Section UPVC Profile', 'High-Pressure Exterior Laminate', 'Stainless Steel 304 Pull Handle', 'Heavy Steel Core'],
    openingStyle: 'Hinged Inward / Outward Opening',
    applications: ['Villa Main Entrances', 'Apartment Main Doors', 'Courtyard Access Doors'],
    dimensionsSample: 'Standard 1000mm x 2200mm, or custom double-door formats',
    finishOptions: [
      { name: 'Anthracite Metallic', colorCode: '#2C3034' },
      { name: 'Teak Woodgrain', colorCode: '#6D401C' },
      { name: 'Matte Charcoal & Gold Inlay', colorCode: '#1F2226' }
    ],
    specifications: [
      { label: 'Profile Depth', value: '80 mm' },
      { label: 'Door Leaf Thickness', value: '68 mm' },
      { label: 'Security Class', value: 'RC2 / PAS 24 Compatible' },
      { label: 'Handle Type', value: '1200mm Stainless Steel T-Bar Pull Handle' }
    ],
    images: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80'
    ],
    isFeatured: true,
    tags: ['Security', 'Entrance Door', 'Architectural'],
    samplePriceRange: 'Request Price'
  },
  {
    id: 'prod-upvc-french-1',
    slug: 'upvc-french-patio-door-double-sash',
    name: 'UPVC French Patio Door with Clear Glazing',
    categorySlug: 'upvc-doors-windows',
    categoryName: 'UPVC Doors & Windows',
    subCategory: 'UPVC French Doors',
    shortDescription: 'Classic double-leaf outward opening French patio doors providing maximum unobstructed access and sunlight.',
    fullDescription: 'Our UPVC French Doors feature a master sash and slave sash with flying mullion, leaving a 100% open aperture when both panels are swung wide. Perfect for opening living rooms directly into manicured garden terraces or balconies.',
    features: [
      'Flying mullion design eliminates fixed center post when opened',
      'Multi-point locking on master leaf and concealed shoot bolts on slave leaf',
      'Double glazed units featuring argon gas fill for thermal efficiency',
      'Internal beading for superior security preventing glass removal from outside'
    ],
    materials: ['UPVC Profile', 'Low-E Toughened Double Glazing', 'Zinc Alloy Lever Handles'],
    openingStyle: 'Double Leaf Hinged',
    applications: ['Terrace Patios', 'Verandah Access', 'Garden Entrances', 'Banquets'],
    dimensionsSample: '1500mm to 2200mm width x 2100mm to 2400mm height',
    finishOptions: [
      { name: 'Classic Pure White', colorCode: '#FFFFFF' },
      { name: 'Golden Oak', colorCode: '#9B6434' },
      { name: 'Graphite Grey', colorCode: '#45494E' }
    ],
    specifications: [
      { label: 'Profile Frame Depth', value: '70 mm' },
      { label: 'Opening Angle', value: 'Up to 180 degrees' },
      { label: 'Glass Specification', value: '6mm Toughened + 12mm Air + 6mm Toughened' }
    ],
    images: [
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80'
    ],
    isFeatured: false,
    tags: ['French Door', 'Patio', 'Classic'],
    samplePriceRange: 'Request Price'
  },

  // Category 2: Sliding Doors & Windows
  {
    id: 'prod-slide-large-1',
    slug: 'large-format-architectural-sliding-door',
    name: 'Panorama Large-Format Glass Sliding Door System',
    categorySlug: 'sliding-doors-windows',
    categoryName: 'Sliding Doors & Windows',
    subCategory: 'Large-Format Sliding Doors',
    shortDescription: 'Floor-to-ceiling panoramic sliding glass doors capable of holding massive glass panes with minimal sightline frames.',
    fullDescription: 'Designed for breathtaking architectural villas and high-end residences where unobstructed views are paramount. The Panorama system supports single glass leaves weighing up to 400kg, rolling with minimal friction on precision ground stainless steel rails.',
    features: [
      'Floor-recessed flush threshold with zero trip hazard',
      'Slim vertical interlock profile of only 25mm sightline',
      'Multi-point perimeter locking with motorized remote-control options',
      'Concealed sub-floor water evacuation channel handles torrential rainfall'
    ],
    materials: ['Architectural 6063-T6 Aluminium Alloy', 'Laminated Double Glazing', 'Heavy Steel Carriage Rollers'],
    openingStyle: 'Multi-Track Horizontal Sliding',
    applications: ['Luxury Villas', 'Penthouse Terraces', 'Poolside Lounges', 'Infinity Balconies'],
    dimensionsSample: 'Heights up to 3500mm, panel widths up to 2500mm per sash',
    finishOptions: [
      { name: 'Matte Architectural Noir', colorCode: '#1A1A1A' },
      { name: 'Champagne Bronze Anodized', colorCode: '#A69279' },
      { name: 'Titanium Grey Anodized', colorCode: '#5B626A' }
    ],
    specifications: [
      { label: 'Max Panel Weight', value: '400 kg per sash' },
      { label: 'Visible Interlock Width', value: '25 mm' },
      { label: 'Thermal Insulation Uf', value: '1.8 W/m²K' },
      { label: 'Water Tightness', value: 'Class 9A (600 Pa)' }
    ],
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80'
    ],
    isFeatured: true,
    tags: ['Panoramic', 'Large Format', 'Luxury Villa'],
    samplePriceRange: 'Request Price'
  },
  {
    id: 'prod-slide-slim-1',
    slug: 'slim-line-multi-track-patio-slider',
    name: 'Slimline Multi-Track Patio Sliding Door',
    categorySlug: 'sliding-doors-windows',
    categoryName: 'Sliding Doors & Windows',
    subCategory: 'Multi-Track Sliding Systems',
    shortDescription: 'Flexible multi-track system allowing up to 4 sliding panels to stack neatly against one wall for maximum open area.',
    fullDescription: 'The Slimline multi-track sliding door offers exceptional spatial versatility. With configurations ranging from 2 to 6 panels across 2, 3, or 4 tracks, homeowners can slide away the entire glass facade to create an open alfresco entertaining deck.',
    features: [
      'Smooth tandem nylon-coated steel bearings with self-lubricating hubs',
      'Integrated security hook-bolts engage into heavy frame keeps',
      'Double wool-pile weather stripping with hard polyethylene fin',
      'Available with integrated interior manual or motorized Venetian blinds'
    ],
    materials: ['High-tensile Aluminium', 'Tempered Safety Glass', 'Neoprene Gaskets'],
    openingStyle: '3-Track / 4-Track Stacking Slider',
    applications: ['Balconies', 'Deck Openings', 'Resort Villas', 'Commercial Cafes'],
    dimensionsSample: 'Spans up to 6000mm width x 2700mm height',
    finishOptions: [
      { name: 'Matte Deep Black', colorCode: '#1E1E1E' },
      { name: 'Warm Charcoal Grey', colorCode: '#3A3F45' },
      { name: 'Muted Bronze', colorCode: '#7D6A53' }
    ],
    specifications: [
      { label: 'Track System', value: '2-Track, 3-Track, or 4-Track' },
      { label: 'Glazing Slot', value: 'Single 6mm-10mm or Double 24mm DGU' },
      { label: 'Operation Force', value: '< 25 N to slide 150kg sash' }
    ],
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1000&q=80'
    ],
    isFeatured: false,
    tags: ['Multi Track', 'Balcony', 'Slimline'],
    samplePriceRange: 'Request Price'
  },

  // Category 3: Wooden Products
  {
    id: 'prod-wood-main-1',
    slug: 'handcrafted-solid-teak-pivot-entrance-door',
    name: 'Bespoke Solid Teak Architectural Pivot Door',
    categorySlug: 'wooden-products',
    categoryName: 'Wooden Doors & Windows',
    subCategory: 'Wooden Doors',
    shortDescription: 'Grand pivot entrance door crafted from kiln-seasoned natural teak with concealed heavy-duty hydraulic floor pivot.',
    fullDescription: 'Hand-selected natural teak timber with rich linear grain patterns makes every door a distinct work of artisanal craft. Featuring an oversized leaf rotating smoothly on a concealed German hydraulic pivot hinge, this door opens with majestic ease without traditional wall jamb hinges.',
    features: [
      'Concealed heavy-duty hydraulic bottom floor spring with 90° hold-open',
      'Kiln-dried seasoned teak wood treated with organic anti-termite and moisture sealer',
      'Architectural vertical brass inlay groove detailing',
      'Solid multi-laminated wood core prevents warping and twisting across seasons',
      'Magnetic lock with full-length brushed brass or matte black statement pull bar'
    ],
    materials: ['First-grade Burma Teak / African Teak', 'Solid Brass Inlays', 'German Heavy Pivot Mechanism'],
    openingStyle: '360° / 180° Center or Offset Pivot',
    applications: ['Luxury Residence Entrances', 'Architectural Villas', 'Designer Corporate Foyers'],
    dimensionsSample: 'Widths 1200mm – 1800mm, Heights up to 3000mm',
    finishOptions: [
      { name: 'Natural Honey Teak Oil', colorCode: '#B57C48' },
      { name: 'Dark Walnut Matte Stain', colorCode: '#4B3621' },
      { name: 'Smoked Oak Charred Finish', colorCode: '#2C2723' }
    ],
    specifications: [
      { label: 'Door Thickness', value: '55 mm to 65 mm' },
      { label: 'Pivot Offset', value: '150mm from edge or Center' },
      { label: 'Weight Rating', value: 'Up to 250 kg leaf weight' },
      { label: 'Moisture Content', value: 'Kiln dried to 8% – 12%' }
    ],
    images: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80'
    ],
    isFeatured: true,
    tags: ['Pivot Door', 'Solid Wood', 'Artisanal Luxury'],
    samplePriceRange: 'Request Price'
  },
  {
    id: 'prod-wood-internal-1',
    slug: 'minimalist-flush-wooden-interior-door',
    name: 'Minimalist Flush Interior Wooden Door with Concealed Frame',
    categorySlug: 'wooden-products',
    categoryName: 'Wooden Doors & Windows',
    subCategory: 'Interior Wooden Doors',
    shortDescription: 'Frameless flush interior door sitting completely coplanar with adjacent drywall for minimalist architectural interiors.',
    fullDescription: 'Designed for modern interior spaces seeking clean lines and zero visual clutter. The door leaf sits flush with the finished plasterboard wall, hung on 3D-adjustable concealed hinges with magnetic soft-latch mechanics that click shut with complete silence.',
    features: [
      'Anodized aluminium concealed sub-frame pre-installed into partition walls',
      '3D concealed adjustable hinges completely invisible when door is shut',
      'Magnetic silent latch eliminates clicking metallic strikes',
      'High-density acoustic tubular core providing 30dB room-to-room noise reduction'
    ],
    materials: ['Engineered Timber Core', 'Natural Oak / Walnut Veneer', 'Concealed Aluminium Frame'],
    openingStyle: 'Inward / Outward Flush Hinged',
    applications: ['Luxury Bedrooms', 'Ensuite Bathrooms', 'Executive Boardrooms', 'Walk-In Closets'],
    dimensionsSample: 'Standard 800mm/900mm x 2100mm/2400mm',
    finishOptions: [
      { name: 'Quarter-Cut White Oak', colorCode: '#C8B295' },
      { name: 'American Crown Walnut', colorCode: '#5B4029' },
      { name: 'Matte Pure White Lacquer', colorCode: '#F4F4F4' }
    ],
    specifications: [
      { label: 'Door Thickness', value: '45 mm' },
      { label: 'Acoustic Rating', value: '28 – 32 dB' },
      { label: 'Hinge Type', value: '3x Concealed 3D Adjustable Hinges' }
    ],
    images: [
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80'
    ],
    isFeatured: false,
    tags: ['Flush Door', 'Interior Wood', 'Minimalist'],
    samplePriceRange: 'Request Price'
  },

  // Category 4: Aluminium Products
  {
    id: 'prod-alum-bifold-1',
    slug: 'thermal-break-aluminium-bifold-folding-door',
    name: 'Thermal-Break Aluminium Bi-Fold Door System',
    categorySlug: 'aluminium-products',
    categoryName: 'Aluminium Doors & Windows',
    subCategory: 'Aluminium Folding Systems',
    shortDescription: 'Heavy-duty concertina folding door with polyamide thermal breaks and smooth bottom-rolling carriage tracks.',
    fullDescription: 'Transform entire walls into wide open outdoor spaces. Our thermal break aluminium folding doors feature robust multi-panel hinge connections that glide smoothly to concertina at either side. The thermal break barrier prevents heat transfer, making it ideal for tropical climates or air-conditioned spaces.',
    features: [
      '24mm polyamide thermal break strip reduces HVAC cooling losses',
      'Stainless steel 4-wheel bogie rollers ensure fingertip operation',
      'Heavy-duty flush floor threshold with integrated drainage',
      'High-security shoot bolts lock each folding panel firmly into the track'
    ],
    materials: ['6063 T6 Architectural Aluminium', 'Polyamide Insulating Struts', 'Double Glazed Low-E Units'],
    openingStyle: 'Bi-Folding (3 to 7 Leaf Configurations)',
    applications: ['Living Room Patios', 'Terraces', 'Hotel Lounges', 'Pool Enclosures'],
    dimensionsSample: 'Opening widths from 2400mm up to 7500mm, heights up to 3000mm',
    finishOptions: [
      { name: 'Matte Deep Charcoal', colorCode: '#2B2E33' },
      { name: 'Warm Bronze Anodized', colorCode: '#695847' },
      { name: 'Pure Architectural White', colorCode: '#FFFFFF' }
    ],
    specifications: [
      { label: 'Profile Depth', value: '75 mm' },
      { label: 'Panel Width Max', value: '1100 mm per leaf' },
      { label: 'Panel Weight Max', value: '120 kg per leaf' },
      { label: 'U-Value (Thermal)', value: '1.6 – 1.9 W/m²K' }
    ],
    images: [
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80'
    ],
    isFeatured: true,
    tags: ['Bi-Fold', 'Thermal Break', 'Aluminium'],
    samplePriceRange: 'Request Price'
  },
  {
    id: 'prod-alum-casement-1',
    slug: 'architectural-aluminium-tilt-and-turn-window',
    name: 'Architectural Aluminium Tilt & Turn Window',
    categorySlug: 'aluminium-products',
    categoryName: 'Aluminium Doors & Windows',
    subCategory: 'Aluminium Windows',
    shortDescription: 'Dual-action European window mechanism allowing top tilt for draft-free ventilation and full inward side swing for easy cleaning.',
    fullDescription: 'Versatile European engineering meets architectural aluminium precision. With a single rotation of the ergonomic handle, the window tilts at the top for secure, rain-protected ventilation or swings open 90° for full airflow and effortless glass cleaning from inside.',
    features: [
      'Dual functioning handle: tilt for micro-ventilation, turn for full opening',
      'Continuous triple gasket barrier blocks external rain, wind, and street noise',
      'Concealed hinge options for pure clean minimalist frame sightlines',
      'Child-safe restricted tilt mode option'
    ],
    materials: ['Powder-Coated Extruded Aluminium', 'EPDM Weather Seals', 'Double / Triple Glazing'],
    openingStyle: 'Tilt & Turn',
    applications: ['High-Rise Condominiums', 'Modern Villas', 'Commercial Offices', 'Hospitality Suites'],
    dimensionsSample: 'Customizable up to 1400mm width x 2000mm height per sash',
    finishOptions: [
      { name: 'Graphite Grey', colorCode: '#3E4247' },
      { name: 'Jet Black Matte', colorCode: '#1A1A1A' },
      { name: 'Subtle Champagne Gold', colorCode: '#B5A58D' }
    ],
    specifications: [
      { label: 'System Depth', value: '65 mm / 75 mm' },
      { label: 'Acoustic Performance', value: 'Up to 43 dB' },
      { label: 'Water Tightness', value: 'Class E900' }
    ],
    images: [
      'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80'
    ],
    isFeatured: false,
    tags: ['Tilt & Turn', 'Acoustic', 'European'],
    samplePriceRange: 'Request Price'
  },

  // Category 5: Casement UPVC Windows
  {
    id: 'prod-casement-double-1',
    slug: 'double-casement-upvc-window-french-style',
    name: 'French Double Casement UPVC Window with Flying Mullion',
    categorySlug: 'casement-upvc-windows',
    categoryName: 'Casement UPVC Windows',
    subCategory: 'Double Casement Windows',
    shortDescription: 'Twin outward-swinging UPVC casement window leaves that open wide without any fixed central vertical post.',
    fullDescription: 'Enjoy unobstructed breezy views of your garden or balcony with the French Casement window. The secondary sash carries a floating mullion that swings open along with the sash, leaving a completely open aperture without any dividing vertical rail.',
    features: [
      'Flying mullion design leaves 100% unobstructed panoramic opening',
      'Dual friction stays hold sashes steady even in breezy coastal winds',
      'Heavy-duty central compression seal prevents air leakage when locked',
      'Equipped with push-button key-locking espagnolette handles'
    ],
    materials: ['Lead-Free UPVC', 'High-Clarity Double Glazing', 'Heavy Friction Stays'],
    openingStyle: 'Dual Outward Swing',
    applications: ['Master Bedrooms', 'Bay Windows', 'Garden Facing Rooms'],
    dimensionsSample: 'Up to 1800mm width x 1600mm height',
    finishOptions: [
      { name: 'Pure White', colorCode: '#FFFFFF' },
      { name: 'Anthracite Grain', colorCode: '#3A3F45' },
      { name: 'Golden Oak', colorCode: '#8B5A2B' }
    ],
    specifications: [
      { label: 'Frame Depth', value: '60 mm / 70 mm' },
      { label: 'Opening Angle', value: '90° outward' },
      { label: 'Fire Rating', value: 'Class 1 Fire Retardant Profile' }
    ],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=1000&q=80'
    ],
    isFeatured: false,
    tags: ['French Casement', 'Wide View', 'UPVC'],
    samplePriceRange: 'Request Price'
  },

  // Category 6: Glass & Glass Partitions
  {
    id: 'prod-glass-office-1',
    slug: 'acoustic-frameless-office-glass-partition',
    name: 'Acoustic Double-Glazed Office Glass Partition Wall',
    categorySlug: 'glass-partitions',
    categoryName: 'Glass & Glass Partitions',
    subCategory: 'Office Glass Partitions',
    shortDescription: 'Demountable acoustic double-glazed glass partition system providing acoustic privacy up to 48dB with slim aluminium perimeter channels.',
    fullDescription: 'Create transparent, light-filled corporate environments without sacrificing meeting room confidentiality. Our double-glazed acoustic partitions use laminated safety glass with acoustic PVB interlayers, seated inside minimal 25mm slim floor and ceiling aluminium channels.',
    features: [
      'High acoustic isolation rating tested up to 48 dB Rw',
      'Dry-jointed with ultra-clear vertical polycarbonate dry seals (no messy silicone)',
      'Compatible with frameless glass doors, timber acoustic doors, or aluminium pivot doors',
      'Optional switchable smart PDLC film for instant privacy at the push of a button'
    ],
    materials: ['10mm + 12mm Acoustic Laminated Safety Glass', 'Extruded Aluminium Channels', 'EPDM Sound Seals'],
    openingStyle: 'Fixed Partition with Integrated Pivot Door',
    applications: ['Executive Boardrooms', 'Private Offices', 'Conference Rooms', 'Law Firms & Financial Offices'],
    dimensionsSample: 'Heights up to 3600mm, continuous modular lengths',
    finishOptions: [
      { name: 'Matte Jet Black', colorCode: '#1A1A1A' },
      { name: 'Satin Silver Anodized', colorCode: '#C0C0C0' },
      { name: 'Brushed Bronze Gold', colorCode: '#9C8262' }
    ],
    specifications: [
      { label: 'Acoustic Rating', value: 'Up to 48 dB (Double Glazed)' },
      { label: 'Channel Height', value: '25 mm Minimalist Floor & Ceiling Channel' },
      { label: 'Glass Specification', value: '10.8mm Acoustic Laminate + 12.8mm Acoustic Laminate' },
      { label: 'Safety Standard', value: 'BS EN 12600 Class 1(B)1 Safety Glazing' }
    ],
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80'
    ],
    isFeatured: true,
    tags: ['Acoustic 48dB', 'Office Partition', 'Smart Glass Ready'],
    samplePriceRange: 'Request Price'
  },
  {
    id: 'prod-glass-crittall-1',
    slug: 'slim-frame-black-grid-crittall-glass-partition',
    name: 'Industrial Black-Grid Slim Architectural Glass Partition',
    categorySlug: 'glass-partitions',
    categoryName: 'Glass & Glass Partitions',
    subCategory: 'Slim-Frame Glass Partitions',
    shortDescription: 'Bespoke industrial aesthetic black grid glass partition with matching French pivot doors and fluted or clear glass.',
    fullDescription: 'The enduring elegance of industrial loft architecture meets modern precision engineering. Featuring geometric grid aluminium muntin bars applied to high-clarity safety glass, this partition delineates spaces with striking visual character while allowing continuous daylight penetration.',
    features: [
      'Precision welded or mechanically interlocked slim 30mm profile gridwork',
      'Available with fluted (reeded) glass for privacy with light diffusion',
      'Floor spring pivot door with 90-degree hold-open capability',
      'Durable architectural powder coat finish with slight micro-texture'
    ],
    materials: ['Slim Aluminium Alloy Sections', '8mm / 10mm Toughened Clear or Fluted Glass'],
    openingStyle: 'Fixed Wall with Swing Pivot Door',
    applications: ['Living-Dining Room Dividers', 'Home Studies', 'Boutique Showrooms', 'Fine Dining Restaurants'],
    dimensionsSample: 'Custom fabricated to exact site openings up to 3400mm height',
    finishOptions: [
      { name: 'Matte Textured Black', colorCode: '#161616' },
      { name: 'Deep Bronze Anodized', colorCode: '#4E4238' },
      { name: 'Satin Brass Gold', colorCode: '#B89B6C' }
    ],
    specifications: [
      { label: 'Profile Sightline', value: '30 mm perimeter, 20 mm grid muntin' },
      { label: 'Glass Infill Options', value: 'Clear, Fluted Reeded, Tinted Smoked Grey' },
      { label: 'Door Lock', value: 'Magnetic Roller Catch with Minimalist Lever' }
    ],
    images: [
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80'
    ],
    isFeatured: true,
    tags: ['Crittall Style', 'Fluted Glass', 'Industrial Elegance'],
    samplePriceRange: 'Request Price'
  },

  // Category 7: Shower Partitions & Cubicles
  {
    id: 'prod-shower-frameless-1',
    slug: 'frameless-corner-walk-in-shower-cubicle',
    name: 'Prestige Frameless Corner Shower Cubicle with Pivot Door',
    categorySlug: 'shower-partitions-cubicles',
    categoryName: 'Shower Partitions & Cubicles',
    subCategory: 'Frameless Shower Cubicles',
    shortDescription: 'Minimalist 10mm toughened glass corner shower enclosure with solid brass hinges and anti-limescale easy-clean coating.',
    fullDescription: 'Elevate your bathroom into a 5-star hotel spa experience. Crafted from 10mm ultra-clear low-iron toughened safety glass, this frameless corner cubicle features chamfered polished glass edges, solid forged brass hinges, and a magnetic translucent threshold seal that keeps water strictly confined.',
    features: [
      '10mm Toughened safety glass compliant with EN 12150 standard',
      'Hydrophobic nano-coating repels soap scum, limescale, and water spotting',
      'Solid brass 90-degree glass-to-glass hinges tested for 100,000 cycles',
      'Clear magnetic seals ensure airtight splash closure',
      'Reinforced stainless steel diagonal or ceiling support bar'
    ],
    materials: ['10mm Ultra-Clear Toughened Glass', 'Forged Solid Brass Hardware', 'Silicone-Free Magnetic Gaskets'],
    openingStyle: 'Corner Entry Pivot Door',
    applications: ['Luxury Master En-Suites', 'High-End Guest Bathrooms', 'Boutique Hotel Suites'],
    dimensionsSample: '900mm x 900mm, 1000mm x 1000mm, 1200mm x 900mm x 2000mm H',
    finishOptions: [
      { name: 'Brushed Brass PVD', colorCode: '#B89B6C' },
      { name: 'Matte Noir Black', colorCode: '#1A1A1A' },
      { name: 'Brushed Stainless Nickel', colorCode: '#8E9194' },
      { name: 'Rose Gold PVD', colorCode: '#B76E79' }
    ],
    specifications: [
      { label: 'Glass Thickness', value: '10 mm Toughened Float / Low-Iron' },
      { label: 'Hardware Finish', value: 'PVD Coated Corrosion Resistant' },
      { label: 'Height', value: '2000 mm Standard (Custom up to 2400 mm)' },
      { label: 'Warranty / Longevity', value: 'Engineered for decades of daily use' }
    ],
    images: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80'
    ],
    isFeatured: true,
    tags: ['Frameless Glass', 'Spa Luxury', 'Easy Clean Nano'],
    samplePriceRange: 'Request Price'
  },
  {
    id: 'prod-shower-sliding-1',
    slug: 'top-hung-sliding-glass-shower-enclosure',
    name: 'RollerGlide Top-Hung Sliding Glass Shower Enclosure',
    categorySlug: 'shower-partitions-cubicles',
    categoryName: 'Shower Partitions & Cubicles',
    subCategory: 'Sliding Shower Doors',
    shortDescription: 'Industrial barn-door style exposed top roller sliding shower screen, perfect for bathrooms where swing doors have space constraints.',
    fullDescription: 'The RollerGlide shower enclosure features substantial exposed stainless steel wheels rolling smoothly along a heavy cylindrical upper guide bar. Because the door slides laterally, it requires zero outward swing space, making it the perfect solution for tight luxury en-suites.',
    features: [
      'Exposed 70mm diameter stainless steel tandem roller wheels',
      'Soft-brake dampers at both ends prevent door slamming',
      'Subtle bottom floor guide prevents glass sway without full floor track',
      'Can be configured alcove wall-to-wall or corner with return fixed panel'
    ],
    materials: ['304 Grade Stainless Steel Bar & Rollers', '8mm / 10mm Toughened Glass'],
    openingStyle: 'Single Sliding Panel on Overhead Rail',
    applications: ['Alcove Shower Enclosures', 'Apartment Bathrooms', 'Ensuite Wetrooms'],
    dimensionsSample: 'Opening widths 1200mm to 1800mm x 2000mm height',
    finishOptions: [
      { name: 'Brushed Stainless Steel', colorCode: '#9AA0A6' },
      { name: 'Matte Black Ceramic', colorCode: '#1A1A1A' },
      { name: 'Polished PVD Gold', colorCode: '#D4AF37' }
    ],
    specifications: [
      { label: 'Track Diameter', value: '25 mm Solid Stainless Steel Tube' },
      { label: 'Glass Gauge', value: '8mm or 10mm Toughened Safety Glass' },
      { label: 'Roller Diameter', value: '70 mm Dual Bearing Rollers' }
    ],
    images: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80'
    ],
    isFeatured: false,
    tags: ['Sliding Shower', 'Barn Roller', 'Space Saving'],
    samplePriceRange: 'Request Price'
  },

  // Category 8: Blinds & Shading Solutions
  {
    id: 'prod-blind-roller-1',
    slug: 'motorized-architectural-sunscreen-roller-blind',
    name: 'Motorized Architectural Sunscreen Roller Blind System',
    categorySlug: 'blinds-shading-solutions',
    categoryName: 'Blinds & Shading Solutions',
    subCategory: 'Roller Blinds',
    shortDescription: 'Precision motorized drop roller blinds in 3% open solar screen fabric, maintaining outside views while rejecting 97% of UV rays.',
    fullDescription: 'Achieve effortless solar comfort and interior glare control. Woven from durable vinyl-coated fibreglass yarns with a 3% micro-basketweave, these blinds let natural diffused daylight in while blocking harsh thermal heat and preserving your outdoor skyline views. Equipped with quiet Somfy motors compatible with home automation.',
    features: [
      'Ultra-silent tubular motor with smart app and voice control integration',
      '3% openness solar screen fabric blocks 97% UV and reduces interior cooling loads',
      'Heavy extruded bottom weight bar keeps fabric drop taut and wrinkle-free',
      'Optional side guide tension cables or blackout side channels'
    ],
    materials: ['Fibreglass & Vinyl Micro-Weave Fabric', 'Aluminium Roller Barrel', 'Concealed Motor Drive'],
    openingStyle: 'Motorized Vertical Roll Up / Down',
    applications: ['Curtain Wall Glass Facades', 'Living Rooms', 'Home Theatres', 'High-Rise Balcony Glass'],
    dimensionsSample: 'Custom widths up to 3600mm in single drop, heights up to 4500mm',
    finishOptions: [
      { name: 'Warm Chalk White', colorCode: '#EFEFEA' },
      { name: 'Oatmeal Beige', colorCode: '#D5C9B7' },
      { name: 'Charcoal Slate Grey', colorCode: '#4A4D52' },
      { name: 'Midnight Charcoal', colorCode: '#26282B' }
    ],
    specifications: [
      { label: 'Solar Heat Gain Reduction', value: 'Up to 78%' },
      { label: 'Motor Noise Level', value: '< 38 dB Whisper Quiet' },
      { label: 'Smart Connectivity', value: 'Zigbee / Wi-Fi / RS485 / Alexa / Google' },
      { label: 'Flame Retardancy', value: 'NFPA 701 & BS 5867 Certified' }
    ],
    images: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80'
    ],
    isFeatured: true,
    tags: ['Motorized', 'Solar Screen', 'Smart Home'],
    samplePriceRange: 'Request Price'
  },
  {
    id: 'prod-blind-venetian-1',
    slug: 'natural-basswood-architectural-venetian-blind',
    name: 'Natural Basswood 50mm Architectural Venetian Blind',
    categorySlug: 'blinds-shading-solutions',
    categoryName: 'Blinds & Shading Solutions',
    subCategory: 'Venetian Blinds',
    shortDescription: 'Premium kiln-dried 50mm basswood Venetian blinds featuring matching timber valance and decorative cloth ladder tapes.',
    fullDescription: 'Add tactile warmth and directional light management to any interior space. Crafted from sustainable kiln-seasoned American basswood slats, these 50mm Venetian blinds feature smooth tilt wand control, child-safe cordless lift options, and tailored herringbone fabric ladder tapes.',
    features: [
      '50mm wide lightweight genuine basswood slats with UV protective lacquer',
      'Custom woven decorative fabric ladder tapes in contrasting or tonal colors',
      'Matching hardwood fascia valance conceals headrail hardware',
      '180-degree precision slat tilting for directional lighting and privacy'
    ],
    materials: ['Seasoned American Basswood', 'Woven Cotton Ladder Tape', 'Heavy Steel Headrail'],
    openingStyle: 'Tilt & Lift (Cordless / Motorized Options)',
    applications: ['Executive Studies', 'Dining Areas', 'Bedrooms', 'Boutique Hotels'],
    dimensionsSample: 'Widths 400mm to 2700mm, drops up to 3000mm',
    finishOptions: [
      { name: 'Natural Warm Oak', colorCode: '#9C6F44' },
      { name: 'Dark Roast Walnut', colorCode: '#432F21' },
      { name: 'Crisp Architectural White', colorCode: '#F7F7F7' },
      { name: 'Matte Ebony Black', colorCode: '#1E1E1E' }
    ],
    specifications: [
      { label: 'Slat Width', value: '50 mm (2 inches)' },
      { label: 'Slat Thickness', value: '2.8 mm' },
      { label: 'Moisture Sealing', value: 'Multi-layer Polyurethane Sealant' }
    ],
    images: [
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80'
    ],
    isFeatured: false,
    tags: ['Venetian', 'Natural Wood', 'Basswood'],
    samplePriceRange: 'Request Price'
  },

  // Category 9: Internal Sliding Systems
  {
    id: 'prod-internal-pocket-1',
    slug: 'concealed-cavity-pocket-sliding-door-system',
    name: 'Concealed Cavity Pocket Sliding Door Architectural Frame',
    categorySlug: 'internal-sliding-systems',
    categoryName: 'Internal Sliding Systems',
    subCategory: 'Space-Saving Sliding Systems',
    shortDescription: 'Reinforced galvanized steel pocket cassette system that allows single or double doors to slide seamlessly into the wall cavity.',
    fullDescription: 'Reclaim up to 10 square feet of usable floor space per door opening. The concealed cavity pocket door frame integrates into standard drywall studwork, allowing timber or glass doors to glide inside the wall out of sight, leaving completely unobstructed living spaces.',
    features: [
      'Heavy galvanized steel cassette with corrugated horizontal reinforcing ribs',
      'Extractable aluminium track allows roller servicing without damaging drywall',
      'Integrated soft-close dampers gently catch and cushion door movement',
      'Compatible with full height floor-to-ceiling doors with no header casing'
    ],
    materials: ['Zinc-Plated Steel Cassette', 'Extruded Aluminium Track', 'Nylon-Coated Ball Bearing Wheels'],
    openingStyle: 'Concealed Cavity Slide',
    applications: ['Ensuite Bathrooms', 'Pantry Closets', 'Home Offices', 'Dressing Rooms'],
    dimensionsSample: 'Standard wall thicknesses 100mm & 125mm, door sizes 700mm to 1200mm width',
    finishOptions: [
      { name: 'Galvanized Metal Cassette (Ready for Drywall)', colorCode: '#B0B0B0' },
      { name: 'Matte Black Track Trim', colorCode: '#1E1E1E' }
    ],
    specifications: [
      { label: 'Max Door Weight', value: '120 kg per leaf' },
      { label: 'Wall Thickness', value: '100 mm (single board) / 125 mm (double board)' },
      { label: 'Soft Close', value: 'Dual directional bi-lateral soft close' }
    ],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=80'
    ],
    isFeatured: false,
    tags: ['Pocket Door', 'Space Saver', 'Concealed'],
    samplePriceRange: 'Request Price'
  },

  // Category 10: Folding Systems
  {
    id: 'prod-fold-glass-1',
    slug: 'frameless-glass-folding-stacking-patio-system',
    name: 'Panorama Frameless Glass Folding & Stacking System',
    categorySlug: 'folding-systems',
    categoryName: 'Folding Systems',
    subCategory: 'Glass Folding Doors',
    shortDescription: 'Frameless glass curtain wall system where independent panels slide and fold 90° against the wall for 100% opening.',
    fullDescription: 'Enjoy unobstructed 360° views without vertical profile frames. Each toughened glass panel moves independently along top and bottom tracks and swings 90 degrees to stack neatly against the side wall, converting balconies and verandahs into all-season sheltered sanctuaries.',
    features: [
      'Completely frameless vertical edges create uninterrupted glass vistas',
      'Individual panels slide and pivot into a compact side stack',
      'UV-resistant clear H-profile seals between glass panes keep rain out',
      'Top-hung or bottom-weighted track options to suit structural ceilings'
    ],
    materials: ['10mm / 12mm Toughened Clear Glass', 'Anodized Aluminium Track Profiles'],
    openingStyle: 'Independent Slide & Pivot Fold',
    applications: ['Balconies', 'Rooftop Terraces', 'Banqueting Verandahs', 'Restaurant Patios'],
    dimensionsSample: 'Lengths up to 12 meters, heights up to 2800mm',
    finishOptions: [
      { name: 'Satin Anodized Silver', colorCode: '#CCCCCC' },
      { name: 'Matte Charcoal Grey', colorCode: '#35383D' },
      { name: 'Architectural Bronze', colorCode: '#665343' }
    ],
    specifications: [
      { label: 'Glass Specification', value: '10mm or 12mm Toughened Safety Glass' },
      { label: 'Panel Width Range', value: '500 mm to 800 mm per panel' },
      { label: 'Sound Insulation', value: 'Up to 24 dB sound reduction' }
    ],
    images: [
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80'
    ],
    isFeatured: true,
    tags: ['Frameless Folding', 'Glass Curtain', 'Balcony Glazing'],
    samplePriceRange: 'Request Price'
  },

  // Category 11: Interior & Bathroom Panels
  {
    id: 'prod-panel-acoustic-1',
    slug: 'acoustic-fluted-wood-slat-interior-wall-panel',
    name: 'Nordic Acoustic Fluted Wood Slat Wall Panel',
    categorySlug: 'interior-bathroom-panels',
    categoryName: 'Interior & Bathroom Panels',
    subCategory: 'Interior Decorative Panels',
    shortDescription: 'Modern acoustic slatted wall panel combining real wood veneer slats with high-density recycled acoustic felt backing.',
    fullDescription: 'Add rich architectural texture, visual depth, and acoustic dampening to living rooms, TV feature walls, and bedroom headboards. Constructed with natural oak and walnut veneer slats mounted upon a 9mm sound-absorbing recycled PET felt backing, reverberation is drastically diminished.',
    features: [
      'Significant room echo and flutter reverberation reduction (Class A absorption)',
      'Natural real wood veneer surface with organic grain variations',
      '9mm recycled PET polyester acoustic felt backing (100% recyclable)',
      'Easy modular tongue-and-groove or screw-through-felt installation'
    ],
    materials: ['Natural Timber Veneer', 'Medium-Density Fibreboard Core', 'Recycled PET Acoustic Felt'],
    openingStyle: 'Wall Mounted Panel System',
    applications: ['Home Theatres', 'Living Room TV Consoles', 'Master Bedroom Headboard Walls', 'Corporate Reception Areas'],
    dimensionsSample: '600mm width x 2400mm / 2700mm height x 21mm depth',
    finishOptions: [
      { name: 'Natural Scandinavian Oak', colorCode: '#D3B88C' },
      { name: 'American Smoked Walnut', colorCode: '#5B4029' },
      { name: 'Charcoal Black Stained Oak', colorCode: '#222222' }
    ],
    specifications: [
      { label: 'Panel Dimensions', value: '2400mm x 600mm x 21mm' },
      { label: 'Slat Width & Spacing', value: '27mm slat width, 13mm gap' },
      { label: 'Sound Absorption (NRC)', value: '0.85 with 50mm battening' }
    ],
    images: [
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80'
    ],
    isFeatured: true,
    tags: ['Acoustic Slats', 'Feature Wall', 'Nordic Timber'],
    samplePriceRange: 'Request Price'
  },
  {
    id: 'prod-panel-bath-1',
    slug: 'seamless-waterproof-composite-bathroom-wall-panel',
    name: 'AquaShield Seamless Waterproof Bathroom Marble-Look Panel',
    categorySlug: 'interior-bathroom-panels',
    categoryName: 'Interior & Bathroom Panels',
    subCategory: 'Bathroom Wall Panels',
    shortDescription: '100% waterproof large-format stone composite wall panels with grout-free hygienic tongue-and-groove locking.',
    fullDescription: 'Say goodbye to discolored grout lines and tile moisture seepage. AquaShield panels deliver the luxurious visual texture of continuous Italian Statuario marble with ultra-durable composite polymer durability. Panels interlock with a micro-bevel tongue and groove joint, creating a 100% watertight hygienic surface.',
    features: [
      '100% waterproof solid stone polymer composite core (will not swell or rot)',
      'Grout-free installation eliminates mold, mildew, and scrubbing',
      'Can be installed directly over existing bathroom ceramic tiles',
      'High-definition marble and travertine digital textures with matte honed finish'
    ],
    materials: ['Stone Polymer Composite (SPC)', 'UV Protective Wear Layer'],
    openingStyle: 'Wall Cladding System',
    applications: ['Shower Enclosures', 'Full Bathroom Walls', 'Vanity Splashbacks', 'Commercial Restrooms'],
    dimensionsSample: '1200mm width x 2400mm / 2600mm height x 4.5mm thickness',
    finishOptions: [
      { name: 'Statuario Italian White Marble', colorCode: '#F5F5F3' },
      { name: 'Nero Marquina Black Marble', colorCode: '#222426' },
      { name: 'Travertine Warm Crema', colorCode: '#E4D8C4' }
    ],
    specifications: [
      { label: 'Panel Dimensions', value: '2600mm x 1200mm x 4.5mm' },
      { label: 'Fire Rating', value: 'Class B-s1, d0' },
      { label: 'Joint System', value: 'Watertight Hydrolock Tongue & Groove' }
    ],
    images: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80'
    ],
    isFeatured: false,
    tags: ['Waterproof', 'Bathroom Panel', 'Marble Look'],
    samplePriceRange: 'Request Price'
  },

  // Category 12: Glass & Door Accessories
  {
    id: 'prod-hardware-handle-1',
    slug: 'architectural-solid-brass-knurled-door-pull-handle',
    name: 'Apex Architectural Solid Brass Knurled Pull Handle',
    categorySlug: 'glass-door-accessories',
    categoryName: 'Glass & Door Accessories',
    subCategory: 'Door Handles',
    shortDescription: 'Precision diamond-knurled solid brass door pull handle for main entrance, timber, and glass doors.',
    fullDescription: 'The tactile focal point of any grand doorway. Machined from solid aircraft-grade brass billet with a precision diamond-cut knurling texture, the Apex handle offers a firm, confident grip. Available in single-sided surface bolt-through or back-to-back pairs for timber and glass doors.',
    features: [
      'Precision machined from solid forged brass billet (no hollow tube)',
      'Diamond cross-knurled grip zone for tactile satisfaction',
      'Supplied with mounting bolts for both wood doors and tempered glass doors',
      'PVD physical vapor deposition finish guarantees against tarnish and corrosion'
    ],
    materials: ['Solid Forged Brass Billet', 'High-Tensile Stainless Bolts', 'EPDM Glass Washers'],
    openingStyle: 'Pull / Push Handle',
    applications: ['Pivot Doors', 'Wooden Entrance Doors', 'Glass Patch Fitting Doors', 'Commercial Showrooms'],
    dimensionsSample: 'Lengths 600mm, 900mm, and 1200mm (diameter 32mm)',
    finishOptions: [
      { name: 'Satin Brushed Brass PVD', colorCode: '#B89B6C' },
      { name: 'Matte Gunmetal Noir', colorCode: '#25272A' },
      { name: 'Smoked Bronze Antique', colorCode: '#57483B' }
    ],
    specifications: [
      { label: 'Diameter', value: '32 mm' },
      { label: 'Overall Lengths', value: '600mm / 900mm / 1200mm' },
      { label: 'Glass Hole Diameter', value: '14 mm' }
    ],
    images: [
      'https://images.unsplash.com/photo-1558211553-d1445731f242?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80'
    ],
    isFeatured: true,
    tags: ['Solid Brass', 'Knurled Handle', 'Luxury Hardware'],
    samplePriceRange: 'Request Price'
  },
  {
    id: 'prod-hardware-patch-1',
    slug: 'heavy-duty-glass-patch-fittings-floor-spring-kit',
    name: 'Precision Hydraulic Floor Spring & Stainless Patch Fitting Kit',
    categorySlug: 'glass-door-accessories',
    categoryName: 'Glass & Door Accessories',
    subCategory: 'Glass Fittings',
    shortDescription: 'Commercial grade concealed hydraulic floor spring and marine-grade 316 stainless steel patch fittings for frameless glass doors.',
    fullDescription: 'Complete architectural hardware kit for frameless toughened glass pivot doors. Includes a high-durability double-action concealed floor spring with adjustable closing and latching speeds, top pivot, bottom patch, and euro-profile security patch lock.',
    features: [
      'Concealed cement-box floor spring with dual-valve speed adjustment',
      'Hold-open at 90° and smooth hydraulic controlled return',
      'Cover plates pressed from marine grade AISI 316 stainless steel',
      'Tested for 500,000 continuous opening and closing cycles'
    ],
    materials: ['AISI 316 Stainless Steel Cover', 'Forged Aluminium Patch Body', 'Cast Iron Floor Spring'],
    openingStyle: 'Double Action 180° Swing Pivot',
    applications: ['Corporate Entrances', 'Retail Showrooms', 'Office Glass Partitions', 'Hotel Lobbies'],
    dimensionsSample: 'Suitable for 10mm to 12mm glass thickness, door width up to 1100mm',
    finishOptions: [
      { name: 'Satin Brushed Stainless Steel', colorCode: '#A2A5A8' },
      { name: 'Matte Black PVD', colorCode: '#1A1A1A' },
      { name: 'PVD Polished Mirror Gold', colorCode: '#D4AF37' }
    ],
    specifications: [
      { label: 'Max Door Weight', value: '105 kg / 150 kg models' },
      { label: 'Closing Speed Range', value: '130° – 10° and 10° – 0° adjustable' },
      { label: 'Tested Standards', value: 'EN 1154 Standard' }
    ],
    images: [
      'https://images.unsplash.com/photo-1558211553-d1445731f242?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80'
    ],
    isFeatured: false,
    tags: ['Floor Spring', 'Patch Fitting', 'Stainless 316'],
    samplePriceRange: 'Request Price'
  }
];
