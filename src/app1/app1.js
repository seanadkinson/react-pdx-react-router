"use string";

require('../shared/init');

var $ = require('jquery'),
    React = require('react'),
    NaiveApp = require('./NaiveApp.jsx');

$(function() {
    React.render(React.createElement(NaiveApp), document.body);
});
