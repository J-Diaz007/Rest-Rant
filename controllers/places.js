//Controller holds the rest of our routes(pages)
//This allows us to keep our index.js file clean & simple
const router = require('express').Router()
const places = require('../models/places.js')

//Index page
router.get('/', (req, res) => {   
    res.render('places/index', { places })
})

//New Submission Page
router.get('/new', (req, res) => {
  res.render('places/new')
})


//Using the POST verb so the data get encrypted for its trip across the internet (safe for passwords and logins)
//Below code will give a default town and picture if one is not provided
//res.redirect at the bottom redirects to the index route to see the newly added place
router.post('/', (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})


module.exports = router

