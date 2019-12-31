---
title: Hexo，添加标题翻译插件
tags:
  - hexo
categories:
  - Hexo
translate_title: hexo-add-title-translation-plugin
date: 2019-12-30 02:20:26
---
# 文章背景
  hexo生成的默认文章链接格式是这样的：https://blog.mariojd.cn/2013/07/14/<Markdown file name>/，这个配置在hexo根目录下的_config.yml里面：permalink: :year/:month/:day/:title/，这种默认的配置缺点很明显，当文件名是中文的时候url链接里就有中文出现，看起来low的同时也非常不利于seo优化，下面介绍两种解决方案。

<!-- more -->

## 方案一：添加urlname属性(手动)
  在md文件的`Front-matter`区域新增`urlname`属性，可以是文章的英文Title也可以是其它自定义标识，所以每次编写Markdown你都得这么做，参考如下：
  
```
---
title: 解决百度蜘蛛无法爬取Hexo博客的问题
urlname: solve-the-problem-that-baidu-spider-cannot-crawl-hexo-blog
date: 2018-6-28 
categories: hexo
author: jiuyang
tags: hexo
cover_picture: http://xxx.xx/xxx.jpg
top: 1
---
```
## 方案二：利用hexo插件(自动)
  在hexo plugins搜索`link`，已经有几个插件可以将url转换成不同的格式(如下)，我这里选用了`hexo-translate-title`，也是觉得这个比较适合自身风格。
```
hexo-translate-title: Translate the chinese title of Hexo blog to english words automatially
hexo-permalink-pinyin: A Hexo plugin which convert Chinese title to transliterate permalink.
hexo-abbrlink: Auto create one and only link for every post for hexo
hexo-number-title: The hexo blog post url is displayed as a number.
```

  下面简单介绍一下安装操作过程。

### 安装
```shell
    // 用cnpm会比较好
    npm install hexo-translate-title --save
```

### 配置

  修改hexo根项目下的`_config.yml`，建议用google翻译毕竟贴地气，但实测并不稳定，所以也可以用`baidu_no_appid`，这样也不需要额外的认证配置。
```yml
translate_title:
  translate_way: google  # google,youdao,baidu_with_appid,baidu_no_appid
  is_need_proxy: false     # true | false
  # proxy_url: http://localhost:50018 # Your proxy_url
  # youdao_api_key: '' # Your youdao_api_key
  # youdao_keyfrom: xxxx-blog # Your youdao_keyfrom
  # baidu_appid: '' # Your baidu_appid
  # baidu_appkey: '' # Your baidu_appkey
```
### 修改原链接格式：
```yml
permalink: :year/:month/:day/:title/
permalink: :year:month:day/:translate_title.html
```
### 测试

  用`hexo d`重新生成，留意控制台输出以及public目录下是否有生成相应的`<hexo-translate-title>.html`文件，如果有代表成功了，再用`hexo d`部署即可。

### 记坑

  按上述流程安装、配置和部署，但生成的链接都是`undefined.html`，随后给作者提issue，回复后留意`hexo g`输出，并且看了源码，用`hexo config`查看配置信息后未发现问题，最终定位为Google翻译服务的不稳定。