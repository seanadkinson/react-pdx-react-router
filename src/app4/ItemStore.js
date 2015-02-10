"use strict";

var $ = require('jquery'),
    Promise = require('bluebird'),
    _ = require('lodash');

var items = null;

var ItemStore = {

    ensureItemsLoaded: function() {
        if (items) {
            return Promise.resolve(items);
        }
        else {
            return Promise.resolve($.getJSON('/items'))
                .then(function(retrievedItems) {
                    items = retrievedItems;
                    return items;
                });
        }
    },

    getItems: function() {
        return items;
    },

    getItemById: function(itemId) {
        return _.find(items, {id: parseInt(itemId, 10)});
    }

};

module.exports = ItemStore;
