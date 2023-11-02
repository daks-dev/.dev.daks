import postcssImport from 'postcss-import';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default {
  plugins: [
    postcssImport(),
    tailwindcss(),
    autoprefixer({
      cascade: true
    }),
    process.env?.NODE_ENV === 'production' &&
      cssnano({
        preset: ['advanced', { zindex: false }]
      })
  ]
};
