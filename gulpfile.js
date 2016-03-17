'use strict'
var gulp = require('gulp')
var autoprefixer = require('gulp-autoprefixer')
var concatCSS = require('gulp-concat-css')
var cleanCSS = require('gulp-clean-css')
var rename = require('gulp-rename')
var sass = require('gulp-sass')
var sourcemaps = require('gulp-sourcemaps')
// var sassIndex = require('sass-index')
var browserSync = require('browser-sync').create()
var reload = browserSync.reload

gulp.task('serve', function () {
  browserSync.init({
    server: {baseDir: 'app'}
  })
})

gulp.task('html', function () {
  gulp.src('app/*.html')
  // do html stuff
})

gulp.task('sass', function () {
  return gulp.src('sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream())
})

gulp.task('css', function () {
  gulp.src('app/css/*.css')
  .pipe(concatCSS('bundle.css'))
	.pipe(autoprefixer({
  browsers: ['last 2 versions'],
  cascade: false
	}))
  .pipe(cleanCSS())
  .pipe(rename('style.min.css'))
  .pipe(gulp.dest('app/css'))
})

gulp.task('watch', function () {
  gulp.watch('app/*.html', ['html'])
  gulp.watch('sass/*.scss', ['sass'])
  gulp.watch('app/*.html').on('change', reload)
})

gulp.task('default', ['serve', 'html', 'sass', 'css', 'watch'])
