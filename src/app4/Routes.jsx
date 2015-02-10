"use strict";

var React = require('react'),
    Router = require('react-router');

module.exports = (
    <Router.Route path="/app/4" handler={require('./AppPage.jsx')}>

        {/*  path: /  */}
        <Router.DefaultRoute name="home" handler={require('react-router-proxy!./HomePage.jsx')}/>

        {/*  path: /contact  */}
        <Router.Route name="contact" handler={require('react-router-proxy!./ContactPage.jsx')}/>

        <Router.Route name="menu" handler={require('react-router-proxy!./MenuPage.jsx')}>

            {/*  path: /menu  */}
            <Router.DefaultRoute name="menu-index" handler={require('react-router-proxy!./MenuIndex.jsx')}/>

            {/*  path: /menu/:itemId  */}
            <Router.Route name="menu-item" path=":itemId" handler={require('react-router-proxy!./MenuItem.jsx')}/>

        </Router.Route>

        {/*  path: /404  */}
        <Router.Route name="404" handler={require('react-router-proxy!./NotFound.jsx')} />

        {/*  path: /not-exsts  */}
        <Router.NotFoundRoute handler={require('react-router-proxy!./NotFound.jsx')} />

    </Router.Route>
);

