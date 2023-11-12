import type { IconKeys } from '$lib/ui/icon';

interface NavLink {
  href: string;
  class?: ClassName;
  target?: string;
  rel?: string;
  itemprop?: string;
}

interface NavItem extends NavLink {
  label: string;
  icon?: IconKeys;
  prefetch?: true;
}

interface NavGroup {
  inners: NavItem[];
  outers?: NavItem[];
}

interface NavSite {
  navbar: NavGroup;
  draver?: Partial<NavGroup>;
  footer?: Partial<NavGroup>;
  scope?: string[];
}

const config: NavSite = {
  navbar: {
    inners: [
      {
        href: '/',
        label: 'Home',
        prefetch: true,
        itemprop: 'relatedLink'
      },
      {
        href: '/work',
        label: 'Work',
        prefetch: true,
        itemprop: 'relatedLink'
      },
      {
        href: '/blog',
        label: 'Blog',
        prefetch: true,
        itemprop: 'relatedLink'
      },
      {
        href: '/about',
        label: 'About',
        prefetch: true,
        itemprop: 'relatedLink'
      }
    ],
    outers: [
      {
        href: 'https://twitter.com',
        label: 'Twitter',
        icon: 'twitter-logo',
        target: '_blank'
      },
      {
        href: 'https://twitch.tv',
        label: 'Twitch',
        icon: 'twitch-logo',
        target: '_blank'
      },
      {
        href: 'https://github.com',
        label: 'GitHub',
        icon: 'github-logo',
        target: '_blank'
      },
      {
        href: 'https://codepen.io',
        label: 'CodePen',
        icon: 'codepen-logo',
        target: '_blank'
      },
      {
        href: 'https://dribbble.com',
        label: 'dribbble',
        icon: 'dribbble-logo',
        target: '_blank'
      },
      {
        href: 'https://www.youtube.com',
        label: 'YouTube',
        icon: 'youtube-logo',
        target: '_blank'
      }
    ]
  },
  footer: {
    outers: [
      {
        class: 'mr-4 no-underline hover:scale-125 text-lg',
        href: '/debug',
        label: 'debug',
        icon: 'gear'
      },
      {
        href: 'https://twitter.com',
        label: 'Twitter',
        target: '_blank'
      },
      {
        href: 'https://github.com',
        label: 'GitHub',
        target: '_blank'
      },
      {
        href: 'https://codepen.io',
        label: 'CodePen',
        target: '_blank'
      }
    ]
  }
};

export default config;
