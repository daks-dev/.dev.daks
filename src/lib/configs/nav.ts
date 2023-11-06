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
        rel: 'prefetch',
        itemprop: 'relatedLink',
        label: 'Home'
      },
      {
        href: '/work',
        rel: 'prefetch',
        itemprop: 'relatedLink',
        label: 'Work'
      },
      {
        href: '/about',
        rel: 'prefetch',
        itemprop: 'relatedLink',
        label: 'About'
      }
    ],
    outers: [
      {
        href: 'https://twitter.com',
        target: '_blank',
        label: 'Twitter',
        icon: 'twitter-logo'
      },
      {
        href: 'https://twitch.tv',
        target: '_blank',
        label: 'Twitch',
        icon: 'twitch-logo'
      },
      {
        href: 'https://github.com',
        target: '_blank',
        label: 'GitHub',
        icon: 'github-logo'
      },
      {
        href: 'https://codepen.io',
        target: '_blank',
        label: 'CodePen',
        icon: 'codepen-logo'
      },
      {
        href: 'https://dribbble.com',
        target: '_blank',
        label: 'dribbble',
        icon: 'dribbble-logo'
      },
      {
        href: 'https://www.youtube.com',
        target: '_blank',
        label: 'YouTube',
        icon: 'youtube-logo'
      }
    ]
  },
  footer: {
    outers: [
      {
        href: '/blog',
        class: 'mr-4 no-underline hover:scale-125 text-lg',
        rel: 'prefetch',
        itemprop: 'relatedLink',
        label: 'blog',
        icon: 'gear'
      },
      {
        href: 'https://twitter.com',
        target: '_blank',
        label: 'Twitter'
      },
      {
        href: 'https://github.com',
        target: '_blank',
        label: 'GitHub'
      },
      {
        href: 'https://codepen.io',
        target: '_blank',
        label: 'CodePen'
      }
    ]
  }
};

export default config;
