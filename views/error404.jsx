//Imports react
const React = require('react')

// Imports default.jsx "skeleton"
const Def = require('./default')

//Creates an error stub function
// Def component wraps the custom 404 code
function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
            </main>
        </Def>
    )
}

// Exports error 404 function
module.exports = error404