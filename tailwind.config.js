/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://iili.io/dVufHPf.png')",
        'love-life': "url('https://iili.io/dVA0Dss.png')",
        'news-letter' : "url('https://cdn-jnadd.nitrocdn.com/oelCgpbWzhAPlAFkDVhzQDcTKKHAUyGY/assets/images/optimized/rev-a178cb9/matthewhussey.com/wp-content/uploads/2021/10/footer-sec2-bg.png') "
      },
      colors: {
        "primary" : "#f7464c",
        "secondary" : "#1b323e",
        "secondary-light" : "#1eacb5",
      }
    },
  },
  plugins: [],
};
