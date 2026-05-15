# 🏢 Forsah Dev Agency - Sophisticated Digital Craftsmanship

**Architected and Developed by:** Ahmed Maamoun

---

## 📖 The Philosophy

Forsah Dev Agency is a boutique engineering firm specializing in the intersection of high-fidelity aesthetics and surgical-grade code. We don't just build websites; we architect digital legacies. This project serves as a showcase of a premium agency portfolio, emphasizing smooth animations, modern typography, and an immaculate user experience.

---

## 📸 Platform Previews

<div align="center">
  <img src="screenshots/hero.png" alt="Hero Section" width="800" />
</div>
<br/>
<div align="center">
  <img src="screenshots/services.png" alt="Services" width="400" />
  <img src="screenshots/portfolio.png" alt="Portfolio" width="400" />
</div>

---

## ✨ Core Features

- **Immersive User Experience:** Custom scroll interactions and page transitions powered by Framer Motion.
- **Premium Design System:** A sophisticated color palette and typography scale using Cormorant Garamond & Instrument Sans.
- **Responsive Architecture:** Pixel-perfect rendering across mobile, tablet, and desktop devices.
- **Performance Optimized:** Utilizing Next.js Server Components and advanced image optimization for sub-second load times.

---

## 🧠 Technical Challenges I Overcame

Building a high-end agency website requires strict attention to detail and performance:

1. **Complex Scroll Animations without Jaggies:**
   - *Challenge:* Implementing heavy scroll-linked animations often causes frame drops on mobile devices.
   - *Solution:* I utilized Framer Motion's hardware-accelerated properties (`transform` and `opacity`) and optimized the React render cycle to ensure smooth 60fps animations across all devices.
2. **Asset Optimization:**
   - *Challenge:* High-fidelity architectural visuals can easily bloat the website and increase LCP (Largest Contentful Paint).
   - *Solution:* I implemented the Next.js `<Image />` component with custom loaders and strict sizing to serve WebP formats, drastically reducing the bundle size while maintaining pristine quality.

---

## 🛠️ Technical Specifications

| Layer | Technology |
| :--- | :--- |
| **Core Engine** | Next.js 16+ (App Router Architecture) |
| **Styling Engine** | Tailwind CSS 4.0 (Custom Token System) |
| **Motion Engine** | Framer Motion 12 (Low-latency Transitions) |
| **Typefaces** | Cormorant Garamond & Instrument Sans |

---

## 🚀 Engineering Setup

To run this project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Maamoun0/forsah-dev-agency.git
   cd forsah-dev-agency
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Launch Development Server:**
   ```bash
   npm run dev
   ```
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 👨‍💻 Author

**Ahmed Maamoun**
- GitHub: [@Maamoun0](https://github.com/Maamoun0)
- LinkedIn: [Ahmed Maamoun](https://linkedin.com/in/your-linkedin-profile)

Engineered with surgical precision by Ahmed Maamoun for Forsah Dev Agency.
