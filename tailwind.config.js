/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{html,js}',
    './src/components/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        'blue': {
          1: '#F0F8FF',
          2: '#DBEDFF',
          3: '#B3D6FF',
          4: '#69C0FF',
          5: '#61A0FF',
          6: '#357CF5',
          7: '#096DD9',
          8: '#235CCF',
          9: '#092982',
          10: '#061A5C',
        },
        'black': {
          1: '#FAFAFA',
          2: '#F5F5F5',
          3: '#F0F0F0',
          4: '#D9D9D9',
          5: '#BFBFBF',
          6: '#8C8C8C',
          7: '#595959',
          8: '#262626',
          9: '#000000',
        },
        'green-6': '#52C41A',
        'gold-6': '#FAAD14',
        'red-5': '#FF4D4F'
      },
      fontSize: {
        '14': '14px',
        '16': '16px',
      }
    },
    screens: {
      'sm': {'max': '750px'},
      'md': {'min': '751px', 'max': '1024px'},
      'lg': {'min': '1025px', 'max': '1920px'},
      'xl': {'min': '1920px'},
    },
  },
  plugins: [],
}
