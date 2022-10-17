import {defineUserConfig} from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
    base: "/",

    locales: {
        "/": {
            lang: "zh-CN",
            title: "九阳全栈",
            description: "好像什么都会，又好像什么都不会。",
        },
        // "/en/": {
        //     lang: "en-US",
        //     title: "JiuYang ",
        //     description: "It seems like it can do everything, and it seems like it can't do anything.",
        // },
    },
    head: [
        ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/logo.png"}],
        ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png"}],
        ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png"}],
        // ['link', { rel: "manifest", href: "/assets/favicons/site.webmanifest"}],
        // ['link', { rel: "mask-icon", href: "/assets/favicons/safari-pinned-tab.svg", color: "#3a0839"}],
        // ['link', { rel: "shortcut icon", href: "/assets/favicons/favicon.ico"}],
        // ['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
        // ['meta', { name: "msapplication-config", content: "/assets/favicons/browserconfig.xml"}],
        // ['meta', { name: "theme-color", content: "#ffffff"}],
    ],
    theme,

    shouldPrefetch: false,
});
