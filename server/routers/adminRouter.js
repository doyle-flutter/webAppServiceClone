var router = require('express').Router();

router.get('/',(req,res) => res.send('ADMIN'));

module.exports = router;