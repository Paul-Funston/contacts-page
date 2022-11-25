'use strict';
/*
    Paul Funston

    Utility Functions
*/

function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}







export {select, onEvent };