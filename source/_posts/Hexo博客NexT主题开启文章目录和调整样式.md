---
title: Hexo博客NexT主题开启文章目录和调整样式
translate_title: hexo-blog-next-theme-opens-article-catalog-and-adjust-style
tags:
  - hexo
categories:
  - Hexo
date: 2019-12-30 19:33:28
---
Hexo博客NexT主题中是有目录的，只是在默认情况下没有开启，需要我们来手动开启。

<!-- more -->

# 修改样式文件`custom.styl`
文章目录样式文件`custom.styl`文件位于`themes/next/source/css/_custom`

打开后添加内容：

1.文章目录默认展开
```css
//文章目录默认展开
.post-toc .nav .nav-child { display: block; }
```
2.文章目录字体大小调整
```css
.post-toc ol {  
  font-size : 13px;     
} 
```
# 修改主题配置文件
主题配置文件位于`themes/next/_config.yml`

每行目录超长自动换行
```
toc:
  enable: true  
  wrap: true 
```
四、结果图展示
![屏幕快照 2019-12-30 下午7.34.14](https://oss.tangjiuyang.com/2019/12/30/ping-mu-kuai-zhao-20191230-xia-wu73414.png)
