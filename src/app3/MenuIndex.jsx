"use strict";

var React = require('react'),
    Router = require('react-router'),
    _ = require('lodash'),
    ItemStore = require('./ItemStore');


var MenuIndex = React.createClass({
    statics: {
        willTransitionTo: function(transition) {
            transition.wait(ItemStore.ensureItemsLoaded());
        }
    },

    render: function() {
        return (
            <div>
                <ul>
                    {this.getItemLinks()}
                </ul>
            </div>
        );
    },

    getItemLinks: function() {
        return _.map(ItemStore.getItems(), function(item) {
            return (
                <li key={item.id}>
                    <Router.Link to="menu-item" params={{itemId: item.id}}>{item.name}</Router.Link>
                </li>
            );
        });
    }

});


module.exports = MenuIndex;
