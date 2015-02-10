"use strict";

var React = require('react'),
    Router = require('react-router');

module.exports = (
    <Router.Route path="/app/3" handler={require('./AppPage.jsx')}>

        <Router.DefaultRoute name="home" handler={require('./HomePage.jsx')}/>

        <Router.Route name="contact" handler={require('./ContactPage.jsx')}/>

        <Router.Route name="menu" handler={require('./MenuPage.jsx')}>
            <Router.DefaultRoute name="menu-index" handler={require('./MenuIndex.jsx')}/>
            <Router.Route name="menu-item" path=":itemId" handler={require('./MenuItem.jsx')}/>
        </Router.Route>

        <Router.Route name="404" handler={require('./NotFound.jsx')} />
        <Router.NotFoundRoute handler={require('./NotFound.jsx')} />

    </Router.Route>
);

