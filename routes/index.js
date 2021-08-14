const express = require( 'express' )
const tweetBank = require('../tweetBank')
const router = express.Router()

router.use(express.static('public'))

router.get('/', ( req, res ) => {
    let tweets = tweetBank.list()
    res.render( 'index', { tweets: tweets } )
})

module.exports = router