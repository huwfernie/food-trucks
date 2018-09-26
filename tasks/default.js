const gulp = require('gulp');

const defaultTask = () => {
  return gulp.start(['serve']);
};

gulp.task('default', [], defaultTask);
module.exports = defaultTask;
