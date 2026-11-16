import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#ffffff",
        wash: "#f4f4f1",
        ink: "#12141b",
        mute: "#5d6270",
        line: "#dcdde2",
        vox: "#e8502e",
        teal: "#1f6b66", // secondary accent: Games + Art only
      },
      fontFamily: {
        display: ["'Fraunces Variable'", "Georgia", "serif"],
        sans: ["'Inter Variable'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono Variable'", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
