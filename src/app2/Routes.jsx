"use strict";

var React = require('react'),
    Router = require('react-router');

module.exports = (
    <Router.Route handler={require('./AppPage.jsx')}>

        {/*  path: /  */}
        <Router.Route name="home" path="/" handler={require('./HomePage.jsx')} />

        {/*  path: /menu  */}
        <Router.Route name="menu" handler={require('./MenuPage.jsx')} />

        {/*  path: /contact  */}
        <Router.Route name="contact" handler={require('./ContactPage.jsx')} />

    </Router.Route>
);

