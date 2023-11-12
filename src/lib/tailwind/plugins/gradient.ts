import plugin from 'tailwindcss/plugin';

function linear() {
  const vals = [30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
  return vals.reduce((acc, val) => ((acc[val] = `${val}deg`), acc), {
    DEFAULT: '0deg'
  } as Record<string, string>);
}

function radial() {
  const shapes = {
    c: 'circle',
    e: 'ellipse'
  };
  const pos = {
    // c: 'center',
    t: 'top',
    b: 'bottom',
    l: 'left',
    r: 'right',
    tl: 'top left',
    tr: 'top right',
    bl: 'bottom left',
    br: 'bottom right'
  };
  const res: Record<string, string> = {
    DEFAULT: ''
  };
  for (const [keyS, valS] of Object.entries(shapes)) {
    res[`${keyS}`] = `${valS} at center`;
    for (const [keyP, valP] of Object.entries(pos)) res[`${keyS}-${keyP}`] = `${valS} at ${valP}`;
  }
  return res;
}

export default plugin(
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        'bg-linear': (value) => ({
          'background-image': `linear-gradient(${value}${value ? ',' : ''}var(--tw-gradient-stops))`
        })
      },
      { values: theme('gradientLinear') }
    );
    matchUtilities(
      {
        'bg-radial': (value) => ({
          'background-image': `radial-gradient(${value}${value ? ',' : ''}var(--tw-gradient-stops))`
        })
      },
      { values: theme('gradientRadial') }
    );
  },
  {
    theme: {
      gradientLinear: linear(),
      gradientRadial: radial()
    }
  }
);
