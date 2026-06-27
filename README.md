# Prime Auto Gallery

**Student:** Jad Abdallah  
**Course:** Full Stack Development – Final Project 2026  
**Lebanese University, Faculty of Engineering – Branch 2, Roumieh**

---

## Project Description

Prime Auto Gallery is a fully responsive luxury car dealership website built with HTML5, CSS3, Bootstrap 5, and vanilla JavaScript (ES6 classes). The site showcases a curated inventory of 18 premium and performance vehicles, allows visitors to search and filter cars, view detailed vehicle specifications with a multi-photo gallery, book test drives, request financing, and look up real-world vehicle data via a live API. A custom AI assistant powered by OpenAI GPT-4o-mini provides intelligent vehicle recommendations and comparisons.

**Live URL:** *(add your Vercel / Netlify / GitHub Pages URL here)*  
**GitHub Repository:** *(add your repo URL here)*

---

## Pages

| Page | Description |
|---|---|
| `index.html` | Home – cinematic hero, category cards, featured vehicles, services section, CTA |
| `inventory.html` | Full inventory with search by name, category filter, and price range filter |
| `car-details.html` | Individual vehicle detail page with 5-photo gallery, spec tiles, modifications, and damage report |
| `financing.html` | Financing request form with real-time validation |
| `test-drive.html` | Test drive booking form with date/time picker and real-time validation |
| `api-specs.html` | Live car specifications search powered by API Ninjas Cars API |
| `about.html` | Dealership story, values, showroom gallery, and embedded location map |
| `contact.html` | Contact form with showroom photo, embedded Google Map, and info cards |

---

## APIs Used

### 1. API Ninjas – Cars API
**URL:** `https://api.api-ninjas.com/v1/cars`  
Requires a registered API key sent via `X-Api-Key` header — proxied through the Express backend so the key is never exposed in frontend code.  
Used on `api-specs.html` to fetch real vehicle specs (fuel type, cylinders, transmission, drivetrain, MPG, displacement) by make, model, and year.

Features implemented over the API response:
- Loading state with spinner
- Error state (network / API key failure)
- Empty state (no results found)
- Polished two-column result cards

### 2. OpenAI – Chat Completions API (GPT-4o-mini)
**URL:** `https://api.openai.com/v1/chat/completions`  
Key loaded server-side from `.env` — never sent to the browser.  
Used to power the **Prime AI Assistant** chat widget present on every page.

Features:
- Full inventory context injected as system prompt
- Quick suggestion buttons (Best coupe under $80K, Compare M4 and RS7, etc.)
- Graceful error messages for quota exceeded, invalid key, or server offline
- "Thinking…" loading indicator while waiting for response

---

## Backend

The project uses a lightweight **Node.js + Express** backend (`server.js`) for two purposes:

1. **Proxying the API Ninjas request** — keeps the API key server-side
2. **Proxying the OpenAI request** — keeps the OpenAI key server-side and injects the full inventory as context

To run locally:

```bash
cd car_dealer_website
npm install
node server.js
```

Then open `http://localhost:3000` in your browser.

Add your API keys to the `.env` file:

```
OPENAI_API_KEY=sk-your-key-here
API_NINJAS_KEY=your-ninjas-key-here
```

---

## Custom UI Requirement – Scroll-to-Top Button

**Assignment:** Add a scroll-to-top button (with animation) that appears after scrolling.

A fixed circular button appears in the bottom-right corner after the user scrolls down more than 300px. Clicking it smoothly scrolls back to the top of the page. The button fades in and out using a CSS transition triggered by the `show` class. The logic lives in the `ScrollToTop` ES6 class inside `script.js` and is present on every page.

---

## JavaScript ES6 Classes

| Class | File | Purpose |
|---|---|---|
| `ScrollToTop` | `script.js` | Scroll-to-top button with show/hide animation |
| `ButtonLoadingAnimation` | `script.js` | Spinner animation on button click |
| `InventoryFilter` | `script.js` | Filters inventory cards by name, category, and price |
| `FormValidator` | `script.js` | Real-time inline validation + success/error alerts |
| `CarDetails` | `script.js` | Reads URL parameter, populates car-details.html with photos and specs |
| `PrimeAIChat` | `ai-chat.js` | AI chat widget — sends messages to backend, displays replies |
| `ApiCarsSearch` | `api-cars.js` | Fetches and renders live vehicle specs from API Ninjas |

---

## Inventory

18 vehicles across 5 categories:

| Category | Vehicles |
|---|---|
| Coupe | BMW M4 Competition, BMW M4 Silver Surfer, Chevrolet Corvette Stingray, Toyota GT86 TRD |
| Supercar | Porsche 911 Turbo S, Chevrolet Corvette ZR1, McLaren 765LT, Ferrari 488 Pista, Ferrari 812 Competizione, Lamborghini Revuelto |
| SUV | Mercedes-Benz GLE 450, Mercedes-Maybach GLS 600, Range Rover Sport SVR |
| Sedan | Audi S4 Premium, Audi RS7 ABT Legacy |
| Hatchback | Volkswagen Golf R, GR Yaris Rally Spec, Honda Civic Type R |

Each vehicle includes: name, price, year, mileage, transmission, drivetrain, engine, power output, colour, full description, modifications list, damage report, and 5 gallery photos.

---

## Design

- **Theme:** Dark luxury — obsidian backgrounds, champagne gold accents, crimson highlights
- **Fonts:** Cormorant Garamond (headings) + Inter (body)
- **Effects:** Glassmorphism panels (`backdrop-filter: blur`), gold hairline rules, subtle grain texture, shimmer button animations, scroll-triggered navbar opacity
- **Responsive:** Large desktop → laptop → tablet (2-col) → mobile (1-col), with collapsible Bootstrap navbar

---

## AI-Use Appendix

### Tools Used

| Tool | Purpose |
|---|---|
| Claude (Anthropic) | Code review, Bootstrap migration, ES6 class architecture, form validation, AI chat integration, UI/UX design, README |

### Sample Prompts

1. *"I have a car dealer website built with plain HTML/CSS/JS. Review the code and tell me what I need to improve to meet my university project requirements."*

2. *"Migrate my custom hamburger menu to Bootstrap 5's navbar collapse component while keeping my existing CSS styling."*

3. *"Write an ES6 class called FormValidator that accepts a form ID, alert div ID, and an array of field descriptors with custom validate functions. It should show inline errors on input and display a styled success/error alert on submit."*

4. *"Write a CarDetails ES6 class that reads the ?car= URL parameter, looks it up in carDatabase, and populates all the placeholder elements on car-details.html including the thumbnail gallery with prev/next arrows."*

### What the AI Got Wrong

**1. Bootstrap navbar background override**  
Claude's initial Bootstrap nav used `bg-dark` which turned the navbar black on all pages including the hero where the background should be transparent. I removed `bg-dark` and added `background: transparent !important` in CSS, then added a dark background only on the collapsed mobile drawer via a media query.

**2. `card.style.display = "block"` breaking the flex layout**  
The AI reset hidden cards to `display: block`, which pulled them out of the flex row and caused a single-column broken layout after clearing filters. I fixed it by resetting to `""` (empty string) so CSS's original `display` value from the stylesheet takes over.

**3. Wrong OpenAI SDK method**  
The initial `server.js` used `openai.responses.create` with a non-existent model name. I corrected it to `openai.chat.completions.create` with `gpt-4o-mini`.

---

## Screenshots

*(Add screenshots here – mobile 375px, tablet 768px, desktop 1440px)*

---

## Technologies

- HTML5 (semantic elements: `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`)
- CSS3 (custom properties, glassmorphism, Flexbox, CSS Grid, responsive media queries)
- Bootstrap 5.3.3 (navbar collapse, grid, utility classes)
- JavaScript ES6 (7 classes across 3 files)
- Node.js + Express (backend proxy for API keys)
- dotenv (environment variable management)
- OpenAI Node.js SDK v4
- Font Awesome 6.5
- Google Fonts (Cormorant Garamond, Inter)
- API Ninjas Cars API
- OpenAI GPT-4o-mini

---

## Deployment

**Option A – Static only (no AI chat or API Ninjas)**  
Upload all files to GitHub Pages or Netlify. The site will work except the AI chat widget and Car Specs page.

**Option B – Full deployment with backend**  
Deploy to a Node.js host such as Render, Railway, or Vercel (with serverless functions). Set `OPENAI_API_KEY` and `API_NINJAS_KEY` as environment variables on the platform. All features will work.
