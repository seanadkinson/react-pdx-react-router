"use strict";

var React = require('react'),
    Router = require('react-router');


var MenuPage = React.createClass({
    mixins: [
        Router.State
    ],

    render: function() {
        return (
            <div>
                <h3>Our Menu</h3>
                Look at our nice menu of food to eat.
                <Router.RouteHandler/>
                {this.getIndexLink()}
            </div>
        );
    },

    getIndexLink: function() {
        if (this.isActive('menu-index')) {
            return;
        }
        return (
            <p>
                <Router.Link to="menu-index">Back To Menu</Router.Link>
            </p>
        );
    }
});


module.exports = MenuPage;
