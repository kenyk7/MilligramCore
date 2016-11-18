// Config globals

var src = './src/';
var dist = './dist/';
var localPort = 3005;

// define package
var gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  sass = require('gulp-sass'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssnano = require('cssnano'),
  gcmq = require('gulp-group-css-media-queries'),
  sourcemaps = require('gulp-sourcemaps'),
  browserSync = require('browser-sync').create(),
  reload = browserSync.reload;

// tasks
// sass mappgins files
gulp.task('sass:dev', function(){
  var processors = [
    autoprefixer({browsers: ['> 3%', 'last 2 versions', 'ie 9', 'ios 6', 'android 4']})
  ];

  gulp.src(src + 'scss/milligram-core.scss')
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(postcss(processors))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(dist + 'css/'))
  .pipe(browserSync.stream());
});

// sass dist remove source maps
gulp.task('sass:dist', function(){
  var processors = [
    autoprefixer({browsers: ['> 3%', 'last 2 versions', 'ie 9', 'ios 6', 'android 4']}),
    cssnano()
  ];

  gulp.src(src + 'scss/milligram-core.scss')
  .pipe(plumber())
  .pipe(sass())
  .pipe(gcmq())
  .pipe(postcss(processors))
  .pipe(gulp.dest(dist + 'css/'));
});


// serve
gulp.task('serve', function(){
  browserSync.init({
    server: {
      baseDir: "./"
    },
    port: localPort
  });
  gulp.watch(src + 'scss/**/*.scss', ['sass:dev']);
  gulp.watch('*.html').on('change', reload);
});

// build all
gulp.task('build', ['sass:dev']);
// gulp minify all
gulp.task('dist', ['sass:dist']);
// dev default tasks
gulp.task('default', ['build', 'serve']);
