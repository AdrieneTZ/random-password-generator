// include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const generatePassword = require('./generate_password')
const app = express()
const port = 3000

// set template engine
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.set('views', './views')

// set body-parser
// This line of code must be placed before the routes!
app.use(express.urlencoded({ extended: true }))

// set routes
app.get('/', (req, res) => {
  res.render('index')
})

// 取得form傳送的資料
// HTTP method: POST 把資料傳到 server
app.post('/', (req, res) => {
  const options = req.body
  const password = generatePassword(options)
  res.render('index', { password: password, options: options })
})

// start the express server and listening for connections
app.listen(port, () => {
  console.log(`Express app is listening on http://localhost:${port}.`)
})