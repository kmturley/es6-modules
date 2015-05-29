/**
 * @module List
 * @summary Example list class
 */

/*globals window, document */

var list = (name) => {
    return 'Hello ' + name;
};

document.getElementById('list').innerHTML += list('World!');