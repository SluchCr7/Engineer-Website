/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'rgb(var(--background) / <alpha-value>)',
				foreground: 'rgb(var(--foreground) / <alpha-value>)',
				card: 'rgb(var(--card) / <alpha-value>)',
				'card-foreground': 'rgb(var(--card-foreground) / <alpha-value>)',
				border: 'rgb(var(--border) / <alpha-value>)',

				obsidian: '#0B0D17',
				'slate-gray': '#1E293B',
				'electric-cobalt': '#2563EB',
				'cyber-lime': '#BEF264',
				'gold-accent': '#F59E0B',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Montserrat', 'sans-serif'],
			},
			backgroundImage: {
				'grid-pattern':
					"url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40' fill='%232563EB' fill-opacity='0.1'/%3E%3C/svg%3E\")",
				'dot-pattern': 'radial-gradient(circle, #2563EB 1px, transparent 1px)',
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
