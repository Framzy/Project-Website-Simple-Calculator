# Project-Website-Simple-Calculator

Making a simple website calculator

# 🧮 Project Simple Calculator

Kalkulator sederhana berbasis **JavaScript** dengan dua versi:

- **Vanilla CSS** (`/vanilla-version`)
- **Tailwind CSS** (`/index.html`)

---

## 📂 Struktur Project

PROJECT-SIMPLE-CALCULATOR/
├── dist/ # Hasil build Tailwind (output.css)
├── node_modules/ # Dependencies npm
├── src/
│ ├── input.css # File utama Tailwind (base + custom component)
│ └── script.js # Logic kalkulator
├── vanilla-version/ # Versi kalkulator dengan CSS biasa
│ ├── index-vanilla.html
│ └── styles-vanilla.css
├── index.html # Versi utama kalkulator (Tailwind)
├── package.json # Konfigurasi npm scripts & dependencies
├── postcss.config.js # Konfigurasi PostCSS
├── tailwind.config.js # Konfigurasi Tailwind
└── README.md

---

## ⚡️ Teknologi

- [Tailwind CSS](https://tailwindcss.com/) – styling dengan utility-first CSS
- [PostCSS](https://postcss.org/) + [Autoprefixer](https://github.com/postcss/autoprefixer) – build CSS modern
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) – preview project di browser

---

## 🚀 Cara Menjalankan

1. **Clone repository**

   ```bash
   git clone https://github.com/Framzy/Project-Website-Simple-Calculator.git
   cd Project-Website-Simple-Calculator
   ```

2. **Install dependencies**

   ```
   npm install
   ```

3. **Build Tailwind sekali**

   ```
   npm run build
   ```

4. **Atau jalankan build otomatis (watch mode)**

   ```
   npm run watch
   ```

5. **Jalankan di browser**

   ```
   Buka index.html dengan Live Server
   Atau buka langsung di browser (file:///.../index.html)
   ```

🎨 Fitur

- Kalkulator sederhana dengan operasi dasar (+, -, \*, /, %).

- Dua versi styling: Vanilla CSS & Tailwind CSS.

- Dark mode support (auto detect OS).

- Responsive & modern UI dengan Tailwind.
