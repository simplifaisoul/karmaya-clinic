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
                    DEFAULT: '#6495ED', // Cornflower Blue (Soft Blue)
                    dark: '#4169E1',    // Royal Blue
                    light: '#87CEFA',   // Light Sky Blue
                },
                secondary: {
                    DEFAULT: '#000080', // Navy Blue (High Contrast)
                    dark: '#000050',
                    light: '#333399',
                },
                action: {
                    DEFAULT: '#FF7F50', // Coral (Warm accent, readable against blue)
                },
                neutral: {
                    50: '#F8FAFC',
                    100: '#F1F5F9',
                    800: '#1e293b',
                    900: '#0f172a', // Slate 900 for very high contrast text
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
