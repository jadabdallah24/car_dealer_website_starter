var navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.right = "0";
}

function hideMenu() {
  navLinks.style.right = "-220px";
}
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
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}

new ScrollToTop("scrollTopBtn");
// Button loading animation requirement:
// This ES6 class adds a temporary spinner animation when buttons are clicked.
class ButtonLoadingAnimation {
  constructor(selector) {
    this.buttons = document.querySelectorAll(selector);
    this.addClickEvents();
  }

  addClickEvents() {
    this.buttons.forEach((button) => {
      button.addEventListener("click", () => {
        this.startLoading(button);
      });
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

// Inventory filtering feature:
// This ES6 class filters cars by name/model, chassis type, and min/max price.
class InventoryFilter {
  constructor() {
  this.searchInput = document.getElementById("carSearchInput");
  this.bodyTypeFilter = document.getElementById("bodyTypeFilter");
  this.minPriceInput = document.getElementById("minPriceInput");
  this.maxPriceInput = document.getElementById("maxPriceInput");
  this.filterBtn = document.getElementById("filterBtn");
  this.clearBtn = document.getElementById("clearFilterBtn");
  this.resultText = document.getElementById("filterResultText");
  this.carCards = document.querySelectorAll(".car-card");

  if (!this.searchInput || !this.bodyTypeFilter || !this.filterBtn) return;

  this.addEvents();
  this.applyCategoryFromURL();
  this.filterCars();
}
  applyCategoryFromURL() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");

    if (category) {
      this.bodyTypeFilter.value = category.toLowerCase();
    }
}

  addEvents() {
    this.filterBtn.addEventListener("click", () => this.filterCars());

    this.clearBtn.addEventListener("click", () => this.clearFilters());

    this.searchInput.addEventListener("input", () => this.filterCars());
    this.bodyTypeFilter.addEventListener("change", () => this.filterCars());
    this.minPriceInput.addEventListener("input", () => this.filterCars());
    this.maxPriceInput.addEventListener("input", () => this.filterCars());
  }

  getCarPrice(card) {
    const priceText = card.querySelector("h4")?.textContent || "";

    const cleanedPrice = priceText.replace(/[^0-9]/g, "");

    if (!cleanedPrice) {
      return null;
    }

    return Number(cleanedPrice);
  }

  getCarCategory(card) {
    return (
      card.dataset.category ||
      card.id ||
      ""
    ).toLowerCase();
  }

  filterCars() {
    const searchValue = this.searchInput.value.toLowerCase().trim();
    const selectedBodyType = this.bodyTypeFilter.value.toLowerCase();
    const minPrice = this.minPriceInput.value ? Number(this.minPriceInput.value) : null;
    const maxPrice = this.maxPriceInput.value ? Number(this.maxPriceInput.value) : null;

    let visibleCount = 0;

    this.carCards.forEach((card) => {
      const carName = card.querySelector("h3")?.textContent.toLowerCase() || "";
      const carCategory = this.getCarCategory(card);
      const carPrice = this.getCarPrice(card);

      const matchesName = carName.includes(searchValue);

      const matchesBodyType =
        selectedBodyType === "all" || carCategory === selectedBodyType;

      let matchesPrice = true;

      if (minPrice !== null || maxPrice !== null) {
        if (carPrice === null) {
          matchesPrice = false;
        }

        if (minPrice !== null && carPrice < minPrice) {
          matchesPrice = false;
        }

        if (maxPrice !== null && carPrice > maxPrice) {
          matchesPrice = false;
        }
      }

      if (matchesName && matchesBodyType && matchesPrice) {
        card.style.display = "block";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    this.updateResultText(visibleCount);
  }

  clearFilters() {
    this.searchInput.value = "";
    this.bodyTypeFilter.value = "all";
    this.minPriceInput.value = "";
    this.maxPriceInput.value = "";

    this.carCards.forEach((card) => {
      card.style.display = "block";
    });

    this.updateResultText(this.carCards.length);
  }

  updateResultText(count) {
    if (!this.resultText) return;

    if (count === 0) {
      this.resultText.textContent = "No vehicles found. Try changing your filters.";
    } else if (count === 1) {
      this.resultText.textContent = "1 vehicle found.";
    } else {
      this.resultText.textContent = `${count} vehicles found.`;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new InventoryFilter();
});