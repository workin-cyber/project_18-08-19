const BL = require('../BL')

function Router(app) {
    app.get('/', (req, res) => res.send('hii'))
    app.get(`/products`, async (req, res) => {
        const result = await BL.products.read()
        res.send(result)
    })

    app.post(`/login`, async (req, res) => {
        try {
            const { body } = req,
                result = await BL.admins.login(body)
            res.send(result)
        } catch (error) {
            res.send({ error: error.message || error })
        }
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