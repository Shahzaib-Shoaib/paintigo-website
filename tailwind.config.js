function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgba(var(${variableName}))`;
  };
}
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      textColor: {
        gray: {
          50: '#FBFBFB',
          100: '#F1F1F1',
          150: '#F4F4F4',
          200: '#F9F9F9',
          300: '#E6E6E6',
          350: '#E9ECEF',
          400: '#999999',
          500: '#7e7e7e',
          600: '#3A3A3A',
          700: '#222222',
          800: '#707070',
        },
        skin: {
          primary: withOpacity('--color-primary'),
          red: withOpacity('--color-red'),
          purple: withOpacity('--color-purple'),
          cerulean: withOpacity('--color-cerulean'),
          salmon: withOpacity('--color-salmon'),
          tree: withOpacity('--color-tree'),
          yellow: withOpacity('--color-yellow'),
          'yellow-two': withOpacity('--color-yellow-two'),
          'yellow-three': withOpacity('--color-yellow-three'),
          carnation: withOpacity('--color-carnation'),
          base: withOpacity('--color-text-base'),
          inverted: withOpacity('--color-text-inverted'),
          muted: withOpacity('--color-text-muted'),
          secondary: withOpacity('--color-text-secondary'),
          countdown: withOpacity('--color-text-countdown'),

        },
      },
      backgroundColor: {
        skin: {
          primary: withOpacity('--color-primary'),
          red: withOpacity('--color-red'),
          tints: withOpacity('--color-tints'),
          purple: withOpacity('--color-purple'),
          cerulean: withOpacity('--color-cerulean'),
          salmon: withOpacity('--color-salmon'),
          tree: withOpacity('--color-tree'),
          yellow: withOpacity('--color-yellow'),
          footer: withOpacity('--color-footer'),
          'yellow-two': withOpacity('--color-yellow-two'),
          'yellow-three': withOpacity('--color-yellow-three'),
          base: withOpacity('--color-text-base'),
          carnation: withOpacity('--color-carnation'),
          fill: withOpacity('--color-fill'),
          thumbnail: withOpacity('--color-fill-thumbnail'),
          inverted: withOpacity('--color-text-inverted'),
          one: withOpacity('--color-fill-one'),
          two: withOpacity('--color-fill-two'),
          three: withOpacity('--color-fill-three'),
          six: withOpacity('--color-fill-six'),
          secondary: withOpacity('--color-fill-secondary'),
          highlighted: withOpacity('--color-highlighted'),
          'dropdown-hover': withOpacity('--color-fill-dropdown-hover'),
          'button-secondary': withOpacity('--color-button-secondary'),
          'button-disable': withOpacity('--color-button-disable'),
          'button-hover': withOpacity('--color-button-hover'),
        },
      },
      
      borderColor: {
        skin: {
          primary: withOpacity('--color-primary'),
          red: withOpacity('--color-red'),
          yellow: withOpacity('--color-yellow'),
          base: withOpacity('--color-border-base'),
          one: withOpacity('--color-border-one'),
          two: withOpacity('--color-border-two'),
          three: withOpacity('--color-border-three'),
          four: withOpacity('--color-border-four'),
          form: withOpacity('--color-borfont-der-form'),
          'yellow-three': withOpacity('--color-yellow-three'),
        },
      },
      ringColor: {
        skin: {
          red: withOpacity('--color-red'),
          base: withOpacity('--color-border-base'),
          form: withOpacity('--color-border-form'),
          primary: withOpacity('--color-primary'),
        },
      },
      colors: {
        body: '#5A5A5A',
        // heading: '#212121',
        heading: '#fff',
        input: '#1D1E1F',
        black: '#000',
        white: '#fff',
        linen: '#FBF1E9',
        linenSecondary: '#ECE7E3',
        olive: '#3D9970',
        maroon: '#B03060',
        brown: '#C7844B',
        placeholder: '#707070',
        borderBottom: '#f7f7f7',
        facebook: '#4267B2',
        facebookHover: '#395fad',
        google: '#4285F4',
        googleHover: '#307bf9',
        gray: {
          50: '#FBFBFB',
          100: '#F1F1F1',
          150: '#F4F4F4',
          200: '#F9F9F9',
          300: '#E6E6E6',
          350: '#E9ECEF',
          400: '#999999',
          500: '#D8D8D8',
          600: '#3A3A3A',
          700: '#292929',
          800: '#707070',
        },
      },
      fontSize: {
        '10px': '.625rem',
      },
      screens: {
        sm: '480px',
        lg: '1025px',
        '2xl': '1500px',
        '3xl': '1780px',
      },
      spacing: {
        '430px': '430px',
        '450px': '450px',
        '500px': '500px',
        '64vh': '64vh',
      },
      minHeight: {
        '50px': '50px',
      },
      scale: {
        80: '0.8',
        85: '0.85',
        300: '3',
        400: '4',
      },
      animation: {
        shine: 'shine 1s',
      },
      keyframes: {
        shine: {
          '100%': { left: '125%' },
        },
      },
      backgroundImage: {
        'app-pattern': "url('/assets/images/app-pattern.png')",
      },
    },
    boxShadow: {
      cart: '0 3px 6px rgba(0,0,0,0.12)',
      product: '0 6px 12px rgba(0,0,0,.08)',
      listProduct: '0 2px 4px rgba(0,0,0,.08)',
      navigation: '0 3px 6px rgba(0, 0, 0, 0.16)',
      navigationReverse: '0 -3px 6px rgba(0, 0, 0, 0.16)',
      header: '0 2px 3px rgba(0, 0, 0, 0.08)',
      vendorCard: '1px 1px 4px rgba(0, 0, 0, 0.12)',
      vendorCardHover: '0 6px 18px rgba(0, 0, 0, 0.12)',
      subMenu: '1px 2px 3px rgba(0, 0, 0, 0.08)',
      bottomNavigation: '0 -2px 3px rgba(0, 0, 0, 0.06)',
      cookies: '0 -2px 3px rgba(0, 0, 0, 0.04)',
      avatar: '0px 15px 30px rgba(0, 0, 0, 0.16)',
    },
    fontFamily: {
      body: ["'Open Sans', sans-serif"],
      satisfy: ["'Satisfy', cursive"],
      segoe: ["'Segoe UI', sans-serif"],
      razor: ["'Rubik',Arial,Helvetica,sans-serif"],// added

    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('tailwindcss-rtl'),
  ],
}
