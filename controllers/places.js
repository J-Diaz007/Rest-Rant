//Controller holds the rest of our routes(pages)
//This allows us to keep our index.js file clean & simple
const router = require('express').Router()

//Index page
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thai.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/bakery.jpg'
      }]     

    res.render('places/index', { places })
})

//New Submission Page
router.get('/new', (req, res) => {
  res.render('places/new')
})

module.exports = router

