// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Friendly Fire Docs',
  tagline: 'คู่มือประกอบการใช้งานสำหรับสินค้าที่ทุกพัฒนาขึ้นโดย ทีม Friendly Fire Studio',
  url: 'https://friendlyfire-studio.github.io/friendlyfire-docs/',
  baseUrl: '/friendlyfire-docs/',
  favicon: 'img/logo.ico',
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
      onBrokenMarkdownImages: 'throw',
    },
  },

  /**
   * GitHub pages deployment config.
   * If you aren't using GitHub pages, you don't need these.
   */
  organizationName: 'FriendlyFire-Studio',
  projectName: 'friendlyfire-docs',

  /**
   * Even if you don't use internalization, you can use this field to set useful
   * metadata like html lang. For example, if your site is Chinese, you may want
   * to replace "en" with "zh-Hans".
   */
  i18n: {
    defaultLocale: 'th',
    locales: ['th'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'cfx',
          routeBasePath: 'cfx',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/FriendlyFire-Studio/friendlyfire-docs/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    'docusaurus-plugin-image-zoom',
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark'
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: 'FriendlyFire Docs',
        logo: {
          alt: 'FriendlyFire Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://www.friendlyfire-studio.com/',
            position: 'right',
            className: 'header-home-link',
            'aria-label': 'Home',
          },
          {
            href: 'https://discord.gg/TPXzf6r8U5',
            position: 'right',
            className: 'header-discord-link',
            'aria-label': 'Discord',
          },
          {
            href: 'https://github.com/FriendlyFire-Studio',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright ©${new Date().getFullYear()} Friendly Fire Studio, All Rights Reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.vsDark,
        additionalLanguages: [
          'lua',
          'javascript',
          'js-extras',
          'php',
          'php-extras',
          'sql',
          'mongodb',
          'powershell',
          'bash',
          'json',
          'diff',
          'uri',
        ]
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        config: { // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          margin: 100,
          scrollOffset: 100
        }
      }
    }),

    themes: [
      [
        require.resolve('@easyops-cn/docusaurus-search-local'),
        {
          hashed: true,
          docsDir: ['cfx'],
          docsRouteBasePath: ['cfx'],
          language: ['en']
        },
      ],
    ],
};

export default config;
