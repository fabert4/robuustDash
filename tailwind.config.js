const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  plugins: [
    require('flowbite/plugin')
  ],

  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: { 50: '#f3f1ee', 100: '#e2dad4', 200: '#cfc1b7', 300: '#bba798',
          400: '#aa917e', 500: '#997d65', 600: '#8c715d', 700: '#7b6352',
          800: '#6d5649', 900: '#5c483d'},
      }
    }
  }
};

module.exports = config;