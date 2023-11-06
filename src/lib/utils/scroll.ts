import Animate, { ANIMATION_DURATION, ANIMATION_DELAY } from './Animate';

interface Options {
  offset: number;
  duration: number;
}

type Callback = (x?: Window) => void;

export function to(x: number, y: number, options?: Partial<Options>, callback?: Callback): void {
  let steps = (options?.duration ?? ANIMATION_DURATION) / ANIMATION_DELAY;
  const stepX = (document.documentElement.scrollLeft - x) / steps;
  const stepY = (document.documentElement.scrollTop - y) / steps;
  const render = () => {
    window.scrollBy(-stepX, -stepY);
    if (--steps) {
      Animate.request(render);
    } else {
      window.scrollTo(x, y);
      callback?.call(window);
    }
  };
  if (stepX || stepY) {
    steps = Math.round(steps);
    render();
  }
}

export function toObj(
  target: string | Element,
  options?: Partial<Options>,
  callback?: Callback
): void {
  const node = typeof target === 'string' ? document.querySelector(target) : target;
  node && to(0, (node as HTMLElement).offsetTop + (options?.offset ?? 0), options, callback);
}

export function toTop(options?: Partial<Options>, callback?: Callback): void {
  to(0, 0, options, callback);
}
