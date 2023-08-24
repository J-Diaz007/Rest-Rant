//Imports React
const React = require('react')

//Imports the default "skeleton"
const Def = require('./default')

//Home stub function
function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
            </main>
        </Def>
    )
}

//Exports home function
module.exports = home