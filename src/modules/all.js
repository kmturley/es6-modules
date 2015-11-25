(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _list = require('../list/list');

var getTime = function getTime(name) {
    return new Date().toLocaleTimeString() + ' - ';
};

document.getElementById('list').innerHTML += getTime() + (0, _list.list)('Ted');

},{"../list/list":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.list = list;
function list(name) {
    return 'Hello ' + name;
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbW9kdWxlcy9hcHAvYXBwLmpzIiwic3JjL21vZHVsZXMvbGlzdC9saXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQ0VBLElBQUksT0FBTyxHQUFHLFNBQVYsT0FBTyxDQUFJLElBQUksRUFBSztBQUNwQixXQUFPLElBQUksSUFBSSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxLQUFLLENBQUM7Q0FDbEQsQ0FBQzs7QUFFRixRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsSUFBSSxPQUFPLEVBQUUsR0FBRyxVQU5oRCxJQUFJLEVBTWlELEtBQUssQ0FBQyxDQUFDOzs7Ozs7OztRQ05yRCxJQUFJLEdBQUosSUFBSTtBQUFiLFNBQVMsSUFBSSxDQUFDLElBQUksRUFBRTtBQUN2QixXQUFPLFFBQVEsR0FBRyxJQUFJLENBQUM7Q0FDMUIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHsgbGlzdCB9IGZyb20gXCIuLi9saXN0L2xpc3RcIjtcblxudmFyIGdldFRpbWUgPSAobmFtZSkgPT4ge1xuICAgIHJldHVybiBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpICsgJyAtICc7XG59O1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdCcpLmlubmVySFRNTCArPSBnZXRUaW1lKCkgKyBsaXN0KCdUZWQnKTsiLCJleHBvcnQgZnVuY3Rpb24gbGlzdChuYW1lKSB7XG4gICAgcmV0dXJuICdIZWxsbyAnICsgbmFtZTtcbn0iXX0=
