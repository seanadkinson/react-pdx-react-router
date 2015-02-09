"use strict";

var React = require('react'),
    Router = require('react-router');


var MenuIndex = React.createClass({
    render: function() {
        return (
            <div>
                <ul>
                    <li><Router.Link to="menu-item" params={{itemId: 1}}>Item 1</Router.Link></li>
                    <li><Router.Link to="menu-item" params={{itemId: 2}}>Item 2</Router.Link></li>
                    <li><Router.Link to="menu-item" params={{itemId: 3}}>Item 3</Router.Link></li>
                    <li><Router.Link to="menu-item" params={{itemId: 4}}>Item 4</Router.Link></li>
                </ul>
            </div>
        );
    }
});


module.exports = MenuIndex;
