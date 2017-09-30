console.log('Hello World')

const express = require('express')
const bodyParse = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParse.json())
app.use(cors())

app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}! User registered.`
  })
})

app.listen(process.env.PORT || 8081)
