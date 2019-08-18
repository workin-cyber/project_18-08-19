const BL = require('../BL')

function Router(app) {

    app.get(`/products`, async (req, res) => {
        const result = await BL.products.read()
        res.send(result)
    })

}

module.exports = Router