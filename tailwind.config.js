/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-500': '#640EF1',
        'accent-900': '#080C2E',
        'accent-1000': '#070C29',
        'surface-50': '#F1F4F5',
        'surface-100': '#8D90A8',
        'surface-200': '#5D5D7C',
        'surface-3000': '#424560',
        'secondary': '#FF961A',
        'warning': '#FFD15A',
        'danger': '#FF3232',
        'shade': '#070C29',

        'pastilaris-primary': '#B7EB38',
        'pastilaris-shades': '#0B251C',

        'pastilaris-tint': '#6C8079',
        'pastilaris-tint-400': '#ACB4B1',
        'pastilaris-tint-300': '#EDF3F0',
        'pastilaris-tint-200': '#EDF3F1',
        'pastilaris-tint-100': '#E7EBEA',

      },
      fontWeight: {
        'extralight': '200',
        'light': '300',
        'regular': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
      },
      fontFamily: {
        'display': ['Clash Display', 'ui-sans-serif', 'system-ui'],
        'body': ['Poppins', 'ui-sans-serif', 'system-ui'],
        'raleway': ['Raleway', 'ui-sans-serif', 'system-ui'],
      },
      transitionProperty: {
        height: "height"
      }
    },
  },
  plugins: [],
}

