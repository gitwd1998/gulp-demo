const { task, src, dest, lastRun, watch, parallel, series, tree } = require('gulp');
const plugConnect = require('gulp-connect');
const gulpHtmlmin = require('gulp-htmlmin');
const gulpUglify = require('gulp-uglify');
const gulpMinifyCss = require('gulp-minify-css');
const gulpLess = require('gulp-less');
const gulpImagemin = require('gulp-imagemin');

// console.log("\x1B[33m%s\x1B[0m", process.env);
// console.log("\x1B[34m%s\x1B[0m", process.cwd());

// const cssWatcher = watch(['src/css/*.css'], { alwaysStat: true });
// cssWatcher.on('change', function (path, stats) {
//   console.log(path, stats);
// });

function html() {
  return src('src/index.html')
    .pipe(gulpHtmlmin())
    .pipe(dest('dist'))
}

function js() {
  return src('src/js/**/*.js', { sourcemaps: true, since: lastRun(js) })
    .pipe(gulpUglify())
    .pipe(dest('dist/js', { sourcemaps: true }));
}

function css() {
  return src('src/css/**/*.css')
    .pipe(gulpMinifyCss())
    .pipe(dest('dist/css'));
}

function less() {
  return src('src/less/**/*.less')
    .pipe(gulpLess())
    .pipe(gulpMinifyCss())
    .pipe(dest('dist/css'));
}

function icon() {
  return src('src/iconfont_general/**/*.*')
    .pipe(dest('dist/iconfont_general'));
}

function img() {
  return src('src/img/**/*.*')
    // .pipe(gulpImagemin()) // Couldn't load default plugin "gifsicle"
    .pipe(dest('dist/img'));
}

function server() {
  return plugConnect.server({
    root: 'dist',
    port: 1998,
    livereload: true
  })
}

function watcher() {
  watch('src/index.html', html)
  watch('src/js/**/*.js', js)
  watch('src/css/**/*.css', css)
  watch('src/less/**/*.less', less)
  watch('src/iconfont_general/**/*.*', icon)
  watch('src/img/**/*.*', img)
}

console.log("\x1B[35m%s\x1B[0m", tree({ deep: true }));

exports.html = html;
exports.js = js;
exports.css = css;
exports.less = less;
exports.icon = icon;
exports.img = img;

exports.watcher = watcher;

exports.server = server;

exports.default = series(html, js, css, less, icon, img, server);
