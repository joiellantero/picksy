module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        fontFamily: {
            sans: ['Inter', 'Outfit', 'sans-serif'],
            serif: ['Roboto Serif', 'serif'],
        },
        extend: {
            colors: {
                brand: {
                    50:  '#eef2ff',
                    100: '#e0e7ff',
                    200: '#c7d2fe',
                    400: '#818cf8',
                    500: '#6366f1',
                    600: '#4f46e5',
                    700: '#4338ca',
                },
            },
            keyframes: {
                slideUp: {
                    '0%':   { opacity: '0', transform: 'translateY(12px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                'slide-up': 'slideUp 0.25s ease-out',
            },
        },
    },
    darkMode: 'class',
    plugins: [],
}