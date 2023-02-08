const gulp = require("gulp"),
  htmlmin = require("gulp-htmlmin"),
  sass = require("gulp-sass")(require("sass")),
  cssnano = require("gulp-cssnano"),
  rename = require("gulp-rename"),
  concat = require("gulp-concat"),
  minify = require("gulp-minify"),
  browserSync = require("browser-sync"),
  rigger = require("gulp-rigger");
//минимизация html
gulp.task("minify-html", async () => {
  return gulp
    .src("app/index.html")
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
      })
    )
    .pipe(gulp.dest("dist"));
});

//Компиляция SASS
gulp.task("sass", async () => {
  return gulp.src("app/sass/main.scss").pipe(sass()).pipe(gulp.dest("app/css"));
});
//Минимизация CSS
gulp.task("styles", async () => {
  return gulp
    .src("app/css/main.css")
    .pipe(cssnano())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("dist/css"));
});
//Объединение скриптов
gulp.task("scripts", function () {
  return gulp
    .src(["app/js/burger.js", "app/js/modal.js", "app/js/swiper.js"])
    .pipe(concat("libs.js"))
    .pipe(gulp.dest("app/js"));
});
//Сжатие скриптов
gulp.task("compress", async () => {
  gulp.src(["app/js/libs.js"]).pipe(minify()).pipe(gulp.dest("dist/js"));
});
//Запуск приложения
gulp.task("run", async () => {
  browserSync.init({
    server: {
      baseDir: "dist",
    },
    notify: false,
  });
});

gulp.task("htmlBuild", async () => {
  gulp
    .src("app/templates/page.html")
    .pipe(rigger())
    .pipe(rename("index.html"))
    .pipe(gulp.dest("app/"));
});

gulp.task(
  "build",
  gulp.series(
    "sass",
    "styles",
    "scripts",
    "compress",
    "htmlBuild",
    "minify-html",
    "run"
  )
);
