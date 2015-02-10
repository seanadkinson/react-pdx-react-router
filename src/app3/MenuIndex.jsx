"use strict";

var React = require('react'),
    Router = require('react-router'),
    _ = require('lodash'),
    $ = require('jquery'),
    Promise = require('bluebird');


var MenuIndex = React.createClass({

    getInitialState: function() {
        return {
            items: null
        };
    },

    componentDidMount: function() {
        Promise.resolve($.getJSON('/items'))
            .then(function(items) {
                this.setState({
                    items: items
                });
            }.bind(this));
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
        if (!this.state.items) {
            return <li>Loading...</li>;
        }

        return _.map(this.state.items, function(item) {
            return (
                <li key={item.id}>
                    <Router.Link to="menu-item" params={{itemId: item.id}}>
                        {item.name}
                    </Router.Link>
                </li>
            );
        });
    }

});


module.exports = MenuIndex;
