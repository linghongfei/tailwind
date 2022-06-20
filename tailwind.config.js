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
        'yellow': {
          1: '#FFFBE6',
          2: '#FFE58F'
        },
        'black-percent': {
          2: '#FAFAFA',
          4: '#F5F5F5',
          6: '#F0F0F0',
          15: '#D9D9D9',
          25: '#BFBFBF',
          45: '#8C8C8C',
          65: '#595959',
          85: '#262626',
          100: '#000000',
        },
        'green-6': '#52C41A',
        'gold-6': '#FAAD14',
        'red-5': '#FF4D4F',
        'white-opacity-20': 'rgba(255, 255, 255, 0.2)'
      },
      fontSize: {
        '12': '12px',
        '14': '14px',
        '15': '15px',
        '16': '16px',
        '18': '18px',
        '24': '24px',
        '20': '20px',
      }
    },
    screens: {
      'sm': {'max': '750px'},
      'md': {'max': '1024px'},
      'lg': {'max': '1440px'},
      'xl': {'min': '1441px'},
    },
    container: {
      screens: {
        'sm': '620px',
        'md': '920px',
        'lg': '1220px',
        'xl': '1520px'
      }
    },
  },
  plugins: [],
}
