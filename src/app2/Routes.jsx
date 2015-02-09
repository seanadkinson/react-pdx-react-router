"use strict";

var React = require('react'),
    Router = require('react-router');

module.exports = (
    <Router.Route handler={require('./AppPage.jsx')}>
        <Router.Route name="home" path="/" handler={require('./HomePage.jsx')} />
        <Router.Route name="beer" handler={require('./BeerPage.jsx')} />
        <Router.Route name="menu" handler={require('./MenuPage.jsx')} />
    </Router.Route>
);
