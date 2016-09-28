var gulp = require('gulp');
    var sass = require('gulp-sass');
    var jshint = require('gulp-jshint');
    // var browserSync = require('browser-sync').create();
    var uglify = require('gulp-uglify');
    var concat = require('gulp-concat');
    var watch = require('gulp-watch');
    var plumber = require('gulp-plumber');
    var notify = require('gulp-notify');
    // var environments = require('gulp-environments');

    // var development = environments.development;
    // var production = environments.production;
    /** load config file based on enviroment */
    // var configFile = production() ? "./app/env/prod.js" : "./app/env/dev.js";

    // gulp.task('lint', function() {
    //   return gulp.src('./app/**/*.js')
    //     .pipe(jshint())
    //     .pipe(jshint.reporter('default'));
    // });

    gulp.task('scripts', function(){
        return gulp.src([
            './node_modules/angular/angular.js',
            './node_modules/angular-route/angular-route.js',
            './app/assets/**/*.js'
            ])
            .pipe(plumber({errorHandler: onError}))
            .pipe(uglify())
            .pipe(concat('main.min.js'))
            .pipe(gulp.dest('./app/public/assets/js'));
    });

    gulp.task('copy', ['scss'], function() {
        gulp.src(['./app/assets/**/*.html','./app/assets**/*.css'])
            .pipe(gulp.dest('./app/public'))
    });

    gulp.task('scss', function() {
        gulp.src('./app/assets/scss/*.scss')
            .pipe(plumber({errorHandler: onError}))
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('./app/assets/stylesheets/'));
    });

    // gulp.task('build',['lint', 'scss', 'copy', 'scripts']);
    gulp.task('build',['scss', 'copy', 'scripts']);


    gulp.task('watch', function () {
        gulp.watch(['./app/assets/**/*.css'], ['copy']);
        gulp.watch(['./app/assets/**/*.js'],['scripts']);
    });

    // gulp.task('browser-sync', ['build'], function() {
    //     browserSync.init({
    //         server: {
    //             baseDir: "./app/public",
    //             // The key is the url to match
    //             // The value is which folder to serve (relative to your current working directory)
    //             routes: {
    //                 "/bower_components": "bower_components",
    //                 "/node_modules": "node_modules"
    //             }
    //         },
    //         browser:"firefox"
    //     });
    // });


    // gulp.task('default', ['browser-sync'], function(){
    //     gulp.watch("./app/**/*.*", ["build"]);
    //     gulp.watch("./app/public/**/*.*").on('change', browserSync.reload);
    // })

var onError = function(err) {
    notify.onError({
      title: "Gulp error in " + err.plugin,
      message: err.toString()
    })(err);
    this.emit('end');
};