/* __________________________________________________________ gulfile.js */

var conf 		= require( './config' );

var gulp  		= require( 'gulp' );
var sass		= require( 'gulp-sass' );
var gls 		= require( 'gulp-live-server' );

/* __________________________________________________________ */

var defaultTasks = [
	'sass',
	'serve'
];

gulp.task( 'default', defaultTasks );


/* __________________________________________________________ */


gulp.task('serve', function() {
	var server = gls.static( CONFIG.root, CONFIG.port);
	server.start();

	gulp.watch([ CONFIG.inputFolder + '/**/*.scss', CONFIG.root + '/**/*.html'], function (file) {
		gulp.start( 'sass' );
		server.notify.apply(server, [file]);
	});
});

gulp.task( 'sass', function() {
	gulp.src( CONFIG.input )
		.pipe( sass.sync().on( 'error', sass.logError ) )
		.pipe( gulp.dest( CONFIG.output ) );
});
