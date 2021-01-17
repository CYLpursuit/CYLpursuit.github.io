module.exports = {
  base: "",
  title: "崔崔",
  desciption: "崔崔的独处世界。",
  themeConfig: {
    repo: "https://github.com/CYLpursuit/CYLpursuit.github.io",
    docsDir: "docs",
    lastUpdated: "更新于",
    smoothScroll: true,
    sidebar: "auto",
    sidebarDepth: 3,
    nav: [
      { text: "首页", link: "/" },
      {
        text: "前端技能",
        items: [
          {
            text: "语言",
            items: [
              {
                text: "JavaScript",
                link: "/frontend/lang/js/2021-1-16/",
                // items: [
                //   { text: "第一篇", link: "/frontend/lang/js/2021-1-16/" },
                //   { text: "第二篇", link: "/frontend/lang/js/2021-1-17/" },
                //   { text: "第三篇", link: "/frontend/lang/js/2021-1-18/" },
                // ],
              },
              {
                text: "TypeScript",
                link: "/frontend/lang/ts/2021-1-17/",
              },
              { text: "CSS", link: "/frontend/lang/css/2021-1-17/" },
            ],
          },
          // {
          //   text: "框架",
          //   items: [
          //     { text: "Vue", link: "/passages/2019-07-09-js-context/" },
          //     { text: "React", link: "/passages/2019-07-09-js-context/" },
          //   ],
          // },
          // {
          //   text: "Node",
          //   items: [{ text: "接口", link: "/passages/2019-07-09-js-context/" }],
          // },
          // {
          //   text: "Webpack",
          //   items: [
          //     { text: "配置", link: "/passages/2019-07-09-js-context/" },
          //     { text: "优化", link: "/passages/2019-07-09-js-context/" },
          //   ],
          // },
          // {
          //   text: "平台功能",
          //   items: [
          //     { text: "微信", link: "/passages/2019-07-09-js-context/" },
          //     { text: "网易", link: "/passages/2019-07-09-js-context/" },
          //   ],
          // },
          // {
          //   text: "架构方案",
          //   items: [
          //     { text: "离线包", link: "/passages/2019-07-09-js-context/" },
          //     { text: "微应用", link: "/passages/2019-07-09-js-context/" },
          //   ],
          // },
        ],
      },
      // {
      //   text: "技术笔记",
      //   items: [
      //     {
      //       text: "2021",
      //       link: "/passages/2019-07-09-js-context/",
      //     },
      //     {
      //       text: "2020",
      //       link: "/passages/2019-07-09-js-context/",
      //     },
      //   ],
      // },
      // {
      //   text: "奇思妙想|项目",
      //   items: [
      //     {
      //       text: "脚手架",
      //       link: "/passages/2019-07-09-js-context/",
      //     },
      //     {
      //       text: "UI组件库",
      //       link: "/passages/2019-07-09-js-context/",
      //     },
      //     {
      //       text: "小程序",
      //       link: "/passages/2019-07-09-js-context/",
      //     },
      //     {
      //       text: "公众号",
      //       link: "/passages/2019-07-09-js-context/",
      //     },
      //   ],
      // },
      // { text: "多彩世界|照片", link: "/colorful-world/" },
      // {
      //   text: "温柔时光|书籍",
      //   items: [
      //     {
      //       text: "小说",
      //       link: "/passages/2019-07-09-js-context/",
      //     },
      //     {
      //       text: "人文",
      //       link: "/passages/2019-07-09-js-context/",
      //     },
      //     {
      //       text: "理财",
      //       link: "/passages/2019-07-09-js-context/",
      //     },
      //   ],
      // },
      // { text: "非我出逃|杂记", link: "/moment-escape/" },
      { text: "关于", link: "/about/" },
    ],
  },
  plugins: ["@vuepress/back-to-top"],
  // theme: "@vuepress/blog",
};
