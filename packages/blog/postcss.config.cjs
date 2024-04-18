// The only config that errors if written in ES module syntax...
/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: [
    require('tailwindcss/nesting')(require('postcss-nested')),
    require('tailwindcss'),
    require('autoprefixer'),
    require('cssnano'),
  ],
};
