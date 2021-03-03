// [ 추 상 ]
module.exports = class DbQuery{
    constructor({tableName, columns, limitCount}){
        this.tableName = tableName,
        this.columns = columns,
        this.limitCount = limitCount;
    }
    create = () => this._err();

    read = () => this._err();
    readTarget = () => this._err();

    update = () => this._err();
    
    delete = () => this._err();

    _err = () => {throw "Plz.. this methods Override !";}
}

