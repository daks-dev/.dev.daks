// import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';

export default plugin(({ addBase }) => {
  addBase({
    [':root']: {
      '--scrollbar-size': '8px',
      '--scrollbar-track-bg-color': 'transparent', // colors.slate[700],
      '--scrollbar-thumb-bg-color': colors.slate[500],
      '--progress-height': '4px',
      '--progress-color': colors.slate[300],
      '--progress-bg-color': colors.slate[700]
    },

    ['::selection']: {
      color: 'rgb(229 231 235)',
      'background-color': 'rgb(118 169 250)'
    },

    ['::-webkit-scrollbar']: {
      '-webkit-overflow-scrolling': 'touch',
      width: 'var(--scrollbar-size)',
      height: 'var(--scrollbar-size)',
      'background-color': 'var(--scrollbar-track-bg-color)'
    },
    ['::-webkit-scrollbar-track']: {
      '-webkit-overflow-scrolling': 'touch',
      '-webkit-box-shadow': 'inset 0 0 8px rgba(80, 80, 80, 0.2)',
      'border-radius': '0.5rem',
      'box-shadow': 'inset 0 0 8px rgba(80, 80, 80, 0.2)',
      'background-color': 'var(--scrollbar-track-bg-color)'
    },
    ['::-webkit-scrollbar-thumb']: {
      '-webkit-overflow-scrolling': 'touch',
      '-webkit-background-clip': 'content-box',
      // '-webkit-box-shadow': 'inset 0 0 8px rgba(0, 0, 0, 0.2)',
      border: '2px solid transparent',
      'border-radius': '0.5rem',
      'background-color': 'var(--scrollbar-thumb-bg-color)',
      'background-clip': 'content-box'
      // 'box-shadow': 'inset 0 0 8px rgba(0, 0, 0, 0.2)'
    },
    ['::-webkit-scrollbar-thumb:hover']: {
      '-webkit-background-clip': 'border-box',
      'background-clip': 'border-box'
    },

    ['progress']: {
      '-webkit-appearance': 'none',
      '-moz-appearance': 'none',
      appearance: 'none',
      border: 'none',
      width: '100%',
      height: 'var(--progress-height)',
      color: 'var(--progress-color)',
      'background-color': 'var(--progress-bg-color)'
    },
    ['::-webkit-progress-bar']: {
      'background-color': 'var(--progress-bg-color)'
    },
    ['::-webkit-progress-value']: {
      'background-color': 'var(--progress-color)'
    },
    ['::-moz-progress-bar']: {
      'background-color': 'var(--progress-color)'
    },

    ['html']: {
      width: '100%',
      'min-height': '100%'
      // 'scroll-snap-type': 'y mandatory'
    },
    ['body']: {
      width: '100%',
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      'min-height': '100vh',
      'overflow-y': 'scroll',
      'scroll-behavior': 'smooth'
    },
    ['@supports not (-moz-appearance: none)']: {
      ['body.overflow-y-hidden, body.overflow-y-hidden .overflow-y-offset']: {
        'padding-right': 'var(--scrollbar-size) !important'
      }
    }
  });
});
