class ApiCarsSearch {
  constructor() {
    this.makeInput = document.getElementById("apiMake");
    this.modelInput = document.getElementById("apiModel");
    this.yearInput = document.getElementById("apiYear");
    this.searchBtn = document.getElementById("apiSearchBtn");

    this.loadingBox = document.getElementById("apiLoading");
    this.errorBox = document.getElementById("apiError");
    this.emptyBox = document.getElementById("apiEmpty");
    this.resultsBox = document.getElementById("apiResults");

    if (this.searchBtn) {
      this.searchBtn.addEventListener("click", () => this.searchCars());
    }
  }

  showLoading() {
    this.loadingBox.classList.remove("hidden");
    this.errorBox.classList.add("hidden");
    this.emptyBox.classList.add("hidden");
    this.resultsBox.innerHTML = "";
    this.searchBtn.classList.add("btn-loading");
    this.searchBtn.disabled = true;
  }

  hideLoading() {
    this.loadingBox.classList.add("hidden");
    this.searchBtn.classList.remove("btn-loading");
    this.searchBtn.disabled = false;
  }

  showError(message) {
    this.errorBox.textContent = message;
    this.errorBox.classList.remove("hidden");
    this.searchBtn.classList.remove("btn-loading");
    this.searchBtn.disabled = false;
  }

  showEmpty() {
    this.emptyBox.classList.remove("hidden");
  }

  async searchCars() {
    const make = this.makeInput.value.trim();
    const model = this.modelInput.value.trim();
    const year = this.yearInput.value.trim();

    if (!make || !model) {
      this.showError("Please enter at least a make and model.");
      return;
    }

    let apiUrl = `/api/cars?make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}`;

    if (year) {
      apiUrl += `&year=${encodeURIComponent(year)}`;
    }

    try {
      this.showLoading();

      const response = await fetch(apiUrl, {
        method: "GET"
      });

      const data = await response.json();

      this.hideLoading();

      if (!response.ok) {
        this.showError(data.error || "API request failed. Check your API key.");
        return;
      }

      if (!Array.isArray(data) || data.length === 0) {
        this.showEmpty();
        return;
      }

      this.displayResults(data);
    } catch (error) {
      this.hideLoading();
      this.showError("Network error. Please check your connection or API key.");
      console.error(error);
    }
  }

  displayResults(cars) {
    this.resultsBox.innerHTML = cars.map(car => `
      <div class="api-car-card">
        <div class="api-car-header">
          <h3>${this.formatText(car.make)} ${this.formatText(car.model)}</h3>
          <span>${car.year || "N/A"}</span>
        </div>

        <div class="api-spec-grid">
          <p><strong>Class:</strong> ${this.formatText(car.class) || "N/A"}</p>
          <p><strong>Fuel Type:</strong> ${this.formatText(car.fuel_type) || "N/A"}</p>
          <p><strong>Transmission:</strong> ${this.formatTransmission(car.transmission)}</p>
          <p><strong>Drive:</strong> ${this.formatText(car.drive) || "N/A"}</p>
          <p><strong>Cylinders:</strong> ${car.cylinders || "N/A"}</p>
          <p><strong>Displacement:</strong> ${car.displacement ? car.displacement + " L" : "N/A"}</p>
          <p><strong>City MPG:</strong> ${car.city_mpg || "N/A"}</p>
          <p><strong>Highway MPG:</strong> ${car.highway_mpg || "N/A"}</p>
          <p><strong>Combined MPG:</strong> ${car.combination_mpg || "N/A"}</p>
        </div>
      </div>
    `).join("");
  }

  formatText(text) {
    if (!text) return "";
    return text
      .toString()
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  formatTransmission(transmission) {
    if (!transmission) return "N/A";

    if (transmission.toLowerCase() === "a") {
      return "Automatic";
    }

    if (transmission.toLowerCase() === "m") {
      return "Manual";
    }

    return transmission;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new ApiCarsSearch();
});