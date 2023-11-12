// import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';
import type { Config } from 'tailwindcss';

import 'dotenv/config';
const breakpoint = process.env.PUBLIC_BREAKPOINT ?? 800;
import screens from './src/lib/tailwind/screens';

import common from './src/lib/tailwind/presets/common';
import { fontSans } from './src/lib/tailwind/font-family';

type Color = { [x: string]: string };
const reverse = (color: Color) =>
  [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].reduce(
    (acc, val) => ((acc[val] = color[val === 50 ? 900 : val === 900 ? 50 : 900 - val]), acc),
    { DEFAULT: color[950] } as Color
  );

export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,md,mdx,astro,svelte}'],

  darkMode: ['class', '.theme-dark'],

  presets: [common],

  theme: {
    screens: screens(breakpoint),
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
      fontFamily: fontSans(/*'"Open Sans"'*/)
    }
  }

  // plugins: []
} satisfies Config;
