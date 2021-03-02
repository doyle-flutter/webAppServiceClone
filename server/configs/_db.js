var _dbConfig = {
    "user": "root",
    "password": "abc123456",
    "database": "dbs",
    "port" : 3306,
}
var _mysql = require('mysql'),
_conn = _mysql.createConnection(_dbConfig);

module.exports = _conn;