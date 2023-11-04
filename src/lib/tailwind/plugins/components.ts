// import defaultTheme from 'tailwindcss/defaultTheme';
// import colors from 'tailwindcss/colors';

import plugin from 'tailwindcss/plugin';

export default plugin(({ addComponents }) => {
  addComponents({
    ['.wrapper, .content']: {
      width: '100%',
      'margin-left': 'auto',
      'margin-right': 'auto',
      'padding-left': '2rem',
      'padding-right': '2rem'
    },
    ['.wrapper']: {
      'max-width': '80rem',
      '@media (min-width: 1344px)': {
        'padding-left': '0px',
        'padding-right': '0px'
      }
    },
    ['.content']: {
      'max-width': '64rem',
      '@media (min-width: 1088px)': {
        'padding-left': '0px',
        'padding-right': '0px'
      }
    }
  });
});
