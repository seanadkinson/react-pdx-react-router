"use strict";

var React = require('react');


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
                <div className="row">
                    <div className="col-xs-12" role="tabpanel">
                        <ul className="nav nav-tabs">
                            <li role="presentation" className={this.state.page == 'home' ? 'active' : ''}>
                                <a href="" onClick={this.showPage.bind(this, 'home')}>Home</a>
                            </li>
                            <li role="presentation" className={this.state.page == 'beer' ? 'active' : ''}>
                                <a href="" onClick={this.showPage.bind(this, 'beer')}>Beer</a>
                            </li>
                            <li role="presentation" className={this.state.page == 'menu' ? 'active' : ''}>
                                <a href="" onClick={this.showPage.bind(this, 'menu')}>Menu</a>
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
            case 'beer': return <BeerPage/>;
            case 'menu': return <MenuPage/>;
        }
    }

});


var HomePage = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Home Page</h1>
                This is the home page
            </div>
        );
    }
});

var BeerPage = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Beer Page</h1>
                Check out our wide variety of beers to choose from.
            </div>
        );
    }
});

var MenuPage = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Menu Page</h1>
                Look at our nice menu of food to eat.
            </div>
        );
    }
});


module.exports = Application;
