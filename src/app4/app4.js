"use string";

require('../shared/init');

var React = require('react'),
    Router = require('react-router'),
    routes = require('./Routes.jsx');

Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(React.createElement(Handler), document.body);
});

