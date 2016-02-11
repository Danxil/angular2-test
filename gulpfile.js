'use strict';
var gulp = require('gulp');
var plug = require('gulp-load-plugins')();
var del = require('del');

var config = require('./gulpconfig.json');

gulp.task('default', [
  'dev',
  'js:watch',
  'css:watch',
  'images:watch',
  'templates:watch',
  'copy:watch',
  'vendor:js:watch',
  'vendor:css:watch',
], function() {
  return gulp.run('webserver')
});

gulp.task('dev', [
  'clean',
  'copy',
  'fonts',
  'js:dev',
  'css:dev',
  'vendor:js:dev',
  'vendor:css:dev',
  'images:dev',
  'templates:dev'
]);

gulp.task('prod', [
  'clean',
  'copy',
  'fonts',
  'js:prod',
  'css:prod',
  'vendor:js:prod',
  'vendor:css:prod',
  'images:prod',
  'templates'
]);

gulp.task('clean', function (cb) {
  del.sync([config.bases.dist + '/**/*.*'], {force: true});
  cb();
});

gulp.task('copy', function () {
  return gulp.src(config.path.copy, {read: true})
    .pipe(gulp.dest(config.bases.dist));
});

gulp.task('fonts', function () {
  return gulp.src(config.path.fonts, {read: true})
    .pipe(gulp.dest(config.bases.dist + '/fonts'));
});

gulp.task('copy:watch', function () {
  return gulp.watch(config.path.copy, ['copy']);
});

gulp.task('js:dev', function () {
  return gulp.src(config.path.scripts)
    .pipe(plug.plumber())
    .pipe(plug.sourcemaps.init())
    .pipe(plug.typescript({
      target: 'es5',
      noImplicitAny: true,
      experimentalDecorators: true,
      emitDecoratorMetadata: true,
      module: 'system',
      moduleResolution: 'node'
    }))
    .pipe(plug.sourcemaps.write('./maps'))
    .pipe(gulp.dest(config.bases.dist));
});

gulp.task('js:prod', function () {
  return gulp.src(config.path.scripts)
    .pipe(plug.plumber())
    .pipe(plug.concat('app.js'))
    .pipe(gulp.dest(config.bases.dist + '/js'));
});

gulp.task('js:watch', function () {
  return gulp.watch(config.path.scripts, ['js:dev']);
});

gulp.task('css:dev', function () {
  return gulp.src(config.path.sass.src)
    .pipe(plug.sourcemaps.init())
    .pipe(plug.plumber())
    .pipe(plug.sass(config.path.sass.conf))
    .pipe(plug.sourcemaps.write('./maps'))
    .pipe(gulp.dest(config.bases.dist + '/css'));
});

gulp.task('css:prod', function () {
  return gulp.src(config.path.sass.src)
    .pipe(plug.plumber())
    .pipe(plug.sass(config.path.sass.conf))
    .pipe(gulp.dest(config.bases.dist + '/css'));
});

gulp.task('css:watch', function () {
  return gulp.watch(config.path.sass.watch, ['css:dev']);
});

gulp.task('templates:dev', function () {
  return gulp.src(config.path.html)
    .pipe(gulp.dest(config.bases.dist));
});

gulp.task('templates:watch', function () {
  return gulp.watch(config.path.html, ['templates:dev']);
});

gulp.task('vendor:js:dev', function () {
  return gulp.src(config.path.libs)
    .pipe(plug.sourcemaps.init())
    .pipe(plug.concat('vendor.js'))
    .pipe(plug.sourcemaps.write('../maps'))
    .pipe(gulp.dest(config.bases.dist + '/js'));
});

gulp.task('vendor:js:prod', function () {
  return gulp.src(config.path.libs)
    .pipe(plug.concat('app.vendor.js'))
    .pipe(plug.uglify())
    .pipe(gulp.dest(config.bases.dist + '/js'));
});

gulp.task('vendor:js:watch', function () {
  return gulp.watch(config.path.libs, ['vendor:js:dev']);
});

gulp.task('vendor:css:prod', function () {
  return gulp.src(config.path.css_libs)
    .pipe(plug.concat('app.vendor.css'))
    .pipe(gulp.dest(config.bases.dist + '/css'));
});

gulp.task('vendor:css:dev', function () {
  return gulp.src(config.path.css_libs)
    .pipe(plug.sourcemaps.init())
    .pipe(plug.concat('vendor.css'))
    .pipe(plug.sourcemaps.write('../maps'))
    .pipe(gulp.dest(config.bases.dist + '/css'));
});

gulp.task('vendor:css:watch', function () {
  return gulp.watch(config.path.css_libs, ['vendor:css:dev']);
});


gulp.task('images:dev', function () {
  return gulp.src(config.path.images)
    .pipe(gulp.dest(config.bases.dist + '/images'));
});

gulp.task('images:watch', function () {
  return gulp.watch(config.path.images, ['images:dev']);
});

gulp.task('images:prod', function () {
  return gulp.src(config.path.images)
    .pipe(plug.imagemin({
      progressive: true,
    }))
    .pipe(gulp.dest(config.bases.dist + '/images'));
});

gulp.task('webserver', function () {
  return gulp.src('./')
    .pipe(plug.webserver({
      fallback: 'dist/index.html',
      livereload: true,
      port: 9999
    }));
});