var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var ts = require('gulp-typescript');
var tsProject = ts.createProject("tsconfig.json");
var tsify = require('tsify');
var watchify = require('watchify');
var fancy_log = require('fancy-log');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
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
var config = {
	server: {
		baseDir: 'dist',
	},
	notify: false,
};
var watchedBrowserify = watchify(browserify(server)).plugin(tsify)

function bundle() {
    return watchedBrowserify
        .bundle()
        .on('error', fancy_log)
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'))
        // .pipe(reload({stream: true}));
}

gulp.task('copy-html', function() {
    return gulp.src(paths.pages)
        .pipe(gulp.dest('dist'))
        // .pipe(reload({stream: true}));
});

gulp.task('browser-sync', function() {
    browserSync(config);
});

gulp.task('default', gulp.series(gulp.parallel('copy-html'), bundle));
watchedBrowserify.on('update', bundle);
watchedBrowserify.on('log', fancy_log);
