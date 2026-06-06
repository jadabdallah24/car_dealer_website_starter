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