require('dotenv').config()
const express = require('express')
const app = express()

//Defines the view engine used (JSX in this case)
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


//Imports the router from the places.js file
app.use('/places', require('./controllers/places'))

//Renders Homepage (home.jsx file)
app.get('/', (req, res) => {
    res.render("home")
})



//Wildcard route with 404 error (for page that doesn't exist)
//This should always be at the end of your code!! Or it will override your other pages. :(
app.get('*', (req, res) => {
    //Calling .status(404) on the response give a legit 404 code
    res.status(404).send('<h1>404 Page</h1>')
})


app.listen(process.env.PORT)
