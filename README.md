# ES6 Modules

Base project template for ES6 modules including:

* Server with live reload of static files
* Compile and run ES6 JavaScript and SASS CSS for development environments
* Build tasks to create minified ES5 versions for production environments
* Combine static files and minify ready for production

## Installation

Ensure you have Node and NPM installed using the instructions at:

https://nodejs.org/download/

Then run the following command to install the dependancies:

    npm install
    
The following packages will be installed:

* babel-preset-es2015 - preset for babel to understand the ES6 spec
* babelify - tranform preset for browserify to understand babel
* browserify - Compile ES6 modules with a module loader to support import statements
* gulp - Task runner
* gulp-autoprefixer - auto prefix css with cross-browser properties
* gulp-combine-media-queries - combine duplicate css where possible to reduce size
* gulp-connect - local server to view site
* gulp-html-replace - replace development html with production html
* gulp-minify-css - minify css to make it smaller
* gulp-rename - rename file
* gulp-sass - convert scss to css
* gulp-uglify - minify javascript
* vinyl-buffer - buffer stream into a virtual file
* vinyl-source-stream - transfer stream into file

## Usage

To run the server type the command below and then point your browser to http://localhost:8080/src/

    gulp
    
To build the ES5 versions run the command below and navigate to http://localhost:8080/dist/

    gulp dist