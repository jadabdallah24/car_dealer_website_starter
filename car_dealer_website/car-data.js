// car-data.js – Prime Auto Gallery
// Each car has 5 photos: 1 original + 4 generated studio angles (front, rear, interior, side)

const carDatabase = {

  "m4-comp": {
    name: "2022 BMW M4 Competition",
    badge: "Coupe",
    price: "$76,900",
    year: 2022, make: "BMW", model: "M4 Competition",
    mileage: "18,000 km", transmission: "Automatic", drivetrain: "AWD",
    engine: "3.0L Twin-Turbo I6", power: "503 hp", color: "Sapphire Black",
    description: "The G82 M4 Competition is the pinnacle of BMW M engineering. This Sapphire Black example has been lightly modified with an aftermarket exhaust and M Performance carbon mirrors, enhancing both sound and aesthetics without compromising reliability.",
    modifications: "Aftermarket exhaust system, M Performance carbon mirrors",
    damage: null,
    photos: ["m4comp.png","m4comp-2.png","m4comp-3.png","m4comp-4.png","m4comp-5.png"]
  },

  "gle": {
    name: "2021 Mercedes-Benz GLE 450",
    badge: "SUV",
    price: "$58,500",
    year: 2021, make: "Mercedes-Benz", model: "GLE 450",
    mileage: "42,000 km", transmission: "Automatic", drivetrain: "4MATIC AWD",
    engine: "3.0L Turbocharged I6 EQ Boost", power: "362 hp", color: "Selenite Grey Metallic",
    description: "A commanding presence on the road, this GLE 450 in Selenite Grey combines Mercedes-Benz luxury with genuine performance. The 48V mild hybrid system delivers seamless power delivery, and the Burmester surround sound system transforms every journey.",
    modifications: null,
    damage: null,
    photos: ["gle.png","gle-2.png","gle-3.png","gle-4.png","gle-5.png"]
  },

  "audi-s4": {
    name: "2020 Audi S4 Premium",
    badge: "Sedan",
    price: "$39,900",
    year: 2020, make: "Audi", model: "S4 Premium",
    mileage: "35,000 km", transmission: "Automatic", drivetrain: "Quattro AWD",
    engine: "3.0L Turbocharged V6", power: "349 hp (tuned: ~389 hp)", color: "Nardo Grey",
    description: "This Nardo Grey S4 wears its aggressive character subtly. The Stage 1 ECU tune unlocks an additional 40 hp from the potent 3.0T V6, paired with a Milltek exhaust that sounds exceptional at full throttle while remaining civilised in traffic.",
    modifications: "ECU Stage 1 tune (+40 hp), Milltek cat-back exhaust, Eibach lowering springs",
    damage: null,
    photos: ["s4.png","s4-2.png","s4-3.png","s4-4.png","s4-5.png"]
  },

  "turbo-s": {
    name: "2021 Porsche 911 Turbo S",
    badge: "Supercar",
    price: "$189,000",
    year: 2021, make: "Porsche", model: "911 Turbo S",
    mileage: "9,500 km", transmission: "PDK", drivetrain: "AWD",
    engine: "3.8L Twin-Turbo Flat-6", power: "640 hp", color: "GT Silver Metallic",
    description: "The 992 Turbo S is the fastest road-going 911 ever produced. This near-immaculate GT Silver example has covered just 9,500 km and represents the absolute pinnacle of sports car engineering — 0–100 km/h in 2.7 seconds with complete everyday usability.",
    modifications: null,
    damage: null,
    photos: ["turbo s.png","turbo-s-2.png","turbo-s-3.png","turbo-s-4.png","turbo-s-5.png"]
  },

  "golf-r": {
    name: "2019 Volkswagen Golf R",
    badge: "Hatchback",
    price: "$33,900",
    year: 2019, make: "Volkswagen", model: "Golf R",
    mileage: "52,000 km", transmission: "Manual 6-speed", drivetrain: "4Motion AWD",
    engine: "2.0L Turbocharged I4", power: "288 hp", color: "Lapiz Blue Metallic",
    description: "The Mk7.5 Golf R in Lapiz Blue is arguably the greatest all-round performance hatchback ever built. Manual gearbox, 4Motion AWD, and understated styling make it one of the most desirable used buys in its segment.",
    modifications: null,
    damage: null,
    photos: ["hatchback.png","golf-r-2.png","golf-r-3.png","golf-r-4.png","golf-r-5.png"]
  },

  "corvette-2023": {
    name: "2023 Chevrolet Corvette Stingray",
    badge: "Coupe",
    price: "$92,500",
    year: 2023, make: "Chevrolet", model: "Corvette Stingray",
    mileage: "6,000 km", transmission: "Automatic DCT", drivetrain: "RWD",
    engine: "6.2L LT2 V8", power: "490 hp", color: "Ceramic Matrix Grey Metallic",
    description: "The mid-engine C8 Corvette in Ceramic Matrix Grey represents the greatest performance value in the supercar segment. With just 6,000 km, this car is essentially new and represents a once-in-a-generation shift in American automotive engineering.",
    modifications: null,
    damage: null,
    photos: ["corvette2.png","corvette2-2.png","corvette2-3.png","corvette2-4.png","corvette2-5.png"]
  },

  "gls600": {
    name: "Mercedes-Maybach GLS 600",
    badge: "SUV",
    price: "Price Upon Request",
    year: 2022, make: "Mercedes-Maybach", model: "GLS 600",
    mileage: "Low Mileage", transmission: "Automatic 9G-TRONIC", drivetrain: "4MATIC AWD",
    engine: "4.0L Biturbo V8 EQ Boost", power: "557 hp", color: "Obsidian Black / Crystal White Two-Tone",
    description: "The ultimate expression of luxury SUV engineering. The Maybach GLS 600 features individually reclining rear Executive seats, a built-in champagne cooler, Burmester 4D surround sound, and a biturbo V8 that makes effortless work of any journey.",
    modifications: null,
    damage: null,
    photos: ["suv.png","gls600-2.png","gls600-3.png","gls600-4.png","gls600-5.png"]
  },

  "corvette-zr1": {
    name: "Chevrolet Corvette ZR1",
    badge: "Supercar",
    price: "Price Upon Request",
    year: 2023, make: "Chevrolet", model: "Corvette ZR1",
    mileage: "Low Mileage", transmission: "Automatic DCT", drivetrain: "RWD",
    engine: "5.5L Flat-Plane Crank V8", power: "670 hp", color: "Amplify Orange Tintcoat",
    description: "The ZR1 is America's answer to the European supercar establishment. In Amplify Orange, it commands attention at any event. The flat-plane crank LT6 V8 revs freely to 8,600 rpm with a sound unlike anything else in the Corvette range.",
    modifications: null,
    damage: null,
    photos: ["corvette.png","corvette-zr1-2.png","corvette-zr1-3.png","corvette-zr1-4.png","corvette-zr1-5.png"]
  },

  "mclaren-765lt": {
    name: "McLaren 765LT Batman Spec",
    badge: "Supercar",
    price: "Price Upon Request",
    year: 2021, make: "McLaren", model: "765LT",
    mileage: "Low Mileage", transmission: "SSG Automatic", drivetrain: "RWD",
    engine: "4.0L Twin-Turbo V8", power: "755 hp", color: "Stealth Black with Vermillion Red Accents",
    description: "A one-of-one MSO commission — this 765LT has been built to a bespoke 'Batman Spec' with full MSO carbon aero kit, titanium exhaust, and a custom stealth black with red accent livery. The 765LT is already the lightest, fastest, most focused car in the Super Series.",
    modifications: "MSO full carbon aero kit (front splitter, rear wing, side sills), Titanium exhaust, Custom stealth/red livery",
    damage: null,
    photos: ["super car.png","mclaren-765lt-2.png","mclaren-765lt-3.png","mclaren-765lt-4.png","mclaren-765lt-5.png"]
  },

  "ferrari-488": {
    name: "Ferrari 488 Pista",
    badge: "Supercar",
    price: "Price Upon Request",
    year: 2019, make: "Ferrari", model: "488 Pista",
    mileage: "Low Mileage", transmission: "F1 DCT", drivetrain: "RWD",
    engine: "3.9L Twin-Turbo V8", power: "710 hp", color: "Grigio Silverstone / Rosso Interior",
    description: "The 488 Pista is Ferrari's most track-focused V8 berlinetta. In Grigio Silverstone with the contrasting Rosso interior, this is a strikingly beautiful machine. Pista means 'track' in Italian — and this car was engineered with a single purpose.",
    modifications: null,
    damage: null,
    photos: ["488.png","488-2.png","488-3.png","488-4.png","488-5.png"]
  },

  "ferrari-812": {
    name: "Ferrari 812 Competizione",
    badge: "Supercar",
    price: "Price Upon Request",
    year: 2022, make: "Ferrari", model: "812 Competizione",
    mileage: "Delivery Mileage", transmission: "F1 DCT", drivetrain: "RWD",
    engine: "6.5L Naturally Aspirated V12", power: "830 hp", color: "Grigio Titanio",
    description: "One of just 999 units built worldwide, the 812 Competizione is Ferrari's greatest naturally aspirated achievement. The 6.5L V12 screaming to 9,500 rpm is an experience with no equivalent. This Grigio Titanio example has delivery mileage and is a guaranteed future collectible.",
    modifications: null,
    damage: null,
    photos: ["812.png","812-2.png","812-3.png","812-4.png","812-5.png"]
  },

  "revuelto": {
    name: "Lamborghini Revuelto Matte Purple",
    badge: "Supercar",
    price: "Price Upon Request",
    year: 2024, make: "Lamborghini", model: "Revuelto",
    mileage: "Delivery Mileage", transmission: "Automatic DCT", drivetrain: "AWD Hybrid",
    engine: "6.5L V12 + 3 Electric Motors", power: "1,001 hp combined", color: "Ad Personam Matte Viola Parsifae",
    description: "The Revuelto is the most powerful Lamborghini road car ever built. This example was commissioned through Ad Personam in a bespoke Matte Viola Parsifae — an exclusive purple exclusive to this order — with full exposed carbon interior. The V12 hybrid powertrain produces 1,001 hp with instantaneous electric torque fill.",
    modifications: "Ad Personam full matte Viola Parsifae exterior wrap, Exposed carbon fibre interior package, Carbon ceramic brakes",
    damage: null,
    photos: ["revuelto.png","revuelto-2.png","revuelto-3.png","revuelto-4.png","revuelto-5.png"]
  },

  "m4-silver": {
    name: "BMW M4 Silver Surfer Spec",
    badge: "Coupe",
    price: "Price Upon Request",
    year: 2022, make: "BMW", model: "M4 Competition",
    mileage: "Low Mileage", transmission: "Automatic", drivetrain: "AWD",
    engine: "3.0L Twin-Turbo I6", power: "503 hp (tuned: ~600 hp)", color: "Matte Grey Wrap / Chrome Trim",
    description: "The Silver Surfer is a bespoke build on the G82 M4 Competition platform. The full matte grey professional wrap with chrome accents creates a rolling artwork. Under the hood, a Stage 2 ECU tune paired with the Akrapovič titanium exhaust transforms the already impressive M4 into a genuine supercar rival.",
    modifications: "Full matte grey professional wrap, Chrome exterior trim, Carbon-ceramic brake upgrade, Akrapovič Evolution titanium exhaust, ECU Stage 2 tune (~600 hp)",
    damage: null,
    photos: ["coupe.png","m4-silver-2.png","m4-silver-3.png","m4-silver-4.png","m4-silver-5.png"]
  },

  "rs7-abt": {
    name: "Audi RS7 ABT Legacy Edition",
    badge: "Sedan",
    price: "Price Upon Request",
    year: 2021, make: "Audi", model: "RS7 Sportback",
    mileage: "Low Mileage", transmission: "Automatic 8-Speed", drivetrain: "Quattro AWD",
    engine: "4.0L Twin-Turbo V8", power: "591 hp (tuned: 720 hp)", color: "Mythos Black Metallic",
    description: "ABT Sportsline is Audi's oldest and most respected tuning partner. This RS7 ABT Legacy Edition in Mythos Black has received the full ABT treatment: a comprehensive aerodynamic body kit, 720 hp power upgrade, and bespoke 23-inch forged wheels. It is an objectively better RS7 in every measurable dimension.",
    modifications: "ABT power kit (720 hp / 880 Nm), ABT full aerodynamic body kit, 23-inch ABT High Performance forged wheels",
    damage: null,
    photos: ["sedan.png","rs7-abt-2.png","rs7-abt-3.png","rs7-abt-4.png","rs7-abt-5.png"]
  },

  "range-rover-svr": {
    name: "Range Rover Sport SVR",
    badge: "SUV",
    price: "Price Upon Request",
    year: 2021, make: "Land Rover", model: "Range Rover Sport SVR",
    mileage: "Low Mileage", transmission: "Automatic 8-Speed", drivetrain: "AWD",
    engine: "5.0L Supercharged V8", power: "575 hp", color: "Estoril Blue / Carbon Black",
    description: "The SVR is the fastest, most powerful Range Rover Sport ever built. In striking Estoril Blue with the carbon fibre bonnet upgrade, this car turns every dual carriageway into a personal racetrack. The supercharged V8 soundtrack is one of the most intoxicating in any SUV.",
    modifications: "Carbon fibre bonnet replacement, SVR performance exhaust",
    damage: null,
    photos: ["svr.png","svr-2.png","svr-3.png","svr-4.png","svr-5.png"]
  },

  "gr-yaris": {
    name: "GR Yaris Rally Spec",
    badge: "Hatchback",
    price: "Price Upon Request",
    year: 2021, make: "Toyota", model: "GR Yaris",
    mileage: "Low Mileage", transmission: "Manual 6-Speed", drivetrain: "GR-Four AWD",
    engine: "1.6L Turbocharged I3", power: "257 hp (Rally tune: ~320 hp)", color: "Precious White Pearl / Red/Black Livery",
    description: "Built as a homologation special for the World Rally Championship, the GR Yaris is one of the most significant driver's cars of the decade. This Rally Spec has been built to full competition specification with a comprehensive aero kit, coilover suspension, and lightweight bucket seats.",
    modifications: "Full TGR rally aero kit (front splitter, rear wing, side extensions), Öhlins coilover suspension, RECARO carbon bucket seats, Rally roll cage (road-legal), ECU rally map",
    damage: null,
    photos: ["yaris.png","yaris-2.png","yaris-3.png","yaris-4.png","yaris-5.png"]
  },

  "civic-type-r": {
    name: "2017 Honda Civic Type R",
    badge: "Hatchback",
    price: "Price Upon Request",
    year: 2017, make: "Honda", model: "Civic Type R FK8",
    mileage: "Low Mileage", transmission: "Manual 6-Speed", drivetrain: "FWD",
    engine: "2.0L Turbocharged VTEC I4", power: "316 hp", color: "Championship White",
    description: "The FK8 Civic Type R in Championship White is the quintessential hot hatch. When launched it set the front-wheel-drive lap record at the Nürburgring. The triple-exhaust, aggressive aero, and Adaptive Damper System make it a dual-purpose machine: comfortable daily driver and weekend track weapon.",
    modifications: null,
    damage: null,
    photos: ["civic.png","civic-2.png","civic-3.png","civic-4.png","civic-5.png"]
  },

  "gt86-trd": {
    name: "Toyota GT86 2015 TRD",
    badge: "Coupe",
    price: "Price Upon Request",
    year: 2015, make: "Toyota", model: "GT86 TRD",
    mileage: "Low Mileage", transmission: "Manual 6-Speed", drivetrain: "RWD",
    engine: "2.0L Boxer FA20", power: "200 hp", color: "Satin Grey",
    description: "The GT86 with the TRD kit is the purist's choice. This Satin Grey example has been fitted with genuine Toyota Racing Development parts: aero lip, rear spoiler, sport exhaust, and suspension kit. A lightweight, naturally aspirated rear-wheel-drive coupe is increasingly rare — and this one is the definitive specification.",
    modifications: "TRD front lip spoiler, TRD rear wing, TRD sport exhaust, TRD suspension kit",
    damage: null,
    photos: ["86.png","86-2.png","86-3.png","86-4.png","86-5.png"]
  }
};
