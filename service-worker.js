if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,f)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let c={};const r=e=>a(e,d),t={module:{uri:d},exports:c,require:r};s[d]=Promise.all(i.map((e=>t[e]||r(e)))).then((e=>(f(...e),c)))}}define(["./workbox-24a20688"],(function(e){"use strict";e.setCacheNameDetails({prefix:"九阳全栈"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_plugin-vue_export-helper.cdc0426e.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/404.html.40b2abcb.js",revision:"35b0795179437934ec69a6313cfaab43"},{url:"assets/404.html.76ccfd2d.js",revision:"5da2d563d16cf98673b57cd66fce5bde"},{url:"assets/app.7e2dce5e.js",revision:"26a6c7266f12c91e1b32a0b0ab73b4b5"},{url:"assets/auto.56c9cb2e.js",revision:"1af7b89403d96b406782cd203249d58d"},{url:"assets/Configure-eslint-prettier-lint-staged-husky-commitizen.html.29a265dd.js",revision:"a747760788e18178f0122d5ed4208981"},{url:"assets/Configure-eslint-prettier-lint-staged-husky-commitizen.html.531888ce.js",revision:"e038f84682414197296837a7f987576f"},{url:"assets/flowchart.parse.1479ec3f.js",revision:"93ee4658efd463b82af7bc1b894a96d4"},{url:"assets/giscus.9450116b.js",revision:"392635d8b4f5a440e4c3479328777254"},{url:"assets/highlight.esm.9b852bc5.js",revision:"7755765e29eda27238d3160a257e85bd"},{url:"assets/How-To-Install-Zsh-Shell-on-Ubuntu-22.04-LTS.html.88973530.js",revision:"bbe04a04319cfd2edd52b51e768a477c"},{url:"assets/How-To-Install-Zsh-Shell-on-Ubuntu-22.04-LTS.html.951c9ba3.js",revision:"45f457978d95d4272b57c39aa60ebbca"},{url:"assets/index.d2b3e8c7.js",revision:"53c8d7dbc21ecd3bccbf1c2322dd0cca"},{url:"assets/index.html.009e2039.js",revision:"4041e32024039e28d600263d12ae238e"},{url:"assets/index.html.0329ce7c.js",revision:"f9849b33f41f628dd4174fba9653dde5"},{url:"assets/index.html.04b6b31b.js",revision:"38ef0308e2eafdfcba7b352dd01824c6"},{url:"assets/index.html.0e05cde1.js",revision:"38ef0308e2eafdfcba7b352dd01824c6"},{url:"assets/index.html.10fa05ac.js",revision:"38ef0308e2eafdfcba7b352dd01824c6"},{url:"assets/index.html.1464de16.js",revision:"64d59931e728c2310c51cca642f86c39"},{url:"assets/index.html.165c2b15.js",revision:"38ef0308e2eafdfcba7b352dd01824c6"},{url:"assets/index.html.1b1a0510.js",revision:"045d5a777f6a2bcdcf20fc7fe19ef228"},{url:"assets/index.html.1be7b0fa.js",revision:"de7a4d3fb745c9d8acec4c68952210e4"},{url:"assets/index.html.2cb6880b.js",revision:"b85e5b7345b50de5fe0f92947281ee24"},{url:"assets/index.html.2f72bd91.js",revision:"4d36b9e3947ec71df747781fa7976668"},{url:"assets/index.html.2fc66663.js",revision:"fdd50cfcdf89cfa29f62bdb3433fc8e0"},{url:"assets/index.html.3011e14f.js",revision:"38ef0308e2eafdfcba7b352dd01824c6"},{url:"assets/index.html.35b343e9.js",revision:"38ef0308e2eafdfcba7b352dd01824c6"},{url:"assets/index.html.3b74004c.js",revision:"46b810da49439e1205e962cebecab8db"},{url:"assets/index.html.57561e21.js",revision:"65f22bb3344dd4946b5ea71c2a7bb7dc"},{url:"assets/index.html.5a1fba39.js",revision:"38ef0308e2eafdfcba7b352dd01824c6"},{url:"assets/index.html.5ae449e0.js",revision:"1053c2856c7b5450ecea91463558cae7"},{url:"assets/index.html.5ed651ef.js",revision:"f34b17870b78ba11e9435befc987c586"},{url:"assets/index.html.62349dbf.js",revision:"5f2e54903c40050a78421bb8a45b9dd8"},{url:"assets/index.html.820dcadd.js",revision:"38ef0308e2eafdfcba7b352dd01824c6"},{url:"assets/index.html.82cf1bc6.js",revision:"c2889f8233350a8f23ef34f3196c8c54"},{url:"assets/index.html.83c44d1c.js",revision:"38ef0308e2eafdfcba7b352dd01824c6"},{url:"assets/index.html.848c6319.js",revision:"38ef0308e2eafdfcba7b352dd01824c6"},{url:"assets/index.html.898dc11f.js",revision:"a110112139e46992e78ec3b3e2edda83"},{url:"assets/index.html.8d7ea49d.js",revision:"cd668077c8ffcc68afd4e3e27b6c7ad6"},{url:"assets/index.html.92d9e0c5.js",revision:"842cad4b855505b3b071771f58f954b8"},{url:"assets/index.html.94a47bf0.js",revision:"38ef0308e2eafdfcba7b352dd01824c6"},{url:"assets/index.html.96a11a49.js",revision:"38ef0308e2eafdfcba7b352dd01824c6"},{url:"assets/index.html.96a65b1d.js",revision:"39af2a022708bb70eeb1c17401a7609c"},{url:"assets/index.html.9e8cad84.js",revision:"38ef0308e2eafdfcba7b352dd01824c6"},{url:"assets/index.html.a57648d7.js",revision:"38ef0308e2eafdfcba7b352dd01824c6"},{url:"assets/index.html.aa2e5208.js",revision:"f93795000a24dec691586292ea25674b"},{url:"assets/index.html.ab3e2414.js",revision:"38ef0308e2eafdfcba7b352dd01824c6"},{url:"assets/index.html.ac4fdcf9.js",revision:"38ef0308e2eafdfcba7b352dd01824c6"},{url:"assets/index.html.d0ff5374.js",revision:"38ef0308e2eafdfcba7b352dd01824c6"},{url:"assets/index.html.d1f327f9.js",revision:"8ef7236b53fd0ca4500742d37e7be736"},{url:"assets/index.html.e137626d.js",revision:"38ef0308e2eafdfcba7b352dd01824c6"},{url:"assets/index.html.ee6aac0d.js",revision:"38ef0308e2eafdfcba7b352dd01824c6"},{url:"assets/index.html.f0690baa.js",revision:"38ef0308e2eafdfcba7b352dd01824c6"},{url:"assets/index.html.f563dfa3.js",revision:"c7f41f018fdf1007191123d11ad82bb3"},{url:"assets/index.html.f5b2f09d.js",revision:"38ef0308e2eafdfcba7b352dd01824c6"},{url:"assets/index.html.f9fe1612.js",revision:"fbed8ed34a60b048f064a6be4d8f4102"},{url:"assets/index.html.fc3a06af.js",revision:"94f9547ee683743779e24da61c7be52e"},{url:"assets/index.html.fe7ca7a0.js",revision:"38ef0308e2eafdfcba7b352dd01824c6"},{url:"assets/index.html.fe86d2f1.js",revision:"38ef0308e2eafdfcba7b352dd01824c6"},{url:"assets/intro.html.763490e4.js",revision:"bce70ccee9c376888a31a9aac872f803"},{url:"assets/intro.html.d7dabb7c.js",revision:"94f2d8e5ae921a6feb9b296b3e8aad76"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/markdown.esm.77e8db25.js",revision:"0d05be8d1ccc17a6f2270457575848a1"},{url:"assets/math.esm.cb9d4be3.js",revision:"e77d289bc577da4e7341dc5a62209df1"},{url:"assets/mermaid.esm.min.0e041931.js",revision:"481e9564c28a71aed6f3c286b4911f29"},{url:"assets/notes.esm.62c5f19d.js",revision:"b055b0fe912d3e63c622ee92caf08028"},{url:"assets/One-click-proxy-setup-for-WSL2.html.5094fb18.js",revision:"6f15290bcac1278541507245c0a135d9"},{url:"assets/One-click-proxy-setup-for-WSL2.html.fece1c38.js",revision:"70da52484ba37d530feba1c1a514c693"},{url:"assets/reveal.esm.41ec5d7f.js",revision:"40ef902ff74efca41d50e4c94edb2b83"},{url:"assets/search.esm.04894411.js",revision:"7d8008309758cac57a4dd66a633819ba"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/style.efa21ea7.css",revision:"187006679e5f8f7309f9bef25d91e86e"},{url:"assets/vue-repl.521d6901.js",revision:"03d2233818b5a7ae8ca9d0efca47f9d8"},{url:"assets/VuePlayground.ee0578f6.js",revision:"eafe9385e88f0ffc30c0e2dc09c4f8c5"},{url:"assets/zoom.esm.78977eba.js",revision:"8b3ee4f6f71ef2a7c85901cba6d23344"},{url:"404.html",revision:"c784490a1d0be529aff5390c92ec14b7"},{url:"article/index.html",revision:"a7b68158350ba1322d1882a9b448d770"},{url:"category/index.html",revision:"97fcd9f7e05cf4d85767c0c09597c5b9"},{url:"category/前端笔记/index.html",revision:"11a207fe4379f08af00315c5d0adb07f"},{url:"category/工具软件/index.html",revision:"fbed75b5d0f3630471a7e17fa0ed6007"},{url:"category/运维笔记/index.html",revision:"d8fa5a877c6c81ded189aca1bba3fde7"},{url:"encrypted/index.html",revision:"1b2487855c976fa6e4212a80f42e652e"},{url:"frontend/Configure-eslint-prettier-lint-staged-husky-commitizen.html",revision:"6a255bc4aaad13e091ffa4bc9cd87b66"},{url:"index.html",revision:"20dda0b6dc31ed3851d72c131c12b549"},{url:"intro.html",revision:"48bfe18b7d54443502af65aa1fde3add"},{url:"ops/How-To-Install-Zsh-Shell-on-Ubuntu-22.04-LTS.html",revision:"dd7b888b57017ac3ce03b66125d13dfe"},{url:"slide/index.html",revision:"e2cbdff692ce49645bc42a9f42540ef5"},{url:"software/One-click-proxy-setup-for-WSL2.html",revision:"248c53b4750b5784ec938108d63da769"},{url:"star/index.html",revision:"12f0212c5a637a7f1bb823fd3a02491a"},{url:"tag/commitizen/index.html",revision:"b588a060f37f274f3b5136ac0f36402a"},{url:"tag/husky/index.html",revision:"ea19649ddbe6d8498862d0147f2c5dc9"},{url:"tag/index.html",revision:"a44243e9caeffaa0d89e57a4234d6406"},{url:"tag/lint-staged/index.html",revision:"ba44d628e5a07c122fd73d36f9250d74"},{url:"tag/prettier/index.html",revision:"7d38c9201ff537487f6cf3e44d1868df"},{url:"tag/shell/index.html",revision:"78db63011d1a304eb5f084a2134badeb"},{url:"tag/ubuntu/index.html",revision:"032176bbb6c3790453076117d3fb3f54"},{url:"tag/wsl2/index.html",revision:"ebf31889a3f3561ce5835a2cc6f9dd68"},{url:"tag/zsh/index.html",revision:"c1e112010e424b564434afff1fd2955b"},{url:"tag/代理/index.html",revision:"ed1d834d7f026461732280b00aba8506"},{url:"tag/前端/index.html",revision:"455b1acc627ea9e4d667b5e42165fb24"},{url:"tag/工具软件/index.html",revision:"eae5993fe047cb3d26edd6363e6ae4ce"},{url:"tag/配置eslint/index.html",revision:"6b942cac80c308b13e225265d01e960f"},{url:"timeline/index.html",revision:"01fb8ae60e68a8cc2ab439af054ea062"},{url:"assets/Configure-eslint-prettier-lint-staged-husky-commitizen-1666033224720.4cdc2d0b.png",revision:"ba5b1550465c732b8ad35fa5975ca420"},{url:"assets/Configure-eslint-prettier-lint-staged-husky-commitizen-1666033253160.7f2beb8a.png",revision:"8a0f0216902714f0dc19e63b3bf921e6"},{url:"assets/Configure-eslint-prettier-lint-staged-husky-commitizen-1666033262999.4003a07b.png",revision:"5df3cd20c029052ed46a356b10c259a0"},{url:"assets/hero.197a9d2d.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"assets/How-To-Install-Zsh-Shell-on-Ubuntu-22.04-LTS-1666021730149.1c916955.png",revision:"8550df320770b97c7130978d063a511b"},{url:"assets/How-To-Install-Zsh-Shell-on-Ubuntu-22.04-LTS-1666021833083.55427044.png",revision:"c25e719cb6f8b6a7bbc23ca090f4997e"},{url:"assets/How-To-Install-Zsh-Shell-on-Ubuntu-22.04-LTS-1666021863465.a17fe64f.png",revision:"be9c3697c79d580df24cb43324574f06"},{url:"assets/How-To-Install-Zsh-Shell-on-Ubuntu-22.04-LTS-1666023947383.b8d49414.png",revision:"66d092f228039beca7324d69dac0bc5c"},{url:"assets/How-To-Install-Zsh-Shell-on-Ubuntu-22.04-LTS-1666024061172.57148515.png",revision:"0d78204304e183f0dc08a2cdb662267a"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/为WSL2一键设置代理-1666008223913.2a189d52.png",revision:"4065e680425e934cd99f1dfda0d29f06"},{url:"favicon-16x16.png",revision:"f7cbda3ea570c3771aa2d0cd0f9a08b1"},{url:"favicon-32x32.png",revision:"34a51ce7f82c03c893817b956e93c835"},{url:"logo.png",revision:"4575b58964c06989884891adc35344e5"},{url:"siteImage/app.png",revision:"7b144e0cde1bf6f96943b7c166682e7b"},{url:"siteImage/cc-by.png.webp",revision:"73fc716c89a32448248e29f0e760592c"},{url:"siteImage/code.png",revision:"534b75d39ea8fc771f3b60621c4d9421"},{url:"siteImage/HTML5.png",revision:"7f88ff725c9f21c970363e72986d2367"},{url:"siteImage/linux.png",revision:"6d8a73ebfb32c5498dafe62ab747b66f"},{url:"vuelogo.png",revision:"cf23526f451784ff137f161b8fe18d5a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
