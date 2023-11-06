import plugin from 'tailwindcss/plugin';

export default plugin(({ addUtilities }) => {
  const utilities = {
    '.linecap-butt': {
      'stroke-linecap': 'butt'
    },
    '.linecap-round': {
      'stroke-linecap': 'round'
    },
    '.linecap-square': {
      'stroke-linecap': 'square'
    },
    '.linejoin-arcs': {
      'stroke-linejoin': 'arcs'
    },
    '.linejoin-bevel': {
      'stroke-linejoin': 'bevel'
    },
    '.linejoin-miter': {
      'stroke-linejoin': 'miter'
    },
    '.linejoin-miter-clip': {
      'stroke-linejoin': 'miter-clip'
    },
    '.linejoin-round': {
      'stroke-linejoin': 'round'
    }
  };
  addUtilities(utilities);
});
