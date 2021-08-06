const express = require( 'express' )
const app = express()
const port = 3000
const volleyball = require( 'volleyball' )
const nunjucks = require( 'nunjucks' )

app.use(volleyball)

app.set('view engine', 'html') // have res.render work with html files
app.engine('html', nunjucks.render) // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure( 'views', { noCache: true } ) // point nunjucks to the proper directory for templates

const users = {
    title: 'Example template',
    people: [
        { name: 'Fred' },
        { name: 'George' },
        { name: 'Ron' }
    ]
}

app.get('/', (req, res) => {
    res.render( 'index', users )
})

app.get('/news', (req, res) => {
    res.send('Your news feed')
})

nunjucks.configure('views', { noCache: true })
nunjucks.render('index.html', users, ( err, output) => {
    console.log(output)
})

app.listen(port, () => {
    console.log(`twitter-js app listening at http://localhost:${port}`)
})