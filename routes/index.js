const express = require( 'express' )
const tweetBank = require('../tweetBank')
const router = express.Router()

router.use(express.static('public'))

router.get('/', ( req, res ) => {
    let tweets = tweetBank.list()
    res.render( 'index', { tweets: tweets } )
})

router.get('/users/:name', ( req, res ) => {
    let name = req.params.name;
    let list = tweetBank.find( { name: name } );
    res.render( 'index', { tweets: list } );
  });

module.exports = router