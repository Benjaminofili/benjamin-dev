/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // v4 uses this, NOT 'tailwindcss'
  },
};

export default config;