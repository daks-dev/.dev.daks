import type { Config } from 'tailwindcss';

import base from '../plugins/base';
import components from '../plugins/components';
import gradient from '../plugins/gradient';
import grid from '../plugins/grid';
import svg from '../plugins/svg';
import utilities from '../plugins/utilities';
import variants from '../plugins/variants';

export default {
  theme: {
    backgroundImage: {
      none: 'none'
    },
    extend: {
      aspectRatio: {
        '3/4': '3 / 4',
        '4/3': '4 / 3',
        A4: '620 / 877',
        A4l: '877 / 620'
      },
      borderRadius: {
        '4xl': '3rem',
        '5xl': '4.5rem'
      },
      boxShadow: {
        inset: 'inset 0 0 0 1px var(--tw-shadow-color)'
      },
      container: {
        center: true
      },
      content: {
        null: '""'
      },
      gradientColorStopPositions: {
        '150%': '150%'
      },
      listStyleType: {
        circle: 'circle',
        square: 'square'
      },
      spacing: {
        inherit: 'inherit',
        unset: 'unset'
      }
    }
  },

  plugins: [base, components, utilities, grid, gradient, svg, variants]
} as Partial<Config>;
