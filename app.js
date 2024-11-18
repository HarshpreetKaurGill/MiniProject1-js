const express = require('express');
const app = express();
const path = require('path');
const carsData = require('./data/supercars.json');
const port = 3000;

// app.use(express.static(path.join(__dirname, 'public')));

console.log(__dirname);
//major code
app.use('/site', express.static(path.join(__dirname, 'public')));

app.get('/cars', (req,res)=> {
    res.json(carsData);
});

app.listen(port,()=>{
    console.log(`Example app listening of port http://localhost:${port}`)
}
)