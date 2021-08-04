const express = require( 'express' )
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Welcome to twitter-js')
})

app.use( (req, res, next) => {
    console.log(req.method + req.url)
    next()
})

app.get('/news', (req, res) => {
    res.send('Your news feed')
})

app.listen(port, () => {
    console.log(`twitter-js app listening at http://localhost:${port}`)
})