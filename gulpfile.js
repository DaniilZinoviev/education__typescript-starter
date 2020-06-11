var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
// var ts = require('gulp-typescript');
// var tsProject = ts.createProject('tsconfig.json');
var paths = {
    pages: ['src/*.html']
};

var server = {
    basedir: '.',
    debug: true,
    entries: ['src/main.ts'],
    cache: {},
    packageCache: {}
};

gulp.task('copy-html', function() {
    return gulp.src(paths.pages)
        .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series(gulp.parallel('copy-html'), function() {
    return browserify(server)
        .plugin(tsify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
}));