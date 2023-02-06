var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    sass = require('gulp-sass')(require('sass')),
    cssnano = require("gulp-cssnano"),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    pump = require('pump'),
    minify = require('gulp-minify');
browserSync = require('browser-sync')


gulp.task('minify-html', async function () {
    return gulp.src('app/index.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('dist'));
});
gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'dist/index.html'
        },
        notify: false
    });
});

gulp.task('clean', function (done) {
    del.sync('dist');
    done();
});

gulp.task('sass', async function () {
    return gulp.src('app/sass/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
});

gulp.task('styles', async function () {
    return gulp.src('app/css/main.css')
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('scripts', function () {
    return gulp.src([
        "app/js/burger.js",
        "app/js/modal.js",
        "app/js/swiper.js"
    ])
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('app/js'));
});

gulp.task('compress', async function () {
    gulp.src(['app/js/libs.js'])
        .pipe(minify())
        .pipe(gulp.dest('dist/js'))
});

gulp.task('build', gulp.series('sass', 'styles', 'scripts', 'compress', 'minify-html'));