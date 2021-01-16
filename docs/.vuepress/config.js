module.exports = {
  base: "",
  title: "崔崔的乐园",
  desciption: "崔摧的独处世界",
  themeConfig: {
    repo: "https://github.com/CYLpursuit/CYLpursuit.github.io",
    docsDir: "docs",
    // editLinks: true,
    lastUpdated: "更新于",
    serviceWorker: {
      updatePopup: true,
    },
    nav: [
      { text: "home", link: "/home/" },
      { text: "guide", link: "/guide/" },
      { text: "extrenal", link: "https://google.com" },
    ],
  },
  // theme: "@vuepress/blog",
  // navbar: true,
  // nav: [
  //   { text: "Home", link: "/" },
  //   { text: "Guide", link: "/guide/" },
  //   { text: "Extrenal", link: "https://google.com", target: "_self", ref: "" },
  // ],
  // sidebar: {
  //   "/": {
  //     title: "home",
  //     collapsable: false,
  //     children: ["one", "two"],
  //   },
  // },
};
