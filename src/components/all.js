/**
 * Tabs
 */

import Tabs from "./tabs/tabs";

let tabs = new Tabs();

var getTime = (name) => {
    return new Date().toLocaleTimeString() + ' - ';
};

document.getElementById('list').innerHTML += getTime() + tabs.introduction('Ted');