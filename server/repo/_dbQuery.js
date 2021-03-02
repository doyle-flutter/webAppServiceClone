// [ 추 상 ]
module.exports = class DbQuery{
    constructor({tableName, limitCount, columns}){
        this.tableName = tableName;
        this.limitCount = limitCount;
        this.columns = columns;
    }
    create = () => this._err();

    read = () => this._err();
    readTarget = () => this._err();

    update = () => this._err();
    
    delete = () => this._err();

    _err = () => {throw "Plz.. this methods Override !";}
}

