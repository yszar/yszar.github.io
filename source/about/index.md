---
title: 关于我的博客
translate_title: about-my-blog
date: 2019-12-30 18:35:41
---

* 服务器: 阿里云ECS-香港
* 境外用户转至Github Page
* 系统: Ubuntu 18.04.3 LTS + Nginx + Hexo
* 图片存储: 阿里云OSS

-------
# 2019年12月28日
* 搭建Hexo + Github Page环境
详细参考知乎 [超详细Hexo+Github博客搭建小白教程](https://zhuanlan.zhihu.com/p/35668237) 
不再赘述
* Hexo增加标题翻译插件
[传送门](https://tangjiuyang.com/Hexo/hexo-add-title-translation-plugin.html)
* 利用gulp对Hexo进行压缩，提高访问速度
[传送门](https://tangjiuyang.com/Hexo/use-gulp-to-compress-and-deploy-hexo-blog-with-one-click.html)

# 2019年12月29日
* 服务器安装Nginx，并进行相关配置。
[传送门](https://tangjiuyang.com/Linux/all-configuration-of-this-blog-server.html)
* 通过Github Webhook实现Github Page与服务器自动同步。[传送门](https://tangjiuyang.com/Python/github-webhook-with-django.html)

# 2019年12月30日
* 给域名申请了免费通配符证书并自动续签
[传送门](https://tangjiuyang.com/%E5%BB%BA%E7%AB%99%E7%9B%B8%E5%85%B3/apply-for-lets-via-acmesh.html)
* 通过阿里云域名控制台设置，将大陆用户请求转发至服务器，境外用户请求转发至Github Page
* 更改上一篇，下一篇的顺序,进入一篇文章，在文章底部，有上下篇的链接（< >），但是点 > 发现进入的是页面中的的上面那篇文章，与操作习惯不符，别扭。

```diff
<!-- 文件位置：~/blog/themes/next/layout/_macro/post.swig -->

{% if not is_index and (post.prev or post.next) %}
  <div class="post-nav">
    <div class="post-nav-next post-nav-item">
-      {% if post.next %}
+      {% if post.prev %}
-        <a href="{{ url_for(post.next.path) }}" rel="next" title="{{ post.next.title }}">
+        <a href="{{ url_for(post.prev.path) }}" rel="prev" title="{{ post.prev.title }}">
-          <i class="fa fa-chevron-left"></i> {{ post.next.title }}
+          <i class="fa fa-chevron-left"></i> {{ post.prev.title }}
        </a>
      {% endif %}
    </div>

    <span class="post-nav-divider"></span>

    <div class="post-nav-prev post-nav-item">
-      {% if post.prev %}
+      {% if post.next %}
-        <a href="{{ url_for(post.prev.path) }}" rel="prev" title="{{ post.prev.title }}">
+        <a href="{{ url_for(post.next.path) }}" rel="next" title="{{ post.next.title }}">
-          {{ post.prev.title }} <i class="fa fa-chevron-right"></i>
+          {{ post.next.title }} <i class="fa fa-chevron-right"></i>
        </a>
      {% endif %}
    </div>
  </div>
{% endif %}
```
* 添加AddThis分享功能 
[传送门](https://tangjiuyang.com/Hexo/hexo-adds-addthis-sharing-function.html)
# 2019年12月31日
* 增加文章及整站字数统计。
* 增加阅读时长。

```
post_wordcount:
  item_text: true
  wordcount: true
  min2read: true
  totalcount: true
  separated_meta: true
```