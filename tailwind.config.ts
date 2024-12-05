import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-12deg)' },
          '50%': { transform: 'rotate(12deg)' },
        },
        wiggletwo: {
          '0%, 100%': { transform: 'rotate(-20deg)' },
          '50%': { transform: 'rotate(11deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 4s ease-in-out infinite',
        wiggleotherone: 'wiggle 7s ease-in-out infinite',
        wiggletwo: 'wiggletwo 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
