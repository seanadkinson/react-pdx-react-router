"use strict";

var React = require('react'),
    Router = require('react-router'),
    Promise = require('bluebird'),
    $ = require('jquery');


var MenuItem = React.createClass({
    mixins: [
        Router.State
    ],

    getInitialState: function() {
        return {
            item: null
        };
    },

    componentDidMount: function() {
        Promise.resolve($.getJSON('/items/' + this.getParams().itemId))
            .then(function(item) {
                this.setState({
                    item: item
                });
            }.bind(this))
    },

    render: function() {
        if (!this.state.item) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h5>{this.state.item.name}</h5>
                <p>This item's id is: {this.state.item.id}</p>
            </div>
        );
    }
});


module.exports = MenuItem;
