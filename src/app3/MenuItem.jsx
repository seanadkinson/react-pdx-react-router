"use strict";

var React = require('react'),
    Router = require('react-router'),
    ItemStore = require('./ItemStore');


var MenuItem = React.createClass({
    mixins: [
        Router.State
    ],
    statics: {
        willTransitionTo: function(transition, params) {
            if (!ItemStore.getItemById(params.itemId)) {
                transition.redirect('404');
            }
        }
    },

    render: function() {
        var item = ItemStore.getItemById(this.getParams().itemId);
        return (
            <div>
                <h5>{item.name}</h5>
                <p>This item's id is: {item.id}</p>
            </div>
        );
    }
});


module.exports = MenuItem;
