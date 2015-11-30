# ES6 Modules

Base project template for ES6 modules including:

* Server with live reload of static files
* Compile and run ES6 JavaScript and SASS CSS for development environments
* Build tasks to create minified ES5 versions for production environments
* Combine static files and minify ready for production

## Installation

Ensure you have Node and NPM installed using the instructions at:

[https://nodejs.org/download/](https://nodejs.org/download/)

Then run the following command to install the dependancies:

    jspm install
    npm install
    
Base libraries used:

* [gulp](https://github.com/gulpjs/gulp) - Task runner
* [gulp-connect](https://github.com/AveVlad/gulp-connect) - Runs the local server
* [gulp](https://github.com/hparra/gulp-rename) - Renames a file

Compiling libraries used:

* [gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer) - Adds browser prefixes to css automatically
* [gulp-html-replace](https://github.com/VFK/gulp-html-replace) - Updates html development paths with production paths
* [gulp-jspm](https://github.com/brillout/gulp-jspm) - ES6 compiler
* [gulp-sass](https://github.com/dlmanning/gulp-sass) - Compiles scss into css

Optimisation libraries used:

* [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin) - Minifies images to create smaller files
* [gulp-combine-media-queries](https://github.com/konitter/gulp-combine-media-queries) - Combines css media queries to optimise code size
* [gulp-minify-css](https://github.com/murphydanger/gulp-minify-css) - Minifies the css into a smaller file
* [gulp-minify-html](https://github.com/murphydanger/gulp-minify-html) - Minifies html code into a smaller file
* [gulp-uglify](https://github.com/terinjokes/gulp-uglify) - Minifies javascript
* [imagemin-pngquant](https://github.com/imagemin/imagemin-pngquant) - Plugin for imagemin to minify png images

Testing libraries used:

* [karma](https://github.com/karma-runner/karma) - Testing task runner
* [karma-chrome-launcher](https://github.com/karma-runner/karma-chrome-launcher) - Testing Chrome browser
* [karma-jasmine](https://github.com/karma-runner/karma-jasmine) - Testing framework
* [karma-jspm](https://github.com/Workiva/karma-jspm) - Testing support for ES6

Documentation libraries used:

* [gulp-esdoc](https://github.com/nanopx/gulp-esdoc) - Auto-generates js documentation
* [sassdoc](https://github.com/SassDoc/sassdoc) - Auto-generates css documentation

## Usage

To run the server type the command below and then point your browser to [http://localhost:8080/src/](http://localhost:8080/src/)

    gulp
    
To build the ES5 versions run the command below and navigate to [http://localhost:8080/build/](http://localhost:8080/build/)

    gulp build

To generate the documentation run the command below and navigate to [http://localhost:8080/docs/](http://localhost:8080/docs/)

    gulp docs