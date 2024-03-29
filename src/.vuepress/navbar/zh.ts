import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "前端笔记", icon: "html", link: "/category/前端笔记/" },
  { text: "后端笔记", icon: "back-stage", link: "/category/后端笔记/" },
  { text: "运维笔记", icon: "linux", link: "/category/运维笔记/" },
  { text: "工具软件", icon: "software", link: "/category/工具软件/" },
  // {
  //   text: "博文",
  //   icon: "edit",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "苹果",
  //       icon: "edit",
  //       prefix: "apple/",
  //       children: [
  //         { text: "苹果1", icon: "edit", link: "1" },
  //         { text: "苹果2", icon: "edit", link: "2" },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     {
  //       text: "香蕉",
  //       icon: "edit",
  //       prefix: "banana/",
  //       children: [
  //         {
  //           text: "香蕉 1",
  //           icon: "edit",
  //           link: "1",
  //         },
  //         {
  //           text: "香蕉 2",
  //           icon: "edit",
  //           link: "2",
  //         },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     { text: "樱桃", icon: "edit", link: "cherry" },
  //     { text: "火龙果", icon: "edit", link: "dragonfruit" },
  //     "tomato",
  //     "strawberry",
  //   ],
  // },
  // {
  //   text: "V2 文档",
  //   icon: "note",
  //   link: "https://vuepress-theme-hope.github.io/v2/zh/",
  // },
]);
