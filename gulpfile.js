var gulp = require('gulp')
var jade = require('gulp-jade')
var autoprefixer = require('gulp-autoprefixer')
var concatCSS = require('gulp-concat-css')
var cleanCSS = require('gulp-clean-css')
var rename = require('gulp-rename')
// var notify = require('gulp-notify')
var connect = require('gulp-connect')

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('app/index.html')
  // do html stuff
  .pipe(connect.reload())
})

gulp.task('css', function () {
  gulp.src('css/*.css')
  .pipe(concatCSS('bundle.css'))
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
  .pipe(cleanCSS())
  .pipe(rename('bundle.min.css'))
  .pipe(gulp.dest('app/css'))
  .pipe(connect.reload())
  // .pipe(notify('Done!'))
})

gulp.task('watch', function () {
  gulp.watch('css/*.css', ['css'])
  gulp.watch('app/index.html', ['html'])
})

gulp.task('default', ['connect', 'html', 'css', 'watch'])
