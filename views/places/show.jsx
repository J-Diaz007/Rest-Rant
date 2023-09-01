const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
              Edit
            </a>     
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>   
            <h1>{ data.place.name }</h1>
          </main>
        </Def>
    )
}
//className btn btn-danger shows the button in red
//className btn btn-warning shows the button in orange

module.exports = show
