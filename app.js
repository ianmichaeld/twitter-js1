const express = require( 'express' )
const app = express()
const volleyball = require( 'volleyball' )
const port = 3000

app.use(volleyball)

app.get('/', (req, res) => {
    res.send('Welcome to twitter-js')
})

app.get('/news', (req, res) => {
    res.send('Your news feed')
})

app.listen(port, () => {
    console.log(`twitter-js app listening at http://localhost:${port}`)
})