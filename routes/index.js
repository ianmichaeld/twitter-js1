const express = require( 'express' )
const tweetBank = require('../tweetBank')
const router = express.Router()

router.use(express.static('public'))

router.get('/', ( req, res ) => {
    let tweets = tweetBank.list()
    res.render( 'index', { tweets: tweets, showForm: true } )
})

router.get('/users/:name', ( req, res ) => {
    let name = req.params.name;
    let list = tweetBank.find( { name: name } )
    res.render( 'index', { tweets: list, name: name, showForm: true } )
  })

router.get('/tweets/:id', ( req, res ) => {
    let id = +req.params.id;
    let list = tweetBank.find( { id: id } )
    res.render( 'index', { tweets: list } )
  })

  router.post('/tweets', ( req, res)  => {
      const [ name, text ] = [ req.body.name, req.body.text ]
      tweetBank.add( name, text )
      res.redirect('/')
  })

module.exports = router