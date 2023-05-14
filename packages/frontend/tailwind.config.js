/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                primary: '#009aa9',
            },
			fontFamily: {
				fi: 'fi'
			},
            animation: {
				fadeInTop: '0.5s fadeInTop',
            },
            keyframes: {
                fadeInTop: {
                    '0%': {
                        opacity: 0,
						'-webkit-transform': 'translateY(-1rem)',
						'-ms-transform': 'translateY(-1rem)',
                        transform: 'translateY(-1rem)',
                    },
                    '100%': {
                        opacity: 1,
						'-webkit-transform': 'translateY 0',
						'-ms-transform': 'translateY 0',
                        transform: 'translateY 0',
                    },
                },
            },
        },
    },
    plugins: [],
};
