// import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';
import type { Config } from 'tailwindcss';

import common from './src/lib/tailwind/presets/common';
import { fontSans } from './src/lib/tailwind/font-family';

type Color = { [x: string]: string };
const reverse = (color: Color) =>
  [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].reduce(
    (acc, val) => ((acc[val] = color[val === 50 ? 900 : val === 900 ? 50 : 900 - val]), acc),
    { DEFAULT: color[950] } as Color
  );

export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,md,mdx,astro,svelte,vue}'],

  darkMode: ['class', '.theme-dark'],

  presets: [common],

  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      bp: '800px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },

    colors: {
      dark: {
        DEFAULT: '#ffffff',
        ...colors.slate,
        impact: {
          DEFAULT: '#7611a6',
          soft: '#1c0056',
          hard: '#c561f6',
          accent: '#ca7879',
          text: '#ffffff',
          subtle: 'rgba(197, 97, 247, 0.333)',
          overlay: 'rgba(197, 97, 247, 0.333)'
        }
      },
      light: {
        ...reverse(colors.slate),
        950: '#ffffff',
        impact: {
          DEFAULT: '#7611a6',
          soft: '#c561f6',
          hard: '#1c0056',
          accent: '#ca7879',
          text: '#ffffff',
          subtle: 'rgba(119, 17, 177, 0.333)',
          overlay: 'rgba(197, 97, 247, 0.333)'
        }
      },
      transparent: 'transparent',
      current: 'currentColor',
      selected: 'SelectedItem'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      },
      boxShadow: {
        inset: 'inset 0 0 0 1px var(--tw-shadow-color)'
      },
      fontFamily: fontSans(/*'"Open Sans"'*/),
      gradientColorStopPositions: {
        '150%': '150%'
      }
    }
  }

  // plugins: []
} satisfies Config;
