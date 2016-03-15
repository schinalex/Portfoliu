var gulp = require('gulp')
var jade = require('gulp-jade')
var prefix = require('gulp-autoprefixer')
var concatCSS = require('gulp-concat-css')
var cleanCSS = require('gulp-clean-css')
var rename = require('gulp-rename')
var notify = require('gulp-notify')

gulp.task('default', function () {
  gulp.src('css/*.css')
    .pipe(concatCSS('bundle.css'))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
    .pipe(cleanCSS())
    .pipe(rename('bundle.min.css'))
    .pipe(gulp.dest('app/css'))
    .pipe(notify('Done!'))
})

gulp.task('watch', function () {
  gulp.watch('css/*.css', ['default'])
})
