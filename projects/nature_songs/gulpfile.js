var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var watch = require('gulp-watch');

gulp.task('sass', function () {
    return sass('sass/*.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('css'));
});

gulp.task('default', function(){
    gulp.watch('./sass/all.scss', function() {
        gulp.run('sass');
    });
});

