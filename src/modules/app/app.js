/**
 * App
 */

import List from "../list/list";

let list = new List();

var getTime = (name) => {
    return new Date().toLocaleTimeString() + ' - ';
};

document.getElementById('list').innerHTML += getTime() + list.introduction('Ted');