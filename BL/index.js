const
    DL_SQL = require('../DL_SQL'),
    products = require('./products')(DL_SQL),
    admins = require('./admins')(DL_SQL)

module.exports = { products, admins } 