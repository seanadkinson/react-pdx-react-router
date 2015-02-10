"use strict";

var React = require('react');

var HomePage = require('./HomePage.jsx'),
    MenuPage = require('./MenuPage.jsx'),
    ContactPage = require('./ContactPage.jsx');


var Application = React.createClass({

    getInitialState: function() {
        return { page: 'home' };
    },

    showPage: function(page, event) {
        event.preventDefault();
        this.setState({ page: page });
    },

    render: function() {
        return (
            <div className="container">

                <header className="row">
                    <h1>React Restaurant</h1>
                </header>

                <div className="row">
                    <div className="col-xs-12" role="tabpanel">
                        <ul className="nav nav-tabs">

                            <li role="presentation" className={this.state.page == 'home' ? 'active' : ''}>
                                <a href="" onClick={this.showPage.bind(this, 'home')}>Home</a>
                            </li>

                            <li role="presentation" className={this.state.page == 'menu' ? 'active' : ''}>
                                <a href="" onClick={this.showPage.bind(this, 'menu')}>Menu</a>
                            </li>

                            <li role="presentation" className={this.state.page == 'contact' ? 'active' : ''}>
                                <a href="" onClick={this.showPage.bind(this, 'contact')}>Contact</a>
                            </li>

                        </ul>
                        <div className="tab-content">
                            {this.renderPage()}
                        </div>
                    </div>
                </div>
            </div>
        )
    },

    renderPage: function() {
        switch (this.state.page) {
            case 'home': return <HomePage/>;
            case 'menu': return <MenuPage/>;
            case 'contact': return <ContactPage/>;
        }
    }

});


module.exports = Application;
