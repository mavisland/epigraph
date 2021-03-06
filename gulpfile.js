var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var cleancss = require('gulp-clean-css');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');

gulp.task('build', function () {
  gulp.src(['src/epigraph.less'])
    .pipe(plumber({
      handleError: function (err) {
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('dist'))
    .pipe(cleancss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('watch',function(){
  gulp.watch('src/**/*.less', ['build']);
});

gulp.task('default', ['build']);
