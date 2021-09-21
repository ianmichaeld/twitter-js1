const express = require( 'express' )
const app = express()
const port = 3000
const volleyball = require( 'volleyball' )
const bodyParser = require( 'body-parser' )
const nunjucks = require( 'nunjucks' )
const routes = require('./routes')

app.use(volleyball)

app.use(bodyParser.urlencoded( {extended: false } ))
app.use(bodyParser.json())

app.set('view engine', 'html') // have res.render work with html files
app.engine('html', nunjucks.render) // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure( 'views', { noCache: true } ) // point nunjucks to the proper directory for templates

app.use('/', routes)

app.listen(port, () => {
    console.log(`twitter-js app listening at http://localhost:${port}`)
})