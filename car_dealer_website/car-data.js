// ============================================================
// CAR DATA
// Each key matches the URL param: car-details.html?car=m4-comp
// ============================================================

const cars = {
  "m4-comp": {
    name: "2022 BMW M4 Competition",
    image: "m4comp.png",
    images: ["m4comp.png","m4comp-2.png","m4comp-3.png","m4comp-4.png","m4comp-5.png"],
    price: "$76,900",
    short: "Coupe · Automatic · 18,000 km",
    category: "Coupe", transmission: "Automatic", drivetrain: "AWD",
    mileage: "18,000 km", status: "In Stock", color: "Sapphire Black",
    description: "The 2022 BMW M4 Competition is a high-performance sports coupe built around BMW's S58 twin-turbocharged inline-6 engine producing 503 hp. It features Competition-spec suspension, active M differential, and carbon-fibre roof.",
    modifications: "Aftermarket exhaust system, M Performance carbon mirrors, tinted windows.",
    damage: null
  },
  "gle": {
    name: "2021 Mercedes-Benz GLE",
    image: "gle.png",
    images: ["gle.png","gle-2.png","gle-3.png","gle-4.png","gle-5.png"],
    price: "$58,500",
    short: "SUV · Automatic · 42,000 km",
    category: "SUV", transmission: "Automatic", drivetrain: "AWD",
    mileage: "42,000 km", status: "In Stock", color: "Selenite Grey",
    description: "The 2021 Mercedes-Benz GLE is a luxury mid-size SUV offering a refined interior, advanced driver-assistance systems, and smooth 9G-TRONIC automatic transmission paired with 4MATIC all-wheel drive.",
    modifications: null,
    damage: null
  },
  "audi-s4": {
    name: "2020 Audi S4 Premium",
    image: "s4.png",
    images: ["s4.png","s4-2.png","s4-3.png","s4-4.png","s4-5.png"],
    price: "$39,900",
    short: "Sedan · Automatic · 35,000 km · Tuned",
    category: "Sedan", transmission: "Automatic", drivetrain: "AWD",
    mileage: "35,000 km", status: "Tuned", color: "Nardo Grey",
    description: "The 2020 Audi S4 Premium combines everyday practicality with genuine performance. The 3.0L TFSI engine produces 349 hp paired with quattro AWD and an 8-speed tiptronic gearbox.",
    modifications: "ECU stage 1 tune (+40 hp), Milltek sport exhaust, lowering springs.",
    damage: null
  },
  "turbo-s": {
    name: "2021 Porsche 911 Turbo S",
    image: "turbo s.png",
    images: ["turbo s.png","turbo-s-2.png","turbo-s-3.png","turbo-s-4.png","turbo-s-5.png"],
    price: "$189,000",
    short: "Supercar · PDK · 9,500 km",
    category: "Supercar", transmission: "PDK Automatic", drivetrain: "AWD",
    mileage: "9,500 km", status: "In Stock", color: "GT Silver Metallic",
    description: "The 2021 Porsche 911 Turbo S is the pinnacle of all-weather supercar performance. Its 3.8L flat-six produces 640 hp, launching 0–100 km/h in 2.7 seconds while remaining fully usable daily.",
    modifications: null,
    damage: null
  },
  "golf-r": {
    name: "2019 Volkswagen Golf R",
    image: "hatchback.png",
    images: ["hatchback.png","golf-r-2.png","golf-r-3.png","golf-r-4.png","golf-r-5.png"],
    price: "$33,900",
    short: "Hatchback · Manual · 52,000 km",
    category: "Hatchback", transmission: "Manual", drivetrain: "AWD",
    mileage: "52,000 km", status: "In Stock", color: "Lapiz Blue",
    description: "The 2019 Volkswagen Golf R is a practical all-weather hot hatch producing 296 hp from a 2.0L TSI engine with 4MOTION AWD. Known for its discrete look and serious performance.",
    modifications: null,
    damage: null
  },
  "corvette-2023": {
    name: "2023 Chevrolet Corvette",
    image: "corvette2.png",
    images: ["corvette2.png","corvette2-2.png","corvette2-3.png","corvette2-4.png","corvette2-5.png"],
    price: "$92,500",
    short: "Coupe · Automatic · 6,000 km",
    category: "Coupe", transmission: "Automatic", drivetrain: "RWD",
    mileage: "6,000 km", status: "In Stock", color: "Ceramic Matrix Grey",
    description: "The 2023 Chevrolet C8 Corvette Stingray brings mid-engine performance to an iconic nameplate. Its 6.2L LT2 V8 produces 495 hp with the optional performance exhaust, backed by a lightning-fast 8-speed dual-clutch.",
    modifications: null,
    damage: null
  },
  "gls600": {
    name: "Mercedes GLS 600 Maybach",
    image: "suv.png",
    images: ["suv.png","gls600-2.png","gls600-3.png","gls600-4.png","gls600-5.png"],
    price: "Price Upon Request",
    short: "SUV · Automatic · AWD · Luxury",
    category: "SUV", transmission: "Automatic", drivetrain: "AWD",
    mileage: "Low Mileage", status: "Luxury Edition", color: "Black / Obsidian",
    description: "The Mercedes-Maybach GLS 600 is the pinnacle of luxury SUVs. Featuring a 4.0L biturbo V8 producing 558 hp, active-curve system, rear executive seats, and an immaculate cabin crafted for maximum refinement.",
    modifications: null,
    damage: null
  },
  "corvette-zr1": {
    name: "Corvette ZR1",
    image: "corvette.png",
    images: ["corvette.png","corvette-zr1-2.png","corvette-zr1-3.png","corvette-zr1-4.png","corvette-zr1-5.png"],
    price: "Price Upon Request",
    short: "Supercar · Automatic · RWD · In Stock",
    category: "Supercar", transmission: "Automatic", drivetrain: "RWD",
    mileage: "Low Mileage", status: "In Stock", color: "Amplify Orange Tintcoat",
    description: "The Corvette ZR1 represents the absolute peak of Corvette performance. Its supercharged V8 delivers track-worthy power while the aerodynamics package provides genuine downforce for high-speed stability.",
    modifications: null,
    damage: null
  },
  "mclaren-765lt": {
    name: "McLaren 765LT Batman Spec",
    image: "super car.png",
    images: ["super car.png","mclaren-765lt-2.png","mclaren-765lt-3.png","mclaren-765lt-4.png","mclaren-765lt-5.png"],
    price: "Price Upon Request",
    short: "Supercar · Automatic · RWD · Special Edition",
    category: "Supercar", transmission: "Automatic", drivetrain: "RWD",
    mileage: "Low Mileage", status: "Special Edition", color: "Stealth Black / Carbon Red",
    description: "This McLaren 765LT is finished in a custom Batman-inspired specification — gloss stealth black with carbon red accents, titanium exhaust, and MSO lightweight carbon interior panels. One of the most dramatic builds in our inventory.",
    modifications: "MSO carbon-fibre front splitter, titanium quad exhaust, custom black/red livery, lightweight carbon interior.",
    damage: null
  },
  "ferrari-488": {
    name: "Ferrari 488 Pista",
    image: "488.png",
    images: ["488.png","488-2.png","488-3.png","488-4.png","488-5.png"],
    price: "Price Upon Request",
    short: "Supercar · Automatic · RWD · In Stock",
    category: "Supercar", transmission: "Automatic", drivetrain: "RWD",
    mileage: "Low Mileage", status: "In Stock", color: "Grigio Silverstone / Rosso Interior",
    description: "The Ferrari 488 Pista is the track-focused variant of the 488 family. Its 3.9L twin-turbo V8 produces 711 hp, making it Ferrari's most powerful V8 road car at the time of release. Grigio exterior with rosso interior.",
    modifications: null,
    damage: null
  },
  "ferrari-812": {
    name: "Ferrari 812 Competizione",
    image: "812.png",
    images: ["812.png","812-2.png","812-3.png","812-4.png","812-5.png"],
    price: "Price Upon Request",
    short: "Supercar · Automatic · RWD · Limited",
    category: "Supercar", transmission: "Automatic", drivetrain: "RWD",
    mileage: "Low Mileage", status: "Limited – 999 Units", color: "Grigio Titanio / Yellow Accents",
    description: "The Ferrari 812 Competizione is a limited-run, naturally aspirated supercar with a 6.5L V12 screaming to 9,500 rpm for 830 hp. Only 999 units were produced worldwide, making this a serious collector's piece.",
    modifications: null,
    damage: null
  },
  "revuelto": {
    name: "Lamborghini Revuelto Matte Purple",
    image: "revuelto.png",
    images: ["revuelto.png","revuelto-2.png","revuelto-3.png","revuelto-4.png","revuelto-5.png"],
    price: "Price Upon Request",
    short: "Supercar · Automatic · AWD · Hybrid",
    category: "Supercar", transmission: "Automatic", drivetrain: "AWD",
    mileage: "Low Mileage", status: "Hybrid Supercar", color: "Matte Viola Pasifae",
    description: "The Lamborghini Revuelto is the successor to the Aventador — a hybrid V12 supercar producing over 1,000 hp. This example is finished in exclusive matte Viola Pasifae purple, making it unmistakable on any road.",
    modifications: "Ad Personam full matte purple wrap, exposed carbon interior, forged wheels.",
    damage: null
  },
  "m4-silver": {
    name: "BMW M4 Silver Surfer Spec",
    image: "coupe.png",
    images: ["coupe.png","m4-silver-2.png","m4-silver-3.png","m4-silver-4.png","m4-silver-5.png"],
    price: "Price Upon Request",
    short: "Coupe · Automatic · AWD · Tuned",
    category: "Coupe", transmission: "Automatic", drivetrain: "AWD",
    mileage: "Low Mileage", status: "Tuned", color: "Matte Grey / Chrome",
    description: "This BMW M4 has been built to a full Silver Surfer spec — matte metallic grey body, chrome accents, BMW Individual laser headlights, and a sport exhaust. A custom build that stands out from a stock M4.",
    modifications: "Full matte grey wrap, chrome trim package, M Performance carbon-ceramic brakes, Akrapovič titanium exhaust, ECU stage 2 tune.",
    damage: null
  },
  "rs7-abt": {
    name: "Audi RS7 ABT Legacy",
    image: "sedan.png",
    images: ["sedan.png","rs7-abt-2.png","rs7-abt-3.png","rs7-abt-4.png","rs7-abt-5.png"],
    price: "Price Upon Request",
    short: "Sedan · Automatic · AWD · Tuned",
    category: "Sedan", transmission: "Automatic", drivetrain: "AWD",
    mileage: "Low Mileage", status: "Tuned – ABT Kit", color: "Mythos Black",
    description: "This Audi RS7 has been fitted with the full ABT Legacy package — a comprehensive tuning programme raising output to over 700 hp with matching chassis and visual upgrades. One of Germany's finest performance sedans, elevated further.",
    modifications: "ABT power kit (+130 hp), ABT front splitter and rear diffuser, 23\" ABT Sport GR forged wheels, lowering springs.",
    damage: null
  },
  "range-rover-svr": {
    name: "Range Rover SVR",
    image: "svr.png",
    images: ["svr.png","svr-2.png","svr-3.png","svr-4.png","svr-5.png"],
    price: "Price Upon Request",
    short: "SUV · Automatic · AWD · Performance",
    category: "SUV", transmission: "Automatic", drivetrain: "AWD",
    mileage: "Low Mileage", status: "Performance SVV", color: "Estoril Blue / Carbon Hood",
    description: "The Range Rover Sport SVR is the most powerful production Land Rover ever made. Its supercharged 5.0L V8 produces 575 hp, while the carbon fibre bonnet and Estoril Blue finish give it a unique visual presence.",
    modifications: "Carbon fibre bonnet, gloss black trim, custom blue brake callipers.",
    damage: null
  },
  "gr-yaris": {
    name: "GR Yaris Rally Spec",
    image: "yaris.png",
    images: ["yaris.png","yaris-2.png","yaris-3.png","yaris-4.png","yaris-5.png"],
    price: "Price Upon Request",
    short: "Hatchback · Manual · AWD · Rally Build",
    category: "Hatchback", transmission: "Manual", drivetrain: "AWD",
    mileage: "Low Mileage", status: "Rally Build", color: "White / Red / Black",
    description: "This GR Yaris has been built to a full rally-inspired specification, mimicking the WRC homologation spirit of the original. Lightweight, AWD, and carrying an aggressive aero kit.",
    modifications: "Rally aero kit (front splitter, side skirts, rear wing), coilover suspension, bucket seats, roll cage (display only), GR Four AWD torque vectoring calibration.",
    damage: null
  },
  "civic-type-r": {
    name: "2017 Civic Type R Hatchback White",
    image: "civic.png",
    images: ["civic.png","civic-2.png","civic-3.png","civic-4.png","civic-5.png"],
    price: "Price Upon Request",
    short: "Hatchback · Manual · FWD · Sport",
    category: "Hatchback", transmission: "Manual", drivetrain: "FWD",
    mileage: "Low Mileage", status: "Sport", color: "Championship White",
    description: "The 2017 Honda Civic Type R (FK8) set the front-wheel-drive lap record at the Nürburgring upon its release. Its 2.0L VTEC Turbo produces 316 hp, delivered through a short-throw 6-speed manual gearbox.",
    modifications: null,
    damage: null
  },
  "gt86-trd": {
    name: "Toyota GT86 2015 Grey TRD",
    image: "86.png",
    images: ["86.png","86-2.png","86-3.png","86-4.png","86-5.png"],
    price: "Price Upon Request",
    short: "Coupe · Manual · RWD · TRD",
    category: "Coupe", transmission: "Manual", drivetrain: "RWD",
    mileage: "Low Mileage", status: "TRD Kit", color: "Satin Light Grey",
    description: "This 2015 Toyota GT86 carries the full TRD Performance Line kit — a package developed by Toyota Racing Development to sharpen the car's already pure handling dynamics without changing its fundamental character.",
    modifications: "TRD front lip, TRD rear spoiler, TRD cat-back exhaust, TRD sport suspension kit.",
    damage: null
  }
};

// ============================================================
// CAR DETAILS PAGE – ES6 class
// ============================================================

class CarDetailsPage {
  constructor() {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("car") || "m4-comp";
    this.car = cars[key] || cars["m4-comp"];

    this.images = this.car.images && this.car.images.length ? this.car.images : [this.car.image];
    this.currentIndex = 0;
    this.thumbStart   = 0;
    this.maxVisible   = 4;

    // DOM refs
    this.mainImg     = document.getElementById("detailImage");
    this.thumbStrip  = document.getElementById("thumbnailGallery");
    this.loader      = document.getElementById("imageLoader");
    this.btnPrev     = document.getElementById("galleryPrev");
    this.btnNext     = document.getElementById("galleryNext");
    this.counter     = document.getElementById("imageCounter");

    if (!this.mainImg) return; // not on details page

    this.fillText();
    this.bindArrows();
    this.showImage(0);
  }

  // ── fill all text fields ──────────────────────────────────
  fillText() {
    const c = this.car;
    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };

    set("detailName",         c.name);
    set("detailPrice",        c.price);
    set("detailShort",        c.short);
    set("detailCategory",     c.category);
    set("detailTransmission", c.transmission);
    set("detailDrivetrain",   c.drivetrain);
    set("detailMileage",      c.mileage);
    set("detailStatus",       c.status);
    set("detailColor",        c.color);
    set("detailDescription",  c.description);

    this.buildOverviewExtras();
  }

  buildOverviewExtras() {
    const c = this.car;

    // status tag
    const tagsEl = document.getElementById("overviewTags");
    if (tagsEl) {
      const tag = document.createElement("span");
      tag.className = "overview-tag";
      tag.textContent = c.status;
      tagsEl.appendChild(tag);

      const catTag = document.createElement("span");
      catTag.className = "overview-tag overview-tag-grey";
      catTag.textContent = c.category;
      tagsEl.appendChild(catTag);
    }

    const blocksEl = document.getElementById("overviewBlocks");
    if (!blocksEl) return;

    // Modifications block
    if (c.modifications) {
      blocksEl.insertAdjacentHTML("beforeend", `
        <div class="overview-block">
          <h4><i class="fa-solid fa-wrench"></i> Modifications</h4>
          <p>${c.modifications}</p>
        </div>
      `);
    }

    // Damage block
    const damageText = c.damage || "No reported damage. Vehicle passed full inspection.";
    const damageClass = c.damage ? "overview-block overview-block-warn" : "overview-block overview-block-ok";
    const damageIcon  = c.damage ? "fa-triangle-exclamation" : "fa-shield-halved";
    blocksEl.insertAdjacentHTML("beforeend", `
      <div class="${damageClass}">
        <h4><i class="fa-solid ${damageIcon}"></i> Damage Report</h4>
        <p>${damageText}</p>
      </div>
    `);
  }

  // ── image display ─────────────────────────────────────────
  showImage(index) {
    this.currentIndex = index;

    if (this.loader)  this.loader.classList.remove("hidden");
    this.mainImg.style.opacity = "0.35";

    const tmp = new Image();
    tmp.src = this.images[this.currentIndex];

    tmp.onload = () => {
      this.mainImg.src = tmp.src;
      this.mainImg.alt = this.car.name;
      this.mainImg.style.opacity = "1";
      if (this.loader) this.loader.classList.add("hidden");
      if (this.counter) this.counter.textContent = `${this.currentIndex + 1} / ${this.images.length}`;
      this.renderThumbs();
    };

    tmp.onerror = () => {
      if (this.loader) this.loader.classList.add("hidden");
      this.mainImg.style.opacity = "1";
      if (this.currentIndex !== 0) this.showImage(0);
    };
  }

  renderThumbs() {
    if (!this.thumbStrip) return;
    this.thumbStrip.innerHTML = "";

    const { thumbStart: s, maxVisible: m, images, currentIndex } = this;
    const slice = images.slice(s, s + m);

    // ‹ prev dots
    if (s > 0) {
      this.thumbStrip.appendChild(this.makeDots(() => {
        this.thumbStart = Math.max(0, s - m);
        this.renderThumbs();
      }));
    }

    // thumbnails
    slice.forEach((src, i) => {
      const realIdx = s + i;
      const img = document.createElement("img");
      img.src = src;
      img.alt = `${this.car.name} photo ${realIdx + 1}`;
      img.className = "thumb-img" + (realIdx === currentIndex ? " thumb-active" : "");
      img.setAttribute("role", "listitem");
      img.addEventListener("click", () => this.showImage(realIdx));
      this.thumbStrip.appendChild(img);
    });

    // › next dots
    if (s + m < images.length) {
      this.thumbStrip.appendChild(this.makeDots(() => {
        this.thumbStart = s + m;
        this.renderThumbs();
      }));
    }
  }

  makeDots(onClick) {
    const btn = document.createElement("button");
    btn.className = "thumb-dots";
    btn.textContent = "•••";
    btn.setAttribute("aria-label", "More images");
    btn.addEventListener("click", onClick);
    return btn;
  }

  bindArrows() {
    this.btnPrev && this.btnPrev.addEventListener("click", () => {
      let idx = this.currentIndex - 1;
      if (idx < 0) idx = this.images.length - 1;
      if (idx < this.thumbStart) this.thumbStart = Math.max(0, this.thumbStart - this.maxVisible);
      this.showImage(idx);
    });

    this.btnNext && this.btnNext.addEventListener("click", () => {
      let idx = this.currentIndex + 1;
      if (idx >= this.images.length) { idx = 0; this.thumbStart = 0; }
      if (idx >= this.thumbStart + this.maxVisible) this.thumbStart += this.maxVisible;
      this.showImage(idx);
    });
  }
}

// Boot when DOM is ready
document.addEventListener("DOMContentLoaded", () => new CarDetailsPage());
