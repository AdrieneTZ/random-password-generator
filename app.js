// include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

// set template engine
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.set('views', './views')
// set routes
app.get('/', (req, res) => {
  res.render('index')
})

// start the express server and listening for connections
app.listen(port, () => {
  console.log(`Express app is listening on https://localhost:${port}.`)
})