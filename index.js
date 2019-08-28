const
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    router = require('./Router')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('views'))

router(app)
const port = process.env.PORT || 1200
app.listen(port, () => console.log(`Server is up! port:${port}`))