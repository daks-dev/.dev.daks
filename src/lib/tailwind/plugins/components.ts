// import defaultTheme from 'tailwindcss/defaultTheme';
// import colors from 'tailwindcss/colors';

import plugin from 'tailwindcss/plugin';

export default plugin(({ addComponents }) => {
  addComponents({
    ['.wrapper, .content']: {
      width: '100%',
      'margin-left': 'auto',
      'margin-right': 'auto'
    },
    ['.wrapper']: {
      'max-width': '80rem',
      'padding-left': '2rem',
      'padding-right': '2rem',
      '@media (min-width: 84rem)': {
        'padding-left': '0px',
        'padding-right': '0px'
      }
    }
  });
});
