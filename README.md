# 🏢 Forsah Dev Agency
### Where Code Meets Craftsmanship.

**Hand-crafted by Ahmed Maamoun**

---

## 🏛️ The Approach
At **Forsah**, we don't believe in generic solutions. Every project we take on is a unique architectural challenge. This portfolio is a showcase of how we combine high-fidelity aesthetics with surgical-grade code to build digital legacies that last.

---

## 📸 Portfolio Preview

<div align="center">
  <img src="screenshots/hero.png" width="100%" />
</div>

<br/>

| Our Services | Featured Work |
| :--- | :--- |
| <img src="screenshots/services.png" width="400" /> | <img src="screenshots/portfolio.png" width="400" /> |

---

## ✨ Design Principles
*   **Immersive UX:** Using **Framer Motion** to create a visceral sense of space and movement.
*   **Typography First:** A sophisticated blend of *Cormorant Garamond* and *Instrument Sans*.
*   **Invisible Infrastructure:** Built on **Next.js** to ensure that while the site looks like art, it runs like a machine.

---

## 🧠 Dev Log: Smooth Motion at Scale
The biggest challenge was implementing "Heavy" scroll animations without destroying the frame rate on mobile.

**The Solution:** I shifted all scroll-linked calculations to the **GPU** by using Framer Motion's `useTransform` and `useScroll` hooks with hardware-accelerated CSS properties. By avoiding layout shifts and repaints, I kept the experience at a constant 60fps, even during the most complex page transitions.

---

## 🏗 Stack Blueprint
*   **Framework:** Next.js (App Router)
*   **Styling:** Tailwind CSS (with a custom design token system)
*   **Motion:** Framer Motion
*   **Deployment:** Vercel

---

## 🚦 Quick Start
1. `git clone https://github.com/Maamoun0/forsah-dev-agency.git`
2. `npm install`
3. `npm run dev`

---

### 👋 Connect
**Ahmed Maamoun**
[GitHub](https://github.com/Maamoun0) | [LinkedIn](https://linkedin.com/in/your-linkedin-profile)

*Pixel perfect. Performance driven.*
