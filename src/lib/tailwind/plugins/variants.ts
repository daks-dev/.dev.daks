import plugin from 'tailwindcss/plugin';

export default plugin(({ addVariant }) => {
  addVariant('onload', ['&.loaded', '.loaded &']);
  addVariant('onswap', ['&.swapped', '.swapped &']);
  addVariant('ready', ['&:where(.loaded, .swapped)', ':where(.loaded, .swapped) &']);
  addVariant('oversee', ['&:where(:hover, :focus)']);
  addVariant('step', '&[aria-current="step"]');
  addVariant('page', '&[aria-current="page"]');
  addVariant('forced-colors', '@media (forced-colors: active)');
});
