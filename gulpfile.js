var gulp = require('gulp');
const config = require('./package').gulp;
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
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

  buildCss();


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
