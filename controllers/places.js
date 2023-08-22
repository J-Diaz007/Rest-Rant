//Controller holds the rest of our routes(pages)
//This allows us to keep our index.js file clean & simple
const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /places')
})

module.exports = router

