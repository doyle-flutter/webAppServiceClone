var router = require('express').Router(),
    userDB = new (require('../repo/db/query.js').UserDB)(),
    path = require('path');

router.get('/', (req,res) => {
    if(req.session.uid == undefined) return res.redirect('/web/login');
    return res.render(`${path.join(__dirname, '../views/main/main.do')}`, {logo:"LOGO"});
});

router.get('/login', (req, res) => res.render(`${path.join(__dirname, '../views/login/login.do')}`));
router.post('/loginprocess', (req,res) => {
    var {userid = undefined, userpw = undefined} = req.body;
    if(userid == undefined || userpw == undefined) throw 'LoginProcess Params ERR !';
    userDB.userMathching({userid, userpw}, (err, results, feilds) => {
        if(err) return res.json("ID || PW ERROR");
        req.session.uid = userid;
        return res.redirect('/web');
    });
});
router.post('/logout', (req,res) => {
    req.session.destroy();
    res.redirect('/web');
});

module.exports = router;