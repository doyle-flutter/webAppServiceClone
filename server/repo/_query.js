var DbQuery = require('./_dbQuery.js');

// [ 상위 (공통) 구현체 ]
class Query extends DbQuery{
    readSQL = () => `SELECT * FROM ${this.tableName} limit 0, ${this.limitCount}`;
    readTargetSQL = () => `SELECT * FROM ${this.tableName} WHERE id=?`;
    createSQL = () => `INSERT INTO ${this.tableName} (${this.columns.toString()}) VALUES (${this.columns.toValue()});`;
}

module.exports = {Query};