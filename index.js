const express = require('express')
const app = express()
const port = 5000;

app.get('/', (reg, res) => {
    res.send('hellow from my first ever server')
})
app.get('/data', (reg, res)=> {
    res.send('Mode data coming soon')
})






app.listen(port, ()=>{
    console.log(`my first server is running on port: ${port}`);
})