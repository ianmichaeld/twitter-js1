const express = require( 'express' )
const app = express()
const port = 3000
const volleyball = require( 'volleyball' )
const nunjucks = require( 'nunjucks' )

app.use(volleyball)

app.get('/', (req, res) => {
    res.send('Welcome to twitter-js')
})

app.get('/news', (req, res) => {
    res.send('Your news feed')
})

const users = {
    title: 'Example template',
    people: [
        { name: 'Fred' },
        { name: 'George' },
        { name: 'Ron' }
    ]
}
nunjucks.configure('views', { noCache: true })
nunjucks.render('index.html', users, ( err, output) => {
    console.log(output)
})

app.listen(port, () => {
    console.log(`twitter-js app listening at http://localhost:${port}`)
})