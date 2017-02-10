var gulp      = require('gulp'),
    connect   = require('gulp-connect'),
    sass      = require('gulp-sass'),
    cssmin    = require('gulp-cssmin'),
    rename    = require('gulp-rename'),
    iconfont = require('gulp-iconfont'),
    iconfontCss = require('gulp-iconfont-css');


var fontname = 'svgicons';

gulp.task('iconfont', function(){
  gulp.src(['images/svg/*.svg'])
  .pipe(iconfontCss({
    fontName: fontname,
    targetPath: '../css/svgicons.css',
    fontPath: '../fonts/',
    cssClass: 'aw-svg'
  }))
  .pipe(iconfont({
    fontName: fontname,
    formats: ['ttf', 'eot', 'woff', 'woff2'],
    normalize: true,
    fontHeight: 1000
  }))
  .pipe(gulp.dest('fonts/'))
  .pipe(connect.reload());
});


gulp.task('webserver', function() {
    connect.server({
      port: 9090,
      livereload: true
    });
});
gulp.task('sass', function () {
  gulp.src('./scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(rename({suffix: '-min'}))
    .pipe(cssmin())
    .pipe(gulp.dest('./css'))
    .pipe(connect.reload());
});
gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});
gulp.task('script', function () {
  gulp.src('./scripts/*.js')
    .pipe(connect.reload());
});


gulp.task('watch',function(){
  gulp.watch(['scss/**/*.scss'],['sass']);
  gulp.watch(['*.html'],['html']);
  gulp.watch(['scripts/*.js'],['script']);
});

gulp.task('default',['sass','html','script', 'webserver','watch', 'iconfont']);
