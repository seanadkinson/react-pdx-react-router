var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.json([
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
    ])
});

module.exports = router;
