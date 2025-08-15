import { Product } from '../types';

export const products: Product[] = [
  // Rectifiers
  {
    id: 'rect-001',
    name: 'High Power Bridge Rectifier 25A',
    category: 'Rectifiers',
    price: 1250,
    originalPrice: 1500,
    discount: 17,
    image: 'https://tse3.mm.bing.net/th/id/OIP.2X0rpRSdvMvW4pQ4id7DUQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    specifications: {
      'Max Current': '25A',
      'Voltage Rating': '1000V',
      'Package Type': 'KBPC',
      'Operating Temperature': '-55°C to +150°C'
    },
    description: 'Heavy-duty bridge rectifier for high-current applications with excellent thermal performance.',
    features: ['High surge current capability', 'Low forward voltage drop', 'Excellent thermal performance'],
    returnPolicy: '30 days return policy',
    inStock: true,
    rating: 4.5,
    reviews: 128
  },
  {
    id: 'rect-002',
    name: 'Single Phase Rectifier Module 100A',
    category: 'Rectifiers',
    price: 2200,
    originalPrice: 2800,
    discount: 21,
    image: 'https://i5.walmartimages.com/seo/YSSTT3ANIG-2Pcs-Single-Phase-Bridge-Rectifier-Portable-Rectifier-Module-100A-1600V-4-Terminals-Current-Conversion-Waterproof-PWM-Inverter-Input-Batte_dca39b4a-60a8-47a1-92bf-03ba90e74b17.d088188b174353d4b8d44b03fe75d5ce.jpeg',
    specifications: {
      'Max Current': '100A',
      'Voltage Rating': '1600V',
      'Package Type': 'Module',
      'Cooling': 'Heat Sink Required'
    },
    description: 'Professional grade single phase rectifier module for industrial applications.',
    features: ['Industrial grade reliability', 'Easy mounting', 'High efficiency'],
    returnPolicy: '15 days return policy',
    inStock: true,
    rating: 4.7,
    reviews: 89
  },
  {
    id: 'rect-003',
    name: 'Fast Recovery Rectifier Diode 10A',
    category: 'Rectifiers',
    price: 450,
    originalPrice: 600,
    discount: 25,
    image: 'https://tse2.mm.bing.net/th/id/OIP.1CPfLLLJtM_UYVCsNb8B2QHaFS?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    specifications: {
      'Max Current': '10A',
      'Voltage Rating': '600V',
      'Recovery Time': '35ns',
      'Package Type': 'TO-220AC'
    },
    description: 'Fast recovery rectifier diode ideal for switching power supplies and motor drives.',
    features: ['Ultra-fast recovery', 'Low reverse current', 'High reliability'],
    returnPolicy: '30 days return policy',
    inStock: true,
    rating: 4.3,
    reviews: 156
  },
  {
    id: 'rect-004',
    name: 'Three Phase Rectifier Bridge 35A',
    category: 'Rectifiers',
    price: 3200,
    originalPrice: 4000,
    discount: 20,
    image: 'https://tse1.mm.bing.net/th/id/OIP.4RRHVuQiYsCtFDPnTt-wZAHaE5?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    specifications: {
      'Max Current': '35A',
      'Voltage Rating': '1200V',
      'Package Type': 'Module',
      'Phases': '3-Phase'
    },
    description: 'Three-phase rectifier bridge for high-power DC conversion applications.',
    features: ['Three-phase configuration', 'High power handling', 'Compact design'],
    returnPolicy: '15 days return policy',
    inStock: true,
    rating: 4.6,
    reviews: 72
  },

  // Switches
  {
    id: 'switch-001',
    name: 'Modular Switch 6A White',
    category: 'Switches',
    price: 120,
    originalPrice: 150,
    discount: 20,
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/2/389452041/UH/BG/WE/3703191/6a-one-way-modular-switch-500x500.jpg',
    specifications: {
      'Current Rating': '6A',
      'Voltage Rating': '250V',
      'Material': 'Polycarbonate',
      'Standard': 'IS 3854'
    },
    colors: ['White', 'Ivory', 'Grey'],
    description: 'Premium modular switch with elegant design and superior performance.',
    features: ['Flame retardant material', 'Easy installation', 'Long lasting'],
    returnPolicy: '45 days return policy',
    inStock: true,
    rating: 4.4,
    reviews: 234
  },
  {
    id: 'switch-002',
    name: 'Industrial Heavy Duty Switch 32A',
    category: 'Switches',
    price: 890,
    originalPrice: 1200,
    discount: 26,
    image: 'https://braumach.com.au/cdn/shop/files/IMG-2349_ebc03194-1067-4631-af37-ffcbf2962b12_1200x630.jpg?v=1690773583',
    specifications: {
      'Current Rating': '32A',
      'Voltage Rating': '440V',
      'Material': 'Bakelite',
      'Protection': 'IP44'
    },
    colors: ['Black', 'Grey'],
    description: 'Heavy-duty industrial switch for high-load applications.',
    features: ['Weather resistant', 'High breaking capacity', 'Corrosion resistant'],
    returnPolicy: '30 days return policy',
    inStock: true,
    rating: 4.7,
    reviews: 167
  },
  {
    id: 'switch-003',
    name: 'Touch Sensor Switch with LED',
    category: 'Switches',
    price: 750,
    originalPrice: 950,
    discount: 21,
    image: 'https://tse2.mm.bing.net/th/id/OIP.-K2rAo5yLJThWR1tFxoUZAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    specifications: {
      'Current Rating': '6A',
      'Voltage Rating': '250V',
      'Technology': 'Capacitive Touch',
      'LED Indicator': 'Yes'
    },
    colors: ['White', 'Black', 'Gold'],
    description: 'Modern touch-sensitive switch with LED indicator and premium finish.',
    features: ['Touch control', 'LED indicator', 'Premium glass panel'],
    returnPolicy: '30 days return policy',
    inStock: true,
    rating: 4.5,
    reviews: 198
  },
  {
    id: 'switch-004',
    name: 'dimmer switch for lighting control',
    category: 'Switches',
    price: 420,
    originalPrice: 500,
    discount: 16,
    image: 'https://tse1.mm.bing.net/th/id/OIP.MhS9FWf2pKq_5p-20e7thwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    specifications: {
      'Max Load': '400W',
      'Voltage Rating': '230V',
      'Control Type': 'Rotary',
      'Compatibility': 'Incandescent/LED'
    },
    description: 'Variable intensity dimmer switch for lighting control.',
    features: ['Smooth dimming', 'LED compatible', 'Soft start'],
    returnPolicy: '30 days return policy',
    inStock: true,
    rating: 4.2,
    reviews: 145
  },
  {
    id: 'switch-005',
    name: 'Smart WiFi Switch 16A',
    category: 'Switches',
    price: 1200,
    originalPrice: 1500,
    discount: 20,
    image: 'https://my-test-11.slatic.net/p/4178b99ea3ee0dcbe21c15e5a7995f89.jpg',
    specifications: {
      'Current Rating': '16A',
      'Voltage Rating': '250V',
      'Connectivity': 'WiFi 2.4GHz',
      'Control': 'App + Voice'
    },
    colors: ['White', 'Black'],
    description: 'Smart WiFi-enabled switch with app control and voice assistant compatibility.',
    features: ['WiFi connectivity', 'Voice control', 'Schedule timer'],
    returnPolicy: '30 days return policy',
    inStock: true,
    rating: 4.6,
    reviews: 312
  },

  // Refrigerators
  {
    id: 'fridge-001',
    name: 'Double Door Refrigerator 265L',
    category: 'Refrigerators',
    price: 28500,
    originalPrice: 32000,
    discount: 11,
    image: 'https://sharptronics.in/cdn/shop/products/Whirpool-21220.jpg?crop=center&height=800&v=1664949367&width=800',
    specifications: {
      'Capacity': '265 Liters',
      'Type': 'Double Door',
      'Energy Rating': '3 Star',
      'Cooling Technology': 'Direct Cool'
    },
    colors: ['Silver', 'Red', 'Blue'],
    sizes: ['265L'],
    description: 'Energy-efficient double door refrigerator with advanced cooling technology.',
    features: ['Frost-free operation', 'Vegetable crisper', 'Toughened glass shelves'],
    returnPolicy: '10 days return policy',
    inStock: true,
    rating: 4.3,
    reviews: 456
  },
  {
    id: 'fridge-002',
    name: 'Single Door Refrigerator 190L',
    category: 'Refrigerators',
    price: 15200,
    originalPrice: 18000,
    discount: 16,
    image: 'https://m.media-amazon.com/images/I/51YoxGAgWoL._SL1500_.jpg',
    specifications: {
      'Capacity': '190 Liters',
      'Type': 'Single Door',
      'Energy Rating': '4 Star',
      'Compressor': 'Reciprocating'
    },
    colors: ['White', 'Grey', 'Blue'],
    sizes: ['190L'],
    description: 'Compact single door refrigerator perfect for small families.',
    features: ['Energy efficient', 'Quick cooling', 'Compact design'],
    returnPolicy: '10 days return policy',
    inStock: true,
    rating: 4.2,
    reviews: 289
  },
  {
    id: 'fridge-003',
    name: 'Side by Side Refrigerator 630L',
    category: 'Refrigerators',
    price: 89500,
    originalPrice: 105000,
    discount: 15,
    image: 'https://www.lg.com/content/dam/channel/wcms/in/images/refrigerators/gl-x257amc3_dmczebn_eail_in_c/gallery/GL-X257AMC3-DZ-4.jpg/_jcr_content/renditions/thum-1600x1062.jpeg',
    specifications: {
      'Capacity': '630 Liters',
      'Type': 'Side by Side',
      'Energy Rating': '5 Star',
      'Features': 'Water & Ice Dispenser'
    },
    colors: ['Stainless Steel', 'Black'],
    sizes: ['630L'],
    description: 'Premium side-by-side refrigerator with water and ice dispenser.',
    features: ['Water dispenser', 'Ice maker', 'Digital display'],
    returnPolicy: '7 days return policy',
    inStock: true,
    rating: 4.7,
    reviews: 178
  },
  {
    id: 'fridge-004',
    name: 'Triple Door Refrigerator 350L',
    category: 'Refrigerators',
    price: 42000,
    originalPrice: 48000,
    discount: 13,
    image: 'https://www.jagranimages.com/images/newimg/04092024/04_09_2024-tripledoorrefrigerator_23791146.jpg',
    specifications: {
      'Capacity': '350 Liters',
      'Type': 'Triple Door',
      'Energy Rating': '4 Star',
      'Cooling': 'Multi Air Flow'
    },
    colors: ['Silver', 'Black', 'Wine Red'],
    sizes: ['350L'],
    description: 'Advanced triple door refrigerator with multi-zone cooling.',
    features: ['Multi-zone cooling', 'Convertible freezer', 'LED lighting'],
    returnPolicy: '10 days return policy',
    inStock: true,
    rating: 4.5,
    reviews: 324
  },

  // Inverters
  {
    id: 'inverter-001',
    name: 'Pure Sine Wave Inverter 1000W',
    category: 'Inverters',
    price: 8500,
    originalPrice: 10000,
    discount: 15,
    image: 'https://www.alpha-batteries.co.uk/wp-content/uploads/P1000-2.jpg',
    specifications: {
      'Power Output': '1000W',
      'Wave Form': 'Pure Sine Wave',
      'Input Voltage': '12V DC',
      'Output Voltage': '230V AC'
    },
    description: 'High-quality pure sine wave inverter for sensitive electronic equipment.',
    features: ['Pure sine wave output', 'Overload protection', 'LED indicators'],
    returnPolicy: '30 days return policy',
    inStock: true,
    rating: 4.4,
    reviews: 267
  },
  {
    id: 'inverter-002',
    name: 'Modified Sine Wave Inverter 500W',
    category: 'Inverters',
    price: 3200,
    originalPrice: 4000,
    discount: 20,
    image: 'https://sell-best.com/wp-content/uploads/2023/06/500w-modified-sine-wave-inverter-3.png',
    specifications: {
      'Power Output': '500W',
      'Wave Form': 'Modified Sine Wave',
      'Input Voltage': '12V DC',
      'Output Voltage': '230V AC'
    },
    description: 'Compact modified sine wave inverter for basic power backup needs.',
    features: ['Compact design', 'Affordable solution', 'Auto shutdown'],
    returnPolicy: '30 days return policy',
    inStock: true,
    rating: 4.1,
    reviews: 189
  },
  {
    id: 'inverter-003',
    name: 'Solar Hybrid Inverter 2000W',
    category: 'Inverters',
    price: 18500,
    originalPrice: 22000,
    discount: 16,
    image: 'https://m.media-amazon.com/images/I/71MqCFZhHDL.jpg',
    specifications: {
      'Power Output': '2000W',
      'Type': 'Solar Hybrid',
      'Input Voltage': '24V DC',
      'Solar Input': 'MPPT'
    },
    description: 'Advanced solar hybrid inverter with MPPT charge controller.',
    features: ['Solar charging', 'MPPT technology', 'LCD display'],
    returnPolicy: '15 days return policy',
    inStock: true,
    rating: 4.6,
    reviews: 145
  },
  {
    id: 'inverter-004',
    name: 'High Frequency Inverter 1500W',
    category: 'Inverters',
    price: 12000,
    originalPrice: 15000,
    discount: 20,
    image: 'https://image.made-in-china.com/2f0j00NecRMgiWrboB/1500W-12-24-48VDC-100-120-220VAC-DC-to-AC-Power-Inverter-High-Frequency.jpg',
    specifications: {
      'Power Output': '1500W',
      'Technology': 'High Frequency',
      'Input Voltage': '24V DC',
      'Efficiency': '95%'
    },
    description: 'High-efficiency inverter with advanced high-frequency technology.',
    features: ['High efficiency', 'Lightweight design', 'Fast switching'],
    returnPolicy: '30 days return policy',
    inStock: true,
    rating: 4.3,
    reviews: 198
  },

  // Additional Electrical Appliances
  {
    id: 'fan-001',
    name: 'Ceiling Fan 1200mm Premium',
    category: 'Fans',
    price: 3500,
    originalPrice: 4200,
    discount: 17,
    image: 'https://m.media-amazon.com/images/I/719l9h7KTwL._SL1500_.jpg',
    specifications: {
      'Sweep Size': '1200mm',
      'Speed': '350 RPM',
      'Power': '75W',
      'Material': 'Metal Blades'
    },
    colors: ['White', 'Brown', 'Black'],
    description: 'Premium ceiling fan with aerodynamic design and superior performance.',
    features: ['Aerodynamic blades', 'Noiseless operation', 'Energy efficient'],
    returnPolicy: '45 days return policy',
    inStock: true,
    rating: 4.5,
    reviews: 389
  },
  {
    id: 'led-001',
    name: 'LED Bulb 12W Cool White',
    category: 'LED Lights',
    price: 180,
    originalPrice: 250,
    discount: 28,
    images:'https://m.media-amazon.com/images/I/71uDOQDVwXS._AC_SL1500_.jpg',
    specifications: {
      'Power': '12W',
      'Equivalent': '100W Incandescent',
      'Color Temperature': '6500K',
      'Life Span': '25000 Hours'
    },
    colors: ['Cool White', 'Warm White', 'Day Light'],
    description: 'Energy-efficient LED bulb with long life and bright illumination.',
    features: ['Energy saving', 'Long life', 'Instant on'],
    returnPolicy: '30 days return policy',
    inStock: true,
    rating: 4.3,
    reviews: 567
  },
  {
    id: 'stabilizer-001',
    name: 'Voltage Stabilizer 5KVA',
    category: 'Stabilizers',
    price: 6500,
    originalPrice: 8000,
    discount: 19,
    image: 'https://www.ato.com/content/images/thumbs/0003811_5-kva-single-phase-automatic-voltage-stabilizer-for-home_550.jpeg',
    specifications: {
      'Capacity': '5KVA',
      'Input Voltage': '140V-300V',
      'Output Voltage': '230V ±5%',
      'Type': 'Servo Controlled'
    },
    description: 'High-capacity voltage stabilizer for home and office protection.',
    features: ['Wide input range', 'Overload protection', 'Digital display'],
    returnPolicy: '30 days return policy',
    inStock: true,
    rating: 4.4,
    reviews: 234
  },
  {
    id: 'mcb-001',
    name: 'MCB 32A C-Type',
    category: 'MCBs',
    price: 320,
    originalPrice: 400,
    discount: 20,
    image: 'https://willrose-electrical.co.uk/wp-content/uploads/2015/05/60C32-3.jpg',
    specifications: {
      'Current Rating': '32A',
      'Curve Type': 'C-Type',
      'Breaking Capacity': '6KA',
      'Poles': 'Single Pole'
    },
    description: 'Miniature Circuit Breaker for overcurrent protection.',
    features: ['Quick tripping', 'Compact size', 'Easy installation'],
    returnPolicy: '30 days return policy',
    inStock: true,
    rating: 4.2,
    reviews: 156
  },
  {
    id: 'cable-001',
    name: 'electrical cable 2.5mm² 90m',
    category: 'Cables',
    price: 2800,
    originalPrice: 3200,
    discount: 13,
    image: 'https://brickwerks.co.uk/wp-content/uploads/sites/6/2024/11/B00463.jpg',
    specifications: {
      'Cross Section': '2.5mm²',
      'Length': '90 meters',
      'Insulation': 'PVC',
      'Voltage Rating': '1100V'
    },
    colors: ['Red', 'Black', 'Blue', 'Green'],
    description: 'High-quality electrical cable for residential and commercial wiring.',
    features: ['Flame retardant', 'Flexible', 'Long lasting'],
    returnPolicy: '15 days return policy',
    inStock: true,
    rating: 4.3,
    reviews: 198
  },
  {
    id: 'socket-001',
    name: '3 Pin Power Socket 16A',
    category: 'Sockets',
    price: 150,
    originalPrice: 200,
    discount: 25,
    image: 'https://fineswitches.com/img/products/traditional/deluxe/f034.png',
    specifications: {
      'Current Rating': '16A',
      'Voltage Rating': '250V',
      'Pins': '3 Pin',
      'Material': 'Polycarbonate'
    },
    colors: ['White', 'Ivory', 'Grey'],
    description: 'Heavy-duty 3-pin power socket with earth connection.',
    features: ['Earth connection', 'Child safety', 'Durable construction'],
    returnPolicy: '45 days return policy',
    inStock: true,
    rating: 4.4,
    reviews: 267
  },
  {
    id: 'geyser-001',
    name: 'Electric Water Heater 15L',
    category: 'Water Heaters',
    price: 8500,
    originalPrice: 10000,
    discount: 15,
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/4/XY/ER/LN/3458595/crompton-classic-15-l-electric-water-heater-500x500.jpg',
    specifications: {
      'Capacity': '15 Liters',
      'Power': '2000W',
      'Material': 'Stainless Steel',
      'Thermostat': 'Adjustable'
    },
    colors: ['White', 'Silver'],
    sizes: ['15L'],
    description: 'Energy-efficient electric water heater with advanced safety features.',
    features: ['Quick heating', 'Temperature control', 'Safety valve'],
    returnPolicy: '30 days return policy',
    inStock: true,
    rating: 4.5,
    reviews: 345
  },
  {
    id: 'pump-001',
    name: 'Submersible Water Pump 1HP',
    category: 'Water Pumps',
    price: 12500,
    originalPrice: 15000,
    discount: 17,
    image: 'https://images-na.ssl-images-amazon.com/images/I/61HcJMdJuDL.jpg',
    specifications: {
      'Power': '1HP',
      'Head': '50 meters',
      'Flow Rate': '1800 LPH',
      'Material': 'Stainless Steel'
    },
    description: 'High-efficiency submersible water pump for residential use.',
    features: ['Corrosion resistant', 'High efficiency', 'Low maintenance'],
    returnPolicy: '30 days return policy',
    inStock: true,
    rating: 4.6,
    reviews: 178
  },
  {
    id: 'motor-001',
    name: 'Single Phase Motor 2HP',
    category: 'Motors',
    price: 8900,
    originalPrice: 11000,
    discount: 19,
    image: 'https://cpimg.tistatic.com/06876831/b/4/2-HP-Single-Phase-Electric-Motor-Heavy-Duty.jpg',
    specifications: {
      'Power': '2HP',
      'Speed': '1440 RPM',
      'Voltage': '230V',
      'Efficiency': 'IE2'
    },
    description: 'High-performance single phase motor for various applications.',
    features: ['High efficiency', 'Low noise', 'Durable construction'],
    returnPolicy: '30 days return policy',
    inStock: true,
    rating: 4.3,
    reviews: 123
  },
  {
    id: 'ups-001',
    name: 'Online UPS 1000VA',
    category: 'UPS',
    price: 15500,
    originalPrice: 18000,
    discount: 14,
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/8/UZ/RK/VB/14294341/luminous-ld1000-online-ups-1000x1000.png',
    specifications: {
      'Capacity': '1000VA',
      'Type': 'Online',
      'Input Voltage': '230V',
      'Battery': '12V/7Ah x 2'
    },
    description: 'Online UPS with pure sine wave output for sensitive equipment.',
    features: ['Pure sine wave', 'Zero switchover', 'LCD display'],
    returnPolicy: '30 days return policy',
    inStock: true,
    rating: 4.5,
    reviews: 234
  },
  {
    id: 'tube-001',
    name: 'LED Tube Light 20W 4ft',
    category: 'LED Lights',
    price: 450,
    originalPrice: 600,
    discount: 25,
    image: 'https://image.made-in-china.com/2f0j00HsdTCpgBhRkI/4ft-1200mm-20W-High-Power-LED-Tube-Light-T8-Replace-Fluorescent-Tube-Lamp-Fittings.jpg',
    specifications: {
      'Power': '20W',
      'Length': '4 feet',
      'Color Temperature': '6500K',
      'Life Span': '50000 Hours'
    },
    colors: ['Cool White', 'Warm White'],
    description: 'Energy-efficient LED tube light with long life and uniform illumination.',
    features: ['Energy saving', 'Uniform light', 'Easy installation'],
    returnPolicy: '30 days return policy',
    inStock: true,
    rating: 4.4,
    reviews: 456
  }
];

export const categories = [
  'All Products',
  'Rectifiers',
  'Switches',
  'Refrigerators',
  'Inverters',
  'Fans',
  'LED Lights',
  'Stabilizers',
  'MCBs',
  'Cables',
  'Sockets',
  'Water Heaters',
  'Water Pumps',
  'Motors',
  'UPS'
];
