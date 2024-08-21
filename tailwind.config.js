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
      },
    },
  },
  plugins: [],
}

