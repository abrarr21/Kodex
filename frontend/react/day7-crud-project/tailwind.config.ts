import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#0a0a0f",
                card: "#1a1025",
                accent: "#e94560",
                "accent-hover": "#c73652",
                "text-main": "#eaeaea",
                muted: "#6b7280",
            },
        },
    },
    plugins: [],
};

export default config;
