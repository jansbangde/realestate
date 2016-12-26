var gulp = require('gulp');

var stylus = require('gulp-stylus');

var minifycss =require('gulp-minify-css')
var uglify = require('gulp-uglify')


gulp.task('stylus',function(){
	//获取要编译的文件
	//指定一个文件
	//gulp.src('./stylus/index.styl')
	//指定多个文件
	//gulp.src(['./stylus/index.styl','./stylus/css.styl'])
	//指定一个目录下所有（不包含子目录）
	//gulp.src('./stylus/*.styl')
	//指定一个目录及所有子目录下的文件
	return gulp.src('./stylus/**/*.styl')
		//执行stulus翻译
		.pipe(stylus())
		//输出编译后的文件
		.pipe(gulp.dest('./public/css'))
})

gulp.task('minifycss',['stylus'],function(){
	return gulp.src('./public/css/**/*.css')
		.pipe(minifycss())
		.pipe(gulp.dest('./public/minicss'))
})

gulp.task('uglify',function(){
	return gulp.src('./public/js/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./public/minijs'))
})

gulp.task('watcher',['browserSync','stylus','minifycss','uglify'],function(){
	gulp.watch('./stylus/**/*.styl',['stylus']);
	gulp.watch('./public/js/**/*.js',['uglify']);
	gulp.watch('./public/css/**/*.css',['minifycss']);
	gulp.watch([
		'./public/css/**/*.css',
		'./public/minijs/**/*.js'
	]).on('change',function(){
		reload();
	})
})

var browserSync = require('browser-sync').create()
var reload = browserSync.reload;
var nodemon=require('gulp-nodemon')
gulp.task('nodemon',function(ab){
	var ft =false;
	return nodemon({
		script:'./server.js'
	}).on('start',function(){
		if(!ft){
			ab();
			ft = true;
		}
	})
});

gulp.task('browserSync',['nodemon'],function(){
	browserSync.init({
		proxy:{
			target:'http://127.0.0.1:16919'
		},
		files:['*'],
		port:9888,
		open:false		
	})
})



gulp.task('logs',function(){
	console.log('this is log')
})

gulp.task('default',function(){
	console.log('this defauly')
})
