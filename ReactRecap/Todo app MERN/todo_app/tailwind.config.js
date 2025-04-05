/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",          // Light background
        primary: "#2563eb",            // Blue accents (Tailwind's blue-600)
        primaryLight: "#3b82f6",       // Lighter blue (blue-500)
        textMain: "#1f2937",           // Gray-800
        textLight: "#6b7280",          // Gray-500
        card: "#f9fafb",               // Light card background (gray-50)
        borderColor: "#e5e7eb",        // Border gray-200
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 8px rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        card: "0.75rem",
      },
    },
  },
  plugins: [],
}

