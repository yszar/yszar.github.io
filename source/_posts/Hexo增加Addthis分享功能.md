---
title: Hexo增加Addthis分享功能
translate_title: hexo-adds-addthis-sharing-function
date: 2019-12-30 23:12:26
tags:
- hexo
- 博客
- addthis
categories:
- 前端
---
<!--
<span id="inline-blue"> 站点配置文件 </span>
<span id="inline-purple"> 主题配置文件 </span>
<span id="inline-yellow"> 站点配置文件 </span>
<span id="inline-green"> 主题配置文件 </span>
<a id="download" href="https://git-scm.com/download/win"><i class="fa fa-download"></i><span> Download Now</span> </a>
-->
![](https://oss.tangjiuyang.com/2019/12/30/15777188305096.jpg)

我选择的是[AddThis](http://www.addthis.com/)作为博客的第三方分享。AdThis是国外的第三方分享,使用方便,可以用google直接登录。能自定义分享样式

<!-- more -->

## 注册AddThis，选择分享按钮：
![](https://oss.tangjiuyang.com/2019/12/30/15777188968790.jpg)

## 选择显示样式(Select a Tool Type)
AddThis提供了7种显示样式,你可以更加左边菜单栏点击,右边会自动显示你选择的相应样式。值得注意的是。在其右上角可以切换PC和Phone显示
![](https://oss.tangjiuyang.com/2019/12/30/15777189277993.jpg)

## 点击Continue配置分享按钮
注意：不同的风格样式,配置方式不同
![](https://oss.tangjiuyang.com/2019/12/30/15777189544810.jpg)

## 获取代码ID
配置完成后 , 获取代码ID , 在js代码中获取`pubid`后面的ID
![](https://oss.tangjiuyang.com/2019/12/30/15777189978550.jpg)

编辑主题配置文件, 找到关键字`add_this_id`, 添加`pubid`