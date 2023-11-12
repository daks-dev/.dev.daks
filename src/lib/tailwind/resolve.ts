/*
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwind from 'tailwind.config';

const {
  theme: {
    screens: { bp }
  }
} = resolveConfig(tailwind) as never;
*/

const bp = import.meta.env.PUBLIC_BREAKPOINT;

export const breakpoint =
  bp && /^[1-9]\d{2,3}$/.test(bp) ? `${bp}px` : bp && /^[1-9]\d{2,3}px$/.test(bp) ? bp : '800px';
