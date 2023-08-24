//Imports React
const React = require ('react')

//Stub function called Def that has one parameter called html
function Def (html) {
    //return statement that includes HTML skeleton
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

//Exports the Def function
module.exports = Def