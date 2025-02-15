/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'Trustwork',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/tw_logo.png',
    infoLink: 'https://www.trustwork.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Create React SSR App', // Title for your website.
  tagline:
    'Set up a modern react app with server side rendering by running one command.',
  url: 'https://trustworktech.github.io', // Your website URL
  baseUrl: '/create-react-ssr-app/', // Base URL for your project */
  editUrl:
    'https://github.com/trustworktech/create-react-ssr-app/edit/master/docs/',
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'create-react-ssr-app',
  organizationName: 'trustworktech',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'getting-started', label: 'Docs' },
    { href: 'https://reactjs.org/community/support.html', label: 'Help' },
    {
      href: 'https://www.github.com/trustworktech/create-react-ssr-app',
      label: 'GitHub',
    },
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/logo.svg',
  footerIcon: 'img/logo.svg',
  favicon: 'img/favicon/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#20232a',
    secondaryColor: '#61dafb',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Trustwork`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/logo-og.png',
  twitterImage: 'img/logo-og.png',

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // Other config
  scrollToTop: true,
  docsSideNavCollapsible: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/trustworktech/create-react-ssr-app',

  docsSideNavCollapsible: false,
  algolia: {
    apiKey: 'a2f42d84af398a5bc73faf5caf364f6a',
    indexName: 'trustworktech_create-react-ssr-app',
  },
};

module.exports = siteConfig;
