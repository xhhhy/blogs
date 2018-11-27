const mysql = require('mysql')
const config = require('./default')

var pool  = mysql.createPool({
    host     : config.database.HOST,
    user     : config.database.USERNAME,
    password : config.database.PASSWORD,
    database : config.database.DATABASE
});

let query = function( sql, values ) {
    return new Promise(( resolve, reject ) => {
        pool.getConnection(function(err, connection) {
            if (err) {
                resolve( err )
            } else {
                connection.query(sql, values, ( err, rows) => {
                    if ( err ) {
                        reject( err )
                    } else {
                        resolve( rows )
                    }
                    connection.release()
                })
            }
        })
    })

}

// 查询test数据库
let findtest = function () {
    let _sql = `
        SELECT * FROM title_list where id = 1 ;
    `
    return query(_sql)
}
let addtest = function (region,name) {
    let _sql = `
        INSERT INTO class (region,name) values ("${region}","${name}");
    `
    return query(_sql)
}
let findtabledate = function (region,name) {
    let _sql = `
    SELECT * FROM class;

    `
    return query(_sql)
}

module.exports={    //暴露方法
    findtest,
    addtest,
    findtabledate
}