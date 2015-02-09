
var $ = require('jquery'),
    React = require('react'),
    Router = require('react-router'),
    Promise = require('bluebird');

require('bootstrap');
Promise.longStackTraces();

$.ajaxSetup({ cache: false });

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var routes = require('./app/AppRoutes.jsx');

Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(React.createElement(Handler), document.body);
});

if (typeof window !== 'undefined') {
    window.$ = $;
    window.rr = window.rr || {};
    window.rr.debug = require('debug');
}
