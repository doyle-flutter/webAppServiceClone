// [ 하위 세부 구현체 ]
var {Query} = require('./_query.js'),
    _conn = require('../../configs/_db.js');

// - Noti Table Column Model
class NotiColumn{
    constructor(){
        this.id = 'id',
        this.title = 'title',
        this.des = 'des',
        this.name = 'name',
        this.time = 'time',
        this.active = 'active';
    }
    toString = () => `${this.title}, ${this.des}, ${this.name}, ${this.active}`;
    toValue = () => `?, ?, ?, ?`;
}

// - Noti Query CB
class NotiDB extends Query{
    constructor(){
        super({ tableName: "noti", columns: new NotiColumn(), limitCount: 10 });
    }
    
    read = cb => _conn.query(this.readSQL(), [], this.handle(cb));
    readTarget = ({id}) => _conn.query(this.readTargetSQL(), [id], this.handle(cb));
    create = ({title, des, name, active=1}, cb) => _conn.query(this.createSQL(), [title, des, name, active], this.handle(cb));
}

// - Events
// ...
// - Mail
// ...
// - User
// - Noti Table Column Model
class UserColumn{
    constructor(){
        this.id = 'id',
        this.username = 'username',
        this.userpw = 'userpw',
        this.userid = 'userid',
        this.time = 'time',
        this.active = 'active';
    }
    toString = () => `${this.title}, ${this.des}, ${this.name}, ${this.active}`;
    toValue = () => `?, ?, ?, ?`;
}

class UserDB extends Query{
    constructor(){
        super({ tableName: "user", columns: new UserColumn(), limitCount: 10 });
    }
    userMathching = ({userid, userpw}, cb) => {
        var _sql = `SELECT ${this.columns.userid}, ${this.columns.userpw} FROM ${this.tableName} WHERE userid = ? AND userpw = ?`;
        _conn.query(_sql, [userid, userpw], this.handle(cb));
    }
    
}
module.exports = {NotiDB, UserDB};