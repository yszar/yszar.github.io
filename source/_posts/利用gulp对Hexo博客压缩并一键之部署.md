---
title: 利用gulp对Hexo博客压缩并一键之部署
translate_title: use-gulp-to-compress-hexo-blog-and-deploy-with-one-click
tags:
  - hexo
categories:
  - Hexo
date: 2019-12-30 16:32:18
---
# 说在前面
压缩页面无非就是减小页面大小加快博客访问时间

<!-- more -->

# 实现
## 安装依赖
```shell
npm i gulp gulp-htmlclean gulp-htmlmin gulp-minify-css gulp-uglify -s
```

## gulp配置
在根目录下创建`gulpfile.js`文件

`gulpfile.js`
```js
var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');
// 压缩 public 目录 css
gulp.task('minify-css', function () {
    return gulp.src('./public/**/*.css')
        .pipe(minifycss())
        .pipe(gulp.dest('./public'));
});
// 压缩 public 目录 html
gulp.task('minify-html', function () {
    return gulp.src('./public/**/*.html')
        .pipe(htmlclean())
        .pipe(htmlmin({
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        }))
        .pipe(gulp.dest('./public'))
});
// 压缩 public/js 目录 js
gulp.task('minify-js', function () {
    return gulp.src('./public/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public'));
});
// 执行 gulp 命令时执行的任务
gulp.task('default', [
    'minify-html', 'minify-css', 'minify-js'
]);
```

# 一键部署
在`package.json`中加入如下script
```json
"scripts": {
  "push": "hexo cl && hexo g && gulp && hexo d"
}
```
然后在部署的时候只需要运行
```shell
npm run push
```