var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    cssImport = require('postcss-import'),
    cssvars = require('postcss-simple-vars'),
    mixins = require('postcss-mixins'),
    nested = require('postcss-nested'),
    autoprefixer = require('autoprefixer'),
    hexrgba = require('postcss-hexrgba');



gulp.task('styles', function () {
    // console.log('styles task');
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([
            cssImport,
            cssvars,
            mixins,
            hexrgba,
            nested,
            autoprefixer,
        ]))
        .on('error', function (errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});