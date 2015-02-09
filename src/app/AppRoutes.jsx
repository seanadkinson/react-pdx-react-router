"use strict";

var React = require('react'),
    Router = require('react-router');

module.exports = (
    <Router.Route path="/" handler={require('./Application.jsx')}>
        <Router.Route name="tracking" path="/tracking/?:accountId?" handler={require('./TrackingPage.jsx')} />

        <Router.Route name="settings" handler={require('./settings/SettingsPage.jsx')}>
            <Router.Redirect from="/settings" to="/settings/profile"/>
            <Router.Route name="profile" handler={require('./settings/Profile.jsx')}/>
            <Router.Route name="accounts" handler={require('./settings/Accounts.jsx')}/>
        </Router.Route>

        <Router.Route name="admin" handler={require('./admin/AdminPage.jsx')}>
            <Router.Redirect from="/admin" to="/admin/users"/>
            <Router.Route name="admin-users" path="users" handler={require('./admin/AdminUsers.jsx')}/>
        </Router.Route>

    </Router.Route>
);
