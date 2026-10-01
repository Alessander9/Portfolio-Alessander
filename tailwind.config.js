/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        background: "var(--bg-color, #0B0B10)",
        foreground: "var(--text-main, #F3F4F6)",
        muted: "var(--surface-light, #252533)",
        "muted-foreground": "var(--text-muted, #9CA3AF)",
        primary: "var(--accent-primary, #00E676)",
        secondary: "var(--accent-secondary, #7C3AED)",
      },
    },
  },
  plugins: [],
}
