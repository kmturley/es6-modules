# ES6 Modules

Base project template for ES6 modules including:

    * Server with live reload of static files
    * Compile and run ES6 scripts in your browser on-the-fly
    * Automated build tasks to create ES5 versions of js for production environments
    * Combine static files and minify ready for production

## Installation

Ensure you have Node and NPM installed using the instructions at:
https://nodejs.org/download/

Then run the following command to install the dependancies:

    npm install
    
The following packages will be installed:

    * babel - for running ES6 modules in the browser
    * gulp - task runner
    * gulp-babel - version for build tasks
    * gulp-concat - combine static files together
    * gulp-connect - live reload server
    * gulp-html-replace - create asset bundles for production
    * gulp-minify-css - minify css code
    * gulp-uglify - minify js code

## Usage

To run the server type the command below and then point your browser to http://localhost:8080/src/

    gulp
    
To build the ES5 versions run the command below and navigate to http://localhost:8080/dist/

    gulp dist