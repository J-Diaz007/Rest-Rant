const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Sup Y'all")
})

app.listen(3000)