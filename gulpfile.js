var gulp = require('gulp');

// Plugins
var plugins = require('gulp-load-plugins')();

var sassPath = 'sass/**/*.scss';

// Sass task
gulp.task('sass', function() {
	// Gets all .scss files in sass/ and children dirs
	return gulp.src(sassPath)
		// Deal with errors
		.pipe(plugins.plumber(function(error) {
			console.log(error.toString());
			this.emit('end');
		}))
		.pipe(plugins.sourcemaps.init())
		// Compile Sass
		.pipe(plugins.sass())
		// Minify main.css
		.pipe(plugins.minifyCss())
		// Write sourcemap
		.pipe(plugins.sourcemaps.write('.'))
		// Rename main.css to main.min.css
 		.pipe(plugins.rename('main.min.css'))
		// Write main.min.css
		.pipe(gulp.dest('css'))
});

// Watch task
gulp.task('watch', function() {
	gulp.watch(sassPath, ['sass']);
});