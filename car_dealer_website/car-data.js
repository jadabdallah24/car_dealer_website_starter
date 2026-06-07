// =============================
// CAR DATA
// =============================
// Each key here must match the inventory link:
// Example: car-details.html?car=m4-comp

const cars = {
  "m4-comp": {
    name: "2022 BMW M4 Competition",
    image: "m4comp.png",
    images: [
      "m4comp.png",
      "m4comp-2.png",
      "m4comp-3.png",
      "m4comp-4.png",
      "m4comp-5.png"
    ],
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
    images: [
      "gle.png",
      "gle-2.png",
      "gle-3.png",
      "gle-4.png",
      "gle-5.png"
    ],
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
    images: [
      "s4.png",
      "s4-2.png",
      "s4-3.png",
      "s4-4.png",
      "s4-5.png"
    ],
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
    images: [
      "turbo s.png",
      "turbo-s-2.png",
      "turbo-s-3.png",
      "turbo-s-4.png",
      "turbo-s-5.png"
    ],
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
    images: [
      "hatchback.png",
      "golf-r-2.png",
      "golf-r-3.png",
      "golf-r-4.png",
      "golf-r-5.png"
    ],
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
    images: [
      "corvette2.png",
      "corvette2-2.png",
      "corvette2-3.png",
      "corvette2-4.png",
      "corvette2-5.png"
    ],
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
    images: [
      "suv.png",
      "gls600-2.png",
      "gls600-3.png",
      "gls600-4.png",
      "gls600-5.png"
    ],
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
    images: [
      "corvette.png",
      "corvette-zr1-2.png",
      "corvette-zr1-3.png",
      "corvette-zr1-4.png",
      "corvette-zr1-5.png"
    ],
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
    images: [
      "super car.png",
      "mclaren-765lt-2.png",
      "mclaren-765lt-3.png",
      "mclaren-765lt-4.png",
      "mclaren-765lt-5.png"
    ],
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
    images: [
      "488.png",
      "488-2.png",
      "488-3.png",
      "488-4.png",
      "488-5.png"
    ],
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
    images: [
      "812.png",
      "812-2.png",
      "812-3.png",
      "812-4.png",
      "812-5.png"
    ],
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
    images: [
      "revuelto.png",
      "revuelto-2.png",
      "revuelto-3.png",
      "revuelto-4.png",
      "revuelto-5.png"
    ],
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
    images: [
      "coupe.png",
      "m4-silver-2.png",
      "m4-silver-3.png",
      "m4-silver-4.png",
      "m4-silver-5.png"
    ],
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
    images: [
      "sedan.png",
      "rs7-abt-2.png",
      "rs7-abt-3.png",
      "rs7-abt-4.png",
      "rs7-abt-5.png"
    ],
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
    images: [
      "svr.png",
      "svr-2.png",
      "svr-3.png",
      "svr-4.png",
      "svr-5.png"
    ],
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
    images: [
      "yaris.png",
      "yaris-2.png",
      "yaris-3.png",
      "yaris-4.png",
      "yaris-5.png"
    ],
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
    images: [
      "civic.png",
      "civic-2.png",
      "civic-3.png",
      "civic-4.png",
      "civic-5.png"
    ],
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
    images: [
      "86.png",
      "86-2.png",
      "86-3.png",
      "86-4.png",
      "86-5.png"
    ],
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

// =============================
// CAR DETAILS + IMAGE GALLERY
// =============================
// This script reads the selected car from the URL and fills the details page.
// Example URL: car-details.html?car=m4-comp

const params = new URLSearchParams(window.location.search);
const selectedCar = params.get("car");

const car = cars[selectedCar] || cars["m4-comp"];

let currentImageIndex = 0;
const carImages = car.images || [car.image];

const detailImage = document.getElementById("detailImage");
const thumbnailGallery = document.getElementById("thumbnailGallery");
const imageLoader = document.getElementById("imageLoader");
const galleryPrev = document.getElementById("galleryPrev");
const galleryNext = document.getElementById("galleryNext");

function showImage(index) {
  if (!detailImage) return;

  currentImageIndex = index;

  if (imageLoader) {
    imageLoader.classList.remove("hidden");
  }

  detailImage.classList.add("image-fading");

  const newImage = new Image();
  newImage.src = carImages[currentImageIndex];

  newImage.onload = () => {
    detailImage.src = newImage.src;
    detailImage.alt = car.name;

    if (imageLoader) {
      imageLoader.classList.add("hidden");
    }

    detailImage.classList.remove("image-fading");
    updateActiveThumbnail();
  };

  newImage.onerror = () => {
    if (imageLoader) {
      imageLoader.classList.add("hidden");
    }

    detailImage.classList.remove("image-fading");

    console.error("Could not load image:", newImage.src);

    if (currentImageIndex !== 0) {
      showImage(0);
    }
  };
}

function createThumbnails() {
  if (!thumbnailGallery) return;

  thumbnailGallery.innerHTML = "";

  carImages.forEach((image, index) => {
    const thumb = document.createElement("img");
    thumb.src = image;
    thumb.alt = `${car.name} image ${index + 1}`;
    thumb.classList.add("thumbnail-img");

    if (index === 0) {
      thumb.classList.add("active-thumb");
    }

    thumb.addEventListener("click", () => {
      showImage(index);
    });

    thumbnailGallery.appendChild(thumb);
  });
}

function updateActiveThumbnail() {
  const thumbnails = document.querySelectorAll(".thumbnail-img");

  thumbnails.forEach((thumb, index) => {
    if (index === currentImageIndex) {
      thumb.classList.add("active-thumb");
    } else {
      thumb.classList.remove("active-thumb");
    }
  });
}

if (galleryPrev) {
  galleryPrev.addEventListener("click", () => {
    let newIndex = currentImageIndex - 1;

    if (newIndex < 0) {
      newIndex = carImages.length - 1;
    }

    showImage(newIndex);
  });
}

if (galleryNext) {
  galleryNext.addEventListener("click", () => {
    let newIndex = currentImageIndex + 1;

    if (newIndex >= carImages.length) {
      newIndex = 0;
    }

    showImage(newIndex);
  });
}

// Fill vehicle details
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

// Start image gallery
createThumbnails();
showImage(0);