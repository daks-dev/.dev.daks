// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="svelte" />

/*
type Astro = import('astro').AstroGlobal;
declare const Astro: Readonly<Astro>;
*/

declare module '*.astro' {
  type AstroComponentFactory = import('astro/runtime/server/index.js').AstroComponentFactory;
  const Component: AstroComponentFactory;
  export default Component;
}

declare type ClassName = string | false | 0 | ClassName[] | null | undefined;
