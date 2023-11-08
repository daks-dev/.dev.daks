import { getDefaultConfig, mergeConfigs, extendTailwindMerge, type Config } from 'tailwind-merge';

export * from './font-family';

export const getTwClassGroup = (key?: string): void => {
  const config: Config = getDefaultConfig();
  console.log(key ? config.classGroups[key] : config.classGroups);
};

const twMerge = extendTailwindMerge(
  mergeConfigs(getDefaultConfig(), {
    classGroups: {
      'bg-image': [
        {
          bg: ['gradient-radial']
        }
      ],
      shadow: [
        {
          shadow: ['inset']
        }
      ]
    }
  })
);

export default (...x: ClassName[]) => twMerge(...x) || undefined;
