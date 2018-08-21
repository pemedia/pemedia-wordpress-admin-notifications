(() => {
  'use strict';

  const cssnano   = require('gulp-cssnano');
  const gulp      = require('gulp');
  const sass      = require('gulp-sass');
  const rename    = require('gulp-rename');
  const rollup    = require('gulp-better-rollup');
  const sourcemap = require('gulp-sourcemaps');
  const watch     = require('gulp-watch');
  const plumber   = require('gulp-plumber');

  // Rollup plugins
  const buble       = require('rollup-plugin-buble');
  const cjs         = require('rollup-plugin-commonjs');
  const resolve     = require('rollup-plugin-node-resolve');
  const { uglify }  = require('rollup-plugin-uglify');

  gulp.task('build-css', () => {
    return gulp.src('./src/style.scss')
      .pipe(plumber())
      .pipe(sourcemap.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(cssnano({zindex: false}))
      .pipe(rename('pwa-notifications.min.css'))
      .pipe(sourcemap.write('.'))
      .pipe(gulp.dest('./dist'));
  });

  gulp.task('build-js', () => {
    return gulp.src('./src/index.js')
      .pipe(plumber())
      .pipe(sourcemap.init())
      .pipe(rollup({
        plugins: [buble(), cjs(), resolve({jsnext: true, main: true, module: true, browser: true}), uglify()]
      }, 'umd'))
      .pipe(rename('pwa-notifications.min.js'))
      .pipe(sourcemap.write('.'))
      .pipe(gulp.dest('./dist'));
  });


  gulp.task('watch', () => {
    watch('./src/style.scss', () => gulp.start('build-css'));

    watch('./src/index.js', () => gulp.start('build-js'));
  });

  gulp.task('default', ['build-css', 'build-js', 'watch']);
})();
