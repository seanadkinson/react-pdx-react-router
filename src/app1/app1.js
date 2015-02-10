"use string";

require('../shared/init');

var $ = require('jquery'),
    React = require('react'),
    SimpleApp = require('./SimpleApp.jsx');

$(function() {
    React.render(React.createElement(SimpleApp), document.body);
});
