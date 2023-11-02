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
          bg: [
            'gradient-impact',
            'gradient-impact-orange',
            'gradient-stroke',
            'gradient-subtle',
            'gradient-menu-items',
            'gradient-menu-toogle',
            'gradient-menu-toogle-expanded'
          ]
        }
      ],
      shadow: [
        {
          shadow: ['toggle-theme']
        }
      ]
    }
  })
);

export default (...x: ClassName[]) => twMerge(...x) || undefined;
