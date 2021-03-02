var router = require('express').Router(),
    notiDB = new (require('../repo/query.js').NotiDB)();

router.get('/', (req,res) => res.json("MAIN"));
router.get('/a', (req,res) => notiDB.read((err, results, feilds) => res.json(results)));
router.get('/cr', (req,res) => {
    if(Object.keys(req.query).length != 3) return res.json('QS Check plz....');
    var title = req.query.title,
        des = req.query.des,
        name = req.query.name;
    notiDB.create({title, des, name}, (err, results, feilds) => {
        if(err) return res.json(err);
        return res.redirect('/a');
    });
});
module.exports = router;