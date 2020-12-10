
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        'n1': '-1',
        '1': '1',
        '999': '999',
      },
      // translate: {
      //   '1.5-full': '-150%',
      //   '2.5-full': '-200%',
      //   '1/7': '14.2857143%'
      // }
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'border-fill': '#3498db',
      'border-empty': 'e0e0e0'
    }),
    // translate: theme => ({
    //   ...theme('spacing'),
    //   ...negative(theme('spacing')),
    //   '1.5-full': '-150%',
    //   '2.5-full': '-200%',
    //   '1/7': '14.2857143%'
    // }),
    transitionProperty: {
      'width': 'width',
      // 'transform': 'transform'
    },
    rotate: {
      '-180': '-180deg',
       '-70': '-70deg',
      '-20': '-20deg',
       '0': '0',
       '45': '45deg',
       '90': '90deg',
      '135': '135deg',
       '180': '180deg',
      '270': '270deg',
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      scale: ['active'],
      cursor: ['hover', 'focus', 'disabled'],
    },
  },
  plugins: [

  ],
}
