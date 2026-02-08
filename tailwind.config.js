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
                    DEFAULT: '#2A9D8F', // Teal/Healing Green
                    dark: '#1F7A6F',
                    light: '#4BC0B2',
                },
                secondary: {
                    DEFAULT: '#E9C46A', // Resilient Yellow/Gold
                    dark: '#C9A650',
                    light: '#F4D385',
                },
                action: {
                    DEFAULT: '#E76F51', // Action/Energy Orange
                },
                neutral: {
                    50: '#F9FAFB',
                    100: '#F3F4F6',
                    800: '#1F2937',
                    900: '#111827',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
