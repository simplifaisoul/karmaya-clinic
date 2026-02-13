/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#5CACEE', // Lighter Blue (Cornflower Blue / Sky Blue variant)
                    dark: '#318CE7',    // Slightly darker blue
                    light: '#87CEFA',   // Light Sky Blue
                },
                secondary: {
                    DEFAULT: '#003366', // Deep Navy (High Contrast against light blue)
                    dark: '#002244',
                    light: '#335599',
                },
                action: {
                    DEFAULT: '#FF7F50', // Coral (Warm accent, readable against blue)
                },
                neutral: {
                    50: '#F0F8FF', // Alice Blue (Very light blue tint for backgrounds)
                    100: '#E6F3FF',
                    800: '#1e293b',
                    900: '#0f172a',
                }
            },
            fontFamily: {
                sans: ['Calibri', 'Open Sans', 'sans-serif'],
                heading: ['Calibri', 'Open Sans', 'sans-serif'], // User requested Calibri for everything
            },
        },
    },
    plugins: [],
}
