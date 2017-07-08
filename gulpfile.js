/**
 * @description：
 * @author: manble@live.com
 */
'use strict';
const gulp = require('gulp');
const img2base64 = require('./index');

gulp.task('test', function (cb) {
   return gulp.src(['./test/**/*', '!./test/images', '!./test/images/**'])
      .pipe(img2base64({
         prefix: '/images/',
         root: './test/'
      }))
      .pipe(gulp.dest('./dist/'));
});