/**
 * App
 */

import { list } from "../list/list";

var getTime = (name) => {
    return new Date().toLocaleTimeString() + ' - ';
};

document.getElementById('list').innerHTML += getTime() + list('Ted');