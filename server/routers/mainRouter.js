var router = require('express').Router(),
    notiDB = new (require('../repo/db/query.js').NotiDB)();

router.get('/', (req,res) => res.json("MAIN"));
router.get('/a', (req,res) => notiDB.read((err, results, feilds) => res.json(results)));

router.post('/cr', (req,res) => {
    if(Object.keys(req.params).length != 3) return res.json('QS Check plz....');
    var title = req.params.title,
        des = req.params.des,
        name = req.params.name;
    notiDB.create({title, des, name}, (err, results, feilds) => {
        if(err) return res.json(err);
        if(req.headers['flutter'] != undefined) return res.json('true');
        return res.redirect('/a');
    });
});
module.exports = router;