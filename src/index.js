const express = require('express')
const { getTest } = require ('./routes/test')

const app = express()



const port = process.env.PORT || 3307

app.get(`/test`,getTest)
app.listen(port,() => {
    console.log(`Listening to http://localhost:${port}`)
})