/**
 * @module App
 * @summary Example app
 */

/*globals window, document */

var app = (name) => {
    return new Date().toLocaleTimeString() + ' - ';
};

document.getElementById('list').innerHTML += app();