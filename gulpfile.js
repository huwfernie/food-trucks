var gulp = require('gulp');
//import from package.json
const config = require('./package').gulp;
//SASS to css
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
//html test and inject.
const gulpIf = require('gulp-if');
const htmlmin = require('gulp-htmlmin');
const inject = require('gulp-inject');
// nodemon
const nodemon = require('gulp-nodemon');

gulp.task('default', function() {
  // place code for your default task here
  const buildCss = () => {
    return gulp.src(`${config.src.scss}${config.main.scss}`)
      .pipe(sass({ style: 'expanded' }))
      .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
      .pipe(concat(config.output.css))
      .pipe(gulp.dest(config.dest.css));
  };

  const buildJs = () => {
    return gulp.src(`${config.src.js}${config.selectors.js}`)
      .pipe(gulp.dest(config.dest.js));
  };

  const validateIndex = () => {
    return gulp.src(`${config.srcDir}${config.main.index}`);
  };

  const buildIndex = () => {
    const js  = buildJs();
    const css = buildCss();

    return validateIndex()
      // write first to get relative path for inject
      .pipe(gulp.dest(config.destDir))
      .pipe(inject(js, {relative: true, addRootSlash: false, addPrefix: '.'}))
      .pipe(inject(css, {relative: true, addRootSlash: false, addPrefix: '.'}))
      .pipe(gulpIf(global.production, htmlmin({collapseWhitespace: true, removeComments: true})))
      .pipe(gulp.dest(config.destDir));
  };

  buildIndex();

  gulp.watch([
    `${config.src.scss}${config.selectors.scss}`,
    `${config.src.scss}${config.main.scss}`
  ], [buildCss]);

  nodemon({
    script: config.main.server,
    ignore: [config.destDir, config.srcDir],
    env: { NODE_ENV: 'development' }
  });

});
