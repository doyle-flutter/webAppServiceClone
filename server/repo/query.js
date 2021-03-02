// [ 하위 세부 구현체 ]
var {Query} = require('./_query.js'),
    _conn = require('../configs/_db.js');

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
    _handle = cb => (err, results, feilds) => cb(err, results, feilds);
    read = cb => _conn.query(this.readSQL(), [], this._handle(cb));
    readTarget = ({id}) => _conn.query(this.readTargetSQL(), [id], this._handle(cb));
    create = ({title, des, name, active=1}, cb) => _conn.query(this.createSQL(), [title, des, name, active], this._handle(cb));
}

// - Events
// ...
// - Mail
// ...
module.exports = {NotiDB};