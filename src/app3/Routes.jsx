"use strict";

var React = require('react'),
    Router = require('react-router');

module.exports = (
    <Router.Route path="/app/3" handler={require('./AppPage.jsx')}>

        {/*  path: /  */}
        <Router.DefaultRoute name="home" handler={require('./HomePage.jsx')}/>

        {/*  path: /contact  */}
        <Router.Route name="contact" handler={require('./ContactPage.jsx')}/>

        <Router.Route name="menu" handler={require('./MenuPage.jsx')}>

            {/*  path: /menu  */}
            <Router.DefaultRoute name="menu-index" handler={require('./MenuIndex.jsx')}/>

            {/*  path: /menu/:itemId  */}
            <Router.Route name="menu-item" path=":itemId" handler={require('./MenuItem.jsx')}/>

        </Router.Route>

        {/*  path: /404  */}
        <Router.Route name="404" handler={require('./NotFound.jsx')} />

        {/*  path: /not-exsts  */}
        <Router.NotFoundRoute handler={require('./NotFound.jsx')} />

    </Router.Route>
);

