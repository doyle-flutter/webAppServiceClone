// [ 구 현 ]

var DbQuery = require('./_dbQuery.js');
var _conn = require('../configs/_db');

// - 공지 DB
class NotiDB extends DbQuery{
    read = ( cb ) => {
        var _sql = `SELECT * FROM ${this.tableName} limit 0, ${this.limitCount};`
        _conn.query(_sql,(err, results, feilds) => cb(err, results, feilds));
    }
}

// - 경조사

// - 메일함


// module.exports = {NotiDB};
module.exports = {NotiDB};