const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('./config/config')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
  
// parse application/json
app.use(bodyParser.json())
 
app.get('/usuario', function (req, res) {
  res.json({
    msg: 'getMethod'
  })
})

app.post('/usuario', function (req, res) {
  let persona = req.body

  res.json({
    persona
  })
})

app.put('/usuario/:id', function (req, res) {
  let userID= req.params.id
  res.json({
    userID
  })
})

app.delete('/usuario', function (req, res) {
  res.json({
    msg: 'deleteMethod'
  })
})
 
app.listen(process.env.PORT, ()=>{
  console.log(`escuchando en el puerto ${process.env.PORT}`)
})