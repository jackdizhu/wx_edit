
var gulp = require('gulp'),
  fs = require('fs'),
  less = require('gulp-less'),
  csso = require('gulp-csso'),
  livereload = require('gulp-livereload'),
  uglify = require('gulp-uglify'),
  minifycss = require('gulp-minify-css'),
  rev = require('gulp-rev'),
  replace = require('gulp-replace'),
  revCollector = require('gulp-rev-collector'),
  connect = require('gulp-connect');
  rename = require('gulp-rename'),
  sourcemaps = require('gulp-sourcemaps'),
  notify=require('gulp-notify'),
  plumber=require('gulp-plumber'),
  nodemon=require('gulp-nodemon'),
  express=require('gulp-express'),
  clean = require('gulp-clean'),

  gulp_webpack = require('gulp-webpack'),
  webpack= require('webpack');
  // webpack_config = require('./webpack.config_dev.js'),

  // devHtml = require('gulp-devHtml');

  var basePath = './';

  // css 压缩
  gulp.task('cssmin',(event) => {
      gulp.src([basePath + 'dist/summernote.css'])
        .pipe(minifycss())
        .pipe(gulp.dest(basePath + 'dist/css/'));
  });

  // 生成js文件
  gulp.task('jsmin',() => {
    gulp.src([basePath + 'dist/summernote.js'])
      .pipe(uglify({
            mangle: true,//类型：Boolean 默认：true 是否修改变量名
            compress: true,//类型：Boolean 默认：true 是否完全压缩
            preserveComments: 'false' //保留所有注释
        }))
      .pipe(gulp.dest(basePath + 'dist/js/'))
  });

  //定义默认任务
  gulp.task('default',['jsmin','cssmin']);
  gulp.run('default');

