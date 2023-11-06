export const uuid = (size = 0x10000000) =>
  '_' +
  Math.floor((1 + Math.random()) * size)
    .toString(16)
    .substring(1);

export const isHover = () => window?.matchMedia('(hover: hover)').matches;

export const isTouch = () =>
  window?.matchMedia('(pointer: coarse)').matches ||
  navigator?.maxTouchPoints > 0 ||
  (document && 'ontouchstart' in document.documentElement);

export { default as Animate } from './Animate';

export * as audio from './audio';
export * as scroll from './scroll';
