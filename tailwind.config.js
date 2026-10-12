/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "475px", // Small mobile
        sm: "640px", // Mobile landscape
        md: "768px", // iPad mini
        lg: "1024px", // iPad
        xl: "1280px", // Desktop
        "2xl": "1536px", // Large desktop
      },
    },
  },
  plugins: [],
};

export default config;
