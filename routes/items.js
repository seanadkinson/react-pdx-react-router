"use strict";

var _ = require('lodash'),
    express = require('express'),
    router = express.Router();

var items = [
    {
        id: 1,
        name: 'Chicken Quesadilla'
    },
    {
        id: 2,
        name: 'Jumbo Cheeseburger'
    },
    {
        id: 3,
        name: 'Strawberry Milkshake'
    },
    {
        id: 4,
        name: 'Side of Onion Rings'
    },
    {
        id: 5,
        name: 'Caesar Salad'
    }
];


router.get('/', function(req, res) {
    setTimeout(function() {
        res.json(items);
    }, 500);
});

router.get('/:itemId', function(req, res) {
    setTimeout(function() {
        var item = _.find(items, {id: parseInt(req.params.itemId, 10)});
        if (!item) {
            res.status(404).send();
        }
        else {
            res.json(item);
        }
    }, 500);
});

module.exports = router;
