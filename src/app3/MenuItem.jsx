"use strict";

var React = require('react'),
    Router = require('react-router');


var MenuItem = React.createClass({
    mixins: [
        Router.State
    ],

    render: function() {
        return (
            <div>
                <h5>Item {'#' + this.getParams().itemId}</h5>
                <p>This is the item's description</p>
            </div>
        );
    }
});


module.exports = MenuItem;
