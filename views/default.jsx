//Imports React
const React = require ('react')

//Stub function called Def that has one parameter called html
function Def (html) {
    //return statement that includes HTML skeleton
    return (
        <html>
            <head>
                <title>Title</title>               
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
                <div className='content'>
                    {html.children}
                </div>
                <footer className='footer'></footer>
            </body>
        </html>
    )
}

//Exports the Def function
module.exports = Def