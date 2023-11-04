// import defaultTheme from 'tailwindcss/defaultTheme';
// import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';

export default plugin(({ addUtilities }) => {
  addUtilities({
    ['.unset']: {
      all: 'unset'
    },
    ['.revert']: {
      all: 'revert'
    },
    ['.disabled, [disabled="true"]']: {
      'pointer-events': 'none',
      'touch-action': 'none',
      'user-select': 'none'
    },
    ['.enabled, [enabled="true"]']: {
      'pointer-events': 'auto',
      'touch-action': 'auto',
      'user-select': 'auto'
    },
    ['.bg-only']: {
      display: 'inline-block',
      overflow: 'hidden',
      'text-align': 'left',
      'text-indent': '-9999em',
      direction: 'ltr',
      br: {
        display: 'none'
      }
    },
    ['.clear-pseudo']: {
      '&::before': {
        content: '""',
        position: 'absolute',
        'z-index': '-10',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        opacity: '0'
      },
      '&::after': {
        content: '""',
        display: 'table',
        clear: 'both'
      }
    },
    ['.overflow-y-offset']: {
      'padding-right': '0'
    }
  });
});
