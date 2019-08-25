const mysql = require('mysql'),
    database = 'kSmlBge9Va',
    con = mysql.createConnection({
        host: 'remotemysql.com',
        user: database,
        password: 'oo7Qk7El3c',
        database
    })

function query(sqlString) {
    return new Promise((resolve, reject) => {
        con.query(sqlString, (err, result) => {
            if (err) reject(err.sqlMessage || err)
            resolve(result)
        })
    })
}


async function create(table, item) {
    const q = `INSERT INTO ${table} (id , name , categoryId , subCategoryId , price, image , description ) VALUES ('${item.id}', '${item.name}', '${item.categoryId}', '${item.subCategoryId}', ${item.price}, '${item.image}', '${item.description}' )`

    console.log(q)

    return query(q)
}

async function read(table, id) {
    let q = `SELECT * FROM ${table} `
    if (id) q += `WHERE id='${id}'`
    
    const res = await query(q)
    return id ? res[0] : res
}

async function update(table, product) {
    const res = await query(`UPDATE ${table} SET name='${product.name}', image='${product.image}', price='${product.price}' WHERE id=${product.id}`)

    if (res.affectedRows == 1)
        return read(table, product.id)
    throw 'update failed'
}

con.connect(async err => {
    if (err) throw err
    console.log('connection success')

    await query(`CREATE DATABASE IF NOT EXISTS ${database}`)

    await query(`CREATE TABLE IF NOT EXISTS products (id VARCHAR(255), name VARCHAR(255), categoryId VARCHAR(255), subCategoryId VARCHAR(255), price INT, image VARCHAR(255), description VARCHAR(255))`)


    /* const productsJson = require('./products')
 
 
      await Promise.all(productsJson.map(product => create('products', product)))
 
     console.log('done') 
     
     
     const p = await read('products')
     
     console.log('read res:', p)
    */
})

module.exports = { create, read, update }