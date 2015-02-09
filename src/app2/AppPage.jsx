"use strict";

var React = require('react'),
    Router = require('react-router');


var Application = React.createClass({
    mixins: [
        Router.State
    ],

    render: function() {
        return (
            <div className="container">

                <header className="row">
                    <h1>React Restaurant</h1>
                </header>

                <div className="row">
                    <div className="col-xs-12" role="tabpanel">
                        <ul className="nav nav-tabs">

                            <li role="presentation" className={this.isActive('home') && 'active'}>
                                <Router.Link to="home">Home</Router.Link>
                            </li>

                            <li role="presentation" className={this.isActive('menu') && 'active'}>
                                <Router.Link to="menu">Menu</Router.Link>
                            </li>

                            <li role="presentation" className={this.isActive('contact') && 'active'}>
                                <Router.Link to="contact">Contact</Router.Link>
                            </li>

                        </ul>
                        <div className="tab-content">
                            <Router.RouteHandler/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

});


module.exports = Application;
