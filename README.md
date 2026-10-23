# DoorWinMart — Premium Architectural Doors, Windows & Glass Solutions

A complete, modern, responsive frontend website built for **DoorWinMart**, inspired by premium architectural and interior brands.

---

## 🌟 Live Preview & Development Server

The development server is actively running at:
**`http://127.0.0.1:5173/`**

### Recommended Workspace
Open the project directory in your editor or set it as active workspace:
`C:\Users\w10\.gemini\antigravity\scratch\doorwinmart`

---

## 🏗️ Architecture & Features

### 1. Header & Navigation
- **Top Announcement Bar:** Contact phone, WhatsApp direct link, email, opening hours, and brand tagline.
- **Sticky Header:** Smooth scroll transition with backdrop blur, custom geometric architectural logo.
- **Mega Menu:** Displays all 12 major categories organized into 3 columns (Exterior & Entry Systems, Glazing & Partitions, Interior & Shading) with direct links to subcategories and a featured custom quote card.
- **Global Search (`Ctrl + K` / `Cmd + K`):** Instant modal popup searching both categories and products in real-time.
- **Mobile Drawer Menu:** Responsive sliding drawer with expandable category accordions and quick WhatsApp/call actions.
- **"Get a Free Quote" Button:** Global CTA that opens the interactive quotation modal from anywhere.

### 2. Comprehensive 12 Product Categories
1. **UPVC Doors & Windows:** Casements, 3-track sliding with mesh, main entrance doors, French doors.
2. **Sliding Doors & Windows:** Slimline multi-track systems, large-format panoramic glass patio doors.
3. **Wooden Products:** Solid teak architectural pivot doors, minimalist flush interior doors.
4. **Aluminium Products:** Thermal-break bi-fold doors, European tilt & turn windows.
5. **Casement UPVC Windows:** Single, French double casements with flying mullion, combination windows.
6. **Glass & Glass Partitions:** Acoustic double-glazed office walls, industrial black-grid Crittall partitions, switchable smart glass.
7. **Shower Partitions & Cubicles:** 10mm frameless corner cubicles with nano-coating, top-hung barn roller screens.
8. **Blinds & Shading Solutions:** Motorized sunscreen roller blinds, 50mm natural basswood Venetian blinds.
9. **Internal Sliding Systems:** Concealed cavity pocket sliding door frames.
10. **Folding Systems:** Frameless glass bi-fold stacking systems.
11. **Interior & Bathroom Panels:** Acoustic fluted oak slat panels, waterproof marble-look SPC wall boards.
12. **Glass & Door Accessories:** Diamond-knurled solid brass pull handles, 316 stainless hydraulic floor springs.

### 3. Pages Implemented
- **Home Page (`/`):** Hero with architectural lifestyle imagery, Shop by Category, Filterable Featured Products, Why Choose Us, Space Applications, Masonry Inspiration Gallery Preview, 4-Step Process, Feedback Testimonials, Consultation CTA, Comprehensive Footer.
- **Product Catalog & Category Listing (`/products`, `/category/:slug`):** Filter sidebar (Category, Subcategory, Material, Application), live search, sort options (Featured, A-Z, Z-A), product cards with "Request Price", related categories, category FAQs.
- **Product Detail View (`/product/:slug`):** High-res image stage with thumbnail selector, interactive finish/color swatch preview, technical specifications table, features checklist, suitable applications, related recommendations, prefilled "Request Quote" action, WhatsApp action, and inline quick inquiry form.
- **About Us (`/about`):** Company introduction, design & engineering philosophy, material selection principles, consultative support approach, and category overview.
- **Projects / Gallery (`/gallery`):** Category filter tabs (Modern Homes, Doors & Windows, Glass Partitions, Shower Cubicles, Aluminium Systems, Blinds & Interiors), responsive photo grid, and interactive fullscreen Lightbox with keyboard navigation.
- **Services (`/services`):** All 6 business offerings with scope deliverables, imagery, and prefilled enquiry buttons.
- **Contact Us (`/contact`):** Interactive contact form with client-side validation and friendly demo confirmation, showroom address, business hours, telephone, WhatsApp button, interactive map placeholder, and FAQs.
- **Get a Quote (`/quote`):** Multi-step quotation request wizard (Project details, Category & product selector, Dimensions & quantity, Reference blueprint/photo upload UI with preview and delete, Glass & finish specifications), validation, and confirmation state with reference ID.

### 4. Interactive Components & Helpers
- **Floating WhatsApp Button:** Sticky bottom-right button with consultation prompt tooltip.
- **Back to Top Button:** Smooth scrolling button appearing after scrolling down.
- **Quick Quote Modal:** Prefilled dynamically whenever triggered from a specific product or service card.
- **Fallback Imagery & Responsive Styling:** Mobile-first responsive grids, zero horizontal overflow, warm off-white palette (`#FAF8F5`), navy blue accents (`#0B2545`), and subtle gold/bronze touches (`#C5A880`).

---

## 💻 Tech Stack
- **React 18** + **TypeScript**
- **Vite 5** (Fast HMR & Optimized Production Build)
- **Tailwind CSS 3** (Custom architectural color palette and typography)
- **React Router DOM 6** (Multi-page client-side routing with automatic scroll to top)
- **Lucide React** (Clean, consistent architectural icon library)

---

## 🚀 Running Locally

```bash
# Navigate to the project directory
cd "C:\Users\w10\.gemini\antigravity\scratch\doorwinmart"

# Start the development server
npm run dev

# Or build for production
npm run build

# Preview the production build
npm run preview
```
