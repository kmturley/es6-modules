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

    jspm install
    npm install
    
The following packages will be installed:

gulp - Task runner
gulp-autoprefixer - Adds browser prefixes to css automatically
gulp-html-replace - Replaces production html code with build code
gulp-jspm - ES6 compiler
gulp-combine-media-queries - Combines css media queries to optimise code size
gulp-connect - Runs the local server
gulp-minify-css - Minifies the css into a smaller file
gulp-rename - Renames a file
gulp-sass - Compiles scss into css
gulp-uglify - Minifies javascript

## Usage

To run the server type the command below and then point your browser to http://localhost:8080/src/

    gulp
    
To build the ES5 versions run the command below and navigate to http://localhost:8080/build/

    gulp build