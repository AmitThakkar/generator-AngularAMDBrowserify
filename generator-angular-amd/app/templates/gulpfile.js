/**
 * Created by Amit Thakkar on 04/05/15.
 */
(function (require) {
    'use strict';
    var gulp = require('gulp'),
        browserify = require('gulp-browserify'),
        uglify = require('gulp-uglify'),
        gulpif = require('gulp-if'),
        open = require("gulp-open"),
        runSequence = require('run-sequence'),
        livereload = require('gulp-livereload'),
        notify = require("gulp-notify"),
        rimraf = require('rimraf');

    var isProduction = true,
        projectName = "AngularAMD with Browserify",
        sound = "Frog",
        browserifyTasks = [
            {
                taskName: 'angular-amd',
                srcFile: 'app/angular-amd.js',
                dest: 'build'
            },
            {
                taskName: 'angular-amd-sample',
                srcFile: 'app/sample/sample.controller.js',
                dest: 'build/sample'
            }
        ];
    gulp.task('clear', function (callback) {
        rimraf('./build', callback);
    });
    gulp.task('setDevEnvironment', function () {
        isProduction = false;
    });
    var taskNames = [];
    browserifyTasks.forEach(function (browserifyTask) {
        taskNames.push(browserifyTask.taskName);
        gulp.task(browserifyTask.taskName, function () {
            return gulp.src([browserifyTask.srcFile])
                .pipe(browserify())
                .pipe(gulpif(isProduction, uglify()))
                .pipe(gulp.dest(browserifyTask.dest))
                .pipe(gulpif(!isProduction, livereload()))
                .pipe(gulpif(!isProduction, notify({
                    title: projectName,
                    message: browserifyTask.taskName + ' task executed',
                    sound: sound
                })));
        });
    });
    gulp.task('browserify', function (callback) {
        runSequence(taskNames, callback);
    });
    gulp.task('open', function () {
        var options = {
            url: 'http://localhost:63342/generator-angular-amd-browserify/'
        };
        gulp.src('./index.html')
            .pipe(open("", options));
    });
    gulp.task('watch', function () {
        livereload.listen();
        gulp.watch('app/*.js', ['angular-amd']);
        gulp.watch('app/sample/*.js', ['angular-amd-sample']);
    });
    gulp.task('dev', function (callback) {
        runSequence('clear', 'setDevEnvironment', 'browserify', 'open', 'watch', callback);
    });
    gulp.task('default', function (callback) {
        runSequence('clear', 'browserify', callback);
    });
})(require);