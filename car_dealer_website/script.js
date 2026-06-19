// ============================================================
// Jad Abdallah – Custom UI Requirement:
// ScrollToTop button that appears after scrolling 300px and
// smoothly returns the user to the top of the page.
// ============================================================
class ScrollToTop {
  constructor(buttonId) {
    this.button = document.getElementById(buttonId);
    if (!this.button) return;
    window.addEventListener("scroll", () => this.toggleButton());
    this.button.addEventListener("click", () => this.scrollToTop());
  }

  toggleButton() {
    if (window.scrollY > 300) {
      this.button.classList.add("show");
    } else {
      this.button.classList.remove("show");
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

new ScrollToTop("scrollTopBtn");

// ============================================================
// Button loading animation
// Adds a temporary spinner when any .hero-btn is clicked.
// ============================================================
class ButtonLoadingAnimation {
  constructor(selector) {
    this.buttons = document.querySelectorAll(selector);
    this.addClickEvents();
  }

  addClickEvents() {
    this.buttons.forEach((button) => {
      button.addEventListener("click", () => this.startLoading(button));
    });
  }

  startLoading(button) {
    button.classList.add("btn-loading");
    setTimeout(() => {
      button.classList.remove("btn-loading");
    }, 900);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new ButtonLoadingAnimation(".hero-btn");
});

// ============================================================
// Inventory filter
// Filters car cards by name, chassis type, and price range.
// ============================================================
class InventoryFilter {
  constructor() {
    this.searchInput  = document.getElementById("carSearchInput");
    this.bodyFilter   = document.getElementById("bodyTypeFilter");
    this.minPrice     = document.getElementById("minPriceInput");
    this.maxPrice     = document.getElementById("maxPriceInput");
    this.filterBtn    = document.getElementById("filterBtn");
    this.clearBtn     = document.getElementById("clearFilterBtn");
    this.resultText   = document.getElementById("filterResultText");
    this.carCards     = document.querySelectorAll(".car-card");
    this.noResultsMsg = document.getElementById("noResultsMsg");

    if (!this.searchInput || !this.bodyFilter || !this.filterBtn) return;

    this.addEvents();
    this.applyCategoryFromURL();
    this.filterCars();
  }

  applyCategoryFromURL() {
    const params   = new URLSearchParams(window.location.search);
    const category = params.get("category");
    if (category) this.bodyFilter.value = category.toLowerCase();
  }

  addEvents() {
    this.filterBtn.addEventListener("click",  () => this.filterCars());
    this.clearBtn.addEventListener("click",   () => this.clearFilters());
    this.searchInput.addEventListener("input", () => this.filterCars());
    this.bodyFilter.addEventListener("change", () => this.filterCars());
    this.minPrice.addEventListener("input",   () => this.filterCars());
    this.maxPrice.addEventListener("input",   () => this.filterCars());
  }

  getCarPrice(card) {
    const text    = card.querySelector("h4")?.textContent || "";
    const cleaned = text.replace(/[^0-9]/g, "");
    return cleaned ? Number(cleaned) : null;
  }

  getCarCategory(card) {
    return (card.dataset.category || "").toLowerCase();
  }

  filterCars() {
    const search   = this.searchInput.value.toLowerCase().trim();
    const bodyType = this.bodyFilter.value.toLowerCase();
    const min      = this.minPrice.value ? Number(this.minPrice.value) : null;
    const max      = this.maxPrice.value ? Number(this.maxPrice.value) : null;

    let visible = 0;

    this.carCards.forEach((card) => {
      const name     = card.querySelector("h3")?.textContent.toLowerCase() || "";
      const category = this.getCarCategory(card);
      const price    = this.getCarPrice(card);

      const matchName = name.includes(search);
      const matchType = bodyType === "all" || category === bodyType;

      let matchPrice = true;
      if (min !== null || max !== null) {
        // Exclude "Price Upon Request" cards when a price range is applied
        if (price === null) {
          matchPrice = false;
        } else {
          if (min !== null && price < min) matchPrice = false;
          if (max !== null && price > max) matchPrice = false;
        }
      }

      const show = matchName && matchType && matchPrice;
      // Reset to "" to honour the original flex/block value set by CSS
      card.style.display = show ? "" : "none";
      if (show) visible++;
    });

    this.updateResultText(visible);
  }

  clearFilters() {
    this.searchInput.value = "";
    this.bodyFilter.value  = "all";
    this.minPrice.value    = "";
    this.maxPrice.value    = "";
    this.carCards.forEach((card) => (card.style.display = ""));
    this.updateResultText(this.carCards.length);
  }

  updateResultText(count) {
    if (this.resultText) {
      if (count === 0) {
        this.resultText.textContent = "";
      } else if (count === 1) {
        this.resultText.textContent = "1 vehicle found.";
      } else {
        this.resultText.textContent = `${count} vehicles found.`;
      }
    }
    // Show or hide the "No vehicles found" panel
    if (this.noResultsMsg) {
      this.noResultsMsg.classList.toggle("hidden", count > 0);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new InventoryFilter();
});

// ============================================================
// Form validation
// Generic ES6 class that validates required fields and shows
// inline errors + a success/failure alert message.
// Used on contact.html, financing.html, and test-drive.html.
// ============================================================
class FormValidator {
  /**
   * @param {string} formId       - The id of the <form> element
   * @param {string} alertId      - The id of the alert <div>
   * @param {Array}  fields       - Array of { inputId, errorId, validate }
   */
  constructor(formId, alertId, fields) {
    this.form   = document.getElementById(formId);
    this.alert  = document.getElementById(alertId);
    this.fields = fields;

    if (!this.form) return;

    this.addRealtimeValidation();
    this.form.addEventListener("submit", (e) => this.handleSubmit(e));
  }

  addRealtimeValidation() {
    this.fields.forEach(({ inputId, errorId, validate }) => {
      const input = document.getElementById(inputId);
      if (!input) return;
      input.addEventListener("input", () => {
        const msg = validate(input.value.trim());
        this.setFieldError(errorId, msg);
        input.classList.toggle("input-error", !!msg);
      });
    });
  }

  setFieldError(errorId, message) {
    const el = document.getElementById(errorId);
    if (!el) return;
    el.textContent = message || "";
    el.style.display = message ? "block" : "none";
  }

  handleSubmit(e) {
    e.preventDefault();
    let valid = true;

    this.fields.forEach(({ inputId, errorId, validate }) => {
      const input = document.getElementById(inputId);
      if (!input) return;
      const msg = validate(input.value.trim());
      this.setFieldError(errorId, msg);
      input.classList.toggle("input-error", !!msg);
      if (msg) valid = false;
    });

    if (valid) {
      this.showAlert("success", "Thank you! We will get back to you shortly.");
      this.form.reset();
      this.fields.forEach(({ inputId, errorId }) => {
        const input = document.getElementById(inputId);
        if (input) input.classList.remove("input-error");
        this.setFieldError(errorId, "");
      });
    } else {
      this.showAlert("error", "Please fix the errors above before submitting.");
    }
  }

  showAlert(type, message) {
    if (!this.alert) return;
    this.alert.textContent = message;
    this.alert.className   = `form-alert form-alert-${type}`;
    this.alert.classList.remove("hidden");
    this.alert.scrollIntoView({ behavior: "smooth", block: "nearest" });
    setTimeout(() => {
      this.alert.classList.add("hidden");
    }, 5000);
  }
}

// ---- Contact form validators ----
document.addEventListener("DOMContentLoaded", () => {
  new FormValidator("contactForm", "formAlert", [
    {
      inputId: "contactName",
      errorId: "nameError",
      validate: (v) => v.length < 2 ? "Please enter your full name." : ""
    },
    {
      inputId: "contactEmail",
      errorId: "emailError",
      validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Please enter a valid email address."
    },
    {
      inputId: "contactMessage",
      errorId: "messageError",
      validate: (v) => v.length < 10 ? "Message must be at least 10 characters." : ""
    }
  ]);
});

// ---- Financing form validators ----
document.addEventListener("DOMContentLoaded", () => {
  new FormValidator("financingForm", "finAlert", [
    {
      inputId: "finName",
      errorId: "finNameError",
      validate: (v) => v.length < 2 ? "Please enter your full name." : ""
    },
    {
      inputId: "finEmail",
      errorId: "finEmailError",
      validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Please enter a valid email address."
    },
    {
      inputId: "finPhone",
      errorId: "finPhoneError",
      validate: (v) => v.length < 7 ? "Please enter a valid phone number." : ""
    }
  ]);
});

// ---- Test drive form validators ----
document.addEventListener("DOMContentLoaded", () => {
  new FormValidator("testDriveForm", "tdAlert", [
    {
      inputId: "tdName",
      errorId: "tdNameError",
      validate: (v) => v.length < 2 ? "Please enter your full name." : ""
    },
    {
      inputId: "tdEmail",
      errorId: "tdEmailError",
      validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Please enter a valid email address."
    },
    {
      inputId: "tdPhone",
      errorId: "tdPhoneError",
      validate: (v) => v.length < 7 ? "Please enter a valid phone number." : ""
    },
    {
      inputId: "tdVehicle",
      errorId: "tdVehicleError",
      validate: (v) => v.length < 2 ? "Please enter the vehicle model." : ""
    },
    {
      inputId: "tdDate",
      errorId: "tdDateError",
      validate: (v) => v ? "" : "Please select a date."
    },
    {
      inputId: "tdTime",
      errorId: "tdTimeError",
      validate: (v) => v ? "" : "Please select a time."
    }
  ]);
});

// ── Sticky navbar: add .scrolled class after scrolling 10px ──
(function () {
  const nav = document.querySelector(".sticky-nav");
  if (!nav) return;
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 10);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // run once on page load
})();

