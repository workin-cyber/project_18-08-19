const
    DL_SQL = require('../DL_SQL'),
    products = require('./products')(DL_SQL)/* ,
    categories = require('./categories')(DL_SQL), */

module.exports = { products/* , categories */ } 