const BL = require('../BL')

function Router(app) {

    app.get(`/products`, async (req, res) => {
        const result = await BL.products.read()
        res.send(result)
    })

    app.put(`/products`, async (req, res) => {
        try {
            const { body } = req,
                result = await BL.products.update(body)

            res.send(result)
        } catch (error) {
            res.send({ error })
        }
    })

}

module.exports = Router