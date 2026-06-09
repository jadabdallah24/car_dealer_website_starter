# Prime Auto Gallery

**Student:** Jad Abdallah  
**Course:** Full Stack Development – Final Project 2026  
**Lebanese University, Faculty of Engineering – Branch 2, Roumieh**

---

## Project Description

Prime Auto Gallery is a fully responsive car dealership website built with HTML5, CSS3, Flexbox, Bootstrap 5, and vanilla JavaScript (ES6 classes). The site showcases a curated inventory of 18+ luxury and performance vehicles, allows visitors to search and filter cars, view detailed specifications, book test drives, and look up real-world vehicle data via a live API.

**Live URL:** *(add your Vercel / Netlify / GitHub Pages URL here)*  
**GitHub Repository:** *(add your repo URL here)*

---

## Pages

| Page | Description |
|---|---|
| `index.html` | Home – hero, category cards, featured vehicles, services, CTA |
| `inventory.html` | Full inventory with search, category filter, and price range filter |
| `car-details.html` | Individual vehicle detail page with image gallery and specs |
| `financing.html` | Financing request form with real-time validation |
| `test-drive.html` | Test drive booking form with real-time validation |
| `api-specs.html` | Live car specifications search powered by API Ninjas Cars API |
| `about.html` | Dealership about page |
| `contact.html` | Contact form with real-time validation |

---

## API Used

**API Ninjas – Cars API**  
URL: `https://api.api-ninjas.com/v1/cars`  
Requires a registered API key sent via `X-Api-Key` header.  
Used on `api-specs.html` to fetch real vehicle specs (fuel type, cylinders, transmission, drivetrain, MPG, displacement) by make, model, and year.

Features implemented over the API response:
- Client-side filtering by year input
- Loading state (spinner)
- Error state (network / API key failure)
- Empty state (no results found)

---

## Custom UI Requirement – Scroll-to-Top Button

**Assignment:** Add a scroll-to-top button (with animation) that appears after scrolling.

A fixed circular button appears in the bottom-right corner after the user scrolls down more than 300 px. Clicking it smoothly scrolls back to the top of the page. The button fades in and out using a CSS transition triggered by the `show` class. The logic lives in the `ScrollToTop` ES6 class inside `script.js` and is present on every page.

---

## AI-Use Appendix

### Tools Used

| Tool | Purpose |
|---|---|
| Claude (Anthropic) | Code review, Bootstrap migration, form validation class, README structure |

### Sample Prompts

1. *"I have a car dealer website built with plain HTML/CSS/JS. Review the code and tell me what I need to improve to meet my university project requirements."*

2. *"Migrate my custom hamburger menu (showMenu/hideMenu functions) to Bootstrap 5's navbar collapse component while keeping my existing CSS styling."*

3. *"Write an ES6 class called FormValidator that accepts a form ID, alert div ID, and an array of field descriptors with custom validate functions. It should show inline errors on input and display a styled success/error alert on submit."*

### What the AI Got Wrong

**1. Bootstrap navbar background override**  
Claude's initial Bootstrap nav used `bg-dark` class which turned the navbar black on all pages including the hero where the background should be transparent. I removed `bg-dark` and added `background: transparent !important` in CSS, then added a dark background only on the collapsed mobile drawer via a media query.

**2. `card.style.display = "block"` breaking the flex layout**  
The AI reset hidden cards to `display: block`, which pulled them out of the flex row and caused a single-column broken layout after clearing filters. I fixed it by resetting to `""` (empty string) so CSS's original `display` value from the stylesheet takes over.

---

## Screenshots

*(Add screenshots here – mobile 375px, tablet 768px, desktop 1440px)*

---

## Technologies

- HTML5 (semantic elements: `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`)
- CSS3 (Flexbox, custom properties, responsive media queries)
- Bootstrap 5.3.3 (navbar, grid, utility classes)
- JavaScript ES6 (classes: `ScrollToTop`, `ButtonLoadingAnimation`, `InventoryFilter`, `FormValidator`, `ApiCarsSearch`)
- Font Awesome 6.5
- API Ninjas Cars API

## Deployment

Deployed via **Vercel / Netlify / GitHub Pages** *(update with your choice)*.  
No build step required – pure static files.
