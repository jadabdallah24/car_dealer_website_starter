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