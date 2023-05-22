
// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set('views','./views');
app.set('view engine','ejs')



const PORT= process.env.PORT;


app.get('/home',(req,res)=>{
    res.render('home');
});
app.listen(PORT,()=>{
    console.log(`Server started on PORT ${PORT}`)
});



