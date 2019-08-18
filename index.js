const
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    router = require('./Router')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

router(app)

app.listen(1200, () => console.log(`Server is up! port:${1200}`))