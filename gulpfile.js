var gulp = require('gulp');
var less = require('gulp-less');
var fileInclude = require('gulp-file-include');
var LessPluginAutoprefix = require('less-plugin-autoprefix');
var browserSync = require('browser-sync');
var autoprefix = new LessPluginAutoprefix({ browsers: ['last 2 versions'] });

gulp.task('less', function () {
  gulp.src('src/sharpei/less/sharpei.less')
    .pipe(less({ plugins: [autoprefix] }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());

  gulp.src('src/kitchen-sink/less/kitchen-sink.less')
    .pipe(less({ plugins: [autoprefix] }))
    .pipe(gulp.dest('.'))
    .pipe(browserSync.stream());
});

gulp.task('html', function () {
  gulp.src('src/index.html')
    .pipe(fileInclude({ indent: true }))
    .pipe(gulp.dest('.'));
});

gulp.task('dev', ['build'], function () {
  browserSync({ server: { baseDir: '.' } });
  gulp.watch('src/**/*.less', ['less']);
  gulp.watch('src/**/*.html', ['html']).on('change', browserSync.reload);
});

gulp.task('build', ['less', 'html']);
gulp.task('default', ['build']);
