// nav
module.exports = [
  { text: "首页", link: "/" },
  {
    text: "前端|中级",
    link: "/web/", //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: "Vue",
        items: [
          { text: "特性", link: "/pages/fd4a16d56b83c1bc/" },
          { text: "源码", link: "/pages/8481d1/" },
        ],
      },
      {
        text: "React",
        items: [
          { text: "特性", link: "/pages/5d463fbdb172d43b/" },
          { text: "源码", link: "/pages/5d463fbdb172d44b/" },
        ],
      },
    ],
  },
  {
    text: "工程化|高级",
    link: "/program/",
    items: [
      { text: "Webpack", link: "/pages/8309a5b875fc95e3/" },
      { text: "Babel", link: "/pages/c8f128/" },
      { text: "Node", link: "/pages/9f15c1a281d8bedb/" },
    ],
  },
  {
    text: "设计|资深",
    link: "/technology/",
    items: [
      { text: "设计模式", link: "/pages/9a7ee40fc232252e/" },
      { text: "架构方案", link: "/pages/9a7ee40fc23253e/" },
    ],
  },
  {
    text: "生活",
    link: "/more/",
    items: [
      { text: "学习", link: "/pages/f2a556/" },
      { text: "摄影", link: "/pages/f25567/" },
      { text: "Vlog", link: "/pages/f2a58/" },
      { text: "随笔", link: "/pages/cd8bde1/" },
    ],
  },
  {
    text: "索引",
    link: "/archives/",
    items: [
      { text: "分类", link: "/categories/" },
      { text: "标签", link: "/tags/" },
      { text: "归档", link: "/archives/" },
    ],
  },
  {
    text: "收藏",
    link: "/pages/beb6c0bd8a66cea6/",
    items: [{ text: "网站", link: "/pages/beb6c0bd8a66cea6/" }],
  },
  { text: "关于", link: "/about/" },
];
