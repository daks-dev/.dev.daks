interface Translate {
  x?: number;
  y?: number;
  z?: number;
}

interface Rotate {
  x?: number;
  y?: number;
  z?: number;
  a?: number;
}

interface Transform {
  translate?: Translate;
  rotate?: Rotate;
}

type Callback = null | ((x?: HTMLElement) => void);

export const ANIMATION_DURATION = 1000;
export const ANIMATION_DELAY = 60;

class Animate {
  // (window.requestAnimationFrame || ((callback) => setTimeout(callback, ANIMATION_DELAY)))(callback)
  static request = (callback: FrameRequestCallback): number =>
    window.requestAnimationFrame(callback);

  // ((window.cancelAnimationFrame || ((id) => clearTimeout(id)))(id), 0)
  static cancel = (id: number): number => (window.cancelAnimationFrame(id), 0);

  node: HTMLElement;
  translate: Translate = {};
  rotate: Rotate = {};
  duration = ANIMATION_DURATION;
  callback: Callback = null;

  constructor(node: HTMLElement, transform: Transform, duration?: number, callback?: Callback) {
    this.node = node;
    if (transform.translate) this.translate = transform.translate;
    if (transform.rotate) this.rotate = transform.rotate;
    if (duration) this.duration = duration;
    if (callback) this.callback = callback;
  }

  handle = 0;

  action = 0;

  start = 0;
  previous = 0;
  done = false;

  render(timestamp: number): void {
    this.start ??= timestamp;
    this.handle = 0;
    const elapsed = timestamp - this.start;
    if (this.previous !== timestamp) {
      const count = Math.min(0.1 * elapsed, 700);
      this.node.style.transform = `translate3d(-${count}px, 0px, 0px)`; // `translateX(-${count}px)` (will-change: transform)
      if (count === 700) this.done = true;
    }
    if (elapsed < 7000) {
      this.previous = timestamp;
      if (!this.done) {
        this.handle = Animate.request(this.render);
        this.callback?.call(this.node);
      }
    }
  }

  cancel(): void {
    this.handle = Animate.cancel(this.handle);
  }

  translate3d(): void {}
  rotate3d(): void {}
}

export default Animate;
