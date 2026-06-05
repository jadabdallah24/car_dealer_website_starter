const cars = {
  "m4-comp": {
    name: "2022 BMW M4 Competition",
    image: "m4comp.png",
    price: "$76,900",
    short: "Coupe · Automatic · 18,000 km",
    category: "Coupe",
    transmission: "Automatic",
    drivetrain: "AWD",
    mileage: "18,000 km",
    status: "In Stock",
    color: "Blue",
    description: "A high-performance BMW M4 Competition with aggressive styling, strong power delivery, and premium driving dynamics."
  },

  "gle": {
    name: "2021 Mercedes-Benz GLE",
    image: "gle.png",
    price: "$58,500",
    short: "SUV · Automatic · 42,000 km",
    category: "SUV",
    transmission: "Automatic",
    drivetrain: "AWD",
    mileage: "42,000 km",
    status: "In Stock",
    color: "Grey",
    description: "A luxury Mercedes-Benz SUV offering comfort, technology, and strong road presence."
  },

  "audi-s4": {
    name: "2020 Audi S4 Premium",
    image: "s4.png",
    price: "$39,900",
    short: "Sedan · Automatic · 35,000 km · Tuned",
    category: "Sedan",
    transmission: "Automatic",
    drivetrain: "AWD",
    mileage: "35,000 km",
    status: "Tuned",
    color: "Grey",
    description: "A sporty Audi S4 Premium with quattro all-wheel drive and a refined performance sedan feel."
  },

  "turbo-s": {
    name: "2021 Porsche 911 Turbo S",
    image: "turbo s.png",
    price: "$189,000",
    short: "Supercar · PDK · 9,500 km",
    category: "Supercar",
    transmission: "PDK Automatic",
    drivetrain: "AWD",
    mileage: "9,500 km",
    status: "In Stock",
    color: "White",
    description: "A Porsche 911 Turbo S with elite acceleration, daily usability, and supercar performance."
  },

  "golf-r": {
    name: "2019 Volkswagen Golf R",
    image: "hatchback.png",
    price: "$33,900",
    short: "Hatchback · Manual · 52,000 km",
    category: "Hatchback",
    transmission: "Manual",
    drivetrain: "AWD",
    mileage: "52,000 km",
    status: "In Stock",
    color: "Blue",
    description: "A practical and sporty hot hatch with all-wheel drive and strong performance."
  },

  "corvette-2023": {
    name: "2023 Chevrolet Corvette",
    image: "corvette2.png",
    price: "$92,500",
    short: "Coupe · Automatic · 6,000 km",
    category: "Coupe",
    transmission: "Automatic",
    drivetrain: "RWD",
    mileage: "6,000 km",
    status: "In Stock",
    color: "Grey",
    description: "A modern mid-engine Corvette with sharp styling and excellent performance."
  },

  "gls600": {
    name: "Mercedes GLS 600 Maybach",
    image: "suv.png",
    price: "Price Upon Request",
    short: "SUV · Automatic · AWD · Luxury",
    category: "SUV",
    transmission: "Automatic",
    drivetrain: "AWD",
    mileage: "Low mileage",
    status: "Luxury",
    color: "Black / Silver",
    description: "A luxury Maybach SUV designed for comfort, elegance, and executive-level presence."
  },

  "corvette-zr1": {
    name: "Corvette ZR1",
    image: "corvette.png",
    price: "Price Upon Request",
    short: "Supercar · Automatic · RWD · In Stock",
    category: "Supercar",
    transmission: "Automatic",
    drivetrain: "RWD",
    mileage: "Low mileage",
    status: "In Stock",
    color: "Orange",
    description: "A powerful Corvette ZR1 with aggressive styling and track-inspired performance."
  },

  "mclaren-765lt": {
    name: "McLaren 765LT Batman Spec",
    image: "super car.png",
    price: "Price Upon Request",
    short: "Supercar · Automatic · RWD · Special Edition",
    category: "Supercar",
    transmission: "Automatic",
    drivetrain: "RWD",
    mileage: "Low mileage",
    status: "Special Edition",
    color: "Black / Red",
    description: "A Batman-spec McLaren 765LT with a black and red theme, lightweight performance, and exotic styling."
  },

  "ferrari-488": {
    name: "Ferrari 488 Pista",
    image: "488.png",
    price: "Price Upon Request",
    short: "Supercar · Automatic · RWD · In Stock",
    category: "Supercar",
    transmission: "Automatic",
    drivetrain: "RWD",
    mileage: "Low mileage",
    status: "In Stock",
    color: "Grey with Red Interior",
    description: "A Ferrari 488 Pista with a grey exterior, red interior, and track-focused performance character."
  },

  "ferrari-812": {
    name: "Ferrari 812 Competizione",
    image: "812.png",
    price: "Price Upon Request",
    short: "Supercar · Automatic · RWD · Limited",
    category: "Supercar",
    transmission: "Automatic",
    drivetrain: "RWD",
    mileage: "Low mileage",
    status: "Limited",
    color: "Grey / Yellow Accent",
    description: "A limited Ferrari 812 Competizione with a high-revving V12 character and collector appeal."
  },

  "revuelto": {
    name: "Lamborghini Revuelto Matte Purple",
    image: "revuelto.png",
    price: "Price Upon Request",
    short: "Supercar · Automatic · AWD · Hybrid",
    category: "Supercar",
    transmission: "Automatic",
    drivetrain: "AWD",
    mileage: "Low mileage",
    status: "Hybrid Supercar",
    color: "Matte Purple",
    description: "A matte purple Lamborghini Revuelto with hybrid supercar technology and dramatic styling."
  },

  "m4-silver": {
    name: "BMW M4 Silver Surfer Spec",
    image: "coupe.png",
    price: "Price Upon Request",
    short: "Coupe · Automatic · AWD · Tuned",
    category: "Coupe",
    transmission: "Automatic",
    drivetrain: "AWD",
    mileage: "Low mileage",
    status: "Tuned",
    color: "Matte Grey / Chrome",
    description: "A BMW M4 Silver Surfer spec with matte grey/chrome finish, silver wheels, and yellow laser headlights."
  },

  "rs7-abt": {
    name: "Audi RS7 ABT Legacy",
    image: "sedan.png",
    price: "Price Upon Request",
    short: "Sedan · Automatic · AWD · Tuned",
    category: "Sedan",
    transmission: "Automatic",
    drivetrain: "AWD",
    mileage: "Low mileage",
    status: "Tuned",
    color: "Black",
    description: "An Audi RS7 ABT Legacy with aggressive styling, high-performance upgrades, and executive sedan comfort."
  },

  "range-rover-svr": {
    name: "Range Rover SVR",
    image: "svr.png",
    price: "Price Upon Request",
    short: "SUV · Automatic · AWD · Performance",
    category: "SUV",
    transmission: "Automatic",
    drivetrain: "AWD",
    mileage: "Low mileage",
    status: "Performance SUV",
    color: "Blue with Carbon Hood",
    description: "A blue Range Rover SVR with a carbon hood, black accents, and performance SUV character."
  },

  "gr-yaris": {
    name: "GR Yaris Rally Spec",
    image: "yaris.png",
    price: "Price Upon Request",
    short: "Hatchback · Manual · AWD · Rally Build",
    category: "Hatchback",
    transmission: "Manual",
    drivetrain: "AWD",
    mileage: "Low mileage",
    status: "Rally Build",
    color: "White / Red / Black",
    description: "A rally-spec GR Yaris with aggressive aero, rally-inspired livery, and AWD capability."
  },

  "civic-type-r": {
    name: "2017 Civic Type R Hatchback White",
    image: "civic.png",
    price: "Price Upon Request",
    short: "Hatchback · Manual · FWD · Sport",
    category: "Hatchback",
    transmission: "Manual",
    drivetrain: "FWD",
    mileage: "Low mileage",
    status: "Sport",
    color: "White",
    description: "A 2017 Honda Civic Type R hatchback in white with aggressive styling and manual driving engagement."
  },

  "gt86-trd": {
    name: "Toyota GT86 2015 Grey TRD",
    image: "86.png",
    price: "Price Upon Request",
    short: "Coupe · Manual · RWD · TRD",
    category: "Coupe",
    transmission: "Manual",
    drivetrain: "RWD",
    mileage: "Low mileage",
    status: "TRD Kit",
    color: "Light Grey",
    description: "A 2015 Toyota GT86 with TRD kit, light grey finish, and TRD lip spoiler."
  }
};

const params = new URLSearchParams(window.location.search);
const selectedCar = params.get("car");

const car = cars[selectedCar] || cars["m4-comp"];

document.getElementById("detailTitle").textContent = car.name;
document.getElementById("detailImage").src = car.image;
document.getElementById("detailImage").alt = car.name;
document.getElementById("detailName").textContent = car.name;
document.getElementById("detailPrice").textContent = car.price;
document.getElementById("detailShort").textContent = car.short;
document.getElementById("detailCategory").textContent = car.category;
document.getElementById("detailTransmission").textContent = car.transmission;
document.getElementById("detailDrivetrain").textContent = car.drivetrain;
document.getElementById("detailMileage").textContent = car.mileage;
document.getElementById("detailStatus").textContent = car.status;
document.getElementById("detailColor").textContent = car.color;
document.getElementById("detailDescription").textContent = car.description;