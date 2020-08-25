---
title: Hexo写作技巧
translate_title: hexo-writing-skills
date: 2019-12-31 16:13:06
tags:
- hexo
- 写作技巧
categories:
- 前端
---

本文介绍 Hexo 博客的写作技巧。

第一章中介绍了 Hexo 中写作相关的基本概念，包括三种基本布局，标签与分类，Markdown 写作语法。

第二章中介绍了 Hexo 中常用的内置标签，包括 note 标签、label 标签、button 标签、tab 标签以及代码块的高级用法，通过使用写作标签可以快速编写样式丰富的文档片段。

第三章中介绍了在文档中插入图片、音乐、视频等多媒体元素的方案。

第四章中根据个人使用经验为大家推荐了几款优雅实用的 Markdown 写作工具。

<!-- more -->

# 开始写作
在博客目录下执行如下命令新建一篇文章

```shell
$ hexo new [layout] <title>
```
如果未指定文章的布局（layout），则默认使用 `post` 布局，生成的文档存放于 `source\_posts\` 目录下，打开后使用 Markdown 语法进行写作，保存后刷新浏览器即可看到文章。

## 布局
布局是什么概念呢，你可以理解为新建文档时的一个模板，基于布局生成的文档将会继承布局的样式。

Hexo 默认有三种布局：`post`、 `page` 和 `draft`，用户可以在 `scaffolds` 目录下新建文档来自定义布局格式，还可以修改站点配置文件中的 `default_layout`参数来指定生成文档时的默认布局。

### 文章（post）
基于 `post` 布局生成的文档存在于 `source\_posts\` 目录下，该目录下的文档会作为博客正文显示在网站中。

### 页面（page）
`page` 布局用于生成类似 **首页** 和 **归档** 这样的页面。默认的 Next 主题样式中只包含首页和归档这两个链接，可以通过修改主题配置文件中的 `menu` 字段来新增更多页面菜单。
```
themes\next\_config.yml
menu:
  home: / || home
  about: /about/ || user
+ tags: /tags/ || tags
+ categories: /categories/ || th
+ archives: /archives/ || archive
```

其中，`||` 之前的值表示菜单链接，之后的值表示所用的 `FontAwesome` 图标名称。

刷新页面后即可看到页面内多了几项菜单。
![新增菜单入口](https://oss.tangjiuyang.com/2019/12/31/ping-mu-kuai-zhao-20191231-xia-wu42528.png)

此时点击 **关于**、**标签** 和 **分类** 都会跳转到 404 页面，原因是我们只开放了页面入口，却没有创造对应于链接的页面视图，此时就需要通过 `hexo new page <title>` 命令来新建页面。

基于 `page` 布局的新建命令将会在 `source` 目录下新建一个 `<title>` 文件夹，并在该文件夹下创建一个 `index.md` 文件，编辑该文件即可修改页面内容。

例如，通过 `hexo new page tags` 命令将会生成如下目录。

```
.
└──  source             
  ├── _posts          
  └── tags
    └── index.md
```

编辑 `index.md` 文件，在 `Front-Matter` 中添加 `type: tags` ，Next 主题将自动在该页面内显示标签云。

```md source\tags\index.md
  title: 标签
  date: 2018-10-19 22:57:00
+ type: tags
```

{% note primary %}
Front-Matter 是文件最上方以 `---` 分隔的区域，用于指定本文件的各种参数值
{% endnote %}

在菜单中点击 标签 跳转到刚创建的标签页面。
![Hexo 标签页面](https://oss.tangjiuyang.com/2019/12/31/15777815382148.jpg)

同理可通过 `page` 布局生成 **关于** 和 **分类** 两个页面。

### 草稿（draft）
`draft` 布局用于创建草稿，生成的文档存在于 `source\_drafts\` 目录中，默认配置下将不会把该目录下的文档渲染到网站中。

通过以下命令将草稿发布为正式文章：

```shell
$ hexo publish <title>
```

该命令会将 `source\_drafts\` 目录下以
考虑到一些文章可能需要数天才能完成，建议将新建文档时的默认布局设置为 `draft`：

```yml _config.yml
- default_layout: post
+ default_layout: draft
```

## 标签与分类
我们刚提到了标签，也提到了分类，那么标签和分类是什么，其区别是什么。

标签和分类都是用于对文章进行归档的一种方式，标签是一种列表结构，而分类是一种树结构。我们以人作为例子，从标签的角度考虑，我可以拥有程序员、高颜值、幽默等标签，这些标签之间没有层级关系；从分类的角度考虑，我是亚洲人、中国人、河南人，这些分类之间是有明确的包含关系的。

可以在 `Front-Matter` 中添加 `catergories` 和 `tags` 字段为文章添加标签和分类，如我为本文添加了 **Hexo** 和 **Markdown** 两个标签，并将其归类到了 **技术 / 博客** 类别，对应的 `Front-Matter` 结构如下：

```yml
title: Hexo搭建个人博客系列：写作技巧篇
tags: Hexo Markdown
categories:
- 技术
- 博客
```

## Markdown 基本语法
Markdown 是一种标记语言，语法简单，易阅读易编写，可以让用户完全脱离鼠标写出样式丰富的文档，广受程序员喜爱，目前许多网站都已经支持通过 Markdown 语法来写文章或者发表评论。

{% note primary %}
请参考 [基础语法 | Markdown Guide](https://www.markdownguide.org/basic-syntax) 和 [扩展语法 | Markdown](https://www.markdownguide.org/extended-syntax) Guide
{% endnote %}

# Hexo 内置标签
{% note primary %}
本章节参考 [Ivan.nginx | Hexo Theme Next 主题样式测试](https://almostover.ru/2016-01/hexo-theme-next-test/) 及 [内置标签 - NexT 使用文档](https://theme-next.iissnan.com/tag-plugins.html)
{% endnote %}

## 文本居中标签
居中标签效果如下：
<blockquote class="blockquote-center">我不去想是否能够成功，既然选择了远方，便只顾风雨兼程。</blockquote>

一般在引用单行文本时使用，如作为文章开篇题词。

可以通过以下几种方式使用该标签：

```
<!-- HTML方式: 直接在 Markdown 文件中编写 HTML 来调用 -->
<!-- 其中 class="blockquote-center" 是必须的 -->
<blockquote class="blockquote-center">blah blah blah</blockquote>

<!-- 标签方式 -->
{% centerquote %}blah blah blah{% endcenterquote %}

<!-- 标签别名 -->
{% cq %} blah blah blah {% endcq %}
```

## 代码块进阶用法
可以通过为代码块附加参数的形式为其添加更丰富的信息提示，效果如下：

```js Hellow World tangjiuyang.com 链接地址
console.log("Hello world!");
```

代码块进阶语法规则：

```
\`\`\` [language] [title] [url] [link text]
code snippet
\`\`\`
```

其中，各参数意义如下：

* langugae：语言名称，引导渲染引擎正确解析并高亮显示关键字
* title：代码块标题，将会显示在左上角
* url：链接地址，如果没有指定 link text 则会在右上角显示 link
* link text：链接名称，指定 url 后有效，将会显示在右上角
url 必须为有效链接地址才会以链接的形式显示在右上角，否则将作为标题显示在左上角。以 url 为分界，左侧除了第一个单词会被解析为 language，其他所有单词都会被解析为 title，而右侧的所有单词都会被解析为 link text。

如果不想填写 title，可以在 language 和 url 之间添加至少三个空格。
{% note primary %}
代码块支持多种语言高亮预设，详细的语言列表可查看 [Ivan.nginx | Hexo 代码块中的颜色方案](https://almostover.ru/2016-07/hexo-highlight-code-styles/)。
{% endnote %}

可以在站点配置文件中设置 `highlight.auto_detect: true` 来开启自动语言检测高亮。

```diff _config.yml

 highlight:
   enable: true
   line_number: false
-  auto_detect: false
+  auto_detect: true
   tab_replace:
```

如果设置语言为 `diff`，可以在代码前添加 `+` 和 `-` 来使用如上所示的高亮增删行提示效果，在展示代码改动痕迹时比较实用。
{% note primary %}
更多代码块高亮的个性化设置请参见 [猪猪侠 | Hexo 下的语法高亮拓展修改](https://www.ofind.cn/blog/HEXO/HEXO%E4%B8%8B%E7%9A%84%E8%AF%AD%E6%B3%95%E9%AB%98%E4%BA%AE%E6%8B%93%E5%B1%95%E4%BF%AE%E6%94%B9.html#%E8%AE%BE%E7%BD%AE%E4%BB%A3%E7%A0%81%E6%B7%BB%E5%8A%A0%E5%88%A0%E9%99%A4%E6%A0%87%E8%AE%B0)
{% endnote %}

## note 标签
通过 `note` 标签可以为段落添加背景色，语法如下：
```
{% note [class] %}
文本内容 (支持行内标签)
{% endnote %}
```
支持的 class 种类包括 `default` `primary` `success` `info` `warning` `danger`，也可以不指定 class。

各种 class 种类的效果如下：
{% note primary %}
primary note tag
{% endnote %}

{% note success %}
success note tag
{% endnote %}

{% note info %}
info note tag
{% endnote %}

{% note warning %}
warning note tag
{% endnote %}

{% note danger %}
danger note tag
{% endnote %}

{% note undefined %}
undefined class note tag
{% endnote %}

更多配置可在主题配置文件中设置

```yml themes\next\_config.yml
note:
  # Note 标签样式预设
  style: modern  # simple | modern | flat | disabled
  icons: false  # 是否显示图标
  border_radius: 3  # 圆角半径
  light_bg_offset: 0  # 默认背景减淡效果，以百分比计算
```

## button 按钮
通过 button 标签可以快速添加带有主题样式的按钮，语法如下：
```
{% button /path/to/url/, text, icon [class], title %}
```

也可简写为：
```
{% btn /path/to/url/, text, icon [class], title %}
```

其中， 图标 ID 来源于 [FontAwesome](https://fontawesome.com/v4.7.0/icons/) 。

使用示例如下：
```
{% btn #, 文本 %}
{% btn #, 文本 & 标题,, 标题 %}
{% btn #, 文本 & 图标, home %}
{% btn #, 文本 & 大图标 (固定宽度), home fa-fw fa-lg %}
```

{% btn #, 文本 %}
{% btn #, 文本 & 标题,, 标题 %}
{% btn #, 文本 & 图标, home %}
{% btn #, 文本 & 大图标 (固定宽度), home fa-fw fa-lg %}

## tab 标签
tab 标签用于快速创建 tab 选项卡，语法如下
```
{% tabs [Unique name], [index] %}
  <!-- tab [Tab caption]@[icon] -->
  标签页内容（支持行内标签）
  <!-- endtab -->
{% endtabs %}
```
其中，各参数意义如下：

* Unique name: 全局唯一的 Tab 名称，将作为各个标签页的 id 属性前缀
* index: 当前激活的标签页索引，如果未定义则默认选中显示第一个标签页，如果设为 - 1 则默认隐藏所有标签页
* Tab caption: 当前标签页的标题，如果不指定则会以 Unique name 加上索引作为标题
* icon: 在标签页标题中添加 Font awesome 图标
使用示例如下：
```
{% tabs Tab标签列表 %}
  <!-- tab 标签页1 -->
    标签页1文本内容
  <!-- endtab -->
  <!-- tab 标签页2 -->
    标签页2文本内容
  <!-- endtab -->
  <!-- tab 标签页3 -->
    标签页3文本内容
  <!-- endtab -->
{% endtabs %}
```
{% tabs Tab标签列表 %}
  <!-- tab 标签页1 -->
    标签页1文本内容
  <!-- endtab -->
  <!-- tab 标签页2 -->
    标签页2文本内容
  <!-- endtab -->
  <!-- tab 标签页3 -->
    标签页3文本内容
  <!-- endtab -->
{% endtabs %}

## 引用站内链接
可以通过如下语法引入站内文章的地址或链接：

```
{% post_path slug %}
{% post_link slug [title] %}
```

其中，`slug` 表示 `_post` 目录下的 Markdown 文件名。

`post_path` 标签将会渲染为文章的地址，即 `permalink`；而 `post_link` 标签将会渲染为链接，可以通过 `title` 指定链接标题。

如以下标签将会生成 `/posts/hexo-writing-skills.html`
```
{% post_path hexo-writing-skills %}
```
而以下标签则会生成 {% post_link hexo-writing-skills 链接标题 %}
```
{% post_link hexo-writing-skills 链接标题 %}
```

这种站内引用方式比直接使用 url 引用的形式更为可靠，因为即使修改了 permalink 格式，或者修改了文章的路由地址，只要 Markdown 文件名没有发生改变，引用链接都不会失效。

## 插入 Swig 代码
如果需要在页面内插入 Swig 代码，包括原生 HTML 代码，JavaScript 脚本等，可以通过 raw 标签来禁止 Markdown 引擎渲染标签内的内容。语法如下：
```
{% raw %}
content
{% endraw %}
```

该标签通常用于在页面内引入三方脚本实现特殊功能，尤其是当该三方脚本尚无相关 hexo 插件支持的时候，可以通过写原生 Web 页面的形式引入脚本并编写实现逻辑。

## 插入 Gist
如果需要在页面内插入 Gist 上的代码片段时，可以使用如下标签:
```
{% gist gist_id [filename] %}
```
其中，各参数意义如下：

* gist_id: Gist 仓库页面 url 中最后一段随机字符串
* filename: Gist 中的文件名
如果 Gist 中只有一个文件，可以不用指定 filename，也可以通过 JavaScript 脚本的形式直接引入，如：
```
<script src="https://gist.github.com/Coodool/cb4ff46a3523955dd4b918dd775b6774.js"></script>
```

如果 Gist 中有多个文件，可以在标签内输入 filename 来指定只引入某个文件，如果没有指定 filename，将会引入 Gist 中的所有文件。另外，引用 JavaScript 脚本形式无法精确控制只引入某一个文件，将会同时引入 Gist 中的所有文件。

如果指定了与 Gist 无法匹配的 filename，页面上将不会显示任何标签内容。所以，一般在 Gist 只有一个文件的情况下无需指定 filename。
{% note warning %}
在页面中引入 Gist 代码段将会同时从 github 服务器上下载脚本与 CSS 样式文件，由于国内访问 github 服务器延迟较高，往往资源文件连接和下载的速度很慢，会阻塞页面的渲染进程导致短时白屏。
{% endnote %}

# 插入多媒体
## 插入图片
Markdown 并不会保存插入的图片资源本身，只是记录了获取资源的链接。因此我们需要选择一款合适的图床来支持博客写作，目前各大云服务商都提供了对象存储服务，如七牛云 KODO、又拍云 USS、腾讯云 COS、阿里云 OSS 等。

所以在 Markdown 中插入一张图片要分为以下几步来进行：

1. 将图片资源上传到图床中
2. 获取图片外链
3. 插入到 Markdown 文档中
4. 
对于博客这种低频访问的应用场景，各大服务商的服务其实并没有显著的差异，并且前期的使用都提供了免费的流量，所以我认为图床的选择主要参考以下几个方面：

* 图床是否提供了便捷的图形化管理工具用于图片的上传下载？

如阿里云有 ossbrowser，腾讯云有 cosbrowser，七牛云有 QsunSync 等，但就本人使用体验来说，七牛云 QsunSync 的 UI 界面确实很拙劣，功能较为单一，而腾讯云 cosbrowser 的界面就相对美观优雅的多，并以 Windows 资源管理器的交互方式为用户提供资源的上传、下载和管理服务。

![腾讯云COS客户端界面截图](https://oss.tangjiuyang.com/2019/12/31/15777850616683.jpg)

* 是否能够方便的插入到 Markdown 文档中？

这就和服务商的关系不大了，主要看主流 Markdown 文档编辑器对各大图床的支持程度。其实关于在 Markdown 中更便捷的插入图片这事儿，最上心的还是文档编辑器的开发者，为了给用户提供更方便的文档写作体验，各大文档编辑器以及支持了 Markdown 语法的笔记软件都花了不少心思，解决方案无外乎两种，第一种是内置图片存储服务，如有道云笔记（需付费）、石墨文档，第二种是集成了云服务商的图床服务，如 Hexo Editor、Mweb 等，前者插入图片方便，适用于个人笔记，而后者能够提供 CDN 加速服务，适用于博客等公开文档。

其中 Hexo Editor 支持腾讯云和七牛云的一键上传服务，MWeb 支持 Imgur、七牛云、又拍云，也可自定义图床服务。
{% note primary %}
本站使用阿里云 OSS 提供对象存储服务。
{% endnote %}

## 网易云音乐
在网页版云音乐中找到歌曲，点击生成外链播放器：
![](https://oss.tangjiuyang.com/2019/12/31/15777851618716.jpg)
![获取歌曲外链](https://oss.tangjiuyang.com/2019/12/31/15777851535212.jpg)

根据个人喜好选择播放器尺寸和播放模式：
![获取插件代码](https://oss.tangjiuyang.com/2019/12/31/15777851865373.jpg)

将获取到的 `iframe` 代码添加到页面中，默认样式如下：
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=1313385920&auto=1&height=66"></iframe>

播放器宽度将会被拉长占满整个页宽，看起来有点别扭。查看控制台之后发现 iframe 在渲染的时候被处理过，外层包了一个类名为 fluid-vids 的 div 元素。顺藤摸瓜，找到了相关代码，原来是为了让嵌入的视频支持自适应布局，恰好也将 music.163.com 域名包含在了处理逻辑内，只需要将该行删除即可。

```js themes\next\source\js\src\utils.js
var SUPPORTED_PLAYERS = [
  'www.youtube.com',
  'player.vimeo.com',
  'player.youku.com',
  //'music.163.com',
  'www.tudou.com'
];
```

这样播放器样式就变成左对齐固定宽度了，如果你还想让播放器居中，可以将 iframe 包在 `<center>` 标签内。

```
<center>
  <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=329 height=86 src="//music.163.com/outchain/player?type=2&id=34613621&auto=0&height=66"></iframe>
</center>
```
