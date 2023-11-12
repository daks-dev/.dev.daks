import { getDefaultConfig, mergeConfigs, extendTailwindMerge, type Config } from 'tailwind-merge';

export const getTwClassGroup = (key?: string): void => {
  const config: Config = getDefaultConfig();
  console.log(key ? config.classGroups[key] : config.classGroups);
};

const twMerge = extendTailwindMerge(
  mergeConfigs(getDefaultConfig(), {
    classGroups: {
      aspect: [{ aspect: ['3/4', '4/3', 'A4', 'A4l'] }],
      'bg-image': [{ bg: ['linear', 'radial'] }],
      content: [{ content: ['null'] }],
      'gradient-from-pos': [{ from: ['150%'] }],
      'gradient-to-pos': [{ to: ['150%'] }],
      'gradient-via-pos': [{ via: ['150%'] }],
      'list-style-type': [{ list: ['circle', 'square'] }],
      rounded: [{ rounded: ['4xl', '5xl'] }],
      shadow: [{ shadow: ['inset'] }]
    }
  })
);

export default (...x: ClassName[]) => twMerge(...x) || undefined;
