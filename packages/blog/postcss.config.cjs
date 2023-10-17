/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano'),
    require('tailwindcss/nesting')(require('postcss-nested')),
  ],
};
