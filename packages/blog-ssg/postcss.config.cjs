/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss/nesting')(require('postcss-nested')),
    require('tailwindcss'),
    require('autoprefixer'),
    require('cssnano'),
  ],
};
