// include packages and define server related variables
const express = require('express')
const exphb = require('express-handlebars')
const app = express()
const port = 3000

// set template engine
app.engine('handlebars', exphb({ defaultLayout: 'main' }))
app.set('view engine', 'handlenbars')
// set routes
app.get('/', (req, res) => {
  res.render('index')
})

// start the express server and listening for connections
app.listen(port, () => {
  console.log(`Express app is listening on http://localhost:${port}.`)
})