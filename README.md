![ES6 Modules screenshot](https://kmturley.github.io/es6-modules/src/img/screenshot.png)
![Webdrivercss screenshot](https://kmturley.github.io/es6-modules/src/img/screenshot2.png)

# ES6 Modules

Base project template for ES6 modules including:

* Server with live reload of static files
* Compile tasks to run ES6 JavaScript and SASS CSS in the browser
* Optimise tasks to create concatenated and minified ES5 versions for production environments
* Test tasks to automate unit tests and functional tests with screenshots and diff
* Document tasks to automatically create documentation from comments within the code

## Installation

Ensure you have Node and NPM installed using the instructions at:

[https://nodejs.org/download/](https://nodejs.org/download/)

Also the global packages you will need installed:

    npm install jspm -g
    npm install gulp -g

Then run the following command to install the dependancies:

    jspm install
    npm install

## Usage

After installation has completed you will have access to the following features.
    
### Default

    gulp

* [del](https://github.com/sindresorhus/del) - Delete folder helper
* [gulp](https://github.com/gulpjs/gulp) - Task runner
* [gulp-connect](https://github.com/AveVlad/gulp-connect) - Runs the local server
* [gulp-rename](https://github.com/hparra/gulp-rename) - Renames a file
* [require-dir](https://github.com/aseemk/requireDir) - Requires a directory of js files

[http://localhost:8080/src/](http://localhost:8080/src/)

### Compile

    gulp compile

* [gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer) - Adds browser prefixes to css automatically
* [gulp-combine-media-queries](https://github.com/konitter/gulp-combine-media-queries) - Combines css media queries to optimise code size
* [gulp-jspm](https://github.com/brillout/gulp-jspm) - ES6 in browser compilation
* [gulp-sass](https://github.com/dlmanning/gulp-sass) - Compiles scss into css

### Optimise

    gulp optimise

* [gulp-html-replace](https://github.com/VFK/gulp-html-replace) - Updates html development paths with production paths
* [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin) - Minifies images to create smaller files
* [gulp-minify-css](https://github.com/murphydanger/gulp-minify-css) - Minifies the css into a smaller file
* [gulp-htmlmin](https://github.com/jonschlinkert/gulp-htmlmin) - Minifies html code into a smaller file
* [gulp-jspm](https://github.com/brillout/gulp-jspm) - Converts ES6 to ES5 javascript and minifies the file
* [imagemin-pngquant](https://github.com/imagemin/imagemin-pngquant) - Plugin for imagemin to minify png images

[http://localhost:8080/www/](http://localhost:8080/www/)

### Test

    gulp test

* [gulp-webdriver](https://github.com/webdriverio/gulp-webdriver) - Testing task runner helper for gulp
* [jasmine](https://github.com/jasmine/jasmine-npm) - Testing framework
* [selenium-standalone](https://github.com/vvo/selenium-standalone) - Testing server
* [webdrivercss](https://github.com/webdriverio/webdrivercss) - Testing CSS regression screenshot comparison tool
* [webdriverio](https://github.com/webdriverio/webdriverio) - Testing task runner

### Document

    gulp document

* [gulp-esdoc](https://github.com/nanopx/gulp-esdoc) - Auto-generates js documentation
* [sassdoc](https://github.com/SassDoc/sassdoc) - Auto-generates css documentation

[http://localhost:8080/docs/](http://localhost:8080/docs/)

## Directory Layout

    gulp/                 --> Gulp tasks
    wdio.conf.js          --> Test runner configuration
    src/                  --> Development code
    www/                  --> Production code (after 'gulp optimise' command)

## Contact

For more information please contact kmturley