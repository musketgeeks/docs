/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				brand: {
					primary: '#2B2D61',
					secondary: '#43CBFF'
				}
			}
		}
	},
	plugins: []
};
