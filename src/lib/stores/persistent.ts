import { onMount } from 'nanostores';
import { persistentAtom, persistentMap } from '@nanostores/persistent';
import type { Metanano } from '.';

export const meta = persistentMap<Record<string, Metanano>>(
  'meta::',
  {},
  {
    encode: JSON.stringify,
    decode: JSON.parse
  }
);

export const settings = persistentMap<{
  sidebar: boolean;
  theme: 'dark' | 'light' | 'auto';
}>(
  'set::',
  {
    sidebar: false,
    theme: 'auto'
  },
  {
    encode: JSON.stringify,
    decode: JSON.parse
  }
);

export const timer = persistentAtom<number>('timer', 0, {
  encode: (val) => (val ? `${val}` : '0'),
  decode: (val) => (val ? parseInt(val) : 0)
});

onMount(timer, () => {
  const interval = setInterval(() => {
    timer.set(timer.get() + 1);
  }, 1000);
  return () => {
    clearInterval(interval);
  };
});

export const timerFormat = (s: number) => {
  if (isNaN(s)) return '--:--';
  const d = Math.floor(s / (3600 * 24));
  const h = Math.floor((s % (3600 * 24)) / 3600);
  const m = Math.floor((s % 3600) / 60);
  s = Math.floor(s % 60);
  return (
    (d ? `${d.toString()} - ` : '') +
    (h ? `${h.toString().padStart(2, '0')}:` : '') +
    `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  );
};
