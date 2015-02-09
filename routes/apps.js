var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res) {
    res.render('demo', { page: 'app' + req.params.id });
});

module.exports = router;
