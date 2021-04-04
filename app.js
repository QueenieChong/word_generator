// require packages used in the project
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateWord = require('./generate_word')
const app = express()
const port = 3000


// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// use body parser
app.use(bodyParser.urlencoded({ extended: true }))
// routes setting
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const word = generateWord(req.body.occupation)
  res.render('index', { word: word })
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})

