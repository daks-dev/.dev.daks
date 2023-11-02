import plugin from 'tailwindcss/plugin';
import colors from 'tailwindcss/colors';
import type { Config } from 'tailwindcss';

const variants = plugin(({ addVariant }) => {
  addVariant('onload', ['&.loaded', '.loaded &']);
  addVariant('onswap', ['&.swapped', '.swapped &']);
  addVariant('ready', ['&:where(.loaded, .swapped)', ':where(.loaded, .swapped) &']);
  addVariant('onscroll', ['&.scrolled', '.scrolled &']);
  addVariant('oversee', ['&:where(:hover, :focus)']);
  addVariant('forced-colors', '@media (forced-colors: active)');
});

const system = [
  'system-ui',
  '-apple-system',
  'blinkmacsystemfont',
  '"Segoe UI"',
  'roboto',
  'oxygen',
  'ubuntu',
  'cantarell',
  '"Open Sans"',
  '"Helvetica Neue"',
  'sans-serif'
];

const reverse = (color: object) =>
  [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].reduce(
    (acc, val) => ((acc[val] = color[900 - (val > 50 ? val : 0)]), acc),
    { DEFAULT: color[950] }
  );

export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,md,mdx,astro,svelte,vue}'],

  // darkMode: 'class',
  darkMode: ['class', '.theme-dark'],

  // presets: [],

  theme: {
    colors: {
      dark: {
        DEFAULT: '#ffffff',
        ...colors.slate
      },
      /*
      {
        DEFAULT: '#fff',
        50: '#f3f4f7',
        100: '#e3e6ee',
        200: '#c3cadb',
        300: '#a3acc8',
        400: '#8490b5',
        500: '#6474a2',
        600: '#505d84',
        700: '#3d4663',
        800: '#283044',
        900: '#141925',
        950: '#090b11'
      },
      */
      light: {
        ...reverse(colors.slate),
        950: '#ffffff'
      },
      /*
      {
        DEFAULT: '#090b11',
        50: '#141925',
        100: '#283044',
        200: '#3d4663',
        300: '#505d84',
        400: '#6474a2',
        500: '#8490b5',
        600: '#a3acc8',
        700: '#c3cadb',
        800: '#e3e6ee',
        900: '#f3f4f7',
        950: '#fff'
      },
      */
      impact: {
        DEFAULT: 'var(--impact)',
        light: 'var(--impact-light)',
        dark: 'var(--impact-dark)',
        overlay: 'var(--impact-overlay)',
        'subtle-overlay': 'var(--impact-subtle-overlay)',
        'text-over': 'var(--impact-text-over)'
      },
      link: {
        DEFAULT: 'var(--link-color)'
      },
      transparent: 'transparent',
      current: 'currentColor',
      selected: 'SelectedItem'
    },
    fontSize: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.625rem',
      '2xl': '2.125rem',
      '3xl': '2.625rem',
      '4xl': '3.5rem',
      '5xl': '4.5rem'
    },
    backgroundImage: {
      'gradient-impact': 'var(--gradient-impact)',
      'gradient-impact-orange': 'var(--gradient-impact-orange)',
      'gradient-stroke': 'var(--gradient-stroke)',
      'gradient-subtle': 'var(--gradient-subtle)',
      'gradient-menu-items': 'var(--gradient-menu-items)',
      'gradient-menu-toogle': 'var(--gradient-menu-toogle)',
      'gradient-menu-toogle-expanded': 'var(--gradient-menu-toogle-expanded)'
    },
    boxShadow: {
      none: '0 0 #0000',
      sm: 'var(--shadow-sm)',
      md: 'var(--shadow-md)',
      lg: 'var(--shadow-lg)',
      'toggle-theme': 'var(--shadow-toggle-theme)'
    },
    extend: {
      screens: {
        md: '800px'
      },
      fontFamily: {
        system,
        body: ['Public Sans', ...system],
        brand: ['rubik', ...system]
      },
      lineHeight: {
        tight: '1.1',
        snug: '1.2'
      },
      content: {
        null: '""'
      }
    }
  },

  plugins: [variants]
} satisfies Config;
