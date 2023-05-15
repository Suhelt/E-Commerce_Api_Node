const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


const PORT= 3000;


app.listen(PORT,()=>{
    console.log(`Server started on PORT ${PORT}`)
})