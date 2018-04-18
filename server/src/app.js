const express =  require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(cors())
app.use(morgan('combine'))
app.use(bodyParser.json())

app.get('/status', (req, res) => {
    res.send({
        message:'Hello World!'
    })
})

app.listen(process.env.PORT || 8081)