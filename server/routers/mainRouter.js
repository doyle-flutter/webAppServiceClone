var router = require('express').Router(),
    notiConfig = {
        tableName: "app", 
        limitCount: 10, 
        columns: {
            a: 1
        }
    },
    notiDB = new (require('../repo/query.js').NotiDB)(notiConfig);

router.get('/', (req,res) => res.json("MAIN"));
router.get('/a', (req,res) => notiDB.read((err, results, feilds) => res.json(results)));
module.exports = router;