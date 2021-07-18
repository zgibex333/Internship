let gulp = require('gulp');
let rename = require('gulp-rename');
let sass = require('gulp-sass')(require('sass'));

function copy(done) {
    gulp.src('./scss/styles.scss')
        .pipe(sass({
            errorLogToConsole: true
        }))
        .on('error', console.error.bind(console))
        .pipe(rename('styles.css'))
        .pipe(gulp.dest('./css/'));
    done();
}

exports.default = copy; 
