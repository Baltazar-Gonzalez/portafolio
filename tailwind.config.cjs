/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				main: "#0ea5e9",
				primary: 'rgb(var(--color-primary) / <alpha-value>)',
			},
			width:{
				project: "700px",
				skills: "500px"
			}
		},
	},
	plugins: [
		function ({ addComponents, theme }) {
		  addComponents({
			".circle":{
				zIndex: "-1",
				position: "absolute",
				width: "25px",
				height: "25px",
				borderRadius: "50%",
			},
		  })
		}
	  ],
}
