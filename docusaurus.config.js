// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Resolute API",
  url: "https://api.useresolute.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "/img/favicon.ico",
  organizationName: "resoluteapp",
  projectName: "docs",

  scripts: [
    {
      src: "https://analytics.useresolute.com/umami.js",
      async: true,
      defer: true,
      "data-website-id": "253d8100-bc75-4b41-af90-b9b56b6bc321",
      "data-domains": "api.useresolute.com",
    },
  ],

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // editUrl: "https://github.com/resoluteapp/docs/edit/main",
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: "wip",
        content: "These documentation pages are still a work-in-progress.",
        isCloseable: false,
        backgroundColor: "rgb(239, 68, 68)",
        textColor: "white",
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
      navbar: {
        // title: "Resolute API",
        logo: {
          alt: "Resolute logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "docs/welcome",
            position: "left",
            label: "Documentation",
          },
          {
            type: "doc",
            docId: "reference/index",
            position: "left",
            label: "API reference",
          },
          {
            href: "https://useresolute.com/developer/apps",
            label: "Your apps",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
