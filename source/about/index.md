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
* Next升级至7.6版本
* 增加文章及整站字数统计。
* 增加阅读时长。

## 首页文章属性

```yml
post_meta:
  item_text: false  # 设为true 可以一行显示 文章的所有属性
  created_at: true  #显示创建时间
  updated_at:
    enabled: true   #显示修改的时间
    another_day: true #设true时 如果创建时间和修改时间一样则显示一个时间
  categories: true  #显示分类信息
  ```
  
## 字数统计、阅读时长
安装插件：

```shell
npm install hexo-symbols-count-time --save
```

主题配置信息如下:
```yml
symbols_count_time:
  separated_meta: true  # false 会显示一行
  item_text_post: true  # 显示属性名称,设为false后只显示图标和统计数字,不显示属性的文字
  item_text_total: true #底部footer是否显示字数统计属性文字
  awl: 4 #计算字数的一个设置,没设置过
  wpm: 275 #一分钟阅读的字数
```
站点配置新增如下:

```yml
symbols_count_time:
 #文章内是否显示
  symbols: true
  time: true
 # 网页底部是否显示
  total_symbols: true
  total_time: true
```

## 内容页里的代码块新增复制按钮
```yml
codeblock:
  copy_button:
    enable: false #增加复制按钮的开关
    show_result: false #点击复制完后是否显示 复制成功 结果提示
```
## 配置微信，支付宝打赏
```yml
# Reward
reward_comment: #打赏描述
wechatpay: /images/wechatpay.png #微信支付的二维码图片地址
alipay: /images/alipay.png  #支付宝的地址
#bitcoin: /images/bitcoin.png #这个是设置比特币的
```
## 文章原创申明

```yml
creative_commons:
  license: by-nc-sa
  sidebar: false
  post: true  # 将false改为true即可显示版权信息
  language:
```
# 2020年01月01日

## 文章字数统计&阅读时间统计
```yml _config.yml
symbols_count_time:
  symbols: true
  time: true
  total_symbols: true
  total_time: true
  exclude_codeblock: false
```

```yml themes/next/_config.yml
symbols_count_time:
  separated_meta: true
  item_text_post: true
  item_text_total: true
  awl: 2 # 中文站点建议设置2
  wpm: 300 # 中文站点建议设置300
```
## 相关文章推荐
```yml themes/next/_config.yml
related_posts:
  enable: true
  title: 相关文章推荐 # Custom header, leave empty to use the default one
  display_in_home: false
  params:
    maxCount: 5
    #PPMixingRate: 0.0
    #isDate: false
    #isImage: false
    #isExcerpt: false
```
## 站内搜索
在根目录下执行以下命令安装相关依赖：
```shell
$ npm install hexo-generator-searchdb --save
```

在主题配置文件中修改相关字段：
```yml themes/next/_config.yml
local_search:
  enable: true
  trigger: auto # 每次输入改变都执行搜索
  top_n_per_article: 3 # 每篇文章显示的搜索结果数量
  unescape: false
```
在站点配置文件中添加以下字段：

```yml _config.yml
search:
  path: search.xml
  field: post # 指定搜索范围，可选 post | page | all
  format: html # 指定页面内容形式，可选 html | raw (Markdown) | excerpt | more
  limit: 10000
```
## 热门文章排行榜
添加文章阅读次数排行统计页面
该功能同样是基于 LeanCloud 提供的后端服务支持。具体实现方案如下：

在站点目录下执行以下命令新建页面
```shell
$ hexo new page top
```
在主题配置文件中新增一项菜单入口：

```diff themes\next_config.yml
  menu:
    home: / || home
+   top: /top/ || signal
    tags: /tags/ || tags
    categories: /categories/ || th
    archives: /archives/ || archive
    about: /about/ || user
```
在语言包中新增菜单中文：

```diff themes\next\languages\zh-CN.yml
  menu:
    home: 首页
    archives: 归档
    categories: 分类
    tags: 标签
    about: 关于
+   top: 排行榜
```
然后在新增的排行榜页面内添加以下内容：

```markdown source\top\index.md
---
title: 热门文章Top 10
comments: false
date: 2018-10-30 00:54:50
---

<div id="post-rank"></div>

<script src="//cdn.jsdelivr.net/npm/leancloud-storage@3.10.0/dist/av-min.js"></script>
<script>
  var APP_ID = '******';  //输入个人LeanCloud账号AppID
  var APP_KEY = '******';  //输入个人LeanCloud账号AppKey
  AV.init({
    appId: APP_ID,
    appKey: APP_KEY
  });

  var query = new AV.Query('Counter');//表名
  query.descending('time'); //结果按阅读次数降序排序
  query.limit(10);  //最终只返回10条结果
  query.find().then( response => {
    var content = response.reduce( (accum, {attributes}) => {
      accum += `<p><div class="prefix">热度 ${attributes.time} ℃</div><div><a href="${attributes.url}">${attributes.title}</a></div></p>`
      return accum;
    },"")
    document.querySelector("#post-rank").innerHTML = content;
  })
  .catch( error => {
    console.log(error);
  });
</script>

<style type="text/css">
  #post-rank {
    text-align: center;
  }
  #post-rank .prefix {
    color: #ff4d4f;
  }
</style>
```