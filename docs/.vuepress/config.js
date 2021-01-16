module.exports = {
  title: "崔崔的乐园",
  desciption: "崔摧的独处世界",
  theme: "@vuepress/blog",
  navbar: true,
  nav: [
    { text: "Home", link: "/" },
    { text: "Guide", link: "/guide/" },
    { text: "Extrenal", link: "https://google.com", target: "_self", ref: "" },
  ],
  sidebar: {
    "/": {
      title: "home",
      collapsable: false,
      children: ["one", "two"],
    },
  },
  lastUpdated: "Last Updated",
};
