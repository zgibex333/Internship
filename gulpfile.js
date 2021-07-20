let gulp = require('gulp');
let rename = require('gulp-rename');
let sass = require('gulp-sass')(require('sass'));
let svgSprite = require('gulp-svg-sprite');

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

function svggSprite(done) {
    gulp.src('./assets/**/*.svg')
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: "../sprite.svg"
                }
            },
        }))
        .pipe(gulp.dest('./assets/'));
    done();
};


exports.default = copy;
exports.sprite = svggSprite;