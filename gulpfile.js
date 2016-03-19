var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload;

	gulp.task('watch', function() {
		browserSync({
			server: {
				baseDir: './'
			}
		})
	gulp.watch(['*.html', '*.css'], {cwd:'./'}, reload);
	});
