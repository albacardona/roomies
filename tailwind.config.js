/* eslint-disable style/quote-props */
/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,tsx,ts}'],
  theme: {
    extend: {
      strokeWidth: {
        3: '4px',
      },
      boxShadow: {
        xs: '0 0 2px 0 rgba(41, 50, 60, 0.5)',
        ring: '0px 0px 0px 4px rgba(17,187,166,0.3)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        'foreground-secondary': 'hsl(var(--foreground-secondary))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        success: 'hsl(var(--success))',
        info: 'hsl(var(--info))',
        white: 'hsl(var(--white))',
        neutral: 'hsl(var(--neutral))',
        link: 'hsl(var(--link))',
        table: 'hsl(var(--table))',
        customYellow: '#EAAA28',
        lightYellow: '#FFF3CD',
        customRed: '#D0021B',
        lightRed: '#E1485C',
        yegoGreen: '#0B9D8E',
        yegoDarkGreen: '#088477',
        customOrange: '#F7B328',
        darkOrange: '#AA7B1B',
        customGreen: '#08B822',
        lightGreen: '#07BAA4',
        darkGreen: '#076F17',
        linkBlue: '#39A3FF',
        dark: '#29323C',
        comments: '#FFFFDE',
        darkBrown: '#856404',
        lightGrey: '#F5F5F5',
        mediumGrey: '#BABABA',
        darkGrey: '#363535',
        lightBlue: '#F2FAFF',

        bg: {
          primary: {
            DEFAULT: 'var(--background-primary)',
            hover: 'var(--background-primary-hover)',
          },
          secondary: {
            DEFAULT: 'var(--background-secondary)',
            hover: 'var(--background-secondary-hover)',
          },
          terciary: {
            DEFAULT: 'var(--background-terciary)',
            hover: 'var(--background-terciary-hover)',
          },
          brand: {
            DEFAULT: 'var(--background-brand)',
            hover: 'var(--background-brand-hover)',
            light: {
              DEFAULT: 'var(--background-brand-light)',
              hover: 'var(--background-brand-light-hover)',
            },
          },
          success: {
            DEFAULT: 'var(--background-success)',
            light: 'var(--background-success-light)',
          },
          destructive: {
            DEFAULT: 'var(--background-destructive)',
            light: 'var(--background-destructive-light)',
          },
          warning: {
            DEFAULT: 'var(--background-warning)',
            light: 'var(--background-warning-light)',
          },
          info: {
            DEFAULT: 'var(--background-info)',
            light: 'var(--background-info-light)',
          },
          contrast: 'var(--background-contrast)',
          light: 'var(--background-light)',
        },
        fg: {
          primary: {
            DEFAULT: 'var(--text-primary)',
            hover: 'var(--text-primary-hover)',
          },
          secondary: {
            DEFAULT: 'var(--text-secondary)',
            hover: 'var(--text-secondary-hover)',
          },
          brand: {
            DEFAULT: 'var(--text-brand)',
            hover: 'var(--text-brand-hover)',
          },
          success: {
            DEFAULT: 'var(--text-fg-success)',
            hover: 'var(--text-fg-success-hover)',
          },
          destructive: {
            DEFAULT: 'var(--text-destructive)',
            hover: 'var(--text-destructive-hover)',
          },
          warning: {
            DEFAULT: 'var(--text-warning)',
            hover: 'var(--text-warning-hover)',
          },
          info: {
            DEFAULT: 'var(--text-info)',
            hover: 'var(--text-info-hover)',
          },
          placeholder: {
            DEFAULT: 'var(--text-fg-placeholder)',
            disabled: 'var(--text-fg-placeholder-disabled)',
          },
          link: 'var(--text-link)',
          contrast: 'var(--text-contrast)',
        },
        bd: {
          primary: {
            DEFAULT: 'var(--border-primary)',
            hover: 'var(--border-primary-hover)',
          },
          secondary: {
            DEFAULT: 'var(--border-secondary)',
            hover: 'var(--border-secondary-hover)',
          },
          brand: {
            DEFAULT: 'var(--border-brand)',
            light: 'var(--border-brand-light)',
          },
          success: {
            DEFAULT: 'var(--border-success)',
            light: 'var(--border-success-light)',
          },
          destructive: {
            DEFAULT: 'var(--border-destructive)',
            light: 'var(--border-destructive-light)',
          },
          warning: {
            DEFAULT: 'var(--border-warning)',
            light: 'var(--border-warning-light)',
          },
        },
        ring: 'var(--ring-brand-light)',
      },
      animation: {
        border: 'border 3s',
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'slide-in-right': 'slideInFromRight 0.2s ease-out forwards',
        'slide-in-left': 'slideInFromLeft 0.2s ease-out forwards',
        'slide-in-top': 'slideInFromTop 0.2s ease-out forwards',
        fadeInLeft: 'fadeInLeft 0.5s ease-out forwards',
        jiggle: 'jiggle 1s ease-in-out',
        flash: 'flash 1s ease-in-out',
        shake: 'shake 1s ease-in-out',
        glow: 'glow 1s ease-in-out',
        fadeInZoom: 'fadeInZoom 0.3s forwards',
        fadeOutZoom: 'fadeOutZoom 0.3s forwards',
        fadeIn: 'fadeIn 0.3s forwards',
        fadeOut: 'fadeOut 0.3s forwards',
      },
      transitionProperty: {
        colors: 'background-color, border-color, color, fill, stroke',
      },
      transitionDuration: {
        200: '200ms',
      },
      keyframes: {
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        slideInFromRight: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideInFromTop: {
          '100%': { transform: 'translateY(100%)', opacity: 1 },
        },
        fadeInLeft: {
          '0%': {
            opacity: 0,
            transform: 'translate3d(-100%, 0, 0)',
          },
          '100%': {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)',
          },
        },
        jiggle: {
          '0%': {
            transform: 'scale3d(1, 1, 1)',
          },
          '30%': {
            transform: 'scale3d(1.25, 0.75, 1)',
          },
          '40%': {
            transform: 'scale3d(0.75, 1.25, 1)',
          },
          '50%': {
            transform: 'scale3d(1.15, 0.85, 1)',
          },
          '65%': {
            transform: 'scale3d(0.95, 1.05, 1)',
          },
          '75%': {
            transform: 'scale3d(1.05, 0.95, 1)',
          },
          '100%': {
            transform: 'scale3d(1, 1, 1)',
          },
        },
        flash: {
          '0%, 50%, 100%': {
            opacity: '1',
          },
          '25%, 75%': {
            opacity: '0',
          },
        },
        shake: {
          '0%, 100%': {
            transform: 'translateX(0)',
          },
          '10%, 30%, 50%, 70%, 90%': {
            transform: 'translateX(-10px)',
          },
          '20%, 40%, 60%, 80%': {
            transform: 'translateX(10px)',
          },
        },
        glow: {
          '0%': {
            backgroundColor: '#FCFCFD',
          },
          '30%': {
            backgroundColor: '#FFF6CD',
          },
          '100%': {
            backgroundColor: '#FCFCFD',
          },
        },
        fadeInZoom: {
          '0%': { opacity: 0, transform: 'translate(-50%, -50%) scale(0.95)' },
          '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
        fadeOutZoom: {
          '0%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
          '100%': { opacity: 0, transform: 'translate(-50%, -50%) scale(0.55)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    ({ addBase }) => {
      addBase({
        '*': {
          transitionProperty: 'background-color, border-color, color, fill, stroke',
          transitionDuration: '200ms',
        },
      });
    },
  ],
  variants: {},
};
