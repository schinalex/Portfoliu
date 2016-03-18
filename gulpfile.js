'use strict'
var gulp = require('gulp')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var cleanCSS = require('gulp-clean-css')
var rename = require('gulp-rename')
var browserSync = require('browser-sync').create()
var reload = browserSync.reload

gulp.task('serve', function () {
  browserSync.init({
    server: {baseDir: 'app'}
  })
})

gulp.task('sass', function () {
  gulp.src('sass/style.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream())
})

gulp.task('mincss', function () {
  gulp.src('app/css/style.css')
    .pipe(cleanCSS())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('app/css'))
})

gulp.task('watch', function () {
  gulp.watch('sass/*.sass', ['sass'])
  gulp.watch('app/*.html').on('change', reload)
})

gulp.task('default', ['serve', 'sass', 'watch'])
