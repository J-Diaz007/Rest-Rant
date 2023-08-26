//Modules & Globals
require('dotenv').config()
const express = require('express')
const app = express()

//Express Settings
app.set('views', __dirname + '/views')
//Defines the view engine used (JSX in this case)
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
//Lets Express know you are calling the 'static' or public folder
app.use(express.static('public'))


//"body parser"
app.use(express.urlencoded({ extended: true }))


//Imports the router from the places.js file
//Controllers & Routes
app.use('/places', require('./controllers/places'))


//Renders Homepage (home.jsx file)
app.get('/', (req, res) => {
    res.render('home')
})


//Wildcard route with 404 error (for page that doesn't exist)
//Wildcard should always be at the end of your code!! Or it will override your other pages. :(     
app.get('*', (req, res) => {
    res.render('error404')
})     

// **** PREVIOUS EXAMPLE ****
// app.get('*', (req, res) => {
//     //Calling .status(404) on the response giveS a legit 404 code
//     res.status(404).send('<h1>404 Page</h1>')
// })


app.listen(process.env.PORT)
