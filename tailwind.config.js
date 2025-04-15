/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          'choco-brown': '#4A2C2A',
          'cream': '#FDF6E3',
          'dark-choco': '#2C1A1D',
        },
      },
    },
    plugins: [],
  }